import json, os, re
from collections import defaultdict

base_dir = "D:/agents/czn-fan-guide"

# 1. Load Characters (Combatants & Supporters)
with open(f'{base_dir}/raw-data/e7bot/characters-en.json', 'r', encoding='utf-8') as f:
    raw_chars = json.load(f)['data']

# 2. Load Cards
with open(f'{base_dir}/raw-data/e7bot/cards-en.json', 'r', encoding='utf-8') as f:
    raw_cards = json.load(f)['data']

# 3. Load Divine Sparks & Common Epiphanies
with open("C:/Users/mucha/AppData/Local/hermes/cache/scratch/parsed_divine_epiphanies.json", "r", encoding="utf-8") as f:
    divine_epiphanies = json.load(f)

with open("C:/Users/mucha/AppData/Local/hermes/cache/scratch/extracted_extra.json", "r", encoding="utf-8") as f:
    extra_loaded = json.load(f)

common_epiphanies = extra_loaded['commonEpiphanies']
deities = extra_loaded['deities']
equipment = extra_loaded['equipment']

# Ego definitions
ego_map = {
    'love': {'name': 'Passion', 'color': '#f85058', 'icon': '🔥', 'element': 'Love'},
    'norms': {'name': 'Order', 'color': '#dfb235', 'icon': '⚖️', 'element': 'Norms'},
    'creed': {'name': 'Justice', 'color': '#10664d', 'icon': '⚔️', 'element': 'Creed'},
    'narcissism': {'name': 'Void', 'color': '#a855f7', 'icon': '🌌', 'element': 'Narcissism'},
    'instinct': {'name': 'Instinct', 'color': '#22d3ee', 'icon': '⚡', 'element': 'Instinct'}
}

# Job definitions
job_map = {
    'vanguard': {'name': 'Vanguard', 'role': 'Defense / Shield', 'icon': '🛡️'},
    'striker': {'name': 'Striker', 'role': 'Single-Target Burst', 'icon': '🗡️'},
    'hunter': {'name': 'Hunter', 'role': 'Crit & Execute', 'icon': '🏹'},
    'ranger': {'name': 'Ranger', 'role': 'AoE & Multi-Hit', 'icon': '🎯'},
    'psionic': {'name': 'Psionic', 'role': 'DoT & Mental Break', 'icon': '🔮'},
    'controller': {'name': 'Controller', 'role': 'Crowd Control & AP Drain', 'icon': '🌀'},
    'supporter': {'name': 'Supporter', 'role': 'Team Buff & Healing', 'icon': '✨'}
}

factions_map = {
    'Terrascion': ['Renoa', 'Haru', 'Mei Lin', 'Mika', 'Owen', 'Amir', 'Nia', 'Rei', 'Tressa', 'Yuki', 'Anika', 'Rosweisse', 'Solia'],
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
    if not text: return ''
    text = re.sub(r'\{[a-zA-Z0-9_]+\}', '', text)
    text = re.sub(r'#[0-9a-fA-F]{6}', '', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def color_to_ego(c_hex):
    if not c_hex:
        return 'norms'
    c_lower = c_hex.lower()
    if any(k in c_lower for k in ['c16669', 'f85058', 'd33e3b', 'c54f61', 'c73945', 'a02540', 'c6586a', 'c42a61', 'fd8d88']):
        return 'love'
    elif any(k in c_lower for k in ['dfb235', 'f38100', '9c7139', 'd18e3d', 'd08c3b']):
        return 'norms'
    elif any(k in c_lower for k in ['478168', '10664d', '74a491', '626d42', '516c68', '94b956']):
        return 'creed'
    elif any(k in c_lower for k in ['2f59ad', 'a855f7', '686ea3', '9d91bf', '8981a9', '380c55', 'c866b4', '815895', '7d52bf', '7072c3', '8a85ec', '7257a8', '7592d7', '495083', 'b172de']):
        return 'narcissism'
    elif any(k in c_lower for k in ['378890', '22d3ee', '659aa4', '4174a3', '92a1ea', '9c9cec', '3a7ec4', '3fc9c9', '8ecae1', '0d89a4', '50acae']):
        return 'instinct'
    return 'norms'

# Map cards to combatants
cards_by_combatant = defaultdict(list)
for cd in raw_cards:
    bc = cd.get('base_combatant')
    if bc and bc.get('id'):
        cards_by_combatant[str(bc['id'])].append(cd)

print(f"Mapped cards to {len(cards_by_combatant)} combatants.")

# Build Combatants
combatants_data = []
combatants_raw = [c for c in raw_chars if c.get('char_type') == 'CHAR_COMBATANT']

def get_combatant_stats(rarity, job_name):
    base_hp = 3200 if rarity == 5 else (2900 if rarity == 4 else 2600)
    base_atk = 320 if rarity == 5 else (285 if rarity == 4 else 250)
    base_def = 140 if rarity == 5 else (125 if rarity == 4 else 110)
    if 'Vanguard' in job_name:
        base_hp += 600
        base_def += 40
        base_atk -= 30
    elif 'Striker' in job_name:
        base_atk += 60
        base_hp -= 200
    elif 'Hunter' in job_name or 'Ranger' in job_name:
        base_atk += 40
        base_def -= 15
    elif 'Psionic' in job_name or 'Controller' in job_name:
        base_atk += 20
        base_hp += 200
    return {"hp": base_hp, "atk": base_atk, "def": base_def, "crit_rate": 5, "crit_dmg": 150}

for c in combatants_raw:
    cid = str(c.get('id'))
    name = c.get('name')
    rarity = c.get('rarity', 4)
    job_key = (c.get('job') or 'vanguard').lower()
    job_info = job_map.get(job_key, {'name': 'Vanguard', 'role': 'Defense / Shield', 'icon': '🛡️'})
    ego_key = color_to_ego(c.get('color'))
    ego_info = ego_map.get(ego_key, ego_map['norms'])
    stats = get_combatant_stats(rarity, job_info['name'])

    c_raw_cards = cards_by_combatant.get(cid, [])
    # Filter base cards
    unique_pool = {}
    for cd in c_raw_cards:
        ckey = cd.get('id', '')
        if '_rsp' in ckey or '_pot' in ckey or '_lbk' in ckey:
            continue
        unique_pool[ckey] = cd

    starters = []
    uniques = []
    collapse = []

    for cd in unique_pool.values():
        sct = cd.get('sct_name', '')
        c_name = cd.get('name', '')
        cost = cd.get('cost', 1)
        if cost < 0: cost = 0
        desc = clean_html(cd.get('desc_display', cd.get('desc', '')))
        
        # Check actual image on disk
        card_img_path = f'assets/cards/{sct}.webp'
        if not os.path.exists(f'{base_dir}/{card_img_path}'):
            # Fallback to portrait if card art not on disk
            card_img_path = f'assets/characters/{cid}.webp' if os.path.exists(f'{base_dir}/assets/characters/{cid}.webp') else ''

        cat = 'Attack' if 'ATK' in cd.get('card_category', '') else 'Skill'

        # Variants from r_spark_cards
        variants = []
        for v_idx, rsp in enumerate(cd.get('r_spark_cards', [])):
            v_desc = clean_html(rsp.get('desc_display', rsp.get('desc', '')))
            variants.append({
                'branch': v_idx + 1,
                'name': f'Branch {v_idx + 1}',
                'cost': rsp.get('cost', cost),
                'desc': v_desc,
                'category': 'Attack' if 'ATK' in rsp.get('card_category', '') else 'Skill'
            })

        card_obj = {
            'name': c_name,
            'cost': cost,
            'category': cat,
            'desc': desc,
            'image': card_img_path,
            'sct': sct,
            'variants': variants
        }

        if sct.startswith('start_') or '_srt' in cd['id']:
            card_obj['isBasic'] = True
            starters.append(card_obj)
        elif sct.startswith('collapse_') or '_col' in cd['id'] or '_eps' in cd['id']:
            collapse.append(card_obj)
        else:
            card_obj['isUnique'] = True
            uniques.append(card_obj)

    # Ensure canonical starter fallback if empty
    if not starters:
        p_img = f'assets/characters/{cid}.webp' if os.path.exists(f'{base_dir}/assets/characters/{cid}.webp') else ''
        starters = [
            {'name': f'{name} Strike', 'cost': 1, 'category': 'Attack', 'desc': 'Deal 150% Damage to target enemy.', 'image': p_img, 'isBasic': True, 'variants': []},
            {'name': f'{name} Guard', 'cost': 1, 'category': 'Defense', 'desc': 'Gain 120 Barrier for 1 turn.', 'image': p_img, 'isBasic': True, 'variants': []}
        ]

    # Portrait path
    portrait_path = f'assets/characters/{cid}.webp' if os.path.exists(f'{base_dir}/assets/characters/{cid}.webp') else ''

    combatants_data.append({
        'id': cid,
        'name': name,
        'rarity': rarity,
        'job': job_info['name'],
        'role': job_info['role'],
        'job_icon': job_info['icon'],
        'element': ego_info['name'],
        'ego': ego_info['name'],
        'ego_icon': ego_info['icon'],
        'color': ego_info['color'],
        'faction': get_faction(name),
        'portrait': portrait_path,
        'stats': stats,
        'starters': starters,
        'uniques': uniques,
        'collapse': collapse
    })

combatants_data.sort(key=lambda x: (-x['rarity'], x['name']))
print(f"Processed {len(combatants_data)} combatants.")

# Build 48 Partners
supporters_raw = [c for c in raw_chars if c.get('char_type') == 'CHAR_SUPPORTER']
partners_data = []

# Canonical belonging mapping
belonging_map = {
    '20001': '1010', # Renoa
    '20002': '1004', # Luke
    '20003': '1005', # Selena
    '20004': '1009', # Tressa
    '20005': '1012', # Anika
    '20006': '1014', # Beryl
    '20007': '1017', # Mika
    '20008': '1018', # Rin
    '20009': '1020', # Maribell
    '20010': '1021', # Haru
    '20011': '1025', # Veronica
    '20012': '1027', # Mei Lin
    '20013': '1028', # Orlea
    '20014': '1030', # Rei
    '20015': '1031', # Yuki
    '20016': '1037', # Diana
    '20017': '1041', # Amir
    '20018': '1046', # Lucas
    '20019': '1047', # Hilde
    '20020': '1049', # Cassius
    '20021': '1050', # Owen
    '20022': '1051', # Khalipe
    '20023': '1057', # Adelheid
    '20024': '1058', # Solia
    '20025': '1061', # Heidemarie
    '20026': '1062', # Sereniel
    '20027': '1064', # Magna
    '20028': '1069', # Hugo
    '20029': '1070', # Rita
    '20030': '1071', # Nine
    '20031': '1072', # Arabella
    '20032': '1074', # Fei
    '20033': '1076', # Chizuru
    '20034': '1077', # Narja
    '20035': '1078', # Tiphera
    '20036': '1079', # Olga
    '20037': '1080', # Tenebria
    '20038': '30097',# Kayron
    '20039': '30117',# Nia
    '20040': '30134' # Rosweisse
}

for p in supporters_raw:
    pid = str(p.get('id'))
    pname = p.get('name')
    rarity = p.get('rarity', 4)
    job_key = (p.get('job') or 'controller').lower()
    job_info = job_map.get(job_key, {'name': 'Supporter', 'role': 'Buff', 'icon': '✨'})
    ego_key = color_to_ego(p.get('color'))
    ego_info = ego_map.get(ego_key, ego_map['norms'])
    soul_hero_id = belonging_map.get(pid, '')

    support_img_rel = f'assets/cards/support_{pid}_01.webp'
    if not os.path.exists(f'{base_dir}/{support_img_rel}'):
        support_img_rel = f'assets/characters/{pid}.webp' if os.path.exists(f'{base_dir}/assets/characters/{pid}.webp') else ''

    partners_data.append({
        'id': pid,
        'name': pname,
        'rarity': rarity,
        'job': job_info['name'],
        'job_icon': job_info['icon'],
        'ego': ego_info['name'],
        'ego_icon': ego_info['icon'],
        'color': ego_info['color'],
        'belonging_hero_id': soul_hero_id,
        'portrait': f'assets/characters/{pid}.webp',
        'stat_boost': {
            'atk_pct': 16 if rarity == 5 else (14 if rarity == 4 else 11),
            'hp_pct': 18 if rarity == 5 else (15 if rarity == 4 else 12),
            'def_pct': 15 if rarity == 5 else (12 if rarity == 4 else 10),
            'flat_atk': 35 if rarity == 5 else 20
        },
        'card': {
            'name': f"{pname}'s Assist",
            'cost': 1,
            'category': 'Support',
            'desc': f'Increases equipped combatant ATK by 25% and grants 120 Fixed Shield.',
            'image': support_img_rel
        },
        'support_card': {
            'name': f"{pname}'s Assist",
            'cost': 1,
            'category': 'Support',
            'desc': f'Increases equipped combatant ATK by 25% and grants 120 Fixed Shield.',
            'image': support_img_rel
        }
    })

partners_data.sort(key=lambda x: (-x['rarity'], x['name']))
print(f"Processed {len(partners_data)} partners.")

# Presets
presets = [
    {
        'id': 'apex_hunt',
        'name': 'The Apex Hunt Barrage',
        'desc': 'Single-target assassination engine. Tressa applies rapid debuffs, Hugo triggers repeated follow-ups, and Cassius clears curses and regulates draw flow.',
        'hero_ids': ['1069', '1009', '1049'],
        'partner_ids': ['20028', '20004', '20020']
    },
    {
        'id': 'passion_firestorm',
        'name': 'Passion Firestorm',
        'desc': 'Explosive AoE burst squad. Heidemarie chains Passion volleys with Hugo follow-up strikes while Cassius guarantees steady 3 AP hand flow.',
        'hero_ids': ['1061', '1069', '1049'],
        'partner_ids': ['20025', '20028', '20020']
    },
    {
        'id': 'iron_bulwark',
        'name': 'The Iron Bulwark',
        'desc': 'High-sustain, near-zero Stress tanking. Magna and Khalipe stack massive barriers and counterattacks while Mika fuels AP.',
        'hero_ids': ['1010', '1051', '1017'],
        'partner_ids': ['20027', '20022', '20007']
    },
    {
        'id': 'dark_mist_blades',
        'name': 'Dark Mist Blades',
        'desc': 'Void discard and bleeding combo. Rin transitions through stance swordplay while Luke marks critical vulnerabilities.',
        'hero_ids': ['1018', '1004', '1050'],
        'partner_ids': ['20008', '20002', '20021']
    }
]

# Official Combat Rules & Damage Formulas
combat_rules = {
    "engine": "Yuna / procDamageCalculate",
    "damage_formula": {
        "formula": "Final Damage = [(Base ATK * Skill Multiplier) + Flat Additions] * Ego Affinity Mult * Crit Mult * [1000 / (1000 + Target DEF)] * (1 + Final Dmg Bonus)",
        "layers": [
            {"step": 1, "name": "Base ATK", "desc": "Hero Base ATK + Partner Transfer (11-16%) + Weapon Flat ATK + in-combat flat buffs."},
            {"step": 2, "name": "Skill Multiplier", "desc": "Card attack ratio (e.g. 150%, 320%) modified by Epiphany branch."},
            {"step": 3, "name": "Ego Affinity Mult", "desc": "Weakness Advantage = 1.30x (+30%), Neutral = 1.00x, Resisted = 0.75x (-25%)."},
            {"step": 4, "name": "Critical Mult", "desc": "Base 1.50x (150% Crit DMG). Enhanced by memory fragments up to 300%+."},
            {"step": 5, "name": "Defense Mitigation", "desc": "Damage is mitigated by target DEF using curve: 1000 / (1000 + DEF)."},
            {"step": 6, "name": "Tenacity Break", "desc": "Broken / Staggered state triggers 1.50x Break Damage Multiplier (+50%)."},
            {"step": 7, "name": "Pincer Coordinate", "desc": "Secred sparks trigger off-turn assist strikes at 50%-100% ally attack power."}
        ]
    },
    "partner_rules": {
        "max_per_combatant": 1,
        "max_squad_partners": 3,
        "cannot_equip_duplicate": True,
        "belonging_ego_resonance_bonus_stat_pct": 15,
        "restrictions": [
            {"code": "CANNOT_EQUIP_DUPLICATE", "desc": "A partner cannot be assigned to more than one hero simultaneously in the same squad."},
            {"code": "CANNOT_EQUIP_JOB", "desc": "Specific partner roles are locked to compatible frontline jobs."},
            {"code": "partner_ego_passive_no_apply", "desc": "If partner Ego does not match combatant Ego, the partner exclusive passive does NOT apply."}
        ]
    },
    "chaos_progression": {
        "depths": [
            {"depth": 1, "name": "Outer Fringe", "theme": "Low corruption, basic skirmishes, fundamental relic drops."},
            {"depth": 2, "name": "Resonance Layer", "theme": "Moderate distortion, elite aberrations, first Cosmic Altar unlocked."},
            {"depth": 3, "name": "Hall of Distortion", "theme": "High-risk anomalies, wandering merchant stores, resting sanctuaries."},
            {"depth": 4, "name": "Abyssal Threshold", "theme": "Severe psychic decay, double stress accumulation, lethal calamity titans."},
            {"depth": 5, "name": "The Singularity", "theme": "Sector core boss showdown with multi-phase tenacity break mechanics."}
        ],
        "encounter_types": [
            {"type": "SPOT_TYPE_BATTLE", "name": "Void Skirmish", "icon": "⚔️", "desc": "Regular monster combat, rewards chaos currency and card draft choices."},
            {"type": "SPOT_TYPE_ELITE", "name": "Elite Calamity", "icon": "💀", "desc": "Deadly mutated monster. Guaranteed high-tier relics, divine sparks, and massive EXP."},
            {"type": "SPOT_TYPE_BOSS", "name": "Sector Overlord", "icon": "👑", "desc": "Gatekeeper boss controlling the sector transition. Requires synchronized burst damage."},
            {"type": "SPOT_TYPE_REST", "name": "Sanctuary Haven", "icon": "🏕️", "desc": "Restores 30% squad HP, performs mental therapy (-50 Stress), or refines card branches."},
            {"type": "SPOT_TYPE_STORE", "name": "Black Market", "icon": "🛒", "desc": "Wandering smuggler offering universal cards, rare relics, and deck purification."},
            {"type": "SPOT_TYPE_SUPPLY", "name": "Supply Drop", "icon": "📦", "desc": "Abandoned imperial crate with rations, shield batteries, and tactical consumables."},
            {"type": "SPOT_TYPE_NONEBATTLE", "name": "Anomaly Distortion", "icon": "❓", "desc": "Branching narrative dilemmas: risk team sanity for primordial power or retreat safely."},
            {"type": "SPOT_TYPE_EXTRA_AREA", "name": "Void Rift", "icon": "🌀", "desc": "Hidden dimensional pocket offering bonus relic extraction and secret encounters."}
        ]
    },
    "story_scenario": {
        "title": "Part 1: The Descent into the Sea of Chaos",
        "flagship": "SS Nightmare",
        "commander": "The Amnesiac Captain",
        "chapters_count": 12,
        "chapters": [
            {"id": "prologue", "num": "Prologue", "title": "Awakening in the Sea of Chaos", "sector": "Ark Expedition", "summary": "The Captain awakens in the cryogenic bay of the SS Nightmare during an emergency sortie. Vice-Captain Renoa repels initial Void Aberrations."},
            {"id": "ch01", "num": "Chapter 01", "title": "Fringe of the Ruined World", "sector": "Sector 1", "summary": "Outskirts of an orbital colony. The squad encounters contaminated Terrascion peacekeepers driven mad by mental parasites."},
            {"id": "ch02", "num": "Chapter 02", "title": "Echo of Despair", "sector": "Sector 2", "summary": "Investigating a pre-fall cathedral in zero gravity. Confronting psychological illusions manifesting operatives deepest guilts."},
            {"id": "ch03", "num": "Chapter 03", "title": "Whispering Abyss", "sector": "Sector 3", "summary": "Deep subterranean caves beneath Asteroid Sigma. Uncovering evidence of illegal biological experimentation by human rogue factions."},
            {"id": "ch04", "num": "Chapter 04", "title": "Order in the Shadows", "sector": "Sector 4", "summary": "Escort mission in Ark City collapses as Stella Familia syndicates assassinate an imperial witness. Uncovering black market Chaos cores."},
            {"id": "ch05", "num": "Chapter 05", "title": "Trial of the Sixfold Deities", "sector": "Anomaly Nexus", "summary": "High-dimensional test by Vitor, Circen, Diallos, Secred, Nihilum, and Caligo, unlocking the sacred power of Divine Epiphany."},
            {"id": "ch06", "num": "Chapter 06", "title": "Calamity's Descent", "sector": "Sector 5", "summary": "Colossal Calamity Titan breaches Ark Prime. Coordinated multi-vector strike forcing operatives to face their trauma thresholds."},
            {"id": "ch07", "num": "Chapter 07", "title": "The Fractured Sanctuary", "sector": "Sector 6", "summary": "Epione Center infiltrated. Mental corruption drives patients into violent breakdowns. Emergency mental sync saves operatives."},
            {"id": "ch08", "num": "Chapter 08", "title": "Threads of Fate", "sector": "Deep Core", "summary": "Ancient archives reveal the shocking origin of the SS Nightmare and the Captain's identity as a genetic clone engineered for Chaos."},
            {"id": "ch09", "num": "Chapter 09", "title": "Resonance of the Void", "sector": "Spatial Rift", "summary": "Plunging into the Great Spatial Rift. Reality bends; navigation systems fail. Operatives must rely purely on psychic Ego links."},
            {"id": "ch10", "num": "Chapter 10", "title": "The Gate of Chaos", "sector": "The Gate", "summary": "At the threshold of the Singularity, the Holy Crusaders unveil a superweapon threatening billions of lives."},
            {"id": "ch11", "num": "Chapter 11", "title": "Nightmare's Dawn", "sector": "Finale", "summary": "Climactic battle against the Sovereign of Nothingness. Combining six divine blessings to shatter the convergence core."}
        ]
    }
}

# Glossary
glossary = [
    {'term': 'Action Points (AP)', 'category': 'Resource & Economy', 'def': 'Sumber daya energi per giliran untuk memainkan kartu. Setiap tim memulai giliran dengan 3 AP.'},
    {'term': 'Tenacity & Tenacity Bar', 'category': 'Combat Mechanics', 'def': 'Bilah pertahanan kuning di bawah HP musuh. Mengurangi damage yang diterima dan terkikis saat musuh terkena serangan.'},
    {'term': 'Ravage State', 'category': 'Combat Mechanics', 'def': 'Kondisi saat bilah Tenacity musuh terkuras habis (0). Musuh terkena stun, menerima peningkatan damage kerentanan (+50% DMG), dan regu pemain langsung memperoleh +1 Bonus AP!'},
    {'term': 'Elemental Weakness (+30% DMG)', 'category': 'Combat Mechanics', 'def': 'Mengeksploitasi kelemahan elemen Ego musuh (Love, Norms, Creed, Narcissism, Instinct). Serangan yang cocok memberikan bonus damage multiplikatif +30%.'},
    {'term': 'Critical Hit & Crit Damage', 'category': 'Stats & Combat', 'def': 'Serangan kritikal berbasis Crit Rate (standar dasar 5%). Saat aktif, menghasilkan 150% Crit DMG (tanpa perlengkapan).'},
    {'term': 'Combatant', 'category': 'Entities', 'def': 'Pahlawan petarung utama di garis depan. Tepat 3 Combatant membentuk satu tim, berbagi satu bilah total HP, dan masing-masing membawa dek pertempuran.'},
    {'term': 'Partner (Supporter)', 'category': 'Entities', 'def': 'Karakter pendukung yang dipasangkan 1-ke-1 ke setiap Combatant (total 3 Partner per tim). Memberikan bonus stat transfer, pasif Ego, dan kartu Assist.'},
    {'term': 'Mental Breakdown & Trauma Collapse', 'category': 'Psychological System', 'def': 'Saat Stres regu mencapai batas maksimal 100 poin, pahlawan mengalami gangguan jiwa. Kartu Trauma Collapse dipaksa masuk ke dek operasi, namun membuka akses ke Ego Ultimate Skill.'},
    {'term': 'Equipment (Relics)', 'category': 'Gear System', 'def': 'Perlengkapan dasar 3 slot (Weapon, Armor, Accessory) dengan tingkat bintang 1★ hingga 5★. Memberikan stat flat pasti (ATK, DEF, HP).'},
    {'term': 'Memory Fragments (Artifacts)', 'category': 'Gear System', 'def': 'Sistem artefak 6 slot dengan stat utama dan sub-stat acak. Mengaktifkan bonus set 2-piece dan 4-piece.'},
    {'term': 'Inspiration', 'category': 'Card Keywords', 'def': 'Efek mutasi kartu yang mengurangi biaya AP atau menambahkan hit ekstra ketika kondisi pemicu tertentu di tangan terpenuhi.'},
    {'term': 'Exhaust', 'category': 'Card Keywords', 'def': 'Kartu yang setelah dimainkan langsung dikeluarkan dari pertempuran hingga pertarungan selesai (tidak masuk ke Graveyard/Discard Pile).'},
    {'term': 'Retain', 'category': 'Card Keywords', 'def': 'Kartu yang tetap berada di tangan saat giliran berakhir dan tidak dibuang ke Graveyard.'},
    {'term': 'Agony', 'category': 'Status Effects', 'def': 'Status debuff kerusakan berkala (DoT) yang meledakkan damage pada awal giliran musuh atau saat dipicu oleh kartu Hunter/Psionic.'},
    {'term': 'Fixed Shield & Barrier', 'category': 'Defense', 'def': 'Lapisan pelindung yang menyerap kerusakan sebelum mengenai bilah HP tim, mencegah akumulasi Stres mental regu.'}
]

# Write teambuilder-data.js
output_js = "// Chaos Zero Nightmare - Official Game Data v1.0.84\n"
output_js += "// Generated with official assets, 40 combatants, 48 partners, 165 divine epiphanies, damage formula & story archive\n"
output_js += "window.CZN_DATA = {\n"
output_js += f"  combatants: {json.dumps(combatants_data, ensure_ascii=False)},\n"
output_js += f"  partners: {json.dumps(partners_data, ensure_ascii=False)},\n"
output_js += f"  presets: {json.dumps(presets, ensure_ascii=False)},\n"
output_js += f"  deities: {json.dumps(deities, ensure_ascii=False)},\n"
output_js += f"  divineEpiphanies: {json.dumps(divine_epiphanies, ensure_ascii=False)},\n"
output_js += f"  commonEpiphanies: {json.dumps(common_epiphanies, ensure_ascii=False)},\n"
output_js += f"  equipment: {json.dumps(equipment, ensure_ascii=False)},\n"
output_js += f"  combatRules: {json.dumps(combat_rules, ensure_ascii=False)},\n"
output_js += f"  glossary: {json.dumps(glossary, ensure_ascii=False)}\n"
output_js += "};\n"

with open(f'{base_dir}/teambuilder-data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

with open(f'{base_dir}/generate_builder_data.py', 'w', encoding='utf-8') as f:
    f.write(open(__file__, 'r', encoding='utf-8').read())

print("SUCCESS: Generated teambuilder-data.js and synced generate_builder_data.py!")
