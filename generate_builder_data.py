import json, re, os
from collections import defaultdict

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

def clean_html(text):
    if not text:
        return ""
    text = re.sub(r'\{[a-zA-Z0-9_]+\}', '', text)
    text = re.sub(r'#[0-9a-fA-F]{6}', '', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def parse_card_multipliers(desc_raw, cost, is_atk):
    clean = clean_html(desc_raw)
    pcts = [int(p) for p in re.findall(r'(\d+)\s*%', clean)]
    
    hit_match = re.search(r'x(\d+)', clean)
    hits = int(hit_match.group(1)) if hit_match else 1
    
    mult = 100
    if pcts:
        mult = pcts[0]
    elif is_atk:
        mult = 100 if cost <= 1 else (180 if cost == 2 else 280)
        
    shield = 0
    if 'Shield' in clean or 'Barrier' in clean:
        shield = pcts[0] if pcts else (80 * (cost or 1))
        
    return mult, hits, shield, clean

# 1. Parse Cards
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
    
    desc_raw = c.get('desc_display', c.get('desc', '')).strip()
    if not desc_raw or len(name) < 2:
        continue
        
    sct = c.get('sct_name', '')
    cost = c.get('cost', 1)
    if cost < 0: cost = 0
    cat = c.get('card_category', 'CARD_SKILL')
    is_atk = 'ATK' in cat or 'Attack' in cat
    cat_clean = 'Attack' if is_atk else ('Power' if 'POWER' in cat else ('Curse' if 'CURSE' in cat else 'Skill'))
    
    mult, hits, shield, clean_desc = parse_card_multipliers(desc_raw, cost, is_atk)
    
    seen_names[cid].add(name)
    img_path = f'assets/cards/{sct}.webp' if os.path.exists(f'{base_dir}/assets/cards/{sct}.webp') else ''
    
    card_obj = {
        'name': name,
        'cost': cost,
        'category': cat_clean,
        'mult': mult,
        'hits': hits,
        'shield': shield,
        'desc': clean_desc[:140],
        'sct': sct,
        'image': img_path
    }
    
    if sct.startswith('start_') or 'start' in sct:
        char_cards[cid]['starters'].append(card_obj)
    elif sct.startswith('collapse_') or '_ch' in c.get('id', ''):
        char_cards[cid]['collapse'].append(card_obj)
    else:
        char_cards[cid]['uniques'].append(card_obj)

# 2. Build Combatants List (Lv 60 Baseline Stats, un-geared)
combatants_data = []
for c in chars:
    if c.get('char_type') != 'CHAR_COMBATANT':
        continue
    cid = str(c['id'])
    cname = c['name']
    rarity = int(c.get('rarity', 4))
    ego_info = ego_map.get(c.get('ego', ''), {'name': 'Instinct', 'color': '#22d3ee', 'icon': '⚡'})
    job_key = (c.get('job', '')).lower()
    job_info = job_map.get(job_key, {'name': 'Striker', 'role': 'Combatant', 'icon': '⚔️'})
    
    # Official Lv 60 baseline stats (un-geared)
    if job_key in ['striker', 'hunter', 'ranger']:
        base_atk = 485 if rarity >= 5 else 425
        base_hp = 360 if rarity >= 5 else 330
        base_def = 160 if rarity >= 5 else 150
        crit_rate = 10 if job_key == 'hunter' else 5
        crit_dmg = 150
    elif job_key == 'vanguard':
        base_atk = 305 if rarity >= 5 else 275
        base_hp = 510 if rarity >= 5 else 465
        base_def = 285 if rarity >= 5 else 245
        crit_rate = 3
        crit_dmg = 125
    else: # controller / psionic
        base_atk = 430 if rarity >= 5 else 385
        base_hp = 350 if rarity >= 5 else 320
        base_def = 185 if rarity >= 5 else 175
        crit_rate = 5 if job_key == 'psionic' else 4
        crit_dmg = 140 if job_key == 'psionic' else 135

    st = list(char_cards[cid]['starters'])
    if len(st) < 4:
        if not any(x['name'] == 'Strike' for x in st):
            st.append({'name': f'{cname} Strike', 'cost': 1, 'category': 'Attack', 'mult': 100, 'hits': 1, 'shield': 0, 'desc': 'Deals 100% damage to a single enemy.', 'sct': '', 'image': ''})
        if len(st) < 4 and not any(x['name'] == 'Defend' for x in st):
            st.append({'name': f'{cname} Defend', 'cost': 1, 'category': 'Skill', 'mult': 0, 'hits': 0, 'shield': 100, 'desc': 'Grants 100% Shield to the squad.', 'sct': '', 'image': ''})
        while len(st) < 4:
            st.append({'name': f'{cname} Guard', 'cost': 1, 'category': 'Skill', 'mult': 0, 'hits': 0, 'shield': 120, 'desc': 'Grants 120% Shield and reduces team stress.', 'sct': '', 'image': ''})
    
    st = st[:4]
    un = char_cards[cid]['uniques']
    cl = char_cards[cid]['collapse']
    
    combatants_data.append({
        'id': cid,
        'name': cname,
        'rarity': rarity,
        'job': job_info['name'],
        'role': job_info['role'],
        'job_icon': job_info['icon'],
        'element': ego_info['name'],
        'element_color': ego_info['color'],
        'element_icon': ego_info['icon'],
        'faction': get_faction(cname),
        'portrait': f'assets/characters/{cid}.webp',
        'stats': {
            'atk': base_atk,
            'hp': base_hp,
            'def': base_def,
            'crit_rate': crit_rate,
            'crit_dmg': crit_dmg
        },
        'starters': st,
        'uniques': un,
        'collapse': cl
    })

combatants_data.sort(key=lambda x: (-x['rarity'], x['name']))

# 3. Build Partners / Supporters (Assigned 1-to-1 to each Combatant)
support_cards = {c.get('sct_name'): c for c in cards if c.get('sct_name', '').startswith('support_')}

partners_data = []
for p in chars:
    if p.get('char_type') != 'CHAR_SUPPORTER':
        continue
    pid = str(p['id'])
    pname = p['name']
    rarity = int(p.get('rarity', 4))
    job_key = (p.get('job', 'controller')).lower()
    job_info = job_map.get(job_key, {'name': 'Supporter', 'role': 'Buff', 'icon': '✨'})

    sct = f'support_{pid}_01'
    sc = support_cards.get(sct)
    if not sc:
        for k, v in support_cards.items():
            if k.startswith(f'support_{pid}'):
                sc = v
                sct = k
                break
    
    cost = sc.get('cost', 1) if sc else 1
    cname = sc.get('name', f"{pname}'s Assist") if sc else f"{pname}'s Assist"
    desc_raw = sc.get('desc_display', sc.get('desc', '')) if sc else 'Assists assigned combatant in combat.'
    mult, hits, shield, clean_desc = parse_card_multipliers(desc_raw, cost, False)
    img_path = f'assets/cards/{sct}.webp' if os.path.exists(f'{base_dir}/assets/cards/{sct}.webp') else ''
    
    # Partner stat bonus to assigned combatant (Lv 60 baseline un-geared)
    if job_key in ['striker', 'hunter', 'ranger']:
        atk_pct = 16 if rarity >= 5 else 12
        flat_atk = 110 if rarity >= 5 else 80
        def_pct = 0
        hp_pct = 8
        passive = f"Increases assigned combatant's ATK by +{atk_pct}% and Attack Card damage by +15%."
    elif job_key == 'vanguard':
        atk_pct = 0
        flat_atk = 0
        def_pct = 20 if rarity >= 5 else 14
        flat_def = 55 if rarity >= 5 else 35
        hp_pct = 16
        passive = f"Increases assigned combatant's DEF by +{def_pct}% and Shield gain by +20%."
    else: # controller / psionic / general
        atk_pct = 10 if rarity >= 5 else 8
        flat_atk = 60 if rarity >= 5 else 40
        def_pct = 10 if rarity >= 5 else 6
        hp_pct = 12
        passive = f"Increases assigned combatant's HP and AP cycle efficiency."

    partners_data.append({
        'id': pid,
        'name': pname,
        'rarity': rarity,
        'job': job_info['name'],
        'job_icon': job_info['icon'],
        'portrait': f'assets/characters/{pid}.webp',
        'stat_boost': {
            'atk_pct': atk_pct,
            'flat_atk': flat_atk,
            'def_pct': def_pct,
            'hp_pct': hp_pct
        },
        'passive': passive,
        'card': {
            'name': cname,
            'cost': cost,
            'category': 'Support',
            'mult': mult,
            'hits': hits,
            'shield': shield if shield > 0 else 120,
            'desc': clean_desc[:140],
            'image': img_path,
            'sct': sct
        }
    })

partners_data.sort(key=lambda x: (-x['rarity'], x['name']))

# 4. Presets (3 Combatants + 3 Assigned Partners)
p_ids = [p['id'] for p in partners_data]

presets = [
    {
        'id': 'apex_hunt',
        'name': 'The Apex Hunt Barrage',
        'desc': 'Single-target assassination engine. Tressa applies rapid debuffs, Hugo triggers repeated follow-ups, and Cassius clears curses and regulates draw flow.',
        'hero_ids': ['1010', '1009', '1049'], # Hugo, Tressa, Cassius
        'partner_ids': [p_ids[0] if len(p_ids) > 0 else '20001', p_ids[1] if len(p_ids) > 1 else '20002', p_ids[2] if len(p_ids) > 2 else '20003']
    },
    {
        'id': 'passion_firestorm',
        'name': 'Passion Firestorm',
        'desc': 'Explosive AoE burst squad. Heidemarie chains Passion volleys with Hugo follow-up strikes while Cassius guarantees steady 3 AP hand flow.',
        'hero_ids': ['1061', '1010', '1049'], # Heidemarie, Hugo, Cassius
        'partner_ids': [p_ids[3] if len(p_ids) > 3 else '20004', p_ids[0] if len(p_ids) > 0 else '20001', p_ids[4] if len(p_ids) > 4 else '20005']
    },
    {
        'id': 'iron_bulwark',
        'name': 'The Iron Bulwark',
        'desc': 'High-sustain, near-zero Stress tanking. Magna and Khalipe stack massive barriers and counterattacks while Mika fuels AP.',
        'hero_ids': ['1064', '1062', '1017'], # Magna, Khalipe, Mika
        'partner_ids': [p_ids[5] if len(p_ids) > 5 else '20006', p_ids[6] if len(p_ids) > 6 else '20007', p_ids[7] if len(p_ids) > 7 else '20008']
    },
    {
        'id': 'dark_mist_blades',
        'name': 'Dark Mist Blades',
        'desc': 'Void discard and bleeding combo. Rin transitions through stance swordplay while Luke marks critical vulnerabilities.',
        'hero_ids': ['1018', '1004', '1050'], # Rin, Luke, Owen
        'partner_ids': [p_ids[8] if len(p_ids) > 8 else '20009', p_ids[9] if len(p_ids) > 9 else '20010', p_ids[10] if len(p_ids) > 10 else '20011']
    }
]

# 5. Comprehensive Glossary
glossary = [
    {
        'term': 'Action Points (AP)',
        'category': 'Resource & Economy',
        'desc': 'Sumber daya energi per giliran untuk memainkan kartu. Setiap tim memulai giliran dengan 3 AP (dapat bertambah melalui kondisi Ravage atau Divine Sparks).'
    },
    {
        'term': 'Tenacity & Tenacity Bar',
        'category': 'Combat Mechanics',
        'desc': 'Bilah pertahanan kuning di bawah HP musuh. Mengurangi damage yang diterima dan terkikis saat musuh terkena serangan (kartu single-target mengikis 1/3 bar per AP; kartu dengan kelemahan elemen mengikis 1 bar penuh per AP).'
    },
    {
        'term': 'Ravage State',
        'category': 'Combat Mechanics',
        'desc': 'Kondisi saat bilah Tenacity musuh terkuras habis (0). Musuh terkena stun, menerima peningkatan damage kerentanan (+50% DMG), dan regu pemain langsung memperoleh +1 Bonus AP!'
    },
    {
        'term': 'Elemental Weakness (+25% DMG)',
        'category': 'Combat Mechanics',
        'desc': 'Mengeksploitasi kelemahan elemen Ego musuh (Passion, Order, Justice, Void, Instinct). Serangan yang cocok memberikan bonus damage multiplikatif +25% dan mengikis Tenacity 3x lebih cepat.'
    },
    {
        'term': 'Critical Hit & Crit Damage',
        'category': 'Stats & Combat',
        'desc': 'Serangan kritikal berbasis Crit Rate (standar dasar 5%). Saat aktif, menghasilkan 150% Crit DMG (tanpa perlengkapan), tetapi tidak menambah pengikisan Tenacity.'
    },
    {
        'term': 'Combatant',
        'category': 'Entities',
        'desc': 'Pahlawan petarung utama di garis depan. Tepat 3 Combatant membentuk satu tim, berbagi satu bilah total HP, dan masing-masing membawa 8 kartu (4 Starter + 4 Unique).'
    },
    {
        'term': 'Partner (Supporter)',
        'category': 'Entities',
        'desc': 'Karakter pendukung yang dipasangkan 1-ke-1 ke setiap Combatant (total 3 Partner per tim). Memberikan bonus stat dasar (ATK/DEF/HP), talenta pasif sinergi, dan 1 kartu Assist aktif di medan tempur.'
    },
    {
        'term': 'Mental Breakdown & Trauma Collapse',
        'category': 'Psychological System',
        'desc': 'Saat Stres regu mencapai batas maksimal 100 poin, pahlawan mengalami gangguan jiwa. Kartu Trauma Collapse dipaksa masuk ke dek operasi, namun membuka akses ke Ego Ultimate Skill.'
    },
    {
        'term': 'Equipment (Relics)',
        'category': 'Gear System',
        'desc': 'Perlengkapan dasar 3 slot (Weapon, Armor, Trinket) dengan tingkat bintang 1★ hingga 5★. Memberikan stat flat pasti (ATK, DEF, HP) dan pasif tempur unik saat memasuki pertempuran.'
    },
    {
        'term': 'Memory Fragments (Artifacts)',
        'category': 'Gear System',
        'desc': 'Sistem artefak 6 slot (Shock, Suppression, Denial, Ideal, Desire, Imagination) dengan 1 stat utama dan hingga 4 sub-stat acak. Mengaktifkan bonus set 2-piece dan 4-piece (seperti Conqueror, Spark of Passion, Line of Justice).'
    },
    {
        'term': 'Inspiration',
        'category': 'Card Keywords',
        'desc': 'Efek mutasi kartu yang mengurangi biaya AP atau menambahkan hit ekstra ketika kondisi pemicu tertentu di tangan terpenuhi.'
    },
    {
        'term': 'Exhaust',
        'category': 'Card Keywords',
        'desc': 'Kartu yang setelah dimainkan langsung dikeluarkan dari pertempuran hingga pertarungan selesai (tidak masuk ke Graveyard/Discard Pile).'
    },
    {
        'term': 'Retain',
        'category': 'Card Keywords',
        'desc': 'Kartu yang tetap berada di tangan saat giliran berakhir dan tidak dibuang ke Graveyard.'
    },
    {
        'term': 'Agony',
        'category': 'Status Effects',
        'desc': 'Status debuff kerusakan berkala (DoT) yang meledakkan damage pada awal giliran musuh atau saat dipicu oleh kartu Hunter/Psionic.'
    },
    {
        'term': 'Fixed Shield & Barrier',
        'category': 'Defense',
        'desc': 'Lapisan pelindung yang menyerap kerusakan sebelum mengenai bilah HP tim, mencegah akumulasi Stres mental regu.'
    }
]

output_js = f"""// Chaos Zero Nightmare - Team & Deck Builder Data
// Updated with Lv 60 baseline stats, 3-Combatant + 3-Partner configuration, card damage multipliers, and official Glossary
window.CZN_DATA = {{
  combatants: {json.dumps(combatants_data, ensure_ascii=False)},
  partners: {json.dumps(partners_data, ensure_ascii=False)},
  presets: {json.dumps(presets, ensure_ascii=False)},
  glossary: {json.dumps(glossary, ensure_ascii=False)}
}};
"""

with open(f'{base_dir}/teambuilder-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Generated teambuilder-data.js successfully: {len(combatants_data)} combatants, {len(partners_data)} partners, {len(presets)} presets, {len(glossary)} glossary terms.")
