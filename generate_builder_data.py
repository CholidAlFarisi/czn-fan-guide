import json, re, os

base_dir = "D:/agents/czn-fan-guide"

with open(f'{base_dir}/raw-data/e7bot/characters-en.json', 'r', encoding='utf-8') as f:
    chars = json.load(f)['data']

with open(f'{base_dir}/raw-data/e7bot/cards-en.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)['data']

ego_map = {
    'love': {'name': 'Passion', 'color': '#f85058', 'icon': '🔥'},
    'norms': {'name': 'Order', 'color': '#dfb235', 'icon': '⚖️'},
    'creed': {'name': 'Justice', 'color': '#10664d', 'icon': '⚔️'},
    'narcissism': {'name': 'Void', 'color': '#a855f7', 'icon': '🌌'},
    'instinct': {'name': 'Instinct', 'color': '#22d3ee', 'icon': '⚡'}
}

job_map = {
    'vanguard': {'name': 'Vanguard', 'role': 'Defense / Shield', 'icon': '🛡️'},
    'striker': {'name': 'Striker', 'role': 'Melee Burst DPS', 'icon': '⚔️'},
    'hunter': {'name': 'Hunter', 'role': 'Follow-Up / Extra Atk', 'icon': '🏹'},
    'ranger': {'name': 'Ranger', 'role': 'Multi-Hit / Mark', 'icon': '🎯'},
    'psionic': {'name': 'Psionic', 'role': 'Magic / Discard', 'icon': '🔮'},
    'controller': {'name': 'Controller', 'role': 'AP / Card Draw', 'icon': '✨'}
}

factions_map = {
    'Terrascion': ['Renoa', 'Haru', 'Mei Lin', 'Mika', 'Owen', 'Amir', 'Nia', 'Rei', 'Tressa', 'Yuki', 'Anika'],
    'Ironrain': ['Luke', 'Lucas', 'Beryl', 'Maribell', 'Hilde'],
    'Stella Familia': ['Khalipe', 'Hugo', 'Magna', 'Veronica'],
    'Peltion': ['Cassius'],
    'The Holy Crusaders': ['Orlea', 'Diana'],
    'Wanderers': ['Rin', 'Kayron'],
    'Imperial High Command': ['Adelheid', 'Arabella', 'Chizuru', 'Fei', 'Narja', 'Nine', 'Olga', 'Rita', 'Sereniel', 'Tenebria', 'Tiphera', 'Heidemarie']
}

def get_faction(cname):
    for fac, members in factions_map.items():
        if cname in members:
            return fac
    return 'Terrascion'

from collections import defaultdict
char_cards = defaultdict(lambda: {'starters': [], 'uniques': [], 'collapse': []})
seen_names = defaultdict(set)

for c in cards:
    bc = c.get('base_combatant')
    if not bc or not bc.get('id'):
        continue
    cid = str(bc['id'])
    name = c.get('name', '').strip()
    if not name or name in seen_names[cid]:
        continue
    desc = c.get('desc_display', c.get('desc', '')).strip()
    if not desc or len(name) < 2:
        continue
    desc = re.sub(r'\{[a-zA-Z0-9_]+\}', '', desc)
    desc = re.sub(r'#[0-9a-fA-F]{6}', '', desc)
    desc = re.sub(r'<[^>]+>', '', desc)
    desc = re.sub(r'\s+', ' ', desc).strip()
    sct = c.get('sct_name', '')
    cost = c.get('cost', 1)
    if cost < 0: cost = 0
    cat = c.get('card_category', 'CARD_SKILL')
    cat_clean = 'Attack' if 'ATK' in cat else ('Power' if 'POWER' in cat else ('Curse' if 'CURSE' in cat else 'Skill'))
    
    seen_names[cid].add(name)
    img_path = f'assets/cards/{sct}.webp' if os.path.exists(f'{base_dir}/assets/cards/{sct}.webp') else ''
    
    card_obj = {
        'name': name,
        'cost': cost,
        'category': cat_clean,
        'desc': desc[:130],
        'sct': sct,
        'image': img_path
    }
    if sct.startswith('start_') or 'start' in sct:
        char_cards[cid]['starters'].append(card_obj)
    elif sct.startswith('collapse_'):
        char_cards[cid]['collapse'].append(card_obj)
    else:
        char_cards[cid]['uniques'].append(card_obj)

combatants_data = []
for c in chars:
    if c.get('char_type') != 'CHAR_COMBATANT':
        continue
    cid = str(c['id'])
    cname = c['name']
    ego_info = ego_map.get(c.get('ego', ''), {'name': 'Neutral', 'color': '#c8c8c8', 'icon': '⚪'})
    job_info = job_map.get(c.get('job', ''), {'name': 'Striker', 'role': 'Combatant', 'icon': '⚔️'})
    
    st = list(char_cards[cid]['starters'])
    if len(st) < 4:
        if not any(x['name'] == 'Strike' for x in st):
            st.append({'name': 'Strike', 'cost': 1, 'category': 'Attack', 'desc': 'Deals 100% Attack Damage to target enemy.', 'sct': '', 'image': ''})
        if len(st) < 4 and not any(x['name'] == 'Defend' for x in st):
            st.append({'name': 'Defend', 'cost': 1, 'category': 'Skill', 'desc': 'Grants 100% Shield to the squad.', 'sct': '', 'image': ''})
        while len(st) < 4:
            st.append({'name': f'{cname} Guard', 'cost': 1, 'category': 'Skill', 'desc': 'Grants 120% Shield and reduces team stress.', 'sct': '', 'image': ''})
    
    st = st[:4]
    un = char_cards[cid]['uniques']
    cl = char_cards[cid]['collapse']
    
    combatants_data.append({
        'id': cid,
        'name': cname,
        'rarity': int(c.get('rarity', 4)),
        'job': job_info['name'],
        'role': job_info['role'],
        'job_icon': job_info['icon'],
        'element': ego_info['name'],
        'element_color': ego_info['color'],
        'element_icon': ego_info['icon'],
        'faction': get_faction(cname),
        'portrait': f'assets/characters/{cid}.webp',
        'starters': st,
        'uniques': un,
        'collapse': cl
    })

combatants_data.sort(key=lambda x: (-x['rarity'], x['name']))

support_cards = {c.get('sct_name'): c for c in cards if c.get('sct_name', '').startswith('support_')}

partners_data = []
for p in chars:
    if p.get('char_type') != 'CHAR_SUPPORTER':
        continue
    pid = str(p['id'])
    pname = p['name']
    sct = f'support_{pid}_01'
    sc = support_cards.get(sct)
    if not sc:
        for k, v in support_cards.items():
            if k.startswith(f'support_{pid}'):
                sc = v
                sct = k
                break
    
    cost = sc.get('cost', 2) if sc else 2
    cname = sc.get('name', f'{pname} Strike') if sc else f'{pname} Strike'
    desc = sc.get('desc_display', sc.get('desc', '')) if sc else 'Assists squad in combat.'
    desc = re.sub(r'<[^>]+>', '', desc)
    desc = re.sub(r'\{[a-zA-Z0-9_]+\}', '', desc)
    desc = re.sub(r'#[0-9a-fA-F]{6}', '', desc)
    desc = re.sub(r'\s+', ' ', desc).strip()
    img_path = f'assets/cards/{sct}.webp' if os.path.exists(f'{base_dir}/assets/cards/{sct}.webp') else ''
    
    partners_data.append({
        'id': pid,
        'name': pname,
        'rarity': int(p.get('rarity', 4)),
        'job': p.get('job', 'Partner').capitalize(),
        'color': p.get('color', '#10664d'),
        'portrait': f'assets/characters/{pid}.webp',
        'card': {
            'name': cname,
            'cost': cost,
            'desc': desc[:130],
            'image': img_path,
            'sct': sct
        }
    })

partners_data.sort(key=lambda x: (-x['rarity'], x['name']))

presets = [
    {
        'id': 'apex_hunt',
        'name': 'The Apex Hunt Barrage',
        'desc': 'Tressa stacks 0 AP Agony debuffs, triggering relentless Hugo Extra Attacks while Cassius regulates deck cycle.',
        'hero_ids': ['1010', '1009', '1049'], # Hugo, Tressa, Cassius
        'partner_id': '20001' # Arwen / Nia
    },
    {
        'id': 'passion_firestorm',
        'name': 'Passion Firestorm',
        'desc': 'Heidemarie unleashes explosive Passion burst chains, triggering Hugo follow-up strikes and rapid wave clears.',
        'hero_ids': ['1061', '1010', '1049'], # Heidemarie, Hugo, Cassius
        'partner_id': '20004' # Janet
    },
    {
        'id': 'iron_bulwark',
        'name': 'The Iron Bulwark',
        'desc': 'Near-zero Stress accumulation. Khalipe stacks defense mitigation, Magna retaliates with counterattacks, Mika feeds AP.',
        'hero_ids': ['1064', '1062', '1017'], # Magna, Khalipe, Mika
        'partner_id': '20005' # Hilde
    },
    {
        'id': 'dark_mist_blades',
        'name': 'Dark Mist Blade Art',
        'desc': 'Rin transitions through Dark Cloud Stances with 0-cost swordplay while Luke marks critical vulnerabilities.',
        'hero_ids': ['1018', '1004', '1050'], # Rin, Luke, Owen
        'partner_id': '20002' # Gaya
    }
]

output_js = f"""// Chaos Zero Nightmare - Team & Deck Builder Data
window.CZN_DATA = {{
  combatants: {json.dumps(combatants_data, ensure_ascii=False)},
  partners: {json.dumps(partners_data, ensure_ascii=False)},
  presets: {json.dumps(presets, ensure_ascii=False)}
}};
"""

with open(f'{base_dir}/teambuilder-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Generated teambuilder-data.js successfully: {len(combatants_data)} combatants, {len(partners_data)} partners, {len(presets)} presets.")
