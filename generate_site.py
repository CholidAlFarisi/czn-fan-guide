import os, glob, re, json

def build():
    # 1. Parse all 38 characters
    chars = []
    for p in sorted(glob.glob('D:/agents/czn-fan-guide/data/characters/*/*.md')):
        fname = os.path.basename(p)
        if fname.startswith('_') or 'overview' in fname.lower():
            continue
        with open(p, encoding='utf-8') as f:
            content = f.read()
        
        name_m = re.search(r'^#\s+(.+)$', content, re.M)
        name = name_m.group(1).strip() if name_m else fname.replace('.md', '').capitalize()
        
        rarity_m = re.search(r'\*\*Rarity\*\*:\s*([★\d\-\s\w]+)', content)
        rarity = 5 if '5' in (rarity_m.group(1) if rarity_m else '') else 4
        
        job_m = re.search(r'\*\*Class\s*/\s*Job\*\*:\s*([^\n\r]+)', content)
        job = job_m.group(1).strip() if job_m else 'Combatant'
        
        ego_m = re.search(r'\*\*Attribute\s*\(Ego\)\*\*:\s*([^\n\r]+)', content)
        ego = ego_m.group(1).strip() if ego_m else 'Instinct'
        
        faction_m = re.search(r'\*\*Faction\*\*:\s*([^\n\r]+)', content)
        faction = faction_m.group(1).strip() if faction_m else 'Terrascion'
        
        over_m = re.search(r'## Overview\s*\n+([^\n\r]+)', content)
        overview = over_m.group(1).strip() if over_m else f'{name} is a {rarity}★ {job} affiliated with {faction}.'
        
        # Starter cards
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
        
        chars.append({
            'name': name,
            'rarity': rarity,
            'job': job,
            'ego': ego,
            'faction': faction,
            'overview': overview,
            'icon': icon,
            'cards': card_list
        })

    # Deduplicate by name
    seen = set()
    unique_chars = []
    for c in chars:
        if c['name'] not in seen:
            seen.add(c['name'])
            unique_chars.append(c)

    # Sort: 5-star first, then alphabetical
    unique_chars.sort(key=lambda x: (-x['rarity'], x['name']))

    chars_json = json.dumps(unique_chars, ensure_ascii=False)

    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chaos Zero Nightmare — Database &amp; Fan Guide</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
/* Prydwen Dark Theme Tokens */
:root {{
  --bg: #1c1d21;
  --bg-darker: #151619;
  --nav-bg: rgba(32, 33, 36, 0.94);
  --panel: #24252b;
  --card: #24252b;
  --card-hover: #2c2d33;
  --card-inner: #1a1b1f;
  --panel-border: #33343a;
  --border: #33343a;
  --border-light: #3d3e47;
  --accent: #2692d3;
  --accent-hover: #1e7eb9;
  --teal: #10664d;
  --teal-bright: #168564;
  --gold: #dfb235;
  --red: #f85058;
  --purple: #9353d3;
  --cyan: #22d3ee;
  --text: #ffffff;
  --body: #c8c8c8;
  --muted: #8b949e;
  --faint: #5c616b;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; }}
html {{ scroll-behavior: smooth; }}
body {{
  background: var(--bg);
  color: var(--body);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}}

/* Navbar */
nav {{
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 5vw;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--panel-border);
}}
.nav-brand {{
  display: flex; align-items: center; gap: 10px;
  font-family: 'Orbitron', sans-serif; font-size: 1.15rem; font-weight: 800;
  color: var(--text); text-decoration: none;
}}
.nav-brand span {{
  background: var(--accent); color: #fff; padding: 2px 7px; border-radius: 4px; font-size: 0.75rem;
}}
.nav-links {{ display: flex; gap: 20px; list-style: none; align-items: center; }}
.nav-links a {{
  color: var(--muted); text-decoration: none; font-size: 0.85rem; font-weight: 600;
  transition: color 0.15s;
}}
.nav-links a:hover, .nav-links a.active {{ color: var(--text); }}
.nav-btn {{
  background: var(--panel); border: 1px solid var(--panel-border); color: var(--text);
  padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 600;
  text-decoration: none; display: flex; align-items: center; gap: 6px;
  transition: all 0.15s;
}}
.nav-btn:hover {{ border-color: var(--accent); background: var(--card-hover); }}

/* Hero Section */
.hero {{
  text-align: center; padding: 70px 5vw 40px;
  border-bottom: 1px solid var(--panel-border);
  background: radial-gradient(circle at 50% 20%, rgba(38, 146, 211, 0.08) 0%, transparent 60%);
}}
.hero-pill {{
  display: inline-block; padding: 4px 14px; border-radius: 999px;
  background: rgba(16, 102, 77, 0.25); border: 1px solid var(--teal-bright);
  color: #34d399; font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; margin-bottom: 16px;
}}
.hero h1 {{
  font-family: 'Orbitron', sans-serif; font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900; color: var(--text); letter-spacing: -0.02em; line-height: 1.15;
  margin-bottom: 10px;
}}
.hero p {{ font-size: 1.05rem; color: var(--muted); max-width: 650px; margin: 0 auto 28px; }}

.search-box {{
  max-width: 640px; margin: 0 auto; display: flex;
  background: var(--panel); border: 1px solid var(--panel-border); border-radius: 8px;
  overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  transition: border-color 0.2s;
}}
.search-box:focus-within {{ border-color: var(--accent); }}
.search-box input {{
  flex: 1; padding: 14px 18px; background: transparent; border: none; outline: none;
  color: var(--text); font-size: 0.95rem; font-family: inherit;
}}
.search-box input::placeholder {{ color: var(--faint); }}
.search-box button {{
  background: var(--accent); border: none; color: #fff; font-weight: 700;
  padding: 0 24px; font-size: 0.85rem; cursor: pointer; transition: background 0.15s;
}}
.search-box button:hover {{ background: var(--accent-hover); }}

.quick-stats {{
  display: flex; justify-content: center; gap: 32px; flex-wrap: wrap;
  margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--panel-border);
  max-width: 800px; margin-left: auto; margin-right: auto;
}}
.q-stat {{ text-align: center; }}
.q-val {{ font-family: 'Orbitron', sans-serif; font-weight: 800; font-size: 1.4rem; color: var(--text); }}
.q-lbl {{ font-size: 0.7rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; }}

/* Sections */
section {{ padding: 60px 5vw; max-width: 1340px; margin: 0 auto; }}
.sec-head {{
  display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 16px;
  margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid var(--panel-border);
}}
.sec-label {{ font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--cyan); font-weight: 700; margin-bottom: 4px; }}
.sec-title {{ font-family: 'Orbitron', sans-serif; font-size: 1.6rem; font-weight: 700; color: var(--text); }}

/* Filters */
.filter-bar {{ display: flex; gap: 8px; flex-wrap: wrap; }}
.f-btn {{
  background: var(--panel); border: 1px solid var(--panel-border); color: var(--muted);
  padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600;
  transition: all 0.15s; font-family: inherit;
}}
.f-btn:hover {{ border-color: var(--border-light); color: var(--text); background: var(--card-hover); }}
.f-btn.active {{ background: var(--accent); color: #fff; border-color: var(--accent); }}

/* Characters Grid */
.char-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }}
.char-card {{
  background: var(--panel); border: 1px solid var(--panel-border); border-radius: 8px;
  padding: 16px 12px; text-align: center; cursor: pointer;
  display: flex; flex-direction: column; align-items: center;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}}
.char-card:hover {{ transform: translateY(-3px); border-color: var(--border-light); box-shadow: 0 8px 24px rgba(0,0,0,0.5); background: var(--card-hover); }}
.char-icon {{
  width: 68px; height: 68px; border-radius: 50%; margin-bottom: 12px;
  display: flex; align-items: center; justify-content: center; font-size: 2rem;
  background: var(--card-inner); border: 2px solid var(--panel-border);
}}
.char-card[data-r="5"] .char-icon {{ border-color: var(--gold); box-shadow: 0 0 14px rgba(223, 178, 53, 0.2); }}
.char-card[data-r="4"] .char-icon {{ border-color: var(--purple); box-shadow: 0 0 14px rgba(147, 83, 211, 0.2); }}
.char-name {{ font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }}
.char-stars {{ font-size: 0.72rem; letter-spacing: 0.1em; margin-bottom: 10px; }}
.char-card[data-r="5"] .char-stars {{ color: var(--gold); }}
.char-card[data-r="4"] .char-stars {{ color: var(--purple); }}
.char-tags {{ display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; margin-top: auto; }}
.tag {{
  font-size: 0.65rem; text-transform: uppercase; font-weight: 600; letter-spacing: 0.04em;
  padding: 2px 7px; border-radius: 4px; background: var(--card-inner); border: 1px solid var(--panel-border); color: var(--muted);
}}
.tag.attr {{ color: var(--cyan); border-color: rgba(34, 211, 238, 0.3); }}
.tag.order {{ color: #ffcf56; border-color: rgba(255, 207, 86, 0.3); }}
.tag.passion {{ color: #ff7a7a; border-color: rgba(255, 122, 122, 0.3); }}
.tag.void {{ color: #c084fc; border-color: rgba(192, 132, 252, 0.3); }}

/* Card Database */
.cards-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }}
.card-item {{
  background: var(--panel); border: 1px solid var(--panel-border); border-radius: 8px; padding: 16px;
  display: flex; flex-direction: column; gap: 10px; transition: transform 0.2s, border-color 0.2s;
}}
.card-item:hover {{ transform: translateY(-3px); border-color: var(--border-light); box-shadow: 0 6px 20px rgba(0,0,0,0.4); }}
.c-top {{ display: flex; justify-content: space-between; align-items: center; }}
.c-cost {{
  width: 28px; height: 28px; border-radius: 4px; display: flex; align-items: center; justify-content: center;
  background: var(--accent); color: #fff; font-weight: 800; font-size: 0.85rem; font-family: 'Orbitron', sans-serif;
}}
.c-type {{ font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; font-weight: 700; }}
.type-atk {{ background: rgba(248,80,88,0.15); color: var(--red); border: 1px solid rgba(248,80,88,0.3); }}
.type-skill {{ background: rgba(38,146,211,0.15); color: var(--cyan); border: 1px solid rgba(38,146,211,0.3); }}
.type-power {{ background: rgba(223,178,53,0.15); color: var(--gold); border: 1px solid rgba(223,178,53,0.3); }}
.card-item h4 {{ font-size: 0.95rem; font-weight: 700; color: var(--text); }}
.c-effect {{ font-size: 0.84rem; color: var(--body); line-height: 1.5; flex: 1; }}
.c-meta {{ font-size: 0.72rem; color: var(--muted); border-top: 1px solid var(--panel-border); padding-top: 10px; display: flex; justify-content: space-between; }}

/* Deities & Sparks */
.deities-box {{
  margin-bottom: 30px; padding: 24px; border-radius: 8px;
  background: linear-gradient(135deg, rgba(16,102,77,0.2), var(--panel) 60%);
  border: 1px solid rgba(22,133,100,0.35);
}}
.deities-box h3 {{ font-family: 'Orbitron', sans-serif; font-size: 1.2rem; color: var(--text); margin-bottom: 6px; }}
.deities-box p {{ font-size: 0.88rem; color: var(--body); line-height: 1.6; margin-bottom: 16px; }}
.deities-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }}
.deity-item {{ background: var(--card-inner); border: 1px solid var(--panel-border); border-radius: 6px; padding: 12px; }}
.deity-name {{ font-family: 'Orbitron', sans-serif; font-size: 0.85rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }}
.deity-focus {{ font-size: 0.72rem; color: var(--cyan); font-weight: 600; }}

/* Mechanics Grid */
.mech-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }}
.mech-card {{
  border-radius: 8px; padding: 20px; background: var(--panel); border: 1px solid var(--panel-border);
  transition: transform 0.2s, border-color 0.2s;
}}
.mech-card:hover {{ transform: translateY(-3px); border-color: var(--accent); }}
.mech-card .m-icon {{ font-size: 1.8rem; margin-bottom: 10px; display: block; }}
.mech-card h3 {{ font-size: 1rem; margin-bottom: 8px; font-family: 'Orbitron', sans-serif; font-weight: 700; color: var(--text); }}
.mech-card p {{ font-size: 0.85rem; color: var(--body); line-height: 1.6; }}

/* Lore & Guides */
.lore-grid {{ display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; }}
@media(max-width: 900px) {{ .lore-grid {{ grid-template-columns: 1fr; }} }}
.lore-card {{ background: var(--panel); border: 1px solid var(--panel-border); border-radius: 8px; padding: 22px; }}
.lore-card h3 {{ font-family: 'Orbitron', sans-serif; font-size: 1.1rem; color: var(--text); margin-bottom: 12px; }}
.lore-card p {{ font-size: 0.88rem; color: var(--body); line-height: 1.7; margin-bottom: 14px; }}
.factions-list {{ display: flex; flex-direction: column; gap: 8px; }}
.f-item {{ display: flex; justify-content: space-between; padding: 10px 14px; background: var(--card-inner); border-radius: 6px; font-size: 0.82rem; border: 1px solid var(--panel-border); }}
.f-item strong {{ color: var(--text); }}

.guides-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }}
.guide-card {{
  background: var(--panel); border: 1px solid var(--panel-border); border-radius: 8px; padding: 22px;
  transition: transform 0.2s, border-color 0.2s;
}}
.guide-card:hover {{ transform: translateY(-3px); border-color: var(--accent); }}
.guide-card h3 {{ font-size: 1.05rem; font-weight: 700; color: var(--text); margin: 10px 0 8px; }}
.guide-card p {{ font-size: 0.85rem; color: var(--body); line-height: 1.6; margin-bottom: 16px; }}
.guide-card a {{ color: var(--accent); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; text-decoration: none; }}

/* Modal */
.modal-overlay {{
  position: fixed; inset: 0; background: rgba(10, 11, 14, 0.85); backdrop-filter: blur(8px);
  z-index: 1000; display: none; align-items: center; justify-content: center; padding: 20px;
}}
.modal-overlay.open {{ display: flex; }}
.modal-card {{
  background: var(--panel); border: 1px solid var(--panel-border); border-radius: 12px;
  max-width: 680px; width: 100%; max-height: 88vh; overflow-y: auto; padding: 28px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative;
}}
.modal-close {{
  position: absolute; top: 18px; right: 20px; background: var(--card-inner); border: 1px solid var(--panel-border);
  color: var(--text); width: 32px; height: 32px; border-radius: 6px; cursor: pointer; font-size: 1.1rem;
}}
.modal-close:hover {{ border-color: var(--accent); color: var(--accent); }}
.modal-head {{ display: flex; gap: 20px; align-items: center; margin-bottom: 20px; }}
.modal-icon {{
  width: 74px; height: 74px; border-radius: 50%; font-size: 2.2rem;
  display: flex; align-items: center; justify-content: center; background: var(--card-inner); border: 2px solid var(--gold);
}}
.modal-title h2 {{ font-family: 'Orbitron', sans-serif; font-size: 1.4rem; color: var(--text); }}
.modal-title .stars {{ color: var(--gold); letter-spacing: 0.12em; font-size: 0.85rem; margin-top: 2px; }}
.modal-meta {{ display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }}
.modal-desc {{ font-size: 0.9rem; color: var(--body); line-height: 1.6; margin-bottom: 20px; }}
.modal-cards h4 {{
  font-family: 'Orbitron', sans-serif; font-size: 0.95rem; color: var(--text); margin-bottom: 12px;
  border-bottom: 1px solid var(--panel-border); padding-bottom: 6px;
}}
.modal-card-list {{ display: flex; flex-direction: column; gap: 8px; }}
.m-card-row {{
  background: var(--card-inner); border: 1px solid var(--panel-border); border-radius: 6px; padding: 10px 14px;
  display: flex; gap: 12px; align-items: flex-start;
}}
.m-card-cost {{
  background: var(--accent); color: #fff; font-family: 'Orbitron', sans-serif; font-weight: 700;
  width: 26px; height: 26px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; flex-shrink: 0;
}}
.m-card-body {{ flex: 1; }}
.m-card-name {{ font-weight: 700; font-size: 0.85rem; color: var(--text); display: flex; justify-content: space-between; }}
.m-card-type {{ font-size: 0.68rem; text-transform: uppercase; color: var(--muted); }}
.m-card-desc {{ font-size: 0.8rem; color: var(--body); margin-top: 4px; }}

/* Footer */
footer {{
  background: var(--bg-darker); border-top: 1px solid var(--panel-border); padding: 40px 5vw; text-align: center;
}}
.f-links {{ display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 16px; }}
.f-links a {{ color: var(--muted); text-decoration: none; font-size: 0.82rem; font-weight: 600; }}
.f-links a:hover {{ color: var(--accent); }}
footer p {{ font-size: 0.76rem; color: var(--faint); line-height: 1.7; }}
</style>
</head>
<body>

<nav>
  <a href="#" class="nav-brand"><span>CZN</span> DATABASE</a>
  <ul class="nav-links">
    <li><a href="#characters">Characters</a></li>
    <li><a href="#cards">Cards</a></li>
    <li><a href="#mechanics">Mechanics</a></li>
    <li><a href="#deities">Deities</a></li>
    <li><a href="#lore">Lore</a></li>
    <li><a href="#guides">Guides</a></li>
  </ul>
  <a href="https://github.com/CholidAlFarisi/czn-fan-guide" target="_blank" class="nav-btn">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    GitHub
  </a>
</nav>

<header class="hero">
  <div class="hero-pill">CZN Comprehensive Fan Database</div>
  <h1>Chaos Zero Nightmare</h1>
  <p>Characters, Cards, 6 Cosmic Deities, Relics &amp; Mechanics Portal</p>
  
  <div class="search-box">
    <input type="text" id="searchInput" placeholder="Search 38 characters, cards, deities, or mechanics...">
    <button id="searchBtn">Search</button>
  </div>

  <div class="quick-stats">
    <div class="q-stat"><div class="q-val">38</div><div class="q-lbl">Combatants</div></div>
    <div class="q-stat"><div class="q-val">49</div><div class="q-lbl">Partners</div></div>
    <div class="q-stat"><div class="q-val">2,174</div><div class="q-lbl">Cards</div></div>
    <div class="q-stat"><div class="q-val">6</div><div class="q-lbl">Cosmic Deities</div></div>
    <div class="q-stat"><div class="q-val">557</div><div class="q-lbl">Relics</div></div>
  </div>
</header>

<!-- CHARACTERS -->
<section id="characters">
  <div class="sec-head">
    <div>
      <div class="sec-label">Roster</div>
      <h2 class="sec-title">Playable Combatants</h2>
    </div>
    <div class="filter-bar" id="charFilters">
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
  </div>
  <div class="char-grid" id="charGrid"></div>
</section>

<!-- CARDS -->
<section id="cards">
  <div class="sec-head">
    <div>
      <div class="sec-label">Database</div>
      <h2 class="sec-title">Card Database Highlights</h2>
    </div>
    <div class="filter-bar" id="cardFilters">
      <button class="f-btn active" data-cf="all">All Types</button>
      <button class="f-btn" data-cf="Attack">Attack</button>
      <button class="f-btn" data-cf="Skill">Skill</button>
      <button class="f-btn" data-cf="Power">Power</button>
    </div>
  </div>
  <div class="cards-grid" id="cardsGrid">
    <div class="card-item" data-type="Attack">
      <div class="c-top"><div class="c-cost">1</div><div class="c-type type-atk">Attack</div></div>
      <h4>Sword Rain</h4>
      <div class="c-effect">Deals 96% DMG 2 times. Attunement: Create 1 Effulgent Blade card in your hand.</div>
      <div class="c-meta"><span>Heidemarie</span><span>Signature Unique</span></div>
    </div>
    <div class="card-item" data-type="Power">
      <div class="c-top"><div class="c-cost">1</div><div class="c-type type-power">Power</div></div>
      <h4>Hunting Instincts</h4>
      <div class="c-effect">When another Combatant uses an Upgrade or Skill card, gain 1 Commence the Hunt counter.</div>
      <div class="c-meta"><span>Hugo</span><span>Signature Unique</span></div>
    </div>
    <div class="card-item" data-type="Power">
      <div class="c-top"><div class="c-cost">1</div><div class="c-type type-power">Power</div></div>
      <h4>Pop Eyed Popper</h4>
      <div class="c-effect">Start a Quest. Complete Quests by playing specified card types for game-winning payoffs.</div>
      <div class="c-meta"><span>Cassius</span><span>Quest Synergist</span></div>
    </div>
    <div class="card-item" data-type="Attack">
      <div class="c-top"><div class="c-cost">2</div><div class="c-type type-atk">Attack</div></div>
      <h4>Anchor Shot</h4>
      <div class="c-effect">240% Damage. +60% Damage for each time this card has been used during this battle (max 5).</div>
      <div class="c-meta"><span>Haru</span><span>Pulverize Finisher</span></div>
    </div>
    <div class="card-item" data-type="Skill">
      <div class="c-top"><div class="c-cost">1</div><div class="c-type type-skill">Skill</div></div>
      <h4>Tactical Reorganize</h4>
      <div class="c-effect">Discard current hand and draw 4 cards. Reduce next Attack card cost by -1 AP this turn.</div>
      <div class="c-meta"><span>Renoa</span><span>Starter Skill</span></div>
    </div>
    <div class="card-item" data-type="Skill">
      <div class="c-top"><div class="c-cost">0</div><div class="c-type type-skill">Epiphany</div></div>
      <h4>Ego Awakening</h4>
      <div class="c-effect">After recovering from Mental Breakdown, triggers character-specific Ego Ultimate at 0 AP cost.</div>
      <div class="c-meta"><span>All Combatants</span><span>System Evolution</span></div>
    </div>
    <div class="card-item" data-type="Skill">
      <div class="c-top"><div class="c-cost">1</div><div class="c-type type-skill">Skill</div></div>
      <h4>Steel Resolve</h4>
      <div class="c-effect">Gain 120% Shield for each Metallization stack on self. Grants 3 Metallization next turn.</div>
      <div class="c-meta"><span>Amir</span><span>Defense Engine</span></div>
    </div>
    <div class="card-item" data-type="Attack">
      <div class="c-top"><div class="c-cost">2</div><div class="c-type type-atk">Attack</div></div>
      <h4>Dark Mist: Annihilation</h4>
      <div class="c-effect">400% Damage to all enemies. Inflicts 6 stacks of Vulnerable on vulnerable targets.</div>
      <div class="c-meta"><span>Rin</span><span>Void Finisher</span></div>
    </div>
  </div>
</section>

<!-- MECHANICS & DEITIES -->
<section id="mechanics">
  <div class="sec-head">
    <div>
      <div class="sec-label">Systems</div>
      <h2 class="sec-title">Core Systems &amp; Roguelike Engine</h2>
    </div>
  </div>

  <div class="deities-box" id="deities">
    <h3>The 6 Primordial Deities &amp; 491 Divine Sparks</h3>
    <p>In deep Zero System runs, players encounter cosmic codices linked to six deities. Each deity provides specialized Divine Sparks that permanently alter card mechanics and elevate Save Value.</p>
    <div class="deities-grid">
      <div class="deity-item"><div class="deity-name">CALIGO</div><div class="deity-focus">Tenacity &amp; Ravage (+100%)</div></div>
      <div class="deity-item"><div class="deity-name">CIRCEN</div><div class="deity-focus">AP Cost Reduction (-1 AP)</div></div>
      <div class="deity-item"><div class="deity-name">DIALLOS</div><div class="deity-focus">Shield &amp; Mitigation (+30%)</div></div>
      <div class="deity-item"><div class="deity-name">NIHILUM</div><div class="deity-focus">Card Draw &amp; Flow (+1)</div></div>
      <div class="deity-item"><div class="deity-name">SECRED</div><div class="deity-focus">Pincer Co-op Attack (100%)</div></div>
      <div class="deity-item"><div class="deity-name">VITOR</div><div class="deity-focus">DMG Scaling (+30%)</div></div>
    </div>
  </div>

  <div class="mech-grid">
    <div class="mech-card"><span class="m-icon">⚔️</span><h3>Combat System</h3><p>Turn-based card combat: draw 5 cards, spend 3 AP, chain synergies, and exploit attribute weaknesses for +25% damage.</p></div>
    <div class="mech-card"><span class="m-icon">🧠</span><h3>Mental Breakdown</h3><p>Stress builds from unblocked damage. At 100, a Combatant breaks down — team HP is blocked by a third until recovery.</p></div>
    <div class="mech-card"><span class="m-icon">💾</span><h3>Save Data</h3><p>After each Chaos run, build a permanent loadout. Save Value limits what carries over — higher difficulty means better saves.</p></div>
    <div class="mech-card"><span class="m-icon">💡</span><h3>Epiphany</h3><p>Cards evolve mid-run. Epiphany plays cost 0 AP and can transform basics into character-exclusive power cards.</p></div>
    <div class="mech-card"><span class="m-icon">🌀</span><h3>Chaos Mode</h3><p>Procedural roguelike runs through combat, event, shop, and rest zones. Permadeath feeds persistent progression.</p></div>
    <div class="mech-card"><span class="m-icon">⚙️</span><h3>Zero System</h3><p>Endgame Chaos with Codex modifiers and Chaos Orbs. Higher risk, far stronger Save Data and exclusive rewards.</p></div>
  </div>
</section>

<!-- LORE -->
<section id="lore">
  <div class="sec-head">
    <div>
      <div class="sec-label">Universe</div>
      <h2 class="sec-title">Lore &amp; Factions</h2>
    </div>
  </div>
  <div class="lore-grid">
    <div class="lore-card">
      <h3>The SS Nightmare &amp; The Amnesiac Captain</h3>
      <p>In a universe corrupted by existential fog, human settlements drift inside protected bubbles. The protagonist awakens aboard the cosmic vessel SS Nightmare with severe amnesia, known only as the Captain.</p>
      <p>Combatants bond through shared trauma and psychic Ego resonance. Navigating deeper into corrupted space unravels the origin of the 6 Cosmic Deities and the catastrophic Zero event.</p>
    </div>
    <div class="lore-card">
      <h3>7 Major Factions</h3>
      <div class="factions-list">
        <div class="f-item"><strong>Terrascion</strong><span>Renoa, Amir, Nia, Tressa, Selena</span></div>
        <div class="f-item"><strong>Stella</strong><span>Hugo, Khalipe, Magna, Mei Lin</span></div>
        <div class="f-item"><strong>Ironrain</strong><span>Luke, Maribell, Beryl, Veronica</span></div>
        <div class="f-item"><strong>Peltion</strong><span>Cassius, Owen, Rei</span></div>
        <div class="f-item"><strong>Crusaders</strong><span>Orlea, Adelheid</span></div>
        <div class="f-item"><strong>Far East</strong><span>Chizuru, Rin, Yuki, Fei</span></div>
        <div class="f-item"><strong>Wanderers / Collab</strong><span>Kayron, Tenebria, Nine</span></div>
      </div>
    </div>
  </div>
</section>

<!-- GUIDES -->
<section id="guides">
  <div class="sec-head">
    <div>
      <div class="sec-label">Strategy</div>
      <h2 class="sec-title">Guides &amp; Roadmaps</h2>
    </div>
  </div>
  <div class="guides-grid">
    <div class="guide-card">
      <div style="font-size:2rem">🌱</div>
      <h3>Beginner Starter Roadmap</h3>
      <p>First steps, Aether stamina management, reroll advice, daily routine, and progression milestones from Lv10 to Lv40.</p>
      <a href="#characters">Explore Roster →</a>
    </div>
    <div class="guide-card">
      <div style="font-size:2rem">🤝</div>
      <h3>Team Building Synergies</h3>
      <p>Synergy-first squad construction, attribute matching, and proven combos like Hugo + Tressa + Cassius.</p>
      <a href="#cards">View Card Combos →</a>
    </div>
    <div class="guide-card">
      <div style="font-size:2rem">📈</div>
      <h3>Zero System Endgame</h3>
      <p>Level → Promotion → Potential → Save Data. Farm priorities, Basin of Hyperspace prep, and Zero System readiness.</p>
      <a href="#mechanics">Check Deities →</a>
    </div>
  </div>
</section>

<!-- MODAL -->
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

<footer>
  <div class="f-links">
    <a href="#characters">Characters</a><a href="#cards">Cards</a><a href="#mechanics">Mechanics</a><a href="#deities">Deities</a><a href="#lore">Lore</a><a href="#guides">Guides</a>
  </div>
  <p>Chaos Zero Nightmare Fan Guide &amp; Database. Fan-made project by CholidAlFarisi.<br>All game assets, names, and lore © Smilegate.</p>
</footer>

<script>
const CHARACTERS = {chars_json};

// Render characters
const grid = document.getElementById('charGrid');
function renderCharacters(items) {{
  grid.innerHTML = '';
  if (items.length === 0) {{
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--muted);">No matching characters found.</div>';
    return;
  }}
  items.forEach(c => {{
    const card = document.createElement('div');
    card.className = 'char-card';
    card.dataset.r = c.rarity;
    card.dataset.job = c.job;
    const stars = '★'.repeat(c.rarity);
    card.innerHTML = `
      <div class="char-icon">${{c.icon}}</div>
      <div class="char-name">${{c.name}}</div>
      <div class="char-stars">${{stars}}</div>
      <div class="char-tags">
        <span class="tag">${{c.job}}</span>
        <span class="tag attr">${{c.ego}}</span>
        <span class="tag">${{c.faction}}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(c));
    grid.appendChild(card);
  }});
}}
renderCharacters(CHARACTERS);

// Modal logic
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

// Character Filters
const filterBtns = document.querySelectorAll('#charFilters .f-btn');
let currentFilter = 'all';
let currentJob = null;

filterBtns.forEach(btn => {{
  btn.addEventListener('click', () => {{
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (btn.dataset.f) {{
      currentFilter = btn.dataset.f;
      currentJob = null;
    }} else if (btn.dataset.job) {{
      currentFilter = null;
      currentJob = btn.dataset.job;
    }}
    applyFilters();
  }});
}});

// Search & Filtering
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function applyFilters() {{
  const q = searchInput.value.toLowerCase().trim();
  const filtered = CHARACTERS.filter(c => {{
    const matchRarity = currentFilter === 'all' || !currentFilter || String(c.rarity) === currentFilter;
    const matchJob = !currentJob || c.job.toLowerCase() === currentJob.toLowerCase();
    const matchQuery = !q || c.name.toLowerCase().includes(q) || c.job.toLowerCase().includes(q) || c.ego.toLowerCase().includes(q) || c.faction.toLowerCase().includes(q);
    return matchRarity && matchJob && matchQuery;
  }});
  renderCharacters(filtered);

  // Also filter cards preview
  const cardItems = document.querySelectorAll('#cardsGrid .card-item');
  cardItems.forEach(ci => {{
    const text = ci.textContent.toLowerCase();
    const matchCard = !q || text.includes(q);
    ci.style.display = matchCard ? '' : 'none';
  }});
}}

searchInput.addEventListener('input', applyFilters);
searchBtn.addEventListener('click', applyFilters);

// Card Type Filter
document.querySelectorAll('#cardFilters .f-btn').forEach(btn => {{
  btn.addEventListener('click', () => {{
    document.querySelectorAll('#cardFilters .f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.cf;
    document.querySelectorAll('#cardsGrid .card-item').forEach(ci => {{
      ci.style.display = (type === 'all' || ci.dataset.type === type) ? '' : 'none';
    }});
  }});
}});
</script>
</body>
</html>
'''
    with open('D:/agents/czn-fan-guide/index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    print("Successfully built D:/agents/czn-fan-guide/index.html")

if __name__ == '__main__':
    build()
