import os, glob, re, json

def clean_desc(text):
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('\n', ' ').strip()
    return text

def run():
    base_dir = 'D:/agents/czn-fan-guide'

    # 1. Load Character Database from e7bot
    with open(f'{base_dir}/raw-data/e7bot/characters-en.json', encoding='utf-8') as f:
        chars_raw = json.load(f)['data']
    name_to_id = {c['name'].lower(): str(c['id']) for c in chars_raw if 'name' in c and 'id' in c}
    id_map = {str(c['id']): c['name'] for c in chars_raw if 'id' in c and 'name' in c}

    # 2. Load Cards Database from e7bot & build illustration lookup
    with open(f'{base_dir}/raw-data/e7bot/cards-en.json', encoding='utf-8') as f:
        cards_raw = json.load(f)['data']

    card_name_to_sct = {}
    for c in cards_raw:
        c_name = c.get('name', '').lower().strip()
        sct = c.get('sct_name', '')
        bc = c.get('base_combatant')
        bc_id = str(bc.get('id')) if (bc and isinstance(bc, dict) and 'id' in bc) else ''
        if c_name and sct:
            card_name_to_sct[(c_name, bc_id)] = sct
            if c_name not in card_name_to_sct:
                card_name_to_sct[c_name] = sct

    # 3. Load Combatants from data/characters/
    combatants = []
    for p in sorted(glob.glob(f'{base_dir}/data/characters/*/*.md')):
        fname = os.path.basename(p)
        if fname.startswith('_') or 'overview' in fname.lower():
            continue
        with open(p, encoding='utf-8') as f:
            content = f.read()
        
        name_m = re.search(r'^#\s+(.+)$', content, re.M)
        name = name_m.group(1).strip() if name_m else fname.replace('.md', '').capitalize()
        cid = name_to_id.get(name.lower(), '')
        
        norm_p = p.replace('\\', '/')
        if '5-star' in norm_p:
            rarity = 5
        elif '4-star' in norm_p:
            rarity = 4
        else:
            rarity = 5 if '★★★★★' in content or '5-Star' in content else 4
        
        job_m = re.search(r'\*\*Class\s*/\s*Job\*\*:\s*([^\n\r]+)', content)
        job = job_m.group(1).strip() if job_m else 'Combatant'
        
        ego_m = re.search(r'\*\*Attribute\s*\(Ego\)\*\*:\s*([^\n\r]+)', content)
        ego = ego_m.group(1).strip() if ego_m else 'Instinct'
        
        faction_m = re.search(r'\*\*Faction\*\*:\s*([^\n\r]+)', content)
        faction = faction_m.group(1).strip() if faction_m else 'Terrascion'
        
        over_m = re.search(r'## Overview\s*\n+([^\n\r]+)', content)
        overview = over_m.group(1).strip() if over_m else f'{name} is a {rarity}★ {job} affiliated with {faction}.'
        
        starters = re.findall(r'\|\s*\*\*([^*]+)\*\*\s*\|\s*(\d+)\s*\|\s*([^|]+)\|\s*([^|]+)\|', content)
        card_list = [{'name': c[0].strip(), 'cost': c[1].strip(), 'type': c[2].strip(), 'effect': c[3].strip(), 'image': card_name_to_sct.get((c[0].strip().lower(), cid), card_name_to_sct.get(c[0].strip().lower(), ''))} for c in starters[:6]]
        
        icons = {
            'Vanguard': '🛡️',
            'Striker': '⚔️',
            'Hunter': '🏹',
            'Ranger': '🎯',
            'Psionic': '🔮',
            'Controller': '✨'
        }
        icon = icons.get(job, '⚡')
        
        combatants.append({
            'name': name,
            'id': cid,
            'rarity': rarity,
            'job': job,
            'ego': ego,
            'faction': faction,
            'overview': overview,
            'icon': icon,
            'cards': card_list
        })

    # Deduplicate combatants
    seen_comb = set()
    unique_combatants = []
    for c in combatants:
        if c['name'] not in seen_comb:
            seen_comb.add(c['name'])
            unique_combatants.append(c)
    unique_combatants.sort(key=lambda x: (-x['rarity'], x['name']))

    # 4. Load Partners from characters-en.json
    supporters = []
    for cr in chars_raw:
        if cr.get('char_type') == 'CHAR_SUPPORTER':
            supporters.append({
                'name': cr.get('name'),
                'rarity': int(cr.get('rarity', 4)),
                'color': cr.get('color', '#10664d'),
                'job': 'Partner',
                'id': cr.get('id')
            })
    supporters.sort(key=lambda x: (-x['rarity'], x['name']))

    # 5. Load cards from cards-en.json with proper category and character mappings
    category_map = {
        'CARD_ATK': 'Attack',
        'CARD_SKILL': 'Skill',
        'CARD_POWER': 'Power',
        'CARD_CURSE': 'Curse',
        'CARD_ABNORM': 'Abnormality'
    }

    cards_list = []
    seen_cards = set()
    for c in cards_raw:
        name = c.get('name')
        desc = c.get('desc_display', c.get('desc', ''))
        if not name or not desc or len(name) < 2:
            continue
        cleaned = clean_desc(desc)
        if not cleaned or len(cleaned) < 10 or len(cleaned) > 240 or cleaned.startswith('{'):
            continue
        cat = c.get('card_category', '')
        card_type = category_map.get(cat, 'Skill')
        cost = c.get('cost', 1)
        if cost < 0:
            cost = 0
            
        owner = 'General'
        bc = c.get('base_combatant')
        if bc and isinstance(bc, dict) and 'id' in bc:
            owner = id_map.get(str(bc['id']), 'General')
            
        sct = c.get('sct_name', '')
        key = (name, cost, card_type, owner)
        if key in seen_cards:
            continue
        seen_cards.add(key)
        # Check for Epiphany branches
        variants = []
        r_sparks = c.get('r_spark_cards') or []
        for rsp in r_sparks:
            v_desc = rsp.get('desc_display', rsp.get('desc', ''))
            v_cleaned = clean_desc(v_desc)
            v_branch = rsp.get('r_spark_branch', len(variants) + 1)
            v_cost = rsp.get('cost', cost)
            
            # Simple mult extraction
            v_mult = 0
            m_match = re.search(r'(\d+)%[^\d%]{0,30}Damage', v_cleaned, re.IGNORECASE)
            if m_match:
                v_mult = int(m_match.group(1))
            
            v_shield = 0
            s_match = re.search(r'(\d+)%[^\d%]{0,30}(?:Shield|Barrier)', v_cleaned, re.IGNORECASE)
            if s_match:
                v_shield = int(s_match.group(1))

            variants.append({
                'branch': v_branch,
                'desc': v_cleaned,
                'cost': v_cost,
                'mult': v_mult,
                'shield': v_shield
            })

        cards_list.append({
            'name': name,
            'cost': cost,
            'type': card_type,
            'effect': cleaned,
            'owner': owner,
            'image': sct,
            'variants': variants
        })

    # Helper for navigation
    def make_nav(active_page):
        links = [
            ('index.html', 'Home'),
            ('characters.html', 'Characters'),
            ('cards.html', 'Cards'),
            ('teambuilder.html', 'Team Builder'),
            ('mechanics.html', 'Mechanics'),
            ('lore.html', 'Lore'),
            ('guides.html', 'Guides')
        ]
        html_links = []
        for href, label in links:
            cls = 'active' if href == active_page else ''
            html_links.append(f'<li><a href="{href}" class="{cls}">{label}</a></li>')
        
        return f'''<nav>
  <div class="nav-top">
    <a href="index.html" class="nav-brand"><span>CZN</span> DATABASE</a>
    <a href="https://github.com/CholidAlFarisi/czn-fan-guide" target="_blank" class="nav-btn">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      GitHub
    </a>
  </div>
  <ul class="nav-links">
    {' '.join(html_links)}
  </ul>
</nav>'''

    def make_footer():
        return '''<footer>
  <div class="f-links">
    <a href="index.html">Home</a>
    <a href="characters.html">Characters</a>
    <a href="cards.html">Cards</a>
    <a href="mechanics.html">Mechanics</a>
    <a href="lore.html">Lore</a>
    <a href="guides.html">Guides</a>
  </div>
  <p>Chaos Zero Nightmare Fan Guide &amp; Database. Community project by CholidAlFarisi.<br>All game assets, character designs, and lore © Smilegate.</p>
</footer>'''

    # ==========================================
    # 1. BUILD index.html
    # ==========================================
    featured = unique_combatants[:6]
    featured_cards_html = []
    for c in featured:
        stars = '★' * c['rarity']
        img_tag = f'<img src="assets/characters/{c["id"]}.webp" alt="{c["name"]}" loading="lazy" onerror="this.parentElement.textContent=\'{c["icon"]}\'">' if c.get('id') else c['icon']
        featured_cards_html.append(f'''
        <div class="char-card" data-r="{c['rarity']}" onclick="location.href='characters.html'">
          <div class="char-icon">{img_tag}</div>
          <div class="char-info">
            <div class="char-name">{c['name']}</div>
            <div class="char-stars">{stars}</div>
            <div class="char-tags">
              <span class="tag">{c['job']}</span>
              <span class="tag attr">{c['ego']}</span>
              <span class="tag">{c['faction']}</span>
            </div>
          </div>
        </div>''')

    index_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chaos Zero Nightmare — Database &amp; Fan Guide</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
{make_nav('index.html')}

<main>
  <header class="page-header" style="text-align:center; padding: 60px 5vw 40px;">
    <div class="page-pill">Fan Guide &amp; Database Portal</div>
    <h1>Chaos Zero Nightmare</h1>
    <p style="margin: 0 auto 24px;">Comprehensive archive for 38 Playable Combatants, 49 Partners, 2,174 Cards, 6 Primordial Deities, and Roguelike Mechanics.</p>
    
    <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom: 24px;">
      <a href="characters.html" class="nav-btn" style="background:var(--accent); color:#fff; border-color:var(--accent); padding:10px 22px; font-size:0.9rem;">Browse Characters →</a>
      <a href="cards.html" class="nav-btn" style="padding:10px 22px; font-size:0.9rem;">Search Card Database →</a>
    </div>

    <div style="display:flex; justify-content:center; gap:36px; flex-wrap:wrap; margin-top:30px; padding-top:24px; border-top:1px solid var(--panel-border);">
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">38</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Combatants</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">49</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Partners</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">2,174</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Cards</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">6</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Cosmic Deities</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">557</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Relics</div></div>
    </div>
  </header>

  <div class="container">
    <!-- Hub Sections Navigation -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:18px; margin-bottom:48px;">
      <a href="teambuilder.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div style="font-size:1.8rem;">⚡</div>
            <span style="font-size:0.7rem; color:var(--cyan); font-weight:700; text-transform:uppercase;">SIMULATOR</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Team Builder</h3>
          <p style="font-size:0.85rem; color:var(--muted);">Form 3-Combatant squads &amp; Partners, customize 24-card decks, analyze AP curve, and test draw opening hands.</p>
        </div>
      </a>
      <a href="characters.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="font-size:1.8rem; margin-bottom:10px;">⚔️</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Characters</h3>
          <p style="font-size:0.85rem; color:var(--muted);">All 38 playable combatants with starter cards, signature decks, plus 49 partner supporters.</p>
        </div>
      </a>
      <a href="cards.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="font-size:1.8rem; margin-bottom:10px;">🃏</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Card Database</h3>
          <p style="font-size:0.85rem; color:var(--muted);">Filterable card database with AP costs, effects, types (Attack, Skill, Power), and character owners.</p>
        </div>
      </a>
      <a href="mechanics.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="font-size:1.8rem; margin-bottom:10px;">⚙️</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Mechanics &amp; Deities</h3>
          <p style="font-size:0.85rem; color:var(--muted);">The 6 Primordial Deities, 491 Divine Sparks, Mental Breakdown system, Epiphany, and Save Data.</p>
        </div>
      </a>
      <a href="lore.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="font-size:1.8rem; margin-bottom:10px;">🌌</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Universe &amp; Lore</h3>
          <p style="font-size:0.85rem; color:var(--muted);">The SS Nightmare vessel, the Captain's identity, and the 7 warring Factions.</p>
        </div>
      </a>
      <a href="guides.html" style="text-decoration:none; color:inherit;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; transition:all 0.2s; height:100%;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--panel-border)'">
          <div style="font-size:1.8rem; margin-bottom:10px;">📖</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Guides &amp; Roadmap</h3>
          <p style="font-size:0.85rem; color:var(--muted);">Beginner roadmap, daily stamina allocation, team synergy combos, and endgame Zero System prep.</p>
        </div>
      </a>
    </div>

    <!-- Featured Characters Section -->
    <div class="toolbar">
      <div>
        <div style="font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--cyan); font-weight:700;">Featured</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.4rem; color:var(--text);">Popular 5★ Combatants</h2>
      </div>
      <a href="characters.html" style="color:var(--accent); text-decoration:none; font-size:0.85rem; font-weight:700;">View All 38 →</a>
    </div>
    <div class="char-grid">
      {''.join(featured_cards_html)}
    </div>
  </div>
</main>

{make_footer()}
</body>
</html>'''
    with open(f'{base_dir}/index.html', 'w', encoding='utf-8') as f:
        f.write(index_html)

    # ==========================================
    # 2. BUILD characters.html
    # ==========================================
    chars_json_str = json.dumps(unique_combatants, ensure_ascii=False)
    supporters_json_str = json.dumps(supporters, ensure_ascii=False)

    characters_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Characters — Chaos Zero Nightmare Database</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
{make_nav('characters.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Roster Archive</div>
    <h1>Characters &amp; Partners</h1>
    <p>Complete roster of 38 playable Combatants and 49 Supporter Partners. Click on any Combatant to inspect their starter cards, signature decks, and background lore.</p>
  </header>

  <div class="container">
    <!-- View Switcher -->
    <div style="display:flex; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--panel-border); padding-bottom:12px;">
      <button class="f-btn active" id="tabComb" style="font-size:0.9rem; padding:8px 18px;">Combatants (38)</button>
      <button class="f-btn" id="tabSupp" style="font-size:0.9rem; padding:8px 18px;">Partners (49)</button>
    </div>

    <!-- Combatants View -->
    <div id="viewCombatants">
      <div class="toolbar">
        <div class="filter-bar" id="combFilters">
          <button class="f-btn active" data-f="all">All (38)</button>
          <button class="f-btn" data-f="5">5★ (26)</button>
          <button class="f-btn" data-f="4">4★ (12)</button>
          <button class="f-btn" data-job="Vanguard">Vanguard (6)</button>
          <button class="f-btn" data-job="Striker">Striker (7)</button>
          <button class="f-btn" data-job="Hunter">Hunter (5)</button>
          <button class="f-btn" data-job="Ranger">Ranger (7)</button>
          <button class="f-btn" data-job="Psionic">Psionic (6)</button>
          <button class="f-btn" data-job="Controller">Controller (7)</button>
        </div>
        <div class="search-inline">
          <input type="text" id="combSearch" placeholder="Search combatants, jobs, factions...">
        </div>
      </div>
      <div style="margin-bottom:14px; font-size:0.8rem; color:var(--muted);" id="combCountInfo">Showing 38 combatants</div>
      <div class="char-grid" id="combGrid"></div>
    </div>

    <!-- Partners View -->
    <div id="viewPartners" style="display:none;">
      <div class="toolbar">
        <div class="filter-bar" id="suppFilters">
          <button class="f-btn active" data-sf="all">All Partners (49)</button>
          <button class="f-btn" data-sf="5">5★ (32)</button>
          <button class="f-btn" data-sf="4">4★ (11)</button>
          <button class="f-btn" data-sf="3">3★ (6)</button>
        </div>
        <div class="search-inline">
          <input type="text" id="suppSearch" placeholder="Search partner names...">
        </div>
      </div>
      <div style="margin-bottom:14px; font-size:0.8rem; color:var(--muted);" id="suppCountInfo">Showing 49 partners</div>
      <div class="char-grid" id="suppGrid"></div>
    </div>
  </div>
</main>

<!-- Modal -->
<div class="modal-overlay" id="charModal">
  <div class="modal-card">
    <button class="modal-close" id="modalClose">&times;</button>
    <div class="modal-head">
      <div class="modal-icon" id="mIcon">⚔️</div>
      <div class="modal-title">
        <h2 id="mName">Character Name</h2>
        <div class="stars" id="mStars">★★★★★</div>
        <div class="modal-meta" id="mMeta"></div>
      </div>
    </div>
    <div class="modal-desc" id="mDesc"></div>
    <div class="modal-cards">
      <h4>Starter &amp; Signature Cards</h4>
      <div class="modal-card-list" id="mCardList"></div>
    </div>
  </div>
</div>

{make_footer()}

<script>
const COMBATANTS = {chars_json_str};
const PARTNERS = {supporters_json_str};

// Tab Switching
const tabComb = document.getElementById('tabComb');
const tabSupp = document.getElementById('tabSupp');
const viewComb = document.getElementById('viewCombatants');
const viewSupp = document.getElementById('viewPartners');

tabComb.addEventListener('click', () => {{
  tabComb.classList.add('active');
  tabSupp.classList.remove('active');
  viewComb.style.display = 'block';
  viewSupp.style.display = 'none';
}});

tabSupp.addEventListener('click', () => {{
  tabSupp.classList.add('active');
  tabComb.classList.remove('active');
  viewSupp.style.display = 'block';
  viewComb.style.display = 'none';
  renderPartners(PARTNERS);
}});

// Render Combatants
const combGrid = document.getElementById('combGrid');
const combCountInfo = document.getElementById('combCountInfo');
function renderCombatants(items) {{
  combGrid.innerHTML = '';
  combCountInfo.textContent = `Showing ${{items.length}} combatants`;
  if (items.length === 0) {{
    combGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--muted);">No matching combatants found.</div>';
    return;
  }}
  items.forEach(c => {{
    const el = document.createElement('div');
    el.className = 'char-card';
    el.dataset.r = c.rarity;
    el.dataset.job = c.job;
    const stars = '★'.repeat(c.rarity);
    const imgHtml = c.id ? `<img src="assets/characters/${{c.id}}.webp" alt="${{c.name}}" loading="lazy" onerror="this.parentElement.textContent='${{c.icon}}'">` : c.icon;
    el.innerHTML = `
      <div class="char-icon">${{imgHtml}}</div>
      <div class="char-info">
        <div class="char-name">${{c.name}}</div>
        <div class="char-stars">${{stars}}</div>
        <div class="char-tags">
          <span class="tag">${{c.job}}</span>
          <span class="tag attr">${{c.ego}}</span>
          <span class="tag">${{c.faction}}</span>
        </div>
      </div>
    `;
    el.addEventListener('click', () => openModal(c));
    combGrid.appendChild(el);
  }});
}}
renderCombatants(COMBATANTS);

// Render Partners
const suppGrid = document.getElementById('suppGrid');
const suppCountInfo = document.getElementById('suppCountInfo');
function renderPartners(items) {{
  suppGrid.innerHTML = '';
  suppCountInfo.textContent = `Showing ${{items.length}} partners`;
  if (items.length === 0) {{
    suppGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--muted);">No matching partners found.</div>';
    return;
  }}
  items.forEach(p => {{
    const el = document.createElement('div');
    el.className = 'char-card';
    el.dataset.r = p.rarity;
    const stars = '★'.repeat(p.rarity);
    const imgHtml = p.id ? `<img src="assets/characters/${{p.id}}.webp" alt="${{p.name}}" loading="lazy" onerror="this.parentElement.textContent='🤝'">` : '🤝';
    el.innerHTML = `
      <div class="char-icon" style="border-color:${{p.color}}">${{imgHtml}}</div>
      <div class="char-info">
        <div class="char-name">${{p.name}}</div>
        <div class="char-stars">${{stars}}</div>
        <div class="char-tags">
          <span class="tag" style="border-color:${{p.color}}; color:${{p.color}}">Partner</span>
          <span class="tag">ID: ${{p.id}}</span>
        </div>
      </div>
    `;
    suppGrid.appendChild(el);
  }});
}}

// Modal
const modal = document.getElementById('charModal');
const modalClose = document.getElementById('modalClose');
function openModal(c) {{
  const mIcon = document.getElementById('mIcon');
  if (c.id) {{
    mIcon.innerHTML = `<img src="assets/characters/${{c.id}}.webp" alt="${{c.name}}" onerror="this.parentElement.textContent='${{c.icon}}'">`;
  }} else {{
    mIcon.textContent = c.icon;
  }}
  document.getElementById('mName').textContent = c.name;
  document.getElementById('mStars').textContent = '★'.repeat(c.rarity);
  document.getElementById('mDesc').textContent = c.overview;
  
  const meta = document.getElementById('mMeta');
  meta.innerHTML = `
    <span class="tag" style="background:var(--accent);color:#fff">${{c.job}}</span>
    <span class="tag attr">${{c.ego}}</span>
    <span class="tag">${{c.faction}}</span>
  `;
  
  const cardList = document.getElementById('mCardList');
  cardList.innerHTML = '';
  if (c.cards && c.cards.length > 0) {{
    c.cards.forEach(card => {{
      const row = document.createElement('div');
      row.className = 'm-card-row';
      const artHtml = card.image ? `<img src="assets/cards/${{card.image}}.webp" class="m-card-art" alt="${{card.name}}" onerror="this.style.display='none'">` : '';
      row.innerHTML = `
        ${{artHtml}}
        <div class="m-card-cost">${{card.cost}}</div>
        <div class="m-card-body">
          <div class="m-card-name">
            <span>${{card.name}}</span>
            <span class="m-card-type">${{card.type}}</span>
          </div>
          <div class="m-card-desc">${{card.effect}}</div>
        </div>
      `;
      cardList.appendChild(row);
    }});
  }} else {{
    cardList.innerHTML = '<div style="color:var(--muted);font-size:0.8rem">No starter card dossier available.</div>';
  }}
  modal.classList.add('open');
}}

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {{ if (e.target === modal) modal.classList.remove('open'); }});
window.addEventListener('keydown', (e) => {{ if (e.key === 'Escape') modal.classList.remove('open'); }});

// Combatant Filtering
let combRarity = 'all';
let combJob = null;
const combBtns = document.querySelectorAll('#combFilters .f-btn');
combBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    combBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.f) {{
      combRarity = btn.dataset.f;
      combJob = null;
    }} else if (btn.dataset.job) {{
      combRarity = null;
      combJob = btn.dataset.job;
    }}
    filterCombatants();
  }});
}});

const combSearch = document.getElementById('combSearch');
function filterCombatants() {{
  const q = combSearch.value.toLowerCase().trim();
  const res = COMBATANTS.filter(c => {{
    const matchR = combRarity === 'all' || !combRarity || String(c.rarity) === combRarity;
    const matchJ = !combJob || c.job.toLowerCase() === combJob.toLowerCase();
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.job.toLowerCase().includes(q) || c.ego.toLowerCase().includes(q) || c.faction.toLowerCase().includes(q);
    return matchR && matchJ && matchQ;
  }});
  renderCombatants(res);
}}
combSearch.addEventListener('input', filterCombatants);

// Partner Filtering
let suppRarity = 'all';
const suppBtns = document.querySelectorAll('#suppFilters .f-btn');
suppBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    suppBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    suppRarity = btn.dataset.sf;
    filterPartners();
  }});
}});
const suppSearch = document.getElementById('suppSearch');
function filterPartners() {{
  const q = suppSearch.value.toLowerCase().trim();
  const res = PARTNERS.filter(p => {{
    const matchR = suppRarity === 'all' || String(p.rarity) === suppRarity;
    const matchQ = !q || p.name.toLowerCase().includes(q);
    return matchR && matchQ;
  }});
  renderPartners(res);
}}
suppSearch.addEventListener('input', filterPartners);
</script>
</body>
</html>'''
    with open(f'{base_dir}/characters.html', 'w', encoding='utf-8') as f:
        f.write(characters_html)

    # ==========================================
    # 3. BUILD cards.html
    # ==========================================
    cards_json_str = json.dumps(cards_list, ensure_ascii=False)
    cards_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Card Database — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
{make_nav('cards.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Card Database</div>
    <h1>Card Database &amp; Synergies</h1>
    <p>Search through Chaos Zero Nightmare cards. Filter by AP Cost, Card Type (Attack, Skill, Power, Epiphany), or find signature cards by character owner.</p>
  </header>

  <div class="container">
    <div class="toolbar">
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div class="filter-bar" id="typeFilters">
          <span style="font-size:0.75rem; color:var(--muted); align-self:center; margin-right:4px;">TYPE:</span>
          <button class="f-btn active" data-t="all">All (1,157)</button>
          <button class="f-btn" data-t="Attack">Attack (470)</button>
          <button class="f-btn" data-t="Skill">Skill (464)</button>
          <button class="f-btn" data-t="Power">Power (161)</button>
          <button class="f-btn" data-t="Curse">Curse (29)</button>
        </div>
        <div class="filter-bar" id="costFilters">
          <span style="font-size:0.75rem; color:var(--muted); align-self:center; margin-right:4px;">COST:</span>
          <button class="f-btn active" data-c="all">All Costs</button>
          <button class="f-btn" data-c="0">0 AP</button>
          <button class="f-btn" data-c="1">1 AP</button>
          <button class="f-btn" data-c="2">2 AP</button>
          <button class="f-btn" data-c="3">3+ AP</button>
        </div>
      </div>
      <div class="search-inline">
        <input type="text" id="cardSearch" placeholder="Search cards by name, effect, or owner...">
      </div>
    </div>

    <div style="margin-bottom:16px; font-size:0.8rem; color:var(--muted);" id="cardCountInfo">Showing cards...</div>
    <div class="cards-grid" id="cardsGrid"></div>
    <div id="loadMoreContainer" style="text-align:center; margin-top:24px;">
      <button class="f-btn" id="loadMoreBtn" style="padding:10px 24px; font-size:0.9rem; background:var(--card-hover); color:var(--text); border-color:var(--accent); cursor:pointer;">Load More Cards</button>
    </div>
  </div>
</main>

{make_footer()}

<script>
const CARDS = {cards_json_str};
let curType = 'all';
let curCost = 'all';

const grid = document.getElementById('cardsGrid');
const countInfo = document.getElementById('cardCountInfo');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const PAGE_SIZE = 60;
let visibleCount = PAGE_SIZE;
let currentFiltered = CARDS;

function renderCards() {{
  grid.innerHTML = '';
  const total = currentFiltered.length;
  if (total === 0) {{
    countInfo.textContent = 'Showing 0 cards';
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--muted);">No matching cards found.</div>';
    loadMoreContainer.style.display = 'none';
    return;
  }}

  const slice = currentFiltered.slice(0, visibleCount);
  countInfo.textContent = `Showing ${{slice.length}} of ${{total}} cards`;

  slice.forEach(c => {{
    const el = document.createElement('div');
    el.className = 'card-item';
    
    let typeClass = 'type-skill';
    if (c.type === 'Attack') typeClass = 'type-atk';
    else if (c.type === 'Power') typeClass = 'type-power';
    else if (c.type === 'Curse') typeClass = 'type-curse';
    else if (c.type === 'Abnormality') typeClass = 'type-abnorm';

    const artHtml = c.image ? `<div class="card-art-box"><img src="assets/cards/${{c.image}}.webp" alt="${{c.name}}" loading="lazy" onerror="this.parentElement.style.display='none'"></div>` : '';

    let variantsHtml = '';
    if (c.variants && c.variants.length > 0) {{
      variantsHtml = `
        <div style="margin-top:10px; border-top:1px solid rgba(223,178,53,0.25); padding-top:8px;">
          <button class="builder-btn" style="padding:2px 8px; font-size:0.68rem; color:#dfb235; border-color:rgba(223,178,53,0.4); width:100%;" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'flex' : 'none';">
            ✦ 5 Unique Epiphany Branches ▼
          </button>
          <div class="card-variants-drawer" style="display:none; margin-top:6px;">
            ${{c.variants.map(v => `
              <div class="card-variant-pill">
                <strong>Branch ${{v.branch}}${{v.mult > 0 ? ' (' + v.mult + '% DMG)' : (v.shield > 0 ? ' (' + v.shield + '% Shield)' : '')}}:</strong> ${{v.desc}}
              </div>
            `).join('')}}
          </div>
        </div>
      `;
    }}

    el.innerHTML = `
      ${{artHtml}}
      <div class="c-top">
        <div class="c-cost">${{c.cost}}</div>
        <div class="c-type ${{typeClass}}">${{c.type}}</div>
      </div>
      <h4>${{c.name}}</h4>
      <div class="c-effect">${{c.effect}}</div>
      ${{variantsHtml}}
      <div class="c-meta" style="margin-top:10px;">
        <span>${{c.owner}}</span>
        <span style="text-transform:uppercase; font-size:0.65rem;">${{c.cost}} AP</span>
      </div>
    `;
    grid.appendChild(el);
  }});

  if (visibleCount < total) {{
    loadMoreContainer.style.display = 'block';
    loadMoreBtn.textContent = `Load More Cards (${{total - visibleCount}} remaining)`;
  }} else {{
    loadMoreContainer.style.display = 'none';
  }}
}}
renderCards();

loadMoreBtn.addEventListener('click', () => {{
  visibleCount += PAGE_SIZE;
  renderCards();
}});

// Filter Event Listeners
const typeBtns = document.querySelectorAll('#typeFilters .f-btn');
typeBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    typeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    curType = btn.dataset.t;
    applyCardFilters();
  }});
}});

const costBtns = document.querySelectorAll('#costFilters .f-btn');
costBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    costBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    curCost = btn.dataset.c;
    applyCardFilters();
  }});
}});

const cardSearch = document.getElementById('cardSearch');
function applyCardFilters() {{
  const q = cardSearch.value.toLowerCase().trim();
  visibleCount = PAGE_SIZE;
  currentFiltered = CARDS.filter(c => {{
    const matchT = curType === 'all' || c.type.toLowerCase() === curType.toLowerCase();
    const matchC = curCost === 'all' || (curCost === '3' ? c.cost >= 3 : String(c.cost) === curCost);
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.effect.toLowerCase().includes(q) || c.owner.toLowerCase().includes(q);
    return matchT && matchC && matchQ;
  }});
  renderCards();
}}
cardSearch.addEventListener('input', applyCardFilters);
</script>
</body>
</html>'''
    with open(f'{base_dir}/cards.html', 'w', encoding='utf-8') as f:
        f.write(cards_html)

    # ==========================================
    # 4. BUILD mechanics.html
    # ==========================================
    mechanics_template = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mechanics &amp; Systems — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
__NAV__

<main>
  <header class="page-header">
    <div class="page-pill">Gameplay Engine</div>
    <h1>Mechanics, Deities &amp; Systems</h1>
    <p>Comprehensive breakdown of card combat, mental breakdowns, the 6 Primordial Deities, 491 Divine Sparks, 557 Relics, and the complete 28-term combat glossary.</p>
  </header>

  <div class="container">
    <div class="sub-tabs">
      <button class="sub-tab-btn active" data-tab="tab-combat">⚡ Combat &amp; Stress Engine</button>
      <button class="sub-tab-btn" data-tab="tab-epiphany">✨ Epiphany &amp; Evolution (304 Branches)</button>
      <button class="sub-tab-btn" data-tab="tab-glossary">📖 Keywords Glossary (28)</button>
      <button class="sub-tab-btn" data-tab="tab-deities">🌌 6 Cosmic Deities &amp; Sparks</button>
      <button class="sub-tab-btn" data-tab="tab-relics">🛡️ Relics System (557)</button>
    </div>

    <!-- PANE 1: COMBAT & STRESS ENGINE -->
    <div id="tab-combat" class="tab-pane active">
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; margin-bottom:40px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">⚔️</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Turn-Based Card Combat</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Every battle turn starts with your 3-hero squad drawing <strong>5 cards</strong> and receiving <strong>3 Action Points (AP)</strong>. Cards share a unified team HP pool and can be cast in any sequence to weave devastating chain reactions.
          </p>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">🧠</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Mental Breakdown &amp; Ego Recovery</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Unblocked damage builds psychological Stress. At <strong>100 Stress</strong>, a hero suffers a <strong>Mental Breakdown</strong>: team max HP drops by 1/3 and normal cards morph into Breakdown Cards. Playing 5 Breakdown Cards purges the trauma and unlocks their <strong>0 AP Ego Skill</strong>.
          </p>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">💥</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Tenacity &amp; Ravage State</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Depleting an enemy's purple Tenacity gauge forces them into a <strong>Ravage State</strong>. This stuns their Action Counter, mitigates team Stress gain, and immediately awards your squad <strong>+1 bonus AP</strong> for relentless punishment.
          </p>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">💡</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Epiphany Mutation System</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Mid-run cards mutate into powerful specialized Epiphany variants (Branches I–V). Epiphanies grant <strong>0 AP cost</strong> casts, draw acceleration, and persistent combat tags, dramatically altering character playstyles.
          </p>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">🌀</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Chaos Mode Roguelike Progression</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Explore branching sector paths featuring Combat, Elites, Shrines, Merchants, and Rest stops. Manage Stress and health across consecutive sectors—permadeath claims the run but unlocks permanent account research notes.
          </p>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="font-size:2rem; margin-bottom:12px;">💾</div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Save Data &amp; Zero System</h3>
          <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
            Completed runs crystallize into permanent <strong>Save Data</strong> loadouts. Higher Codex heat modifiers expand your Save Value budget, allowing you to lock top-tier mutated cards and relics for boss battles and future conquests.
          </p>
        </div>
      </div>
    </div>

        <!-- PANE: EPIPHANY & EVOLUTION SYSTEM -->
    <div id="tab-epiphany" class="tab-pane">
      <div style="background:linear-gradient(135deg, rgba(223,178,53,0.15), var(--panel) 70%); border:1px solid rgba(223,178,53,0.35); border-radius:8px; padding:24px; margin-bottom:28px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:8px;">
          <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin:0;">Epiphany Mutation &amp; Evolution Architecture</h2>
          <span style="font-size:0.75rem; color:#dfb235; font-weight:700; background:rgba(223,178,53,0.15); border:1px solid rgba(223,178,53,0.3); padding:4px 10px; border-radius:4px;">304 UNIQUE BRANCHES • 92 COMMON SPARKS • 6 DEITIES</span>
        </div>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin:0;">
          Epiphany is the pinnacle card mutation mechanic in Chaos Zero Nightmare. In the Roguelike Chaos Mode, combatant cards evolve across <strong>5 specialized branches</strong>, gaining dramatic multiplier amplifications, AP cost reductions (-1 AP), shield conversions, multi-hit counts, and unique synergy activations.
        </p>
      </div>

      <!-- Archetype Architecture Overview -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin-bottom:30px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:800; color:#dfb235; margin-bottom:4px;">✦ BRANCH 1</div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:6px;">Pure Potency &amp; Scaling</div>
          <p style="font-size:0.78rem; color:var(--muted); line-height:1.45; margin:0;">Massive direct multiplier increase (e.g. 260% &rarr; 450% DEF DMG). Pure output for primary burst cards.</p>
        </div>
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:800; color:var(--cyan); margin-bottom:4px;">✦ BRANCH 2</div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:6px;">Hit-Count &amp; Debuffs</div>
          <p style="font-size:0.78rem; color:var(--muted); line-height:1.45; margin:0;">Multiplies hit counts or applies Mark, Vulnerable, and Agony to prime bosses for execution.</p>
        </div>
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:800; color:var(--purple); margin-bottom:4px;">✦ BRANCH 3</div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:6px;">Kit Synergy &amp; Stances</div>
          <p style="font-size:0.78rem; color:var(--muted); line-height:1.45; margin:0;">Interlocks with core passive stances (e.g. generating Effulgent Blade or charging Overdrive meters).</p>
        </div>
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:800; color:var(--emerald); margin-bottom:4px;">✦ BRANCH 4</div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:6px;">Tactical AoE Conversion</div>
          <p style="font-size:0.78rem; color:var(--muted); line-height:1.45; margin:0;">Transforms single-target strikes into squad-wide AoE destruction or converts DEF to True Damage.</p>
        </div>
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:800; color:var(--gold); margin-bottom:4px;">✦ BRANCH 5</div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:6px;">Retention &amp; Loop Engine</div>
          <p style="font-size:0.78rem; color:var(--muted); line-height:1.45; margin:0;">Shield Retention (preserves barrier between rounds), Hand cycling, and AP refund loops.</p>
        </div>
      </div>

      <!-- Hero Epiphany Explorer -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; margin-bottom:28px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
          <div>
            <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin:0 0 4px 0;">Hero Unique Epiphany Explorer</h3>
            <p style="font-size:0.8rem; color:var(--muted); margin:0;">Inspect all 4 unique cards and their 5 evolution branches for any of the 38 combatants.</p>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <label for="heroEpiphanySelect" style="font-size:0.8rem; color:var(--muted); font-weight:700;">SELECT HERO:</label>
            <select id="heroEpiphanySelect" style="padding:8px 14px; background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; color:#fff; font-size:0.85rem; font-family:'Orbitron',sans-serif;" onchange="renderHeroEpiphanies(this.value)">
              <!-- Populated by JS -->
            </select>
          </div>
        </div>

        <div id="heroEpiphanyCardsDisplay" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:16px;">
          <!-- Populated by JS -->
        </div>
      </div>

      <!-- Common Epiphany Affixes Catalog -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin:0 0 4px 0;">Universal Common Sparks Catalog (92 Affixes)</h3>
            <p style="font-size:0.8rem; color:var(--muted); margin:0;">Colorless Epiphany affixes offering stat buffs, Draw 1, Morale, Vulnerable, and AP refunds.</p>
          </div>
          <input type="text" id="commonSparkSearch" placeholder="Filter sparks (e.g. Draw, Morale, Vulnerable, Agony)..." style="padding:8px 12px; background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; color:#fff; font-size:0.82rem; width:280px;" oninput="filterCommonSparks(this.value)">
        </div>

        <div id="commonSparksGrid" class="ep-spark-grid" style="max-height:480px; overflow-y:auto; padding-right:6px;">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>

    <!-- PANE 2: KEYWORDS GLOSSARY -->
    <div id="tab-glossary" class="tab-pane">
      <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center; justify-content:space-between; margin-bottom:20px;">
        <input type="text" id="glossarySearch" placeholder="Search keywords (e.g. Agony, Wave, Hunt, Ravage, Retain)..." style="flex:1; min-width:260px; max-width:460px; padding:10px 14px; background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; color:#fff; font-size:0.88rem;">
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button class="g-filter-btn active" data-filter="all" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--text); cursor:pointer;">All</button>
          <button class="g-filter-btn" data-filter="Debuff" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--red); cursor:pointer;">Debuffs</button>
          <button class="g-filter-btn" data-filter="Buff" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--emerald); cursor:pointer;">Buffs</button>
          <button class="g-filter-btn" data-filter="Mechanic" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--cyan); cursor:pointer;">Mechanics</button>
          <button class="g-filter-btn" data-filter="Card Tag" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--gold); cursor:pointer;">Card Tags</button>
          <button class="g-filter-btn" data-filter="State" style="padding:6px 12px; font-size:0.78rem; border-radius:4px; background:var(--panel); border:1px solid var(--panel-border); color:var(--purple); cursor:pointer;">States</button>
        </div>
      </div>
      <div id="glossaryCount" style="font-size:0.8rem; color:var(--muted); margin-bottom:14px;">Showing 28 terms</div>

      <div class="glossary-grid" id="glossaryGrid"></div>
    </div>

    <!-- PANE 3: 6 DEITIES -->
    <div id="tab-deities" class="tab-pane">
      <div style="margin-bottom:30px; padding:24px; border-radius:8px; background:linear-gradient(135deg, rgba(16,102,77,0.25), var(--panel) 60%); border:1px solid rgba(22,133,100,0.35);">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:8px;">The 6 Primordial Cosmic Deities &amp; 491 Divine Sparks</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.6;">
          During Chaos expeditions, Captains encounter cosmological shrines governed by six cosmic deities. Shrines bestow Divine Sparks—permanent passive card alterations that modify AP costs, damage multipliers, and cooperative pincer triggers.
        </p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:18px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--cyan);">CALIGO</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(34,211,238,0.12); color:var(--cyan); font-weight:600;">Tenacity &amp; Ravage</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Governs break damage and berserker scaling. Sparks provide +100% Ravage scaling, critical damage multipliers, and convert lost squad HP into raw offensive power.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Increases Ravage state duration and grants true damage on break.</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--gold);">CIRCEN</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(223,178,53,0.12); color:var(--gold); font-weight:600;">Action Points &amp; Time</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Master of temporal acceleration and card economy. Sparks grant -1 AP cost reductions on signature skills, energy rebates upon 3+ card chains, and AP refunds.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Every 4th card played in a turn refunds 1 AP.</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--emerald);">DIALLOS</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(16,102,77,0.2); color:var(--emerald); font-weight:600;">Shield &amp; Aegis</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Deity of impenetrable bulwarks. Sparks amplify Vanguard shields by +30%, grant Metallization stacks that absorb Stress, and prevent squad lethal damage once per battle.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Convert 50% of remaining shield at turn end into permanent armor.</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--purple);">NIHILUM</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(168,85,247,0.15); color:var(--purple); font-weight:600;">Void &amp; Hand Flow</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Cosmic void manipulating card cycle. Sparks expand starting hand draw by +1, retain key cards across turns, and trigger bonus AoE burst when deck reshuffles.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Draw 2 extra cards whenever a card is discarded from hand.</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--blue);">SECRED</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(38,146,211,0.15); color:var(--blue); font-weight:600;">Pincer &amp; Synergy</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Deity of unison and cooperative tactics. Sparks guarantee 100% Pincer joint attacks when companion conditions are met, triggering auxiliary supporter strikes.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Supporter partner strikes trigger on every Attack card played.</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-size:1.15rem; font-weight:800; color:var(--red);">VITOR</span>
            <span style="font-size:0.75rem; padding:3px 8px; border-radius:4px; background:rgba(248,80,88,0.15); color:var(--red); font-weight:600;">Destruction &amp; Bleed</span>
          </div>
          <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Lord of absolute slaughter. Multiplies final damage output by +30%, inflicts true damage armor penetration, and triggers catastrophic Bleed explosions.</p>
          <div style="font-size:0.78rem; color:var(--muted);"><strong>Signature Spark:</strong> Increase card damage by +30% with zero additional AP cost.</div>
        </div>
      </div>
    </div>

    <!-- PANE 4: RELICS SYSTEM -->
    <div id="tab-relics" class="tab-pane">
      <div style="margin-bottom:28px; padding:24px; border-radius:8px; background:var(--panel); border:1px solid var(--panel-border);">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:8px;">557 Relics &amp; Equipment Tiers</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:20px;">
          Relics in *Chaos Zero Nightmare* are permanent gear artifacts discovered during Chaos explorations, elite boss drops, and simulation runs. Characters equip weapons, armor, and accessories that grant passive stat scaling and combat triggers.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px;">
          <div style="background:var(--card-inner); border-left:3px solid var(--gold); border-radius:4px; padding:14px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.95rem; font-weight:700; color:var(--gold); margin-bottom:4px;">Unique Tiers</div>
            <div style="font-size:0.8rem; color:var(--body);">Game-defining mutation relics with archetype triggers (e.g. Twin Swords, Shell Bug Horn).</div>
          </div>
          <div style="background:var(--card-inner); border-left:3px solid var(--purple); border-radius:4px; padding:14px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.95rem; font-weight:700; color:var(--purple); margin-bottom:4px;">Legend Tiers</div>
            <div style="font-size:0.8rem; color:var(--body);">Endgame artifacts dropping in high-heat Zero System runs with massive dual stats.</div>
          </div>
          <div style="background:var(--card-inner); border-left:3px solid var(--cyan); border-radius:4px; padding:14px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.95rem; font-weight:700; color:var(--cyan); margin-bottom:4px;">Rare Tiers</div>
            <div style="font-size:0.8rem; color:var(--body);">Core mid-game equipment forming baseline set bonuses and stability.</div>
          </div>
          <div style="background:var(--card-inner); border-left:3px solid var(--muted); border-radius:4px; padding:14px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.95rem; font-weight:700; color:var(--text); margin-bottom:4px;">Common Tiers</div>
            <div style="font-size:0.8rem; color:var(--body);">Early progression gear acquired from story stages and standard simulation runs.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<script>
// Sub-tabs switcher
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.getAttribute('data-tab'));
    if (target) target.classList.add('active');
  });
});

// Keywords glossary data
const glossaryList = [
  { name: 'Agony', tag: 'Debuff', desc: 'Inflicts Fixed Damage at turn end for 2 turns. Used heavily by Tressa and Lucas.' },
  { name: 'Fortitude', tag: 'Buff', desc: 'Enhances team defensive stability, damage resistance, and shield efficiency.' },
  { name: 'Wave', tag: 'Mechanic', desc: 'Mika’s resource. Stacking 3 Waves generates bonus AP and amplifies healing.' },
  { name: 'Morale', tag: 'Buff', desc: 'Stacks to incrementally increase squad Attack card damage.' },
  { name: 'Vulnerable', tag: 'Debuff', desc: 'Target takes increased damage from all incoming attacks.' },
  { name: 'Commence the Hunt', tag: 'Mechanic', desc: 'Hugo’s trait. Targeting attack cards trigger an Extra Attack (+30% dmg per stack, max 5).' },
  { name: 'Extra Attack', tag: 'Mechanic', desc: 'Automatic follow-up attacks scaling with Critical Chance and Bonus Damage.' },
  { name: 'Linked', tag: 'Mechanic', desc: 'Heidemarie’s synergy. Playing linked cards consecutively triggers burst bonus damage.' },
  { name: 'Quietus', tag: 'Mechanic', desc: 'Activates bonus damage, card retrieval, or AP refunds when discarded from hand.' },
  { name: 'Ravage State', tag: 'State', desc: 'Enemy Tenacity broken: grants +1 AP, delays enemy action count, and reduces team stress.' },
  { name: 'Mental Breakdown', tag: 'State', desc: 'Occurs at 100 Stress. Team max HP reduced by 1/3; play 5 breakdown cards to recover.' },
  { name: 'Ego Skill', tag: 'Mechanic', desc: 'Hero’s ultimate 0 AP ability unlocked via EP accumulation or surviving breakdown.' },
  { name: 'Impair', tag: 'Debuff', desc: 'Reduces enemy combat capabilities, action efficiency, and secondary proc rates.' },
  { name: 'Weaken', tag: 'Debuff', desc: 'Decreases outgoing damage dealt by afflicted enemy.' },
  { name: 'Mark', tag: 'Debuff', desc: 'Places tracking beacon on targets, amplifying critical strike vulnerability (Luke / Selena).' },
  { name: 'Dark Cloud Stance', tag: 'Mechanic', desc: 'Rin’s sword stance enabling Dark Mist Blade Art bonus hits and 0-cost transitions.' },
  { name: 'Counterattack', tag: 'Mechanic', desc: 'Retaliates with defense-scaled damage when team is hit or gains shields (Maribell / Magna).' },
  { name: 'Silver Veil', tag: 'Buff', desc: 'Khalipe’s aura mitigating damage and reinforcing shield thresholds based on DEF.' },
  { name: 'Ember', tag: 'Debuff', desc: 'Mei Lin’s fire debuff. Lingering fire resonance detonating for massive Passion burst.' },
  { name: 'Retain', tag: 'Card Tag', desc: 'Card remains in hand at turn end instead of going to Graveyard.' },
  { name: 'Exhaust', tag: 'Card Tag', desc: 'Card is permanently removed from combat upon use.' },
  { name: 'Haste', tag: 'Card Tag', desc: 'Playing this card does not tick down the enemy’s Action Count.' },
  { name: 'Lead', tag: 'Card Tag', desc: 'Chance to reduce its own AP cost by 1 at the start of each turn.' },
  { name: 'Outbreak of War', tag: 'Card Tag', desc: 'Guaranteed to appear in your starting opening hand at battle onset.' },
  { name: 'Ephemeral', tag: 'Card Tag', desc: 'Temporary card that vanishes at turn end or under specified conditions.' },
  { name: 'Bullet', tag: 'Card Tag', desc: 'Specialized ammunition card that exhausts upon firing (Lucas, Luke).' },
  { name: 'Unique', tag: 'Card Tag', desc: 'Only one copy can exist in your operational deck.' },
  { name: 'Epiphany', tag: 'Mechanic', desc: 'Mid-run mutation transforming basic cards into 0 AP empowered variants.' }
];

const grid = document.getElementById('glossaryGrid');
const searchInput = document.getElementById('glossarySearch');
const filterBtns = document.querySelectorAll('.g-filter-btn');
const countLabel = document.getElementById('glossaryCount');
let curFilter = 'all';

function renderGlossary() {
  const q = (searchInput.value || '').toLowerCase().trim();
  grid.innerHTML = '';
  let count = 0;
  glossaryList.forEach(item => {
    const matchF = curFilter === 'all' || item.tag === curFilter;
    const matchQ = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
    if (matchF && matchQ) {
      count++;
      const card = document.createElement('div');
      card.className = 'glossary-card';
      // Safe assignment with textContent
      const header = document.createElement('div');
      header.className = 'glossary-header';
      const title = document.createElement('span');
      title.className = 'glossary-title';
      title.textContent = item.name;
      const tag = document.createElement('span');
      tag.className = 'glossary-tag';
      tag.textContent = item.tag;
      header.appendChild(title);
      header.appendChild(tag);
      const desc = document.createElement('div');
      desc.className = 'glossary-desc';
      desc.textContent = item.desc;
      card.appendChild(header);
      card.appendChild(desc);
      grid.appendChild(card);
    }
  });
  countLabel.textContent = `Showing ${count} terms`;
}

searchInput.addEventListener('input', renderGlossary);
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    curFilter = btn.getAttribute('data-filter');
    renderGlossary();
  });
});
renderGlossary();

// Epiphany Explorer Logic
function initEpiphanyExplorer() {
  const sel = document.getElementById('heroEpiphanySelect');
  if (!sel || !window.CZN_DATA || !window.CZN_DATA.combatants) return;
  sel.innerHTML = window.CZN_DATA.combatants.map(c => `<option value="${c.id}">${c.name} (${c.job || c.class})</option>`).join('');
  if (window.CZN_DATA.combatants.length > 0) {
    renderHeroEpiphanies(window.CZN_DATA.combatants[0].id);
  }
  renderCommonSparksList(window.CZN_DATA.commonEpiphanies || []);
}

function renderHeroEpiphanies(heroId) {
  const hero = window.CZN_DATA.combatants.find(c => c.id === heroId);
  const container = document.getElementById('heroEpiphanyCardsDisplay');
  if (!hero || !container) return;

  const uniques = hero.uniques || [];
  container.innerHTML = uniques.map(c => {
    const vars = c.variants || [];
    return `
      <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:8px; padding:16px; display:flex; flex-direction:column; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="card-ap-badge" style="width:24px; height:24px; font-size:0.75rem;">${c.cost || 1}</span>
            <span style="font-family:'Orbitron',sans-serif; font-size:0.95rem; font-weight:700; color:var(--text);">${c.name}</span>
          </div>
          <span class="type-badge type-${(c.category || c.type || 'attack').toLowerCase()}">${c.category || c.type || 'Attack'}</span>
        </div>
        <div style="font-size:0.75rem; color:var(--muted); line-height:1.4; padding-bottom:6px; border-bottom:1px solid var(--panel-border);">
          <strong>Base Effect:</strong> ${c.desc}
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="font-size:0.7rem; color:#dfb235; font-weight:700; text-transform:uppercase;">✦ 5 Epiphany Branches:</div>
          ${vars.map(v => `
            <div class="card-variant-pill" style="border-left:2px solid #dfb235;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
                <strong>Branch ${v.branch}</strong>
                <span style="color:#dfb235; font-weight:700;">${v.mult > 0 ? v.mult + '% DMG' : (v.shield > 0 ? v.shield + '% Shield' : '')}</span>
              </div>
              <div style="color:var(--text); font-size:0.72rem;">${v.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderCommonSparksList(list) {
  const grid = document.getElementById('commonSparksGrid');
  if (!grid) return;
  grid.innerHTML = list.map(s => `
    <div class="ep-spark-item">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span style="font-size:0.65rem; padding:1px 6px; border-radius:3px; background:rgba(34,211,238,0.15); color:var(--cyan); font-weight:700;">${s.category}</span>
          <span style="font-size:0.65rem; color:var(--muted); font-family:monospace;">${s.id}</span>
        </div>
        <div style="font-size:0.74rem; color:var(--text); line-height:1.35;">${s.desc}</div>
      </div>
    </div>
  `).join('');
}

function filterCommonSparks(q) {
  const query = (q || '').toLowerCase().trim();
  const list = (window.CZN_DATA?.commonEpiphanies || []).filter(s => {
    return !query || s.desc.toLowerCase().includes(query) || s.category.toLowerCase().includes(query) || s.id.toLowerCase().includes(query);
  });
  renderCommonSparksList(list);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initEpiphanyExplorer === 'function') {
    initEpiphanyExplorer();
  }
});

</script>

__FOOTER__
</body>
</html>'''

    mechanics_html = mechanics_template.replace('__NAV__', make_nav('mechanics.html')).replace('__FOOTER__', make_footer())
    with open(f'{base_dir}/mechanics.html', 'w', encoding='utf-8') as f:
        f.write(mechanics_html)

    # ==========================================
    # 5. BUILD lore.html
    # ==========================================
    factions_list = [
        {
            'name': 'Terrascion',
            'hq': 'SS Nightmare & SS Edenity',
            'desc': 'The frontline military and administrative body responsible for deep space expeditionary fleets and tactical academy studies.',
            'members': ['Renoa', 'Haru', 'Mei Lin', 'Mika', 'Owen', 'Amir', 'Nia', 'Rei', 'Tressa', 'Yuki', 'Anika', 'Kiara', 'Erica', 'Arwen', 'Wilhelmina', 'Rosaria', 'Eloise', 'Lillian', 'Asteria', 'Westmacott']
        },
        {
            'name': 'Ironrain',
            'hq': 'Frontier Outposts & Wolf Platoon Deployment Sector',
            'desc': 'A battle-hardened faction primarily composed of elite Rangers and Hunters. Home of the famous Wolf Platoon vanguard team.',
            'members': ['Luke', 'Lucas', 'Beryl', 'Maribell', 'Hilde', 'Janet', 'Alyssa', 'Daisy', 'Rachel']
        },
        {
            'name': 'Stella Familia',
            'hq': 'Altair Sector',
            'desc': 'A distinctive faction characterized by acute primal instincts, beast-kin traits, and extraordinary resilience in corrupted Chaos Zones.',
            'members': ['Khalipe', 'Hugo', 'Magna', 'Veronica', 'Marin', 'Carroty', 'Nakia', 'Zatera', 'Raidel', 'Douglas', 'Yuri']
        },
        {
            'name': 'Peltion',
            'hq': 'Company 110 Headquarters',
            'desc': 'A corporate-military syndicate specializing in tactical technology, mercenary contracts, and deck modulation algorithms.',
            'members': ['Cassius', 'Zeta', 'Scarlet', 'Marianne', 'Tina', 'Akad', 'Ritochka']
        },
        {
            'name': 'The Holy Crusaders',
            'hq': 'The Grand Cathedral & Epione Sanctuaries',
            'desc': 'A devout religious order dedicated to preaching the divine word and shielding souls from psychological corruption.',
            'members': ['Orlea', 'Diana', 'Noel', 'Yvonne']
        },
        {
            'name': 'Sileyma',
            'hq': 'Outer Celestial Spheres',
            'desc': 'Ancient and enigmatic horned beings wielding immense cosmic energy, acting as formidable auxiliary partners.',
            'members': ['Solia', 'Eishlen', 'Nyx', 'Anteia', 'Serithea', 'Priscilla']
        },
        {
            'name': 'Wanderers (Independents)',
            'hq': 'None (Drifting Stars)',
            'desc': 'Elite independent combatants and master swordsmen operating without imperial or corporate allegiance.',
            'members': ['Rin', 'Kayron', 'Bria']
        },
        {
            'name': 'Imperial High Command & Allies',
            'hq': 'Imperial Capital & Dimensional Nexuses',
            'desc': 'Direct imperial officers, enigmatic entities, and interdimensional collaborators.',
            'members': ['Adelheid', 'Arabella', 'Chizuru', 'Fei', 'Narja', 'Nine', 'Olga', 'Rita', 'Sereniel', 'Tenebria', 'Tiphera']
        }
    ]

    faction_cards_html = []
    for fac in factions_list:
        badges = []
        for mem in fac['members']:
            mid = name_to_id.get(mem.lower())
            if mid:
                img_tag = f'<img src="assets/characters/{mid}.webp" alt="{mem}" loading="lazy">'
                badges.append(f'<span class="faction-member-badge">{img_tag} {mem}</span>')
            else:
                badges.append(f'<span class="faction-member-badge">{mem}</span>')
        roster_str = ''.join(badges)
        card_markup = f"""
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
            <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text);">{fac['name']}</h3>
            <span style="font-size:0.75rem; color:var(--cyan); font-weight:600;">HQ: {fac['hq']}</span>
          </div>
          <p style="font-size:0.86rem; color:var(--body); line-height:1.6; margin-bottom:14px;">{fac['desc']}</p>
          <div style="font-size:0.75rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.05em; font-weight:700; margin-bottom:6px;">Notable Members ({len(fac['members'])})</div>
          <div class="faction-roster">{roster_str}</div>
        </div>"""
        faction_cards_html.append(card_markup)

    all_factions_html = '\n'.join(faction_cards_html)

    lore_template = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lore &amp; Universe — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
__NAV__

<main>
  <header class="page-header">
    <div class="page-pill">Universe &amp; Lore</div>
    <h1>Story, SS Nightmare &amp; 8 Factions</h1>
    <p>Explore the cosmic horror world of Chaos Zero Nightmare, the amnesiac Captain aboard the SS Nightmare, and the sociopolitical factions warring against existential collapse.</p>
  </header>

  <div class="container">
    <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:28px; margin-bottom:40px;">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:12px;">The SS Nightmare &amp; The Amnesiac Captain</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8; margin-bottom:16px;">
          Eons ago, an incomprehensible extraterrestrial phenomenon known as <strong>Chaos</strong> engulfed Earth, inflicting catastrophic ecological devastation and driving humanity into an interstellar space-faring empire to survive.
        </p>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8; margin-bottom:16px;">
          You awaken as an elite Imperial Officer holding the rank of <strong>Captain</strong> aboard the flagship <strong>SS Nightmare</strong>. During a routine Chaos eradication sortie, an unprecedented spatial convergence wiped your memory clean—a biological impossibility given imperial genetic engineering.
        </p>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8;">
          Alongside Vice Captain <strong>Renoa</strong> and key operatives, you must unravel the conspiracy inside the Imperial Admiralty, navigate ideological warfare between the corporate syndicate <strong>Peltion</strong> and the religious <strong>Holy Crusaders</strong>, and discover the true purpose of the Chaos infection.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px; display:flex; flex-direction:column; justify-content:center;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:12px;">The Sanity Loop &amp; Deep Trauma</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:14px;">
          Unlike conventional battlefields, warfare within Chaos Zones degrades the human psyche. Combatants exposed to mental horror accumulate <strong>Deep Trauma</strong>, requiring psychiatric restoration at the <strong>Epione Center</strong> in Ark City.
        </p>
        <div style="background:var(--card-inner); border-left:3px solid var(--purple); padding:12px; border-radius:4px; font-size:0.82rem; color:var(--muted); line-height:1.6;">
          <strong style="color:var(--text);">Psychological Awakening:</strong> Agents who confront and survive their deepest trauma achieve psychological clarity, unlocking their catastrophic <strong>Ego Skills</strong>.
        </div>
      </div>
    </div>

    <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:20px;">The 8 Major Galactic Factions</h2>
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:20px; margin-bottom:40px;">
__FACTIONS__
    </div>
  </div>
</main>

__FOOTER__
</body>
</html>'''

    lore_html = lore_template.replace('__NAV__', make_nav('lore.html')).replace('__FOOTER__', make_footer()).replace('__FACTIONS__', all_factions_html)
    with open(f'{base_dir}/lore.html', 'w', encoding='utf-8') as f:
        f.write(lore_html)

    # ==========================================
    # 6. BUILD guides.html
    # ==========================================
    guides_template = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guides &amp; Roadmaps — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="teambuilder-data.js"></script>
</head>
<body>
__NAV__

<main>
  <header class="page-header">
    <div class="page-pill">Strategy &amp; Progression</div>
    <h1>Game Guides &amp; Account Progression</h1>
    <p>Complete compendium covering early game onboarding, Aether stamina distribution, daily routines, progression milestones, and squad pre-sortie readiness.</p>
  </header>

  <div class="container">
    <!-- Callout Banner to Dedicated Team Builder -->
    <div style="background:linear-gradient(135deg, rgba(38,146,211,0.15), var(--panel)); border:1px solid rgba(38,146,211,0.4); border-radius:8px; padding:18px 24px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <div>
        <div style="font-family:'Orbitron',sans-serif; font-size:1.05rem; font-weight:700; color:var(--cyan); margin-bottom:4px;">Looking for Squad Building &amp; Turn Simulation?</div>
        <p style="font-size:0.85rem; color:var(--body); margin:0;">Form 3-combatant teams, customize 24-card operational decks, evaluate AP curves, and test draw opening hands in our dedicated simulator.</p>
      </div>
      <a href="teambuilder.html" class="nav-btn" style="background:var(--accent); color:#fff; border-color:var(--accent); padding:8px 18px; font-size:0.85rem;">Open Team Builder →</a>
    </div>

    <div class="sub-tabs">
      <button class="sub-tab-btn active" data-tab="tab-beginner">🌱 Beginner Roadmap</button>
      <button class="sub-tab-btn" data-tab="tab-progression">📈 Account &amp; Progression</button>
      <button class="sub-tab-btn" data-tab="tab-checklist">📋 Squad Readiness Checklist</button>
    </div>

    <!-- PANE 1: BEGINNER ROADMAP -->
    <div id="tab-beginner" class="tab-pane active">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:24px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:12px;">First Things to Do as Captain</h2>
        <div class="table-responsive">
          <table class="guide-table">
            <thead>
              <tr><th>Step</th><th>Action</th><th>Key Benefit</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1</strong></td><td>Finish Tutorial (Prologue)</td><td>Unlocks the in-game Shop, Mailbox, and Rescue Gacha banners.</td></tr>
              <tr><td><strong>2</strong></td><td>Claim Entire Mailbox</td><td>Converts pre-registration bundles and launch gifts into instant pull currency.</td></tr>
              <tr><td><strong>3</strong></td><td>Reach Chapter 1 Ep 4</td><td>Unlocks the <em>Register Coupon</em> feature to redeem launch gift codes.</td></tr>
              <tr><td><strong>4</strong></td><td>Rush Campaign Stages</td><td>Highest stamina-to-resource yield in the early game; unlocks Ark City and farm modes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; margin-bottom:24px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--cyan); margin-bottom:10px;">⚡ Aether (Stamina) Allocation</h3>
          <ul style="font-size:0.85rem; color:var(--body); line-height:1.8; margin-left:18px;">
            <li><strong>Early Game:</strong> Spend 100% on Main Campaign to unlock Simulation modes.</li>
            <li><strong>Level 25+:</strong> Farm <em>Simulation: Memory Fragments</em> (60 Aether/run) for core gear sets.</li>
            <li><strong>Daily Routine:</strong> Never let Aether cap—visit the Garden Café in Ark City to claim 80 free daily Aether.</li>
          </ul>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--gold); margin-bottom:10px;">📅 Daily Captain Routine</h3>
          <ul style="font-size:0.85rem; color:var(--body); line-height:1.8; margin-left:18px;">
            <li>Clear all Daily Missions for steady pull crystals and upgrade tokens.</li>
            <li>Spend 3 <strong>Communication Passes</strong> in Ark City to raise Hero Affinity.</li>
            <li>Dispatch agents at the <strong>Policy Office</strong> to earn Nono Shop points.</li>
            <li>Treat agents with Deep Trauma at the <strong>Epione Center</strong>.</li>
          </ul>
        </div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:10px;">Account Progression Milestones</h3>
        <div class="table-responsive">
          <table class="guide-table">
            <thead>
              <tr><th>Level</th><th>Milestone</th><th>Significance</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Lv 10</strong></td><td>Promotion Unlocks</td><td>Break character level ceilings using Class Striker Manuals.</td></tr>
              <tr><td><strong>Lv 25</strong></td><td>Memory Fragment Simulation</td><td>Primary gear artifact farming mode (60 Aether per run).</td></tr>
              <tr><td><strong>Lv 30</strong></td><td>Basin of Hyperspace</td><td>Mid-game challenge sectors yielding high-grade potential nodes.</td></tr>
              <tr><td><strong>Lv 40</strong></td><td>Zero System Codices</td><td>Endgame heat-modifier roguelike mode dropping 557-relic tiers.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- PANE 2: PROGRESSION -->
    <div id="tab-progression" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:24px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:10px;">Hero Investment Priority</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px;">
          <div style="background:var(--card-inner); border-radius:6px; padding:16px;">
            <div style="font-size:0.85rem; font-weight:700; color:var(--cyan); margin-bottom:6px;">1. Rank Promotion</div>
            <div style="font-size:0.82rem; color:var(--body); line-height:1.6;">Breakthrough levels at 20/40/60/80 using Striker Manuals to unlock higher base stats and card skill upgrades.</div>
          </div>
          <div style="background:var(--card-inner); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:700; color:var(--gold); margin-bottom:6px;">2. Potential Skill Tree</div>
            <div style="font-size:0.82rem; color:var(--body); line-height:1.6;">Unlock character-specific nodes that permanently mutate starting card effects and enhance critical multipliers.</div>
          </div>
          <div style="background:var(--card-inner); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:700; color:var(--emerald); margin-bottom:6px;">3. Memory Fragments</div>
            <div style="font-size:0.82rem; color:var(--body); line-height:1.6;">Farm set bonuses (4-piece Attack / 2-piece Defense) to reinforce baseline survival before entering Chaos zones.</div>
          </div>
          <div style="background:var(--card-inner); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.85rem; font-weight:700; color:var(--purple); margin-bottom:6px;">4. Save Data Carryover</div>
            <div style="font-size:0.82rem; color:var(--body); line-height:1.6;">Lock optimal high-roll Epiphany cards and rare relics in the Zero System to create perfect loadouts.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- PANE 3: CHECKLIST -->
    <div id="tab-checklist" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; max-width:680px; margin:0 auto;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:12px;">Squad Pre-Sortie Checklist</h2>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:20px;">
          Before launching into difficult Chaos sectors or high-heat Zero System runs, check your squad against these core tactical criteria:
        </p>

        <div style="display:flex; flex-direction:column; gap:12px;" id="squadChecklist">
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">At least 1 hero matches the recommended sector attribute (+25% DMG bonus).</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Squad includes adequate shields or healing to prevent Stress reaching 100.</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Deck has sufficient 0-cost or 1-cost cards to sustain 3 AP per turn flow.</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Includes a dedicated card cycling mechanism (Nia, Cassius, or draw items).</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Card synergy triggers are aligned (e.g. Extra Attacks, Discard procs, Wave stacks).</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</main>

<script>
// Sub-tabs switcher
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.getAttribute('data-tab'));
    if (target) target.classList.add('active');
  });
});
</script>

__FOOTER__
</body>
</html>'''

    guides_html = guides_template.replace('__NAV__', make_nav('guides.html')).replace('__FOOTER__', make_footer())
    with open(f'{base_dir}/guides.html', 'w', encoding='utf-8') as f:
        f.write(guides_html)

    # ==========================================
    # 7. BUILD teambuilder.html
    # ==========================================
    with open(f'{base_dir}/teambuilder_template.html', 'r', encoding='utf-8') as f:
        tb_template = f.read()
    tb_html = tb_template.replace('__NAV__', make_nav('teambuilder.html')).replace('__FOOTER__', make_footer())
    with open(f'{base_dir}/teambuilder.html', 'w', encoding='utf-8') as f:
        f.write(tb_html)

    print("Successfully built all 7 multi-page website files with rich content:")
    print(" - index.html (Portal/Home with stats banner & builder card)")
    print(" - characters.html (38 Combatants & 49 Partners with portraits & modal starter art)")
    print(" - cards.html (1,157 Unique Cards with 782 illustrations & AP filters)")
    print(" - teambuilder.html (Interactive Squad & Deck Simulator, 24-card rules, turn simulator)")
    print(" - mechanics.html (Interactive sub-tabs, 28-term Glossary search, 6 Deities, Relics)")
    print(" - lore.html (Story narrative & 8 Factions with 87 member avatar badges)")
    print(" - guides.html (Beginner Roadmap, Progression & Interactive Checklist)")

if __name__ == '__main__':
    run()
