import os, glob, re, json

def clean_desc(text):
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('\n', ' ').strip()
    return text

def run():
    base_dir = 'D:/agents/czn-fan-guide'

    # 1. Load Combatants from data/characters/
    combatants = []
    for p in sorted(glob.glob(f'{base_dir}/data/characters/*/*.md')):
        fname = os.path.basename(p)
        if fname.startswith('_') or 'overview' in fname.lower():
            continue
        with open(p, encoding='utf-8') as f:
            content = f.read()
        
        name_m = re.search(r'^#\s+(.+)$', content, re.M)
        name = name_m.group(1).strip() if name_m else fname.replace('.md', '').capitalize()
        
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
        card_list = [{'name': c[0].strip(), 'cost': c[1].strip(), 'type': c[2].strip(), 'effect': c[3].strip()} for c in starters[:6]]
        
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

    # 2. Load Partners from characters-en.json
    supporters = []
    with open(f'{base_dir}/raw-data/e7bot/characters-en.json', encoding='utf-8') as f:
        chars_raw = json.load(f)['data']
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

    # 3. Load sample cards from cards-en.json
    with open(f'{base_dir}/raw-data/e7bot/cards-en.json', encoding='utf-8') as f:
        cards_raw = json.load(f)['data']
    
    cards_list = []
    seen_cards = set()
    for c in cards_raw:
        name = c.get('name')
        desc = c.get('desc_display', c.get('desc', ''))
        if not name or not desc or len(name) < 2:
            continue
        cleaned = clean_desc(desc)
        if not cleaned or len(cleaned) < 15 or len(cleaned) > 160 or cleaned.startswith('{'):
            continue
        card_type = c.get('type', 'Skill')
        if card_type not in ['Attack', 'Skill', 'Power', 'Epiphany']:
            card_type = 'Skill'
        cost = c.get('cost', 1)
        if cost not in [0, 1, 2, 3]:
            cost = 1
        key = (name, cost, card_type)
        if key in seen_cards:
            continue
        seen_cards.add(key)
        cards_list.append({
            'name': name,
            'cost': cost,
            'type': card_type,
            'effect': cleaned,
            'owner': c.get('character_name', 'General')
        })
        if len(cards_list) >= 120:
            break

    # Helper for navigation
    def make_nav(active_page):
        links = [
            ('index.html', 'Home'),
            ('characters.html', 'Characters'),
            ('cards.html', 'Cards'),
            ('mechanics.html', 'Mechanics'),
            ('lore.html', 'Lore'),
            ('guides.html', 'Guides')
        ]
        html_links = []
        for href, label in links:
            cls = 'active' if href == active_page else ''
            html_links.append(f'<li><a href="{href}" class="{cls}">{label}</a></li>')
        
        return f'''<nav>
  <a href="index.html" class="nav-brand"><span>CZN</span> DATABASE</a>
  <ul class="nav-links">
    {' '.join(html_links)}
  </ul>
  <a href="https://github.com/CholidAlFarisi/czn-fan-guide" target="_blank" class="nav-btn">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    GitHub
  </a>
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
        featured_cards_html.append(f'''
        <div class="char-card" data-r="{c['rarity']}" onclick="location.href='characters.html'">
          <div class="char-icon">{c['icon']}</div>
          <div class="char-name">{c['name']}</div>
          <div class="char-stars">{stars}</div>
          <div class="char-tags">
            <span class="tag">{c['job']}</span>
            <span class="tag attr">{c['ego']}</span>
            <span class="tag">{c['faction']}</span>
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
          <button class="f-btn" data-job="Vanguard">Vanguard</button>
          <button class="f-btn" data-job="Striker">Striker</button>
          <button class="f-btn" data-job="Hunter">Hunter</button>
          <button class="f-btn" data-job="Ranger">Ranger</button>
          <button class="f-btn" data-job="Psionic">Psionic</button>
          <button class="f-btn" data-job="Controller">Controller</button>
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
          <button class="f-btn" data-sf="5">5★</button>
          <button class="f-btn" data-sf="4">4★</button>
          <button class="f-btn" data-sf="3">3★</button>
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
    el.innerHTML = `
      <div class="char-icon">${{c.icon}}</div>
      <div class="char-name">${{c.name}}</div>
      <div class="char-stars">${{stars}}</div>
      <div class="char-tags">
        <span class="tag">${{c.job}}</span>
        <span class="tag attr">${{c.ego}}</span>
        <span class="tag">${{c.faction}}</span>
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
    el.innerHTML = `
      <div class="char-icon" style="border-color:${{p.color}}">🤝</div>
      <div class="char-name">${{p.name}}</div>
      <div class="char-stars">${{stars}}</div>
      <div class="char-tags">
        <span class="tag" style="border-color:${{p.color}}; color:${{p.color}}">Partner</span>
        <span class="tag">ID: ${{p.id}}</span>
      </div>
    `;
    suppGrid.appendChild(el);
  }});
}}

// Modal
const modal = document.getElementById('charModal');
const modalClose = document.getElementById('modalClose');
function openModal(c) {{
  document.getElementById('mIcon').textContent = c.icon;
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
      row.innerHTML = `
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
          <button class="f-btn active" data-t="all">All</button>
          <button class="f-btn" data-t="Attack">Attack</button>
          <button class="f-btn" data-t="Skill">Skill</button>
          <button class="f-btn" data-t="Power">Power</button>
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
  </div>
</main>

{make_footer()}

<script>
const CARDS = {cards_json_str};
let curType = 'all';
let curCost = 'all';

const grid = document.getElementById('cardsGrid');
const countInfo = document.getElementById('cardCountInfo');

function renderCards(items) {{
  grid.innerHTML = '';
  countInfo.textContent = `Showing ${{items.length}} cards`;
  if (items.length === 0) {{
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--muted);">No matching cards found.</div>';
    return;
  }}
  items.forEach(c => {{
    const el = document.createElement('div');
    el.className = 'card-item';
    
    let typeClass = 'type-skill';
    if (c.type === 'Attack') typeClass = 'type-atk';
    else if (c.type === 'Power') typeClass = 'type-power';

    el.innerHTML = `
      <div class="c-top">
        <div class="c-cost">${{c.cost}}</div>
        <div class="c-type ${{typeClass}}">${{c.type}}</div>
      </div>
      <h4>${{c.name}}</h4>
      <div class="c-effect">${{c.effect}}</div>
      <div class="c-meta">
        <span>${{c.owner}}</span>
        <span style="text-transform:uppercase; font-size:0.65rem;">${{c.cost}} AP</span>
      </div>
    `;
    grid.appendChild(el);
  }});
}}
renderCards(CARDS);

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
  const res = CARDS.filter(c => {{
    const matchT = curType === 'all' || c.type.toLowerCase() === curType.toLowerCase();
    const matchC = curCost === 'all' || (curCost === '3' ? c.cost >= 3 : String(c.cost) === curCost);
    const matchQ = !q || c.name.toLowerCase().includes(q) || c.effect.toLowerCase().includes(q) || c.owner.toLowerCase().includes(q);
    return matchT && matchC && matchQ;
  }});
  renderCards(res);
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
    mechanics_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mechanics &amp; Systems — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
{make_nav('mechanics.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Gameplay Engine</div>
    <h1>Mechanics, Deities &amp; Roguelike Systems</h1>
    <p>Comprehensive guide to Chaos Zero Nightmare's deckbuilding combat, the 6 Primordial Deities, Divine Sparks, Epiphany transformations, and Save Data loadouts.</p>
  </header>

  <div class="container">
    <!-- 6 Deities Box -->
    <div style="margin-bottom:40px; padding:28px; border-radius:8px; background:linear-gradient(135deg, rgba(16,102,77,0.2), var(--panel) 60%); border:1px solid rgba(22,133,100,0.35);">
      <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:8px;">The 6 Primordial Cosmic Deities &amp; 491 Divine Sparks</h2>
      <p style="font-size:0.9rem; color:var(--body); line-height:1.6; margin-bottom:20px;">
        During roguelike Chaos runs, players encounter cosmic codices governed by six primordial deities. Interacting with their shrines grants Divine Sparks—permanent passive enhancements that alter card costs, damage scaling, and survivability.
      </p>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px;">
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">CALIGO</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Tenacity &amp; Ravage Focus</div>
          <div style="font-size:0.8rem; color:var(--muted);">Grants +100% Ravage scaling, critical strike multipliers, and converts lost health into raw offensive power.</div>
        </div>
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">CIRCEN</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Action Point Acceleration</div>
          <div style="font-size:0.8rem; color:var(--muted);">Provides -1 AP cost reductions on high-cost signatures, energy rebates upon card combo chains, and AP refunds.</div>
        </div>
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">DIALLOS</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Shield &amp; Mitigation</div>
          <div style="font-size:0.8rem; color:var(--muted);">Boosts Vanguard shield efficiency by +30%, grants Metallization stacks, and prevents lethal damage once per run.</div>
        </div>
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">NIHILUM</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Card Draw &amp; Hand Cycling</div>
          <div style="font-size:0.8rem; color:var(--muted);">Increases starting hand draw by +1, retains key cards across turns, and triggers bonus effects on deck reshuffle.</div>
        </div>
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">SECRED</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Pincer Co-op &amp; Assist</div>
          <div style="font-size:0.8rem; color:var(--muted);">Enables 100% Pincer joint attacks when partner conditions are fulfilled, summoning auxiliary supporter strikes.</div>
        </div>
        <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:16px;">
          <div style="font-family:'Orbitron',sans-serif; font-size:1rem; font-weight:700; color:var(--text); margin-bottom:4px;">VITOR</div>
          <div style="font-size:0.75rem; color:var(--cyan); font-weight:600; margin-bottom:6px;">Direct DMG Scaling</div>
          <div style="font-size:0.8rem; color:var(--muted);">Multiplies final damage output by +30%, adds true damage penetration against armored elite bosses, and boosts Bleed.</div>
        </div>
      </div>
    </div>

    <!-- Core Systems Cards -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:20px; margin-bottom:40px;">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">⚔️</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Turn-Based Card Combat</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          At the start of every player turn, your squad draws 5 cards and receives 3 Action Points (AP). Cards can be played in any order, allowing complex synergistic chains between Combatants. Exploiting enemy attribute weaknesses grants a +25% multiplicative damage bonus.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">🧠</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Mental Breakdown &amp; Ego Recovery</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          Unblocked enemy damage builds psychological Stress. When Stress reaches 100, the Combatant suffers a Mental Breakdown—locking one-third of team maximum HP and disabling regular skills. Surviving the breakdown unleashes the hero's ultimate 0 AP Ego skill.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">💾</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Save Data &amp; Loadout Carryover</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          Upon completing or failing a Chaos run, you create permanent Save Data loadouts. Your total Save Value budget determines how many upgraded cards, relics, and Epiphany abilities can be preserved for story bosses and PvP challenges.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">💡</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Epiphany Mutation System</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          Cards evolve dynamically mid-run through Epiphany events. Basic strikes and blocks mutate into character-specific power cards (Branches I through V) featuring 0 AP triggers, card generation, and persistent buffs.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">🌀</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Chaos Mode Roguelike Progression</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          Navigate branching paths across Combat, Elite, Mystery Event, Merchant, and Rest zones. Permadeath ends the run but rewards account experience, character potential materials, and currency for permanent baseline upgrades.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:24px;">
        <div style="font-size:2rem; margin-bottom:12px;">⚙️</div>
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.15rem; color:var(--text); margin-bottom:8px;">Endgame Zero System &amp; Codices</h3>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7;">
          High-tier endgame mode featuring customizable Codex heat modifiers (enemy buffs, restricted draws, hazardous environments). Higher heat ratings exponentially boost the quality of resulting Save Data and drop exclusive 557-relic tiers.
        </p>
      </div>
    </div>
  </div>
</main>

{make_footer()}
</body>
</html>'''
    with open(f'{base_dir}/mechanics.html', 'w', encoding='utf-8') as f:
        f.write(mechanics_html)

    # ==========================================
    # 5. BUILD lore.html
    # ==========================================
    lore_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Lore &amp; Universe — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
{make_nav('lore.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Universe &amp; Lore</div>
    <h1>Story, The SS Nightmare &amp; 7 Factions</h1>
    <p>Explore the cosmic horror world of Chaos Zero Nightmare, the amnesiac Captain aboard the SS Nightmare, and the sociopolitical factions warring against existential collapse.</p>
  </header>

  <div class="container">
    <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:32px; margin-bottom:40px;">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:12px;">The SS Nightmare &amp; The Amnesiac Captain</h2>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8; margin-bottom:16px;">
          The universe of Chaos Zero Nightmare is engulfed by an encroaching eldritch mist known as the existential fog. The remnants of civilization drift inside protected cosmic spheres, reliant on interstellar exploration vessels to scout habitable sectors and harvest energy codices.
        </p>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8; margin-bottom:16px;">
          You awaken aboard the command bridge of the <strong>SS Nightmare</strong>—the apex exploration warship of humanity. Stripped of memories, you are addressed only as the "Captain." Through a rare psychic aptitude known as <em>Ego Synchronization</em>, you alone possess the ability to anchor Combatants' minds against the madness-inducing horrors of the void.
        </p>
        <p style="font-size:0.9rem; color:var(--body); line-height:1.8;">
          As the vessel plumbs deeper into the uncharted Zero Rift, fragments of your past surface alongside dark truths about the six Primordial Deities that engineered the universe's descent into ruin.
        </p>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.3rem; color:var(--text); margin-bottom:12px;">Core Themes</h2>
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px 16px;">
            <div style="font-weight:700; color:var(--cyan); font-size:0.9rem; margin-bottom:4px;">Cosmic Horror &amp; Fragile Sanity</div>
            <div style="font-size:0.8rem; color:var(--muted);">Combatants are human minds pushed to their breaking point. Trauma and psychological fracture fuel their supernatural combat potential.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px 16px;">
            <div style="font-weight:700; color:var(--gold); font-size:0.9rem; margin-bottom:4px;">The 6 Primordial Deities</div>
            <div style="font-size:0.8rem; color:var(--muted);">Caligo, Circen, Diallos, Nihilum, Secred, and Vitor represent primordial cosmological laws that govern reality and card rules.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px 16px;">
            <div style="font-weight:700; color:var(--red); font-size:0.9rem; margin-bottom:4px;">Save Data Metanarrative</div>
            <div style="font-size:0.8rem; color:var(--muted);">Roguelike resets are canonized: each failed expedition is stored as quantum Save Data, allowing subsequent iterations to evolve.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Factions Breakdown -->
    <div style="margin-bottom:24px;">
      <h2 style="font-family:'Orbitron',sans-serif; font-size:1.4rem; color:var(--text); margin-bottom:8px;">The 7 Major Factions</h2>
      <p style="font-size:0.9rem; color:var(--muted); margin-bottom:20px;">The 38 Combatants and 49 Partners belong to distinct geopolitical and ideological factions.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:18px;">
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Terrascion</h3>
        <div style="font-size:0.75rem; color:var(--cyan); margin-bottom:10px; font-weight:600;">EARTH HERITAGE DEFENDERS</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Preserves the original cultural records, martial doctrines, and technological roots of old Earth. Disciplined and steadfast.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Renoa, Amir, Nia, Tressa, Selena</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Stella</h3>
        <div style="font-size:0.75rem; color:var(--gold); margin-bottom:10px; font-weight:600;">HIGH-ORBIT ADVANCED FEDERATION</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Elite space fleet pioneers who command beam weaponry, energy shielding, and advanced targeting arrays.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Hugo, Khalipe, Magna, Mei Lin</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Ironrain</h3>
        <div style="font-size:0.75rem; color:var(--red); margin-bottom:10px; font-weight:600;">MECHANIZED HEAVY ARTILLERY</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Industrial legion relying on heavy munitions, mechanical prosthetics, and devastating suppressive firepower.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Luke, Maribell, Beryl, Veronica</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Peltion</h3>
        <div style="font-size:0.75rem; color:var(--purple); margin-bottom:10px; font-weight:600;">SHADOW GUILD &amp; COVERT OPS</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Covert information brokers and tactical saboteurs adept at stealth strikes, quests, and hand-cycling deceit.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Cassius, Owen, Rei</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Crusaders</h3>
        <div style="font-size:0.75rem; color:#ffcf56; margin-bottom:10px; font-weight:600;">SACRED ORDER OF CONTAINMENT</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Religious knights dedicated to purifying corrupted anomalies and sealing cosmic breaches through unyielding faith.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Orlea, Adelheid</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Far East</h3>
        <div style="font-size:0.75rem; color:#ff7a7a; margin-bottom:10px; font-weight:600;">BLADEMASTERS &amp; PSYCHIC MARTIALISTS</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Traditional swordsmiths and psychic dualists who harness the flow of Void, swift multi-hit slashes, and stances.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Chizuru, Rin, Yuki, Fei</div>
      </div>

      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:20px;">
        <h3 style="font-family:'Orbitron',sans-serif; font-size:1.1rem; color:var(--text); margin-bottom:6px;">Wanderers &amp; Collab Outcasts</h3>
        <div style="font-size:0.75rem; color:#c084fc; margin-bottom:10px; font-weight:600;">INTERDIMENSIONAL DRIFTERS</div>
        <p style="font-size:0.85rem; color:var(--body); line-height:1.6; margin-bottom:12px;">Enigmatic figures summoned across dimensions or wandering outside the laws of any sovereign faction.</p>
        <div style="font-size:0.8rem; color:var(--muted); border-top:1px solid var(--panel-border); padding-top:8px;"><strong>Notable Members:</strong> Kayron, Tenebria, Nine</div>
      </div>
    </div>
  </div>
</main>

{make_footer()}
</body>
</html>'''
    with open(f'{base_dir}/lore.html', 'w', encoding='utf-8') as f:
        f.write(lore_html)

    # ==========================================
    # 6. BUILD guides.html
    # ==========================================
    guides_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guides &amp; Roadmaps — Chaos Zero Nightmare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>
{make_nav('guides.html')}

<main>
  <header class="page-header">
    <div class="page-pill">Strategy &amp; Progression</div>
    <h1>Game Guides &amp; Squad Synergies</h1>
    <p>Proven roadmaps from beginner progression to advanced endgame team compositions and Save Data loadout optimization.</p>
  </header>

  <div class="container">
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:24px;">
      <!-- Guide 1 -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <div style="font-size:2rem; margin-bottom:10px;">🌱</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:10px;">Beginner Starter Roadmap</h2>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:14px;">
          Starting your journey as Captain on the SS Nightmare:
        </p>
        <ul style="font-size:0.85rem; color:var(--body); line-height:1.8; margin-left:20px; margin-bottom:16px;">
          <li><strong>Reroll Targets:</strong> Prioritize 5★ Renoa (versatile Vanguard/Damage), Luke (raw Order damage), or Khalipe (indomitable tanking).</li>
          <li><strong>Aether Stamina:</strong> Spend all early stamina clearing the Main Campaign to unlock Basin of Hyperspace farm zones.</li>
          <li><strong>Account Milestones:</strong> Push squad to Lv20 within Day 1 to unlock first Promotion and Epiphany branches.</li>
          <li><strong>Save Data Habits:</strong> Always preserve at least one high-shield deck before tackling Sector 4 elite bosses.</li>
        </ul>
      </div>

      <!-- Guide 2 -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <div style="font-size:2rem; margin-bottom:10px;">🤝</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:10px;">Top Team Synergies</h2>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:14px;">
          High-performing 3-member team compositions:
        </p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px;">
            <div style="font-weight:700; color:var(--cyan); font-size:0.88rem; margin-bottom:4px;">Bleed Chain Combo</div>
            <div style="font-size:0.8rem; color:var(--muted);"><strong>Rin + Luke + Nia:</strong> Rin applies massive Vulnerable and multi-hit slashes, while Luke converts bleed stacks into lethal Order burst.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px;">
            <div style="font-weight:700; color:var(--gold); font-size:0.88rem; margin-bottom:4px;">Metallization Fortress</div>
            <div style="font-weight:400; font-size:0.8rem; color:var(--muted);"><strong>Amir + Beryl + Khalipe:</strong> Stacks Metallization every turn. Amir's <em>Steel Resolve</em> converts shields into insurmountable team barriers.</div>
          </div>
          <div style="background:var(--card-inner); border:1px solid var(--panel-border); border-radius:6px; padding:12px;">
            <div style="font-weight:700; color:var(--purple); font-size:0.88rem; margin-bottom:4px;">Quest Acceleration Engine</div>
            <div style="font-weight:400; font-size:0.8rem; color:var(--muted);"><strong>Cassius + Hugo + Tressa:</strong> Cassius generates high-value Quest conditions that Hugo's continuous skill triggers solve in a single turn.</div>
          </div>
        </div>
      </div>

      <!-- Guide 3 -->
      <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:8px; padding:26px;">
        <div style="font-size:2rem; margin-bottom:10px;">⚙️</div>
        <h2 style="font-family:'Orbitron',sans-serif; font-size:1.2rem; color:var(--text); margin-bottom:10px;">Zero System &amp; Save Optimization</h2>
        <p style="font-size:0.88rem; color:var(--body); line-height:1.7; margin-bottom:14px;">
          Mastering the endgame roguelike loops:
        </p>
        <ul style="font-size:0.85rem; color:var(--body); line-height:1.8; margin-left:20px;">
          <li><strong>Circen First:</strong> Always target Circen shrines early in Chaos runs to obtain AP cost reduction sparks.</li>
          <li><strong>Trim the Starter Cards:</strong> Use Merchant rest stops to purge basic 1 AP strikes and concentrate your deck on 0 AP Epiphanies.</li>
          <li><strong>Save Value Ceiling:</strong> Maximize heat modifiers in Zero System to expand Save Value budget from 200 to 500+.</li>
          <li><strong>Relic Hoarding:</strong> Collect universal rare relics (e.g. Aether Reactor, Chrono Seal) to boost baseline draw.</li>
        </ul>
      </div>
    </div>
  </div>
</main>

{make_footer()}
</body>
</html>'''
    with open(f'{base_dir}/guides.html', 'w', encoding='utf-8') as f:
        f.write(guides_html)

    print("Successfully built all 6 multi-page website files:")
    print(" - index.html (Portal/Home)")
    print(" - characters.html (Roster & Partners)")
    print(" - cards.html (Card Database)")
    print(" - mechanics.html (Mechanics & Deities)")
    print(" - lore.html (Universe & Factions)")
    print(" - guides.html (Strategy Guides)")

if __name__ == '__main__':
    run()
