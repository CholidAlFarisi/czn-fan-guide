import os, glob, re, json
from combatant_guides_data import COMBATANT_GUIDES

def clean_desc(text):
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', ' ', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\{[a-zA-Z0-9_]+\}', '', text)
    text = re.sub(r'#[0-9a-fA-F]{6}', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def run():
    base_dir = 'D:/agents/czn-fan-guide'

    # 1. Load Character Database from e7bot
    with open(f'{base_dir}/raw-data/e7bot/characters-en.json', encoding='utf-8') as f:
        chars_raw = json.load(f)['data']
    name_to_id = {c['name'].lower(): str(c['id']) for c in chars_raw if 'name' in c and 'id' in c}
    name_to_id['rosweisse'] = '30134'
    name_to_id['rossweisse'] = '30134'
    id_map = {str(c['id']): c['name'] for c in chars_raw if 'id' in c and 'name' in c}
    id_map['30134'] = 'Rossweisse'

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
        def _get_card_img(c_name, c_id):
            c_lower = c_name.strip().lower()
            clean_lower = re.sub(r'\s*\([^)]*\)', '', c_name.strip()).strip().lower()
            return (
                card_name_to_sct.get((c_lower, c_id))
                or card_name_to_sct.get(c_lower)
                or card_name_to_sct.get((clean_lower, c_id))
                or card_name_to_sct.get(clean_lower, '')
            )
        card_list = [{'name': c[0].strip(), 'cost': c[1].strip(), 'type': c[2].strip(), 'effect': c[3].strip(), 'image': _get_card_img(c[0], cid)} for c in starters[:6]]
        
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

    # Load Manifest Ego data and attach to combatants
    manifest_egos_dict = {}
    if os.path.exists(f'{base_dir}/raw-data/e7bot/manifest_ego.json'):
        with open(f'{base_dir}/raw-data/e7bot/manifest_ego.json', encoding='utf-8') as mf:
            manifest_egos_dict = json.load(mf)

    for c in unique_combatants:
        cid = str(c.get('id', ''))
        if cid in manifest_egos_dict:
            c['manifest_ego'] = manifest_egos_dict[cid].get('stages', [])
        if cid in COMBATANT_GUIDES:
            c['guide'] = COMBATANT_GUIDES[cid]
            c['tier'] = COMBATANT_GUIDES[cid].get('tier', 'T1')
            c['tier_label'] = COMBATANT_GUIDES[cid].get('tier_label', 'T1 HIGH')
            c['tier_color'] = COMBATANT_GUIDES[cid].get('tier_color', '#3b82f6')
            c['role'] = COMBATANT_GUIDES[cid].get('role', '')

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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Chaos Zero Nightmare — Database &amp; Fan Guide</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=2">
<script src="teambuilder-data.js"></script>
</head>
<body>
{make_nav('index.html')}

<main>
  <header class="page-header" style="text-align:center; padding: 60px 5vw 40px;">
    <div class="page-pill">Fan Guide &amp; Database Portal</div>
    <h1>Chaos Zero Nightmare</h1>
    <p style="margin: 0 auto 24px;">Comprehensive archive for 40 Playable Combatants, 48 Partners, 2,174 Cards, 6 Primordial Deities, and Roguelike Mechanics.</p>
    
    <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom: 24px;">
      <a href="characters.html" class="nav-btn" style="background:var(--accent); color:#fff; border-color:var(--accent); padding:10px 22px; font-size:0.9rem;">Browse Characters →</a>
      <a href="cards.html" class="nav-btn" style="padding:10px 22px; font-size:0.9rem;">Search Card Database →</a>
    </div>

    <div style="display:flex; justify-content:center; gap:36px; flex-wrap:wrap; margin-top:30px; padding-top:24px; border-top:1px solid var(--panel-border);">
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">{len(unique_combatants)}</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Combatants</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">{len(supporters)}</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Partners</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">{len(cards_raw):,}</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Cards</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">6</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Cosmic Deities</div></div>
      <div style="text-align:center"><div style="font-family:'Orbitron',sans-serif; font-weight:800; font-size:1.4rem; color:var(--text);">557</div><div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.08em;">Relics</div></div>
    </div>
  </header>

  <div class="container">
    <!-- SPOTLIGHT: SEASON 5 META & ROSSWEISSE -->
    <div style="background:linear-gradient(135deg, rgba(16,102,77,0.25), var(--panel)); border:1px solid #10664d; border-radius:10px; padding:24px 28px; margin-bottom:32px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; box-shadow:0 8px 30px rgba(0,0,0,0.3);">
      <div style="max-width:700px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="background:#10664d; color:#fff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:4px; font-family:'Orbitron',sans-serif; letter-spacing:0.05em;">SEASON 5 SPOTLIGHT</span>
          <span style="color:#5eead4; font-size:0.85rem; font-weight:700;">NEW META GUIDES &amp; COMBAT PLAYBOOK</span>
        </div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.4rem; color:var(--text); margin:0 0 8px 0;">Rossweisse Polarity &amp; Endgame Meta Hub</h2>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.6; margin:0;">
          Dive into our comprehensive Day-1 to Min-Max guide for Rossweisse (4-pc Veiled Radiance, 6-slot stats, Partner Arya), explore 5 S-Tier team formations, and launch 1-click presets in the squad simulator.
        </p>
      </div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="guides.html?tab=tab-rossweisse" class="nav-btn" style="background:#10664d; color:#fff; border-color:#10664d; padding:10px 20px; font-size:0.88rem; font-weight:700;">⚔️ Rossweisse Guide →</a>
        <a href="teambuilder.html?preset=rossweisse_polarity" class="nav-btn" style="background:rgba(16,102,77,0.3); border-color:#10664d; color:#5eead4; padding:10px 20px; font-size:0.88rem; font-weight:700;">⚡ Test Simulator →</a>
      </div>
    </div>

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
          <p style="font-size:0.85rem; color:var(--muted);">All 40 playable combatants with starter cards, plus 48 partner supporters, signature decks, plus 49 partner supporters.</p>
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
      <a href="characters.html" style="color:var(--accent); text-decoration:none; font-size:0.85rem; font-weight:700;">View All 40 →</a>
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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Characters &amp; Meta Builds — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=3">
<script src="teambuilder-data.js"></script>
</head>
<body>
{make_nav('characters.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Roster &amp; Strategy Matrix</div>
    <h1>Characters &amp; Meta Guides</h1>
    <p>Complete database of 40 playable Combatants with verified Endgame Builds, Memory Fragment Gear Matrices, Stat Priorities (Slots 4/5/6), Supporter Synergies, and 48 Partners.</p>
  </header>

  <div class="container">
    <!-- View Switcher -->
    <div style="display:flex; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--panel-border); padding-bottom:12px;">
      <button class="f-btn active" id="tabComb" style="font-size:0.9rem; padding:8px 18px;">Combatants (40)</button>
      <button class="f-btn" id="tabSupp" style="font-size:0.9rem; padding:8px 18px;">Partners (49)</button>
    </div>

    <!-- Combatants View -->
    <div id="viewCombatants">
      <div class="toolbar" style="flex-direction:column; align-items:stretch; gap:12px;">
        <!-- Tier Filter Bar -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
          <div class="filter-bar" id="combTierFilters" style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="f-btn tier-btn active" data-tier="all">All Tiers (40)</button>
            <button class="f-btn tier-btn" data-tier="T0" style="border-color:#10664d; color:#2dd4bf; font-weight:700;">★ T0 Apex (5)</button>
            <button class="f-btn tier-btn" data-tier="T0.5" style="border-color:#a855f7; color:#d8b4fe; font-weight:700;">◆ T0.5 S-Tier (7)</button>
            <button class="f-btn tier-btn" data-tier="T1" style="border-color:#3b82f6; color:#93c5fd; font-weight:700;">▲ T1 High (20)</button>
            <button class="f-btn tier-btn" data-tier="T1.5" style="border-color:#64748b; color:#cbd5e1; font-weight:700;">● T1.5-T2 Budget (8)</button>
          </div>
          <div class="search-inline" style="min-width:280px;">
            <input type="text" id="combSearch" placeholder="Search combatants, jobs, gear, roles...">
          </div>
        </div>

        <!-- Class / Rarity Filter Bar -->
        <div class="filter-bar" id="combFilters" style="display:flex; gap:6px; flex-wrap:wrap; border-top:1px dashed rgba(255,255,255,0.07); padding-top:10px;">
          <button class="f-btn active" data-f="all">All Classes</button>
          <button class="f-btn" data-f="5">5★ (28)</button>
          <button class="f-btn" data-f="4">4★ (12)</button>
          <button class="f-btn" data-job="Vanguard">Vanguard (6)</button>
          <button class="f-btn" data-job="Striker">Striker (7)</button>
          <button class="f-btn" data-job="Hunter">Hunter (5)</button>
          <button class="f-btn" data-job="Ranger">Ranger (7)</button>
          <button class="f-btn" data-job="Psionic">Psionic (6)</button>
          <button class="f-btn" data-job="Controller">Controller (7)</button>
        </div>
      </div>
      <div style="margin-bottom:14px; font-size:0.8rem; color:var(--muted);" id="combCountInfo">Showing 40 combatants</div>
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
  <div class="modal-card" style="max-width:750px;">
    <button class="modal-close" id="modalClose">&times;</button>
    <div class="modal-head">
      <div class="modal-icon" id="mIcon">⚔️</div>
      <div class="modal-title">
        <div style="display:flex; align-items:center; gap:10px;">
          <h2 id="mName" style="margin:0;">Character Name</h2>
          <span id="mTierBadge" class="tier-badge tier-t0">T0 APEX</span>
        </div>
        <div class="stars" id="mStars">★★★★★</div>
        <div class="modal-meta" id="mMeta"></div>
      </div>
    </div>
    <div class="modal-desc" id="mDesc"></div>
    <div class="modal-cards">
      <div class="modal-tabs">
        <button class="modal-tab-btn active" id="mTabGuideBtn" onclick="switchCharModalTab('guide')">⚔️ Build &amp; Meta Guide</button>
        <button class="modal-tab-btn" id="mTabCardsBtn" onclick="switchCharModalTab('cards')">🃏 Starter Cards (<span id="mCardCount">0</span>)</button>
        <button class="modal-tab-btn" id="mTabEgoBtn" onclick="switchCharModalTab('ego')">🧠 Manifest Ego (<span id="mEgoCount">6</span> Stages)</button>
      </div>

      <div id="mTabGuide">
        <div id="mGuideContent"></div>
      </div>

      <div id="mTabCards" style="display:none;">
        <div class="modal-card-list" id="mCardList"></div>
      </div>

      <div id="mTabEgo" style="display:none;">
        <div class="ego-stage-list" id="mEgoList"></div>
      </div>
    </div>
  </div>
</div>

{make_footer()}

<script>
const COMBATANTS = {chars_json_str};
const PARTNERS = {supporters_json_str};

// Tab Switching (Combatants vs Partners)
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

function getTierClass(tier) {{
  if (tier === 'T0') return 'tier-t0';
  if (tier === 'T0.5') return 'tier-t05';
  if (tier === 'T1') return 'tier-t1';
  if (tier === 'T1.5') return 'tier-t15';
  return 'tier-t2';
}}

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
    el.dataset.tier = c.tier || 'T1';
    const stars = '★'.repeat(c.rarity);
    const imgHtml = c.id ? `<img src="assets/characters/${{c.id}}.webp" alt="${{c.name}}" loading="lazy" onerror="this.parentElement.textContent='${{c.icon}}'">` : c.icon;
    const tierClass = getTierClass(c.tier);
    const tierLabel = c.tier_label || c.tier || 'T1';
    const roleText = c.role || (c.guide && c.guide.role) || '';

    el.innerHTML = `
      <div class="char-icon">${{imgHtml}}</div>
      <div class="char-info">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:6px;">
          <div class="char-name">${{c.name}}</div>
          <span class="tier-badge ${{tierClass}}">${{tierLabel}}</span>
        </div>
        <div class="char-role-sub" title="${{roleText}}">${{roleText}}</div>
        <div class="char-stars" style="margin-top:4px;">${{stars}}</div>
        <div class="char-tags" style="margin-top:6px;">
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
  
  const mTierBadge = document.getElementById('mTierBadge');
  const tierClass = getTierClass(c.tier);
  mTierBadge.className = `tier-badge ${{tierClass}}`;
  mTierBadge.textContent = c.tier_label || c.tier || 'T1';

  const meta = document.getElementById('mMeta');
  meta.innerHTML = `
    <span class="tag" style="background:var(--accent);color:#fff">${{c.job}}</span>
    <span class="tag attr">${{c.ego}}</span>
    <span class="tag">${{c.faction}}</span>
  `;

  // Render Build Guide Tab
  const guide = c.guide || {{}};
  const gContent = document.getElementById('mGuideContent');
  const teammatesHtml = (guide.best_teammates || []).map(t => `<span class="synergy-chip highlight">👥 ${{t}}</span>`).join(' ');
  const cardsHtml = (guide.core_cards || []).map(cd => `<span class="synergy-chip">🃏 ${{cd}}</span>`).join(' ');

  gContent.innerHTML = `
    <div class="build-guide-container">
      <!-- Role & Overview Card -->
      <div class="build-hero-card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
          <div>
            <span class="tier-badge ${{tierClass}}" style="font-size:0.75rem; padding:3px 8px;">${{guide.tier_label || 'T1 HIGH'}}</span>
            <span style="font-weight:700; font-size:0.95rem; color:var(--text); margin-left:8px;">${{guide.role || 'Combatant'}}</span>
          </div>
          <a href="teambuilder.html" class="sim-open-btn" style="padding:4px 12px; font-size:0.75rem;">⚡ Test in Team Builder →</a>
        </div>
        <div style="font-size:0.83rem; color:var(--body); line-height:1.55; margin-top:6px;">
          ${{guide.playstyle || 'Optimal turn rotation focuses on cycling primary archetype cards and triggering partner synergies.'}}
        </div>
      </div>

      <!-- Gear Matrix & Stat Priorities -->
      <div class="build-grid-2col">
        <!-- Gear Panel -->
        <div class="build-card-panel">
          <div class="build-card-title">🛡️ Gear Matrix (Memory Fragments)</div>
          <div class="gear-matrix-row">
            <span class="gear-label">4-Piece Set (BiS):</span>
            <span class="gear-val" style="color:#2dd4bf;">${{guide.best_set_4pc || 'Conqueror’s Aspect (4-pc)'}}</span>
          </div>
          <div class="gear-matrix-row">
            <span class="gear-label">2-Piece Set (BiS):</span>
            <span class="gear-val" style="color:#a855f7;">${{guide.best_set_2pc || 'Executioner’s Tool (2-pc)'}}</span>
          </div>
          <div class="gear-matrix-row">
            <span class="gear-label">Alternative:</span>
            <span class="gear-val" style="font-size:0.78rem;">${{guide.alt_sets || '2-pc Black Wing'}}</span>
          </div>
        </div>

        <!-- Main Stats Panel -->
        <div class="build-card-panel">
          <div class="build-card-title">📊 Main Stats (Slot 4 / 5 / 6)</div>
          <div class="stat-pills-wrap">
            <div class="stat-slot-row">
              <span class="stat-slot-tag">Slot 4 [Head]</span>
              <span class="stat-slot-val">${{guide.slot_4 || 'Crit Chance % / Crit DMG %'}}</span>
            </div>
            <div class="stat-slot-row">
              <span class="stat-slot-tag">Slot 5 [Goblet]</span>
              <span class="stat-slot-val">${{guide.slot_5 || 'Element DMG % > ATK %'}}</span>
            </div>
            <div class="stat-slot-row">
              <span class="stat-slot-tag">Slot 6 [Acc]</span>
              <span class="stat-slot-val">${{guide.slot_6 || 'ATK %'}}</span>
            </div>
          </div>
          <div style="margin-top:8px; font-size:0.75rem; color:var(--muted);">
            <strong style="color:var(--text);">Sub-Stats:</strong> ${{guide.substats || 'Crit Chance > Crit DMG > ATK %'}}
          </div>
        </div>
      </div>

      <!-- Partners & Synergies -->
      <div class="build-grid-2col">
        <!-- Best Partner Supporter -->
        <div class="build-card-panel">
          <div class="build-card-title">🤝 Best Partner Supporters</div>
          <div style="font-size:0.85rem; font-weight:700; color:var(--gold); margin-bottom:6px;">
            ${{guide.best_partner || 'Arya (5★) [BiS]'}}
          </div>
          <div style="font-size:0.75rem; color:var(--muted); line-height:1.4;">
            Grants indispensable AP recovery, attribute amplification, and status multiplier support for ${{c.name}}.
          </div>
        </div>

        <!-- Dream Squad Teammates -->
        <div class="build-card-panel">
          <div class="build-card-title">👥 Dream Squad Teammates</div>
          <div class="synergy-chip-list">
            ${{teammatesHtml || '<span class="synergy-chip">Flexible Support</span>'}}
          </div>
        </div>
      </div>

      <!-- Core Epiphany Mutations -->
      <div class="build-card-panel">
        <div class="build-card-title">✨ Zero System Priority Epiphanies</div>
        <div class="synergy-chip-list" style="margin-bottom:6px;">
          ${{cardsHtml || '<span class="synergy-chip">Signature Deck Cards</span>'}}
        </div>
        <div style="font-size:0.75rem; color:var(--muted);">
          Key cards to roll and upgrade during Zero System Save Data runs for peak performance.
        </div>
      </div>
    </div>
  `;
  
  // Render Cards Tab
  const cardList = document.getElementById('mCardList');
  cardList.innerHTML = '';
  document.getElementById('mCardCount').textContent = (c.cards || []).length;
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

  // Populate Manifest Ego Stages
  const egoList = document.getElementById('mEgoList');
  egoList.innerHTML = '';
  const stages = c.manifest_ego || [];
  document.getElementById('mEgoCount').textContent = stages.length;
  if (stages.length > 0) {{
    stages.forEach(st => {{
      const card = document.createElement('div');
      card.className = 'ego-stage-card';
      card.innerHTML = `
        <div class="ego-stage-head">
          <div class="ego-stage-title-wrap">
            <span class="ego-level-badge">LEVEL ${{st.level}}</span>
            <span class="ego-stage-title">${{st.title}}</span>
            ${{st.sub_title ? `<span class="ego-sub-badge">${{st.sub_title}}</span>` : ''}}
          </div>
        </div>
        <div class="ego-stage-desc">${{st.desc_html || st.desc}}</div>
      `;
      egoList.appendChild(card);
    }});
  }} else {{
    egoList.innerHTML = '<div style="color:var(--muted);font-size:0.8rem;padding:12px;">No Manifest Ego progression available for this combatant.</div>';
  }}

  switchCharModalTab('guide');
  modal.classList.add('open');
}}

function switchCharModalTab(tab) {{
  const tGuide = document.getElementById('mTabGuide');
  const tCards = document.getElementById('mTabCards');
  const tEgo = document.getElementById('mTabEgo');
  const bGuide = document.getElementById('mTabGuideBtn');
  const bCards = document.getElementById('mTabCardsBtn');
  const bEgo = document.getElementById('mTabEgoBtn');

  tGuide.style.display = (tab === 'guide') ? 'block' : 'none';
  tCards.style.display = (tab === 'cards') ? 'block' : 'none';
  tEgo.style.display = (tab === 'ego') ? 'block' : 'none';

  bGuide.classList.toggle('active', tab === 'guide');
  bCards.classList.toggle('active', tab === 'cards');
  bEgo.classList.toggle('active', tab === 'ego');
}}

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {{ if (e.target === modal) modal.classList.remove('open'); }});
window.addEventListener('keydown', (e) => {{ if (e.key === 'Escape') modal.classList.remove('open'); }});

// Combatant Filtering (Tier + Rarity + Job + Search)
let combTier = 'all';
let combRarity = 'all';
let combJob = null;

const tierBtns = document.querySelectorAll('#combTierFilters .tier-btn');
tierBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    tierBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    combTier = btn.dataset.tier;
    filterCombatants();
  }});
}});

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
    // Tier match
    let matchT = true;
    if (combTier === 'T0') matchT = (c.tier === 'T0');
    else if (combTier === 'T0.5') matchT = (c.tier === 'T0.5');
    else if (combTier === 'T1') matchT = (c.tier === 'T1');
    else if (combTier === 'T1.5') matchT = (c.tier === 'T1.5' || c.tier === 'T2');

    // Rarity / Job match
    const matchR = combRarity === 'all' || !combRarity || String(c.rarity) === combRarity;
    const matchJ = !combJob || c.job.toLowerCase() === combJob.toLowerCase();

    // Query match (searches name, job, ego, faction, tier, role, best gear)
    const guide = c.guide || {{}};
    const matchQ = !q || 
      c.name.toLowerCase().includes(q) || 
      c.job.toLowerCase().includes(q) || 
      c.ego.toLowerCase().includes(q) || 
      c.faction.toLowerCase().includes(q) ||
      (c.tier && c.tier.toLowerCase().includes(q)) ||
      (c.role && c.role.toLowerCase().includes(q)) ||
      (guide.best_set_4pc && guide.best_set_4pc.toLowerCase().includes(q)) ||
      (guide.best_partner && guide.best_partner.toLowerCase().includes(q));

    return matchT && matchR && matchJ && matchQ;
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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Card Database — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=2">
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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Mechanics &amp; Systems — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=2">
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
      <button class="sub-tab-btn" data-tab="tab-damage">🎯 Damage Formula &amp; Rules</button>
      <button class="sub-tab-btn" data-tab="tab-partner-rules">🤝 Partner System &amp; Synergy</button>
      <button class="sub-tab-btn" data-tab="tab-chaos">🌀 Chaos Depths &amp; Encounters</button>
      <button class="sub-tab-btn" data-tab="tab-epiphany">✨ Epiphany &amp; Evolution (304 Branches)</button>
      <button class="sub-tab-btn" data-tab="tab-glossary">📖 Keywords Glossary (28)</button>
      <button class="sub-tab-btn" data-tab="tab-deities">🌌 6 Cosmic Deities &amp; 165 Sparks</button>
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

      <!-- OFFICIAL 5 EGO AFFINITIES & 4 COMBATANT CLASSES -->
      <div style="margin-top:32px; background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:28px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.25rem; color:var(--cyan); margin-bottom:16px;">✦ Official 5 Ego Affinities (Attributes)</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:20px;">
          In the Chaos Zero Nightmare engine, every combatant and enemy resonates with one of five core Ego affinities. These determine elemental interactions, special proc triggers, and deck synergy pathways:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; margin-bottom:32px;">
          <div style="background:var(--card-inner); border-left:4px solid #dfb235; border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:#dfb235; font-size:1rem; margin-bottom:6px;">⚖️ Creed (Gold)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Direct retribution, defense penetration, and barrier-breaking execution. Favored by paladins and judges.</div>
          </div>
          <div style="background:var(--card-inner); border-left:4px solid #22d3ee; border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:#22d3ee; font-size:1rem; margin-bottom:6px;">⚡ Instinct (Blue)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">High crit rate, follow-up attacks, reaction counters, and swift momentum acceleration.</div>
          </div>
          <div style="background:var(--card-inner); border-left:4px solid #10b981; border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:#10b981; font-size:1rem; margin-bottom:6px;">💚 Love (Green)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Life recovery, team barrier fortification, trauma alleviation, and persistent party sustain.</div>
          </div>
          <div style="background:var(--card-inner); border-left:4px solid #a855f7; border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:#a855f7; font-size:1rem; margin-bottom:6px;">🌌 Narcissism (Purple)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Void distortion, corrosion over time, high-risk burst scaling, and shadow manipulation.</div>
          </div>
          <div style="background:var(--card-inner); border-left:4px solid #f97316; border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:#f97316; font-size:1rem; margin-bottom:6px;">🛡️ Norms (Orange)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Ironclad discipline, Defense-based damage scaling, counter-parry, and Shield Destruct mechanics.</div>
          </div>
        </div>

        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.25rem; color:var(--cyan); margin-bottom:16px;">✦ Official 4 Combatant Classes (Job Architecture)</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:20px;">
          Squad combatants fulfill one of four foundational roles that define baseline stat curves, card draw ratios, and tactical responsibility:
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:var(--text); font-size:0.95rem; margin-bottom:4px;">⚔️ Melee (Vanguard &amp; Striker)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Frontline specialists built for high HP, solid defense, point-blank single-target strikes, and threat mitigation.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:var(--text); font-size:0.95rem; margin-bottom:4px;">🎯 Range (Hunter &amp; Ranger)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Precision multi-hit marksmen specializing in vulnerability debuffs, high critical spikes, and off-turn extra attacks.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:var(--text); font-size:0.95rem; margin-bottom:4px;">🔮 Caster (Psionic &amp; Controller)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Masters of field alteration, card draw acceleration, enemy AP disruption, and sweeping AoE element bursts.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
            <div style="font-family:'Orbitron',sans-serif; font-weight:700; color:var(--text); font-size:0.95rem; margin-bottom:4px;">✨ Supporter (Partner &amp; Healer)</div>
            <div style="font-size:0.8rem; color:var(--body); line-height:1.5;">Backline tacticians granting direct healing, trauma reduction, zero-cost support buffs, and emergency deck cycles.</div>
          </div>
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
        <div style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); border-radius:6px; padding:12px 16px; margin-top:14px; display:flex; align-items:center; gap:12px;">
          <span style="font-size:1.4rem;">⚠️</span>
          <div>
            <strong style="color:var(--red);">Aturan Fundamental: Basic Card Tidak Memiliki Epiphany</strong>
            <p style="font-size:0.8rem; color:var(--text); margin:2px 0 0 0;">
              Basic card (kartu starter standar combatant seperti Strike dan Defend) tidak dapat berevolusi ke cabang Epiphany maupun dipasangi Common/Divine Sparks. Sistem Epiphany hanya berlaku eksklusif untuk <strong>Unique Combatant Cards (Branch 1–5)</strong> dan kartu save data non-starter.
            </p>
          </div>
        </div>
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
            <p style="font-size:0.8rem; color:var(--muted); margin:0;">Inspect all 4 unique cards and their 5 evolution branches for any of the 40 combatants.</p>
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
    
    <!-- PANE: DAMAGE FORMULA & COMBAT RULES -->
    <div id="tab-damage" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:28px;">
        <div class="page-pill" style="margin-bottom:10px;">Client Engine Formula</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin-bottom:12px;">Official Combat Damage Formula</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:18px;">
          Extracted directly from the official client battle engine (<code>procDamageCalculate</code> and <code>stat_formula</code>). All attacks, modifiers, barrier interactions, and elemental multipliers resolve in strict sequential layers:
        </p>

        <div style="background:var(--card-inner); border:1px solid var(--cyan); border-radius:6px; padding:16px; font-family:monospace; font-size:0.95rem; color:var(--cyan); margin-bottom:20px; overflow-x:auto;">
          Final Damage = [(Base ATK &times; Skill Multiplier) + Flat Additions] &times; Ego Affinity Mult &times; Crit Mult &times; [1000 / (1000 + DEF)] &times; (1 + Final Dmg Bonus)
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:var(--text); font-size:0.9rem; margin-bottom:4px;">1. Base ATK &amp; Stat Transfer</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Combatant baseline ATK + Partner Stat Transfer (11%–15% ATK) + Weapon flat ATK + in-combat flat buffs.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:#22d3ee; font-size:0.9rem; margin-bottom:4px;">2. Ego Affinity Multiplier</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Weakness Advantage deals <strong>+30% damage</strong> (1.30&times;). Resistance reduces damage by <strong>-25%</strong> (0.75&times;). Secred Divine Epiphanies make attacks <em>Always Weakness</em>.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:#ef4444; font-size:0.9rem; margin-bottom:4px;">3. Critical Strike Factor</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Base Crit Damage is <strong>150%</strong> (1.50&times;). Modified additively by Memory Fragments, Vitor Sparks, and Striker passives up to 300%+.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:#dfb235; font-size:0.9rem; margin-bottom:4px;">4. Defense &amp; Shield Absorption</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Damage first strikes Shield (Barrier). Shields prevent team Stress gain. Damage penetrating shields is reduced by <code>1000 / (1000 + Target DEF)</code>.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:#a855f7; font-size:0.9rem; margin-bottom:4px;">5. Tenacity Break (Stagger)</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Depleting enemy Tenacity to 0 triggers <strong>Break State</strong>: delays enemy action for 1 turn and applies a flat <strong>+50% Break Damage Multiplier</strong>.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-weight:700; color:#10b981; font-size:0.9rem; margin-bottom:4px;">6. Coordinated Pincer Strike</div>
            <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Certain cards trigger an off-turn assist from adjacent allies, delivering a bonus strike at 50%–100% of their base attack power without spending AP.</div>
          </div>
        </div>
      </div>

      <!-- INTERACTIVE DAMAGE CALCULATOR -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:28px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:12px;">Live Combat Damage Calculator</h3>
        <p style="font-size:0.85rem; color:var(--body); margin-bottom:18px;">Simulate expected in-game damage using exact client formulas:</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:14px; margin-bottom:18px;">
          <div>
            <label style="font-size:0.75rem; color:var(--muted); display:block; margin-bottom:4px;">Hero Base ATK (incl. Partner):</label>
            <input type="number" id="calcAtk" value="380" style="width:100%; padding:8px; background:var(--card-inner); border:1px solid var(--panel-border); color:var(--text); border-radius:4px;">
          </div>
          <div>
            <label style="font-size:0.75rem; color:var(--muted); display:block; margin-bottom:4px;">Card Skill Multiplier (%):</label>
            <input type="number" id="calcSkillMult" value="250" style="width:100%; padding:8px; background:var(--card-inner); border:1px solid var(--panel-border); color:var(--text); border-radius:4px;">
          </div>
          <div>
            <label style="font-size:0.75rem; color:var(--muted); display:block; margin-bottom:4px;">Target DEF:</label>
            <input type="number" id="calcDef" value="200" style="width:100%; padding:8px; background:var(--card-inner); border:1px solid var(--panel-border); color:var(--text); border-radius:4px;">
          </div>
          <div>
            <label style="font-size:0.75rem; color:var(--muted); display:block; margin-bottom:4px;">Ego Affinity:</label>
            <select id="calcAffinity" style="width:100%; padding:8px; background:var(--card-inner); border:1px solid var(--panel-border); color:var(--text); border-radius:4px;">
              <option value="1.30">Weakness Advantage (+30%)</option>
              <option value="1.00" selected>Neutral (1.00x)</option>
              <option value="0.75">Resisted / Disadvantage (-25%)</option>
            </select>
          </div>
          <div>
            <label style="font-size:0.75rem; color:var(--muted); display:block; margin-bottom:4px;">Target Status:</label>
            <select id="calcStatus" style="width:100%; padding:8px; background:var(--card-inner); border:1px solid var(--panel-border); color:var(--text); border-radius:4px;">
              <option value="1.00" selected>Normal State</option>
              <option value="1.50">Tenacity Broken / Staggered (+50%)</option>
            </select>
          </div>
        </div>

        <button class="builder-btn builder-btn-primary" onclick="runDamageSimulation()" style="padding:10px 24px; font-weight:700;">Calculate Damage</button>

        <div id="calcResultContainer" style="margin-top:16px; padding:16px; background:var(--card-inner); border-left:4px solid var(--cyan); border-radius:4px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <div style="font-size:0.75rem; color:var(--muted); text-transform:uppercase;">Estimated Non-Crit Hit</div>
            <div id="calcNormalDmg" style="font-family:'Orbitron',sans-serif; font-size:1.6rem; font-weight:800; color:var(--text);">792 DMG</div>
          </div>
          <div>
            <div style="font-size:0.75rem; color:var(--muted); text-transform:uppercase;">Critical Strike (150%)</div>
            <div id="calcCritDmg" style="font-family:'Orbitron',sans-serif; font-size:1.6rem; font-weight:800; color:#ef4444;">1,188 CRIT</div>
          </div>
        </div>
      </div>
    </div>

    <!-- PANE: PARTNER SYSTEM & SYNERGY -->
    <div id="tab-partner-rules" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:28px;">
        <div class="page-pill" style="margin-bottom:10px;">Tactical Supporter Rules</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin-bottom:12px;">Partner Compatibility, Restrictions &amp; Ego Resonance</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:18px;">
          Partners (Supporters) are auxiliary operatives paired 1-to-1 with your frontline Combatants. In CZN v1.0.84, partner equipping is governed by three strict tactical rules:
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-bottom:24px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:18px;">
            <div style="font-size:1.8rem; margin-bottom:8px;">🔒</div>
            <h4 style="font-family:'Orbitron',sans-serif; font-size:1rem; color:var(--text); margin-bottom:6px;">1-to-1 Unique Equipping</h4>
            <p style="font-size:0.84rem; color:var(--muted); line-height:1.6;">
              Each Combatant has exactly 1 Partner slot (total 3 Partners per squad). A Partner <strong>cannot be duplicated</strong> across multiple squad members. Once assigned to Slot 01, that partner is unavailable for Slot 02 or 03.
            </p>
          </div>

          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:18px;">
            <div style="font-size:1.8rem; margin-bottom:8px;">📊</div>
            <h4 style="font-family:'Orbitron',sans-serif; font-size:1rem; color:var(--text); margin-bottom:6px;">Base Stat Transfer</h4>
            <p style="font-size:0.84rem; color:var(--muted); line-height:1.6;">
              Partners transfer <strong>12%–16% HP</strong>, <strong>11%–15% ATK</strong>, and <strong>14%–18% DEF</strong> directly to the equipped hero. High-rarity 5★ partners provide higher stat yields and +35 Flat ATK bonuses.
            </p>
          </div>

          <div style="background:var(--card-inner); border:1px solid var(--cyan); border-radius:6px; padding:18px;">
            <div style="font-size:1.8rem; margin-bottom:8px;">🔥</div>
            <h4 style="font-family:'Orbitron',sans-serif; font-size:1rem; color:var(--cyan); margin-bottom:6px;">Ego Resonance &amp; Soulmate Bonus</h4>
            <p style="font-size:0.84rem; color:var(--muted); line-height:1.6;">
              When equipped to a hero sharing the partner's <strong>Ego Element</strong> or canonical identity (<code>belong_character_eff</code>), they activate <strong>Ego Resonance</strong>: grants <strong>+15% bonus stat transfer</strong> and unlocks their exclusive 0 AP Ego Passive skill!
            </p>
          </div>
        </div>

        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:14px;">The 48 Tactical Partners &amp; Belonging Heroes</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;" id="partnerRulesListContainer">
          <!-- Rendered by JS from CZN_DATA.partners -->
        </div>
      </div>
    </div>

    <!-- PANE: CHAOS DEPTHS & ENCOUNTERS -->
    <div id="tab-chaos" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:28px;">
        <div class="page-pill" style="margin-bottom:10px;">Rogue-lite Dungeon Architecture</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin-bottom:12px;">Chaos Exploration Depths &amp; Encounter Spot Types</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:20px;">
          Expeditions inside the Sea of Chaos progress across 5 ascending Depths of corruption, featuring 8 official Encounter Node Types (<code>SPOT_TYPE_*</code>) from the client game engine:
        </p>

        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:#22d3ee; margin-bottom:14px;">The 5 Depths of Chaos Progression</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px; margin-bottom:28px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-size:0.75rem; color:var(--muted); font-weight:700;">DEPTH 01</div>
            <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin:4px 0;">Outer Fringe</div>
            <div style="font-size:0.78rem; color:var(--muted);">Low corruption risk. Basic skirmishes and fundamental relic rewards. Introduces squad to anomaly choices.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-size:0.75rem; color:var(--muted); font-weight:700;">DEPTH 02</div>
            <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:#22d3ee; margin:4px 0;">Resonance Layer</div>
            <div style="font-size:0.78rem; color:var(--muted);">Moderate distortion. Elite Aberrations begin patrolling. First Altar of the Cosmic Deities unlocked.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-size:0.75rem; color:var(--muted); font-weight:700;">DEPTH 03</div>
            <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:#dfb235; margin:4px 0;">Hall of Distortion</div>
            <div style="font-size:0.78rem; color:var(--muted);">High-risk anomalies, Wandering Merchants trading unique relics, and tactical resting sanctuaries.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px;">
            <div style="font-size:0.75rem; color:var(--muted); font-weight:700;">DEPTH 04</div>
            <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:#ef4444; margin:4px 0;">Abyssal Threshold</div>
            <div style="font-size:0.78rem; color:var(--muted);">Severe psychic decay. Psychological stress gain doubled per turn. Dangerous high-tier Aberrations.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--purple); border-radius:6px; padding:14px;">
            <div style="font-size:0.75rem; color:var(--purple); font-weight:700;">DEPTH 05</div>
            <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:#a855f7; margin:4px 0;">The Singularity (Core)</div>
            <div style="font-size:0.78rem; color:var(--muted);">Epic showdown against the Sector Calamity Overlord with multi-phase Tenacity break mechanics.</div>
          </div>
        </div>

        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:14px;">Official Encounter Node Directory</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">⚔️</span>
            <div>
              <div style="font-weight:700; color:var(--text); font-size:0.9rem;">SPOT_TYPE_BATTLE (Void Skirmish)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Tactical combat encounter against regular Void monsters. Rewards Chaos currency and card draft choices.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">💀</span>
            <div>
              <div style="font-weight:700; color:#ef4444; font-size:0.9rem;">SPOT_TYPE_ELITE (Elite Calamity)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Deadly mutated monstrosity. Guaranteed drop of high-tier Relics, Cosmic Divine Sparks, and significant team EXP.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">👑</span>
            <div>
              <div style="font-weight:700; color:#dfb235; font-size:0.9rem;">SPOT_TYPE_BOSS (Sector Overlord)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Gatekeeper boss controlling the sector transition. Requires synchronized burst damage and break windows.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">🏕️</span>
            <div>
              <div style="font-weight:700; color:#10b981; font-size:0.9rem;">SPOT_TYPE_REST (Sanctuary Haven)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Safe refuge allowing the Captain to restore 30% squad HP, conduct mental counseling (-50 Stress), or evolve a card.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">🛒</span>
            <div>
              <div style="font-weight:700; color:#f59e0b; font-size:0.9rem;">SPOT_TYPE_STORE (Black Market)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Wandering smuggler offering universal cards, rare relics, and deck purification (purging corrupted breakdown cards).</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">📦</span>
            <div>
              <div style="font-weight:700; color:#22d3ee; font-size:0.9rem;">SPOT_TYPE_SUPPLY (Supply Drop)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Abandoned imperial supply crate containing field rations, shield batteries, and tactical consumables.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">❓</span>
            <div>
              <div style="font-weight:700; color:#a855f7; font-size:0.9rem;">SPOT_TYPE_NONEBATTLE (Anomaly Distortion)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Psychic anomaly presenting branching narrative dilemmas: risk team Sanity for primordial power or retreat safely.</div>
            </div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:14px; display:flex; gap:12px; align-items:flex-start;">
            <span style="font-size:1.6rem;">🌀</span>
            <div>
              <div style="font-weight:700; color:#ec4899; font-size:0.9rem;">SPOT_TYPE_EXTRA_AREA (Void Rift)</div>
              <div style="font-size:0.8rem; color:var(--muted); line-height:1.5;">Hidden dimensional pocket offering bonus relic extraction and secret cosmic encounters.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

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


function runDamageSimulation() {
  const atk = parseFloat(document.getElementById('calcAtk').value) || 0;
  const skillMult = (parseFloat(document.getElementById('calcSkillMult').value) || 100) / 100;
  const def = parseFloat(document.getElementById('calcDef').value) || 0;
  const affinity = parseFloat(document.getElementById('calcAffinity').value) || 1.0;
  const statusMult = parseFloat(document.getElementById('calcStatus').value) || 1.0;

  const defFactor = 1000 / (1000 + def);
  const baseDmg = (atk * skillMult) * affinity * defFactor * statusMult;
  const critDmg = baseDmg * 1.5;

  document.getElementById('calcNormalDmg').innerText = Math.round(baseDmg).toLocaleString() + ' DMG';
  document.getElementById('calcCritDmg').innerText = Math.round(critDmg).toLocaleString() + ' CRIT';
}

function renderPartnerRulesList() {
  const container = document.getElementById('partnerRulesListContainer');
  if (!container || !window.CZN_DATA || !window.CZN_DATA.partners) return;
  const partners = window.CZN_DATA.partners;
  container.innerHTML = partners.slice(0, 16).map(p => `
    <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px; display:flex; gap:10px; align-items:center;">
      <img src="${p.portrait}" style="width:38px; height:38px; border-radius:50%; object-fit:cover;" onerror="this.src='https://via.placeholder.com/38?text=P'">
      <div style="overflow:hidden;">
        <div style="font-weight:700; color:var(--text); font-size:0.85rem; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">${p.name} <span style="font-size:0.7rem; color:${p.color || '#dfb235'};">(${p.ego || 'Norms'})</span></div>
        <div style="font-size:0.7rem; color:var(--cyan);">${p.job} &bull; ${p.stat_boost ? '+' + p.stat_boost.atk_pct + '% ATK' : ''}</div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderPartnerRulesList();
});

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
        },
        {
            'name': 'Celestial Bulwark (Apostle of Kyrken)',
            'hq': 'Sanctuary of Cycles & Outer Snow Fields',
            'desc': 'Ancient divine order sworn to Kyrken, Goddess of Cycles, wielding the sacred Saingeom to dispel zero-space calamities.',
            'members': ['Rossweisse']
        },
        {
            'name': 'The 10 World Macro-Factions (Game Engine Archives)',
            'hq': 'Cosmic Core & Frontier Hubs',
            'desc': 'Official primary macro-factions recognized in the Chaos Zero Nightmare game architecture: Black Spica, Iron Rain, Terrascion, Zera, Circen, Diallos, Nightmare, Nihilum, Secred, and Vitor.',
            'members': ['Luke', 'Lucas', 'Beryl', 'Khalipe', 'Hugo', 'Adelheid', 'Rossweisse', 'Nine', 'Olga', 'Cassius', 'Orlea', 'Diana', 'Kayron']
        },
        {
            'name': 'Remnants Exploration Divisions (Teams 1–10)',
            'hq': 'Deep Chaos Hazard Corridors',
            'desc': 'Specialized vanguard exploration divisions deployed across sectors to isolate anomalies and neutralize zero-space distortions.',
            'members': ['Nia', 'Luke', 'Selena', 'Khalipe', 'Trisa', 'Magna', 'Anika', 'Amir', 'Rynn', 'Lucas']
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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Lore &amp; Universe — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=2">
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

    <!-- OFFICIAL STORY CAMPAIGN ARCHIVE -->
    <div style="margin-top:50px; margin-bottom:40px;">
      <div class="page-pill" style="margin-bottom:10px;">Official Narrative Scenario</div>
      <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin-bottom:12px;">Main Story Campaign &bull; Part 1: The Descent</h2>
      <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:24px;">
        Chronicles the voyage of the <strong>SS Nightmare</strong> through the Sea of Chaos as the amnesiac Captain and crew confront existential corruption and political treachery:
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:18px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid var(--cyan); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:var(--cyan); font-size:0.85rem;">PROLOGUE</span>
            <span style="font-size:0.75rem; color:var(--muted);">ARK EXPEDITION</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Awakening in the Sea of Chaos</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            The Captain awakens in the cryogenic bay of the flagship SS Nightmare amidst catastrophic alarms. Vice-Captain Renoa assists in an emergency sortie to repel encroaching Void Aberrations, discovering the Captain's memory has been wiped by high-dimensional interference.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Captain, Renoa, Luke</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #22d3ee; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#22d3ee; font-size:0.85rem;">CHAPTER 01</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 1</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Fringe of the Ruined World</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Deployed to the outskirts of an abandoned orbital colony. The squad encounters contaminated Terrascion peacekeepers driven mad by mental parasites. Nia's swift tactical vanguard secures the communication hub.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Nia, Luke, Captain</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #3b82f6; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#3b82f6; font-size:0.85rem;">CHAPTER 02</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 2</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Echo of Despair</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Investigating a pre-fall cathedral floating in zero gravity. The team confronts psychological illusions manifesting their deepest guilts. Selena's barrier shields the vanguard against resonance screams.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Selena, Khalipe, Captain</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #8b5cf6; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#8b5cf6; font-size:0.85rem;">CHAPTER 03</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 3</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Whispering Abyss</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Entering deep subterranean caves beneath Asteroid Sigma. Trisa's heavy firepower obliterates nesting Void Swarms, but reveals signs of deliberate biological experimentation by human rogue factions.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Trisa, Magna, Captain</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #a855f7; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#a855f7; font-size:0.85rem;">CHAPTER 04</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 4</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Order in the Shadows</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Diplomatic escort mission in Ark City collapses into street combat as Stella Familia crime syndicates assassinate an imperial witness. Hugo and Renoa uncover black market trades of crystallized Chaos cores.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Hugo, Renoa, Mika</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #ec4899; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#ec4899; font-size:0.85rem;">CHAPTER 05</span>
            <span style="font-size:0.75rem; color:var(--muted);">ANOMALY</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Trial of the Sixfold Deities</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            The Captain is pulled into a high-dimensional nexus where cosmic avatars of Vitor, Circen, Diallos, Secred, Nihilum, and Caligo test humanity's resolve, granting the power of Divine Epiphany.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Captain, Renoa, 6 Cosmic Deities</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #ef4444; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#ef4444; font-size:0.85rem;">CHAPTER 06</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 5</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Calamity's Descent</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            A colossal Calamity Titan breaches the defense perimeter of Ark Prime. The Captain coordinates a multi-vector strike, forcing operatives to face their trauma thresholds to shatter the titan's armor.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Khalipe, Renoa, Haru</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #f97316; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#f97316; font-size:0.85rem;">CHAPTER 07</span>
            <span style="font-size:0.75rem; color:var(--muted);">SECTOR 6</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">The Fractured Sanctuary</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            The Epione Psychiatric Center is infiltrated. Mental corruption drives patients into violent breakdowns. The Captain personally conducts emergency mental sync to save operatives from permanent despair.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Captain, Nia, Selena</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #eab308; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#eab308; font-size:0.85rem;">CHAPTER 08</span>
            <span style="font-size:0.75rem; color:var(--muted);">DEEP CORE</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Threads of Fate</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Ancient archives recovered from an imperial wreck reveal the shocking origin of the SS Nightmare and the true nature of the Captain's identity as a genetic clone engineered to bind with Chaos.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Renoa, Captain, Veronica</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #10b981; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#10b981; font-size:0.85rem;">CHAPTER 09</span>
            <span style="font-size:0.75rem; color:var(--muted);">RIFT</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Resonance of the Void</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            The SS Nightmare plunges directly into the Great Spatial Rift. Navigational systems fail as reality bends. Operatives must rely purely on their psychic Ego links to navigate the impossible tides.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Luke, Trisa, Hugo</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #6366f1; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#6366f1; font-size:0.85rem;">CHAPTER 10</span>
            <span style="font-size:0.75rem; color:var(--muted);">THE GATE</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">The Gate of Chaos</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            At the threshold of the primary Chaos Singularity, the Holy Crusaders unveil their ultimate weapon, threatening to cleanse the sector at the cost of billions of innocent human lives.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Renoa, Khalipe, Captain</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-left:4px solid #ec4899; border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#ec4899; font-size:0.85rem;">CHAPTER 11</span>
            <span style="font-size:0.75rem; color:var(--muted);">FINALE</span>
          </div>
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:8px;">Nightmare's Dawn</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            The climactic battle against the Sovereign of Nothingness. Combining the divine blessings of the Sixfold Deities, the Captain shatters the convergence core, securing a fragile dawn for the Ark.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Key Operatives:</strong> Full SS Nightmare Operative Unit</div>
        </div>
      </div>
    </div>

    <!-- THE SIX COSMIC DEITIES PANTHEON -->
    <div style="margin-top:50px; margin-bottom:40px;">
      <div class="page-pill" style="margin-bottom:10px;">Cosmic Pantheon</div>
      <h2 style="font-family:'Orbitron',sans-serif; font-size:1.35rem; color:var(--text); margin-bottom:12px;">The Sixfold Cosmic Deities &amp; Divine Domains</h2>
      <p style="font-size:0.9rem; color:var(--body); line-height:1.7; margin-bottom:24px;">
        High-dimensional cosmic entities observing the Sea of Chaos. When invoked at Cosmic Altars, they grant operatives transformative <strong>Divine Epiphanies</strong>:
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:18px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #ef4444;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#ef4444;">VITOR &bull; The Sunburst Sovereign</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Embodiment of eternal wrath, relentless aggression, and nuclear fervor. Vitor rewards unrelenting offensive tempo, empowering cards with Burn status, critical amplification, and damage scaling per AP spent.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Aggression &bull; Burn &bull; Critical Burst &bull; AP Escalation</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #10b981;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#10b981;">CIRCEN &bull; The Serpent of Decay</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Ruler of biological dissolution, continuous suffering, and toxic osmosis. Circen infuses attacks with compounding Bleed and Poison stacks, dealing massive percentage damage at the start of enemy turns.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Bleed &bull; Toxic Corrosion &bull; Tenacity Attrition &bull; Debuff Proliferation</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #eab308;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#eab308;">DIALLOS &bull; The Iron Arbiter</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Deity of retribution, immutable equilibrium, and retaliatory fury. Diallos strengthens counter-attack protocols, converting enemy attacks into instant retaliatory strikes and unyielding defensive bulwarks.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Retribution &bull; Counter-Attack &bull; Armor Reinforcement &bull; Stance Mastery</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #22d3ee;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#22d3ee;">SECRED &bull; The Primordial Cradle</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Goddess of salvation, cellular restoration, and universal purity. Secred bestows permanent barrier synthesis, stress purification, lethal damage denial, and causes all allied strikes to treat enemies as <em>Always Weak</em>.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Universal Weakness &bull; Emergency Heal &bull; Barrier Ward &bull; Stress Cleanse</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #a855f7;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#a855f7;">NIHILUM &bull; The Void Maw</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Entity of absolute vacuum, dimensional collapse, and anti-matter. Nihilum strips enemy shields, corrupts enemy intent, and turns mental breakdown into terrifying catastrophic spell bursts.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Void Corruption &bull; Barrier Shatter &bull; AP Steal &bull; Despair Burst</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px; border-top:3px solid #ec4899;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="font-family:'Orbitron',sans-serif; font-weight:700; color:#ec4899;">CALIGO &bull; The Shadow Weaver</span>
            <span style="font-size:0.7rem; color:var(--muted);">33 DIVINE SPARKS</span>
          </div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Architect of shadows, temporal displacement, and lethal precision. Caligo grants extreme Critical Hit Chance, card cycle acceleration, free card plays upon Critical hits, and phantom evasion.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);"><strong>Domains:</strong> Critical Mastery &bull; 0 AP Cycle &bull; Phantom Evasion &bull; Hand Acceleration</div>
        </div>
      </div>
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
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Meta Builds, Team Comps &amp; Strategy Guides — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css?v=3">
<script src="teambuilder-data.js"></script>
</head>
<body>
__NAV__

<main>
  <header class="page-header">
    <div class="page-pill">Theorycrafting &amp; Strategy Hub</div>
    <h1>Meta Builds, Squad Synergy &amp; Combat Guides</h1>
    <p>Authoritative endgame guides covering S-Tier team formations, turn-by-turn combo execution, equipment sets, and our comprehensive Rossweisse Day-1 to Min-Max breakdown.</p>
  </header>

  <div class="container">
    <!-- Callout Banner to Dedicated Team Builder -->
    <div style="background:linear-gradient(135deg, rgba(16,102,77,0.22), var(--panel)); border:1px solid #10664d; border-radius:8px; padding:20px 24px; margin-bottom:24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="background:#10664d; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:4px; font-family:'Orbitron',sans-serif;">INTERACTIVE TOOL</span>
          <span style="font-family:'Orbitron',sans-serif; font-size:1.1rem; font-weight:700; color:var(--cyan);">Interactive Squad Simulator &amp; Turn Engine</span>
        </div>
        <p style="font-size:0.85rem; color:var(--body); margin:0; line-height:1.5;">Test draw hands, calculate damage scaling with live Epiphany mutations, verify AP curves, and load 1-click meta presets in our full-featured simulator.</p>
      </div>
      <a href="teambuilder.html" class="nav-btn" style="background:#10664d; color:#fff; border-color:#10664d; padding:10px 20px; font-size:0.88rem; font-weight:700; box-shadow:0 0 15px rgba(16,102,77,0.4);">Launch Simulator →</a>
    </div>

    <!-- Navigation Sub-Tabs -->
    <div class="sub-tabs">
      <button class="sub-tab-btn active" data-tab="tab-meta">🏆 S-Tier Meta Teams</button>
      <button class="sub-tab-btn" data-tab="tab-rossweisse">⚔️ Rossweisse Deep Dive</button>
      <button class="sub-tab-btn" data-tab="tab-framework">🧠 Teambuilding Framework</button>
      <button class="sub-tab-btn" data-tab="tab-progression">📈 Account &amp; Routine</button>
    </div>

    <!-- ===================================================================
         PANE 1: S-TIER META TEAMS
         =================================================================== -->
    <div id="tab-meta" class="tab-pane active">
      <div style="margin-bottom:20px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.25rem; color:var(--text); margin-bottom:8px;">Endgame Tier Formations (Season 5 Apex)</h2>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6;">
          Ranked by consistency in Level 86+ Zero System Codices and Event Chaos Diff VIII clears. Every squad is built around the <strong>Golden Ratio</strong>: 1 Main Carry, 1 Sub-DPS/Enabler, and 1 dedicated Cycle/AP Battery.
        </p>
      </div>

      <!-- TEAM 1: ROSSWEISSE POLARITY -->
      <div style="background:var(--panel); border:1px solid #10664d; border-radius:8px; padding:22px; margin-bottom:24px; box-shadow:0 4px 20px rgba(0,0,0,0.25);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
              <span style="background:#10664d; color:#fff; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:4px; font-family:'Orbitron',sans-serif;">TIER 0 APEX</span>
              <h3 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--cyan); margin:0;">⚡ Polarity Equilux Nuke</h3>
            </div>
            <div style="font-size:0.82rem; color:var(--muted);">Rossweisse (Carry) • Tiphera (Multiplier Battery) • Orlea (Exhaust Buffer)</div>
          </div>
          <a href="teambuilder.html?preset=rossweisse_polarity" class="nav-btn" style="background:rgba(16,102,77,0.3); border-color:#10664d; color:#5eead4; padding:6px 14px; font-size:0.8rem;">⚡ Load Preset in Simulator →</a>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; margin-bottom:16px; background:var(--card-inner); border-radius:6px; padding:16px;">
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--cyan); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Core Mechanics &amp; Multipliers</div>
            <p style="font-size:0.82rem; color:var(--body); line-height:1.5; margin:0;">
              Combines Rossweisse’s 0-AP polarity cycle (<em>Flicker Blade</em> split into <em>Shard: Light/Dark</em> and recombined into <em>Equilux</em>) with Tiphera’s massive <strong>+200% to +300% Multiplicative Buff</strong> and Orlea’s 3★ Softy Exhaust (<strong>+70% Multiplicative &amp; +35% Turnwide DMG</strong>).
            </p>
          </div>
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Gearing &amp; Memory Fragment Sets</div>
            <ul style="font-size:0.8rem; color:var(--text); line-height:1.6; margin:0 0 0 16px; padding:0;">
              <li><strong>Rossweisse:</strong> 4-pc <em>Veiled Radiance</em> (+16% Crit) + 2-pc <em>Executioner’s Tool</em> (+25% CDMG).</li>
              <li><strong>Tiphera:</strong> 4-pc <em>Snowflake of Our First Meeting</em> (+30% Justice DMG, +15% CDMG triggered by Bind).</li>
              <li><strong>Orlea:</strong> 4-pc <em>Glory’s Reign</em> (+15% ally DMG on skill exhaust).</li>
            </ul>
          </div>
        </div>

        <div style="border-top:1px solid var(--panel-border); padding-top:14px;">
          <div style="font-size:0.78rem; font-weight:700; color:var(--text); margin-bottom:8px;">Turn-by-Turn Combo Execution:</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:10px; font-size:0.8rem; color:var(--body);">
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid var(--cyan);">
              <strong style="color:var(--cyan);">1. Battery Setup:</strong> Tiphera casts <em>Archetype Prediction (Square)</em> (+1 AP, draw 1) and stacks <em>The Final Command</em> relic.
            </div>
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid var(--gold);">
              <strong style="color:var(--gold);">2. Exhaust Primer:</strong> Orlea casts <em>Sacred Censer</em>, fuses Softy to 3★, and exhausts it (+70% multiplicative buff).
            </div>
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid #10664d;">
              <strong style="color:#5eead4;">3. Polarity Loop:</strong> Rossweisse plays <em>Kyrken’s Apostle</em> (0 AP, +1 AP at E1) -> <em>Flicker Blade</em> (0 AP) splits into Shards.
            </div>
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid #f85058;">
              <strong style="color:#f85058;">4. Finisher Nuke:</strong> Tassels trigger <em>Snowflake</em> set; fuse Equilux and release <em>Flicker Blade Unbound</em> for multi-million True Damage.
            </div>
          </div>
        </div>
      </div>

      <!-- TEAM 2: NINE INFINITE CYCLE -->
      <div style="background:var(--panel); border:1px solid #dfb235; border-radius:8px; padding:22px; margin-bottom:24px; box-shadow:0 4px 20px rgba(0,0,0,0.25);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
              <span style="background:#dfb235; color:#000; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:4px; font-family:'Orbitron',sans-serif;">TIER 0 APEX</span>
              <h3 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--gold); margin:0;">👑 Infinite Cycle Hyper-Carry</h3>
            </div>
            <div style="font-size:0.82rem; color:var(--muted);">Nine (Vanguard Carry) • Veronica (Engine Queen) • Tiphera (AP Battery)</div>
          </div>
          <a href="teambuilder.html?preset=nine_infinite_cycle" class="nav-btn" style="background:rgba(223,178,53,0.2); border-color:#dfb235; color:#fde047; padding:6px 14px; font-size:0.8rem;">👑 Load Preset in Simulator →</a>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; margin-bottom:16px; background:var(--card-inner); border-radius:6px; padding:16px;">
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Core Mechanics &amp; Multipliers</div>
            <p style="font-size:0.82rem; color:var(--body); line-height:1.5; margin:0;">
              Leverages the best support duo in CZN (Veronica + Tiphera) to thin the operational deck down to pure 0-cost and 1-cost draw engines. Nine unleashes 4 to 5 devastating burst chains per single turn without ever stalling on AP.
            </p>
          </div>
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--cyan); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Gearing &amp; Memory Fragment Sets</div>
            <ul style="font-size:0.8rem; color:var(--text); line-height:1.6; margin:0 0 0 16px; padding:0;">
              <li><strong>Nine:</strong> 4-pc <em>Line of Justice</em> (+ATK stacking) + 2-pc <em>Executioner’s Tool</em> (+25% CDMG).</li>
              <li><strong>Veronica:</strong> 4-pc <em>Glory’s Reign</em> (Team DMG buff on card exhaust).</li>
              <li><strong>Tiphera:</strong> 4-pc <em>Tetra’s Authority</em> (+12% DEF &amp; damage mitigation).</li>
            </ul>
          </div>
        </div>

        <div style="border-top:1px solid var(--panel-border); padding-top:14px;">
          <div style="font-size:0.78rem; font-weight:700; color:var(--text); margin-bottom:8px;">Turn-by-Turn Combo Execution:</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:10px; font-size:0.8rem; color:var(--body);">
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid var(--gold);">
              <strong>1. Tactical Cycle:</strong> Veronica casts mutated <em>Tactical Draw</em> (draws 2 combatant cards, restores +1 AP).
            </div>
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid var(--cyan);">
              <strong>2. Square Prediction:</strong> Tiphera locks Square shape, replenishing +1 AP and drawing Nine’s burst cards.
            </div>
            <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:4px; border-left:3px solid #dfb235;">
              <strong>3. Order Cleave:</strong> Nine loops <em>Absolute Order</em> and 0-AP strikes, recycling the deck twice in a single turn.
            </div>
          </div>
        </div>
      </div>

      <!-- TEAM 3: HUGO PURSUIT -->
      <div style="background:var(--panel); border:1px solid #22d3ee; border-radius:8px; padding:22px; margin-bottom:24px; box-shadow:0 4px 20px rgba(0,0,0,0.25);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
          <div>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
              <span style="background:#22d3ee; color:#000; font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:4px; font-family:'Orbitron',sans-serif;">TIER 0 S-TIER</span>
              <h3 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--cyan); margin:0;">🎯 Hugo 0-AP Pursuit Chains</h3>
            </div>
            <div style="font-size:0.82rem; color:var(--muted);">Hugo (Pursuit Finisher) • Selena (Flaw Applicator) • Tressa (Status Debuffer)</div>
          </div>
          <a href="teambuilder.html?preset=hugo_pursuit_flow" class="nav-btn" style="background:rgba(34,211,238,0.2); border-color:#22d3ee; color:#67e8f9; padding:6px 14px; font-size:0.8rem;">🎯 Load Preset in Simulator →</a>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; margin-bottom:16px; background:var(--card-inner); border-radius:6px; padding:16px;">
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--cyan); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Core Mechanics &amp; Multipliers</div>
            <p style="font-size:0.82rem; color:var(--body); line-height:1.5; margin:0;">
              Selena and Tressa blanket targets in Flaw Marks, Poison, and Vulnerability. Every trigger commands Hugo to fire automatic 0-AP Pursuit volleys from off-field, completely bypassing action economy restrictions and devastating boss Tenacity shields.
            </p>
          </div>
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:6px;">Gearing &amp; Memory Fragment Sets</div>
            <ul style="font-size:0.8rem; color:var(--text); line-height:1.6; margin:0 0 0 16px; padding:0;">
              <li><strong>Hugo:</strong> 4-pc <em>Starlight and Dreams</em> + 2-pc <em>Black Wing</em> (+12% ATK).</li>
              <li><strong>Selena:</strong> 4-pc <em>Battlefield Evolution</em> (amplifies Flaw Mark damage by +20%).</li>
              <li><strong>Tressa:</strong> 4-pc <em>Judgment’s Flames</em> (spreads debuffs across all enemy units).</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- TEAM 4 & 5 SUMMARY GRID -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="background:var(--emerald); color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:4px;">TIER 1 SPECIALIST</span>
            <a href="teambuilder.html?preset=beryl_gatling_multihit" style="font-size:0.75rem; color:var(--cyan);">Simulate →</a>
          </div>
          <h4 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:6px;">⚙️ Beryl Gatling Multi-Hit</h4>
          <p style="font-size:0.8rem; color:var(--body); line-height:1.5; margin-bottom:10px;">
            Pairs Beryl with Mika and Magna. Leveraging the <em>Spore Collector</em> relic, Beryl fires 30+ Gatling rounds in a single turn, melting hit-count shields while Magna maintains impenetrable defenses.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);">Gear: 4-pc Conqueror’s Aspect • 4-pc Glory’s Reign • 4-pc Tetra’s Authority</div>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="background:#f85058; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:4px;">TIER 1 LOW COST</span>
            <a href="teambuilder.html?preset=mei_lin_flame_burst" style="font-size:0.75rem; color:var(--cyan);">Simulate →</a>
          </div>
          <h4 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--text); margin-bottom:6px;">🔥 Mei Lin Flame Burst</h4>
          <p style="font-size:0.8rem; color:var(--body); line-height:1.5; margin-bottom:10px;">
            Mei Lin, Owen, and Khalipe deliver ultra-cheap 1-AP combo strings. High Passion resonance triggers blazing burst strikes without requiring premium 5★ manifestation copies.
          </p>
          <div style="font-size:0.75rem; color:var(--muted);">Gear: 4-pc Beast’s Yearning • 2-pc Executioner’s Tool • 4-pc Tetra’s Authority</div>
        </div>
      </div>
    </div>

    <!-- ===================================================================
         PANE 2: ROSSWEISSE DEEP DIVE (VIDEO GUIDE STANDARD)
         =================================================================== -->
    <div id="tab-rossweisse" class="tab-pane">
      <div style="background:var(--panel); border:1px solid #10664d; border-radius:8px; padding:24px; margin-bottom:24px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
          <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; border:2px solid #10664d;">
            <img src="assets/characters/30134.webp" alt="Rossweisse" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div>
            <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:#5eead4; margin:0;">Rossweisse: Day-1 to Endgame Master Guide</h2>
            <div style="font-size:0.8rem; color:var(--muted);">5★ Justice Striker • Celestial Bulwark (Apostle of Kyrken) • ID: 30134</div>
          </div>
        </div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin:0;">
          A complete min-maxing compendium detailing gear priorities, 6-slot memory fragment breakdowns, Chaos drop weapon selections, teammate synergies, duplicate (Manifest Ego) milestones, and the infamous 17-AP burst trick.
        </p>
      </div>

      <!-- SECTION 1: GEAR & MEMORY FRAGMENTS -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; margin-bottom:24px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--cyan); margin-bottom:12px;">I. Gearing &amp; Memory Fragment Matrix</h3>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:16px;">
          There are only three Memory Fragment gear sets that matter for Rossweisse. Everything else dilutes her scaling:
        </p>
        
        <div class="table-responsive" style="margin-bottom:18px;">
          <table class="guide-table">
            <thead>
              <tr><th>Set Tier</th><th>Set Name &amp; Bonus</th><th>Tactical Assessment</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color:#5eead4;">Best in Slot (4-pc)</strong></td>
                <td><strong>Veiled Radiance (4-pc)</strong><br><span style="font-size:0.75rem; color:var(--muted);">When a Justice card is stacked/played, grants +8% Crit Chance to Attack Cards (stacks 2x = +16% permanent Crit Chance).</span></td>
                <td>Mandatory 4-piece set. Rossweisse plays Justice cards effortlessly, keeping +16% Crit active permanently.</td>
              </tr>
              <tr>
                <td><strong style="color:var(--gold);">BiS 2-pc Option A</strong></td>
                <td><strong>Executioner’s Tool (2-pc)</strong><br><span style="font-size:0.75rem; color:var(--muted);">Grants +25% Critical Damage.</span></td>
                <td>Preferred 2-piece pairing once Crit Chance reaches 75%+. Provides the highest multiplicative damage ceiling.</td>
              </tr>
              <tr>
                <td><strong style="color:var(--gold);">BiS 2-pc Option B</strong></td>
                <td><strong>Black Wing (2-pc)</strong><br><span style="font-size:0.75rem; color:var(--muted);">Grants +12% Attack.</span></td>
                <td>Solid alternative if high Crit Damage sub-stats are already present on slots 1-3.</td>
              </tr>
              <tr>
                <td><strong style="color:var(--muted);">Transitional</strong></td>
                <td><strong>2-pc Executioner + 2-pc Black Wing</strong></td>
                <td>Early game filler before a high-stat 4-piece Veiled Radiance set is fully farmed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style="font-family:'Orbitron',sans-serif; font-size:0.95rem; color:var(--gold); margin-bottom:10px;">Slot 4, 5, and 6 Main Stat Distribution</h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:14px;">
          <div style="background:var(--card-inner); padding:14px; border-radius:6px; border-top:3px solid var(--cyan);">
            <div style="font-size:0.8rem; font-weight:700; color:var(--cyan); margin-bottom:4px;">Slot 4: Headpiece</div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text); margin-bottom:4px;">Crit Chance % (Priority: 90-95%)</div>
            <div style="font-size:0.78rem; color:var(--body); line-height:1.5;">Run Crit Chance until reaching ~85% total in combat. If Partner buffs and Veiled Radiance push you over 100%, switch to <strong>Crit Damage %</strong>. Do NOT auto-trash Crit DMG main stats!</div>
          </div>
          <div style="background:var(--card-inner); padding:14px; border-radius:6px; border-top:3px solid var(--gold);">
            <div style="font-size:0.8rem; font-weight:700; color:var(--gold); margin-bottom:4px;">Slot 5: Goblet</div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text); margin-bottom:4px;">Justice Damage % &gt; Attack %</div>
            <div style="font-size:0.78rem; color:var(--body); line-height:1.5;">External ATK% buffs are abundant in endgame squads, leading to heavy diminishing returns on ATK goblets. <strong>Justice DMG %</strong> provides a cleaner multiplier unless your ATK goblet has God-roll sub-stats.</div>
          </div>
          <div style="background:var(--card-inner); padding:14px; border-radius:6px; border-top:3px solid #10664d;">
            <div style="font-size:0.8rem; font-weight:700; color:#5eead4; margin-bottom:4px;">Slot 6: Accessory</div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--text); margin-bottom:4px;">Attack % (Mandatory)</div>
            <div style="font-size:0.78rem; color:var(--body); line-height:1.5;">Slot 6 provides Rossweisse’s primary ATK baseline. Look for Crit Chance and Crit Damage sub-stats on this piece.</div>
          </div>
        </div>
        <div style="margin-top:12px; font-size:0.8rem; color:var(--muted);">
          <strong>Sub-Stat Hierarchy:</strong> Crit Chance (until ~85%) &gt; Crit Damage &gt; Flat Attack &gt; Attack %.
        </div>
      </div>

      <!-- SECTION 2: CHAOS DROPS & PARTNERS -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; margin-bottom:24px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--cyan); margin-bottom:12px;">🗡️ Chaos 3-Piece Drops</h3>
          <ul style="font-size:0.82rem; color:var(--body); line-height:1.8; margin-left:18px; padding:0;">
            <li><strong>Weapon:</strong> <em>Criticism of Discord</em> / <em>Intellect of Discord</em> — massive crit scaling during burst turns.</li>
            <li><strong>Armor:</strong> <em>Psionic Combat Suit</em> — converts excess shields into additional offensive scaling.</li>
            <li><strong>Accessory:</strong> <em>Split Design Core</em> — grants +8% Turn 1, +16% Turn 2, and <strong>+24% Turn 3 Multiplicative Damage</strong> to the entire team.</li>
          </ul>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--gold); margin-bottom:12px;">🤝 Striker Partner Hierarchy</h3>
          <ul style="font-size:0.82rem; color:var(--body); line-height:1.8; margin-left:18px; padding:0;">
            <li><strong>T0: Arya</strong> — The supreme partner. Grants ATK, Crit Chance, Crit DMG, +2 turn AP, and applies guaranteed Vulnerable on purple cards.</li>
            <li><strong>T1: Scarlet (5★)</strong> — Best general striker partner; provides both additive and multiplicative damage boosts.</li>
            <li><strong>T1.5: Priscilla (5★)</strong> — Strong alternative delivering flat Damage Amount and Attack buffs.</li>
            <li><strong>T2: Lillian / Westmacott / Ritochka / Douglas</strong> — Budget 4★ and 5★ fillers.</li>
          </ul>
        </div>
      </div>

      <!-- SECTION 3: TEAMMATES & THE 17-AP TRICK -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; margin-bottom:24px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--cyan); margin-bottom:12px;">👥 Teammate Synergies &amp; The 17-AP Flicker Blade Trick</h3>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:14px;">
          Rossweisse has unique card interactions that make certain standard supports ineffective, while turning unexpected teammates into game-breaking batteries:
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px;">
          <div style="background:var(--card-inner); padding:16px; border-radius:6px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.9rem; font-weight:700; color:var(--cyan); margin-bottom:6px;">Tiphera: The Multiplier God</div>
            <p style="font-size:0.8rem; color:var(--body); line-height:1.5; margin-bottom:8px;">
              Rossweisse’s Sword Tassels carry the <em>Bind</em> tag. When Tiphera equips <strong>Snowflake of Our First Meeting</strong>, generating Tassels triggers <em>Powdered Snow</em> (+30% Justice DMG, +15% CDMG). Combined with Tiphera’s +200-300% single-hit multiplicative buff, Rossweisse’s nuke reaches obscene heights.
            </p>
          </div>

          <div style="background:var(--card-inner); padding:16px; border-radius:6px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.9rem; font-weight:700; color:var(--gold); margin-bottom:6px;">Orlea: The Softy Exhaust Engine</div>
            <p style="font-size:0.8rem; color:var(--body); line-height:1.5; margin-bottom:8px;">
              Normal Retain Orlea clogs hand space and prevents polarity cards from splitting. Instead, build Orlea to fuse 3★ <em>Softy</em> and <strong>Exhaust</strong> it immediately. This triggers <em>Glory’s Reign</em> (+15% ally DMG) and grants a colossal <strong>+70% Multiplicative Buff</strong> on the finisher.
            </p>
          </div>

          <div style="background:var(--card-inner); padding:16px; border-radius:6px;">
            <div style="font-family:'Orbitron',sans-serif; font-size:0.9rem; font-weight:700; color:#a855f7; margin-bottom:6px;">Fei: The 17-AP Streak Battery</div>
            <p style="font-size:0.8rem; color:var(--body); line-height:1.5; margin-bottom:8px;">
              The game hard-caps AP at <strong>9</strong>. However, using Fei’s Void Streak passive (<em>"Next X-Cost card triggers as X + 2"</em>) allows <em>Flicker Blade Unbound</em> to calculate as if cast with <strong>17 AP</strong>! That yields 8 bonus AP tiers = <strong>+960% Base Multiplier</strong> added before multiplicative calculations.
            </p>
          </div>
        </div>
      </div>

      <!-- SECTION 4: MANIFEST EGO VALUE & SAVE DATA -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--gold); margin-bottom:12px;">💎 Manifest Ego (Duplicates) &amp; Save Data Crafting</h3>
        
        <div class="table-responsive" style="margin-bottom:18px;">
          <table class="guide-table">
            <thead>
              <tr><th>Dupe Level</th><th>Bonus Effect</th><th>Pull Recommendation &amp; Value</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>E0 (Base)</strong></td>
                <td>Baseline Polarity &amp; Equilux kit.</td>
                <td><strong>100% Viable.</strong> Pair with Partner Arya for maximum efficiency before chasing dupes.</td>
              </tr>
              <tr>
                <td><strong style="color:var(--emerald);">E1 (Sweet Spot)</strong></td>
                <td><em>Kyrken’s Apostle</em> costs 0 AP and <strong>restores +1 AP</strong>; Polarity DMG increased from 15% to 20%.</td>
                <td><strong>⭐ Best Investment Value.</strong> Converts her card draw into positive AP generation. Stop here if on a budget!</td>
              </tr>
              <tr>
                <td><strong style="color:var(--cyan);">E2 (Min-Max)</strong></td>
                <td>Starts battle with <strong>4 Blade Afterimages</strong>.</td>
                <td>High value for fast clears; allows capping 20 Sword Tassels 1 turn earlier.</td>
              </tr>
              <tr>
                <td><strong style="color:var(--muted);">E3–E5</strong></td>
                <td>Stat nodes and minor passive rank boosts.</td>
                <td><strong>Low Value / Whale Bait.</strong> Skip unless pushing directly to E6.</td>
              </tr>
              <tr>
                <td><strong style="color:#dfb235);">E6 (Apex)</strong></td>
                <td>Unlocks <em>Blade Poised Against the Cycle</em>; expands hand size limit to 12.</td>
                <td>Completely removes hand congestion constraints; peak speedrun territory.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background:var(--card-inner); border-radius:6px; padding:16px;">
          <div style="font-size:0.85rem; font-weight:700; color:var(--cyan); margin-bottom:6px;">Save Data Expedition Strategy (Zero System 160pt vs Event 130pt)</div>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin:0;">
            When crafting Rossweisse’s definitive Save Data deck in the Zero System (Diff 10, 160pt limit):<br>
            1. <strong>Prioritize Locking:</strong> <em>Flicker Blade (Unbound / Amped)</em>, <em>Kyrken’s Apostle (V1: +1 AP)</em>, and <em>Sword Resonance (3 Tassels)</em>.<br>
            2. <strong>Aggressive Deck Thinning:</strong> Route toward Rest Area campfire nodes to delete un-upgraded 1-AP Basic Attacks. Rossweisse operates best with a razor-thin 18-card deck where 0-AP loop cards are redrawn every turn.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================================================================
         PANE 3: TEAMBUILDING FRAMEWORK & THEORYCRAFTING
         =================================================================== -->
    <div id="tab-framework" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:24px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.25rem; color:var(--text); margin-bottom:8px;">The CZN Teambuilding Framework</h2>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin:0;">
          Building endgame squads in Chaos Zero Nightmare is not about putting three random 5★ heroes together. It is an exact science governed by action point curves, hand congestion limits, and multiplicative damage formulas.
        </p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:20px; margin-bottom:24px;">
        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--cyan); margin-bottom:10px;">1. The Golden Ratio (1-1-1 Rule)</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Every top-tier squad adheres strictly to the Golden Ratio:
          </p>
          <ul style="font-size:0.82rem; color:var(--text); line-height:1.8; margin-left:18px; padding:0;">
            <li><strong>1x Active Hyper-Carry:</strong> Consumes 60-70% of available AP on burst turns (e.g. Rossweisse, Nine, Beryl).</li>
            <li><strong>1x Enabler / Sub-DPS:</strong> Sets Vulnerability, Flaw Marks, Bind stacks, or provides barrier survival (e.g. Orlea, Selena, Magna).</li>
            <li><strong>1x Cycle Battery:</strong> Produces bonus AP, accelerates card draw, and filters out dead hands (e.g. Tiphera, Veronica, Mika).</li>
          </ul>
        </div>

        <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
          <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--gold); margin-bottom:10px;">2. AP Curve &amp; The 10-Card Cap</h3>
          <p style="font-size:0.82rem; color:var(--body); line-height:1.6; margin-bottom:12px;">
            Card economics dictate your combat consistency:
          </p>
          <ul style="font-size:0.82rem; color:var(--text); line-height:1.8; margin-left:18px; padding:0;">
            <li><strong>Ideal AP Curve:</strong> 1.1 to 1.3 AP average cost per card across the 24-card operational deck.</li>
            <li><strong>The 10-Card Cap Danger:</strong> Holding too many Retain cards caps your hand at 10. Cards drawn past 10 are burned, and polarity split cards fail to materialize!</li>
            <li><strong>Deck Thinning:</strong> An 18-card deck with four 0-AP cards cycles 300% faster than a full 24-card deck cluttered with basic attacks.</li>
          </ul>
        </div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px; margin-bottom:24px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--cyan); margin-bottom:12px;">3. The Damage Formula Demystified</h3>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:14px;">
          Understanding how buffs stack separates 50,000 damage hits from 2,000,000 damage nukes:
        </p>

        <div style="background:var(--card-inner); border-left:4px solid var(--cyan); padding:14px 18px; border-radius:6px; font-family:monospace; font-size:0.88rem; color:var(--text); margin-bottom:14px;">
          Final Damage = [Base Skill Multiplier] × [1 + Σ Additive ATK%] × [Π (1 + Multiplicative Buff%)] × [1 + Crit DMG%] × [1 + Enemy Vulnerability%]
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:14px; font-size:0.8rem; color:var(--body); line-height:1.6;">
          <div>
            <strong style="color:var(--text);">Additive Buffs (+ATK%, Morale):</strong><br>
            All sources (gear 2-pc, potential nodes, flat buffs) are added together. Stacking 50% ATK on top of 200% existing ATK yields only an ~16% actual damage increase (heavy diminishing returns).
          </div>
          <div>
            <strong style="color:var(--cyan);">Multiplicative Buffs (Final DMG %, Softy, Tiphera):</strong><br>
            Each source multiplies against the total! A +70% Softy buff and a +200% Tiphera buff multiply together: 1.7 × 3.0 = <strong>5.1x total multiplier (+410% net increase)</strong>.
          </div>
        </div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:22px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.05rem; color:var(--gold); margin-bottom:12px;">4. Zero System (160pt) vs Chaos Event (130pt) Expeditions</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; font-size:0.82rem; color:var(--body); line-height:1.6;">
          <div style="background:var(--card-inner); padding:16px; border-radius:6px;">
            <strong style="color:var(--gold);">Chaos Event (e.g. Celestial Bulwark - 130pt Limit):</strong><br>
            Has a <strong>+50% Rare Fate Chance</strong> modifier. Use this zone for rapid seasonal farming, acquiring new Epiphany card variants, and testing fresh synergies at reduced enemy stat scaling.
          </div>
          <div style="background:var(--card-inner); padding:16px; border-radius:6px;">
            <strong style="color:var(--cyan);">Zero System (Codex 01 Diff 10 - 160pt Limit):</strong><br>
            The pinnacle endgame playground. Grants the maximum <strong>160pt Save Data Storage</strong>. Route specifically through: <em>Elite Battles &gt; Unidentified Events &gt; Campfire Card Removal &gt; Altar</em> to produce pristine permanent Save Data decks.
          </div>
        </div>
      </div>
    </div>

    <!-- ===================================================================
         PANE 4: ACCOUNT PROGRESSION & CHECKLIST
         =================================================================== -->
    <div id="tab-progression" class="tab-pane">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; margin-bottom:24px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:12px;">Captain Progression &amp; Daily Routine</h2>
        <div class="table-responsive">
          <table class="guide-table">
            <thead>
              <tr><th>Priority</th><th>Routine Task</th><th>Key Strategic Benefit</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1</strong></td><td>Daily Garden Café Visit</td><td>Claim 80 free daily Aether stamina to prevent stamina stalling.</td></tr>
              <tr><td><strong>2</strong></td><td>Memory Fragment Simulation (Lv 25+)</td><td>Primary farming loop (60 Aether/run) for Veiled Radiance and Glory’s Reign sets.</td></tr>
              <tr><td><strong>3</strong></td><td>Ark City Communication Passes</td><td>Spend 3 daily passes to raise combatant Affinity for passive stat milestones.</td></tr>
              <tr><td><strong>4</strong></td><td>Zero System Weekly Progress (8000/8000)</td><td>Clears weekly exploration quotas for top-tier relic synthesis materials.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px; max-width:680px; margin:0 auto;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:12px;">Squad Pre-Sortie Readiness Checklist</h3>
        <div style="display:flex; flex-direction:column; gap:12px;" id="squadChecklist">
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">At least 1 hero matches sector attribute resonance (+25% DMG bonus).</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Squad includes dedicated AP generation / card cycle engine (Tiphera, Veronica, Mika).</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Deck has sufficient 0-cost cards; average deck AP curve is under 1.3 AP.</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Key combatant memory fragment set bonuses active (e.g. 4-pc Veiled Radiance / Glory’s Reign).</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; background:var(--card-inner); padding:12px 16px; border-radius:6px; cursor:pointer;">
            <input type="checkbox" style="width:18px; height:18px; accent-color:var(--cyan);">
            <span style="font-size:0.88rem; color:var(--text);">Hand retention is managed: no more than 2 Retain cards in hand to prevent overflow.</span>
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

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('tab')) {
  const t = urlParams.get('tab');
  const btn = document.querySelector(`.sub-tab-btn[data-tab="${t}"]`);
  if (btn) btn.click();
}
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
    print(" - characters.html (40 Combatants & 48 Partners with portraits & modal starter art)")
    print(" - cards.html (1,157 Unique Cards with 782 illustrations & AP filters)")
    print(" - teambuilder.html (Interactive Squad & Deck Simulator, 24-card rules, turn simulator)")
    print(" - mechanics.html (Interactive sub-tabs, 28-term Glossary search, 6 Deities, Relics)")
    print(" - lore.html (Story narrative & 8 Factions with 87 member avatar badges)")
    print(" - guides.html (Beginner Roadmap, Progression & Interactive Checklist)")

if __name__ == '__main__':
    run()
