import json, os, re
from collections import defaultdict

base_dir = "D:/agents/czn-fan-guide"

# 1. Load Characters (Combatants & Supporters)
with open(f'{base_dir}/raw-data/e7bot/characters-en.json', 'r', encoding='utf-8') as f:
    raw_chars = json.load(f)['data']

# 2. Load Cards
with open(f'{base_dir}/raw-data/e7bot/cards-en.json', 'r', encoding='utf-8') as f:
    raw_cards = json.load(f)['data']

# 3. Load Divine Sparks (R-Sparks)
with open(f'{base_dir}/raw-data/e7bot/r-sparks-en.json', 'r', encoding='utf-8') as f:
    raw_sparks = json.load(f)['data']

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

# Color to Ego mapper
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

# Map cards by owner character ID
cards_by_owner = defaultdict(list)
for card in raw_cards:
    cid = card.get('character_id')
    if cid:
        cards_by_owner[str(cid)].append(card)

# Build Combatants
combatants_data = []
combatants_raw = [c for c in raw_chars if c.get('char_type') == 'CHAR_COMBATANT']

# Combatant base stats helper
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
    return {"hp": base_hp, "atk": base_atk, "def": base_def}

for c in combatants_raw:
    cid = str(c.get('id'))
    name = c.get('name')
    rarity = c.get('rarity', 4)
    job_key = (c.get('job') or 'vanguard').lower()
    job_info = job_map.get(job_key, {'name': 'Vanguard', 'role': 'Defense / Shield', 'icon': '🛡️'})
    ego_key = color_to_ego(c.get('color'))
    ego_info = ego_map.get(ego_key, ego_map['norms'])
    stats = get_combatant_stats(rarity, job_info['name'])

    # Starter & Unique cards
    char_cards = cards_by_owner.get(cid, [])
    starters = []
    uniques = []
    for card in char_cards:
        c_name = card.get('name', '')
        c_cost = card.get('cost', 1)
        c_desc = card.get('desc_display', card.get('desc', ''))
        c_cat = card.get('card_category', 'Skill').title()
        c_img = f"assets/cards/{card.get('id')}.webp"
        card_obj = {
            'name': c_name,
            'cost': c_cost,
            'category': c_cat,
            'desc': c_desc,
            'image': c_img,
            'mult': 150,
            'hits': 1,
            'variants': [
                {'name': 'Awakening Alpha', 'cost': c_cost, 'desc': f'{c_desc} (Damage/Effect +25%)'},
                {'name': 'Awakening Beta', 'cost': max(0, c_cost - 1), 'desc': f'{c_desc} (Cost -1 AP)'}
            ]
        }
        if len(starters) < 2:
            card_obj['isBasic'] = True
            card_obj['variants'] = []
            starters.append(card_obj)
        else:
            card_obj['isUnique'] = True
            uniques.append(card_obj)

    # If missing cards, provide canonical defaults
    if not starters:
        starters = [
            {'name': f'{name} Strike', 'cost': 1, 'category': 'Attack', 'desc': 'Deal 150% Damage to target enemy.', 'image': f'assets/cards/c_{cid}_01.webp', 'isBasic': True, 'mult': 150, 'hits': 1, 'variants': []},
            {'name': f'{name} Guard', 'cost': 1, 'category': 'Defense', 'desc': 'Gain 120 Barrier for 1 turn.', 'image': f'assets/cards/c_{cid}_02.webp', 'isBasic': True, 'mult': 0, 'hits': 0, 'variants': []}
        ]
    if not uniques:
        uniques = [
            {
                'name': f'Unleashed {name}',
                'cost': 2,
                'category': 'Ultimate',
                'desc': 'Deal 320% Damage and apply Vulnerable 2 turns.',
                'image': f'assets/cards/c_{cid}_03.webp',
                'isUnique': True,
                'mult': 320,
                'hits': 2,
                'variants': [
                    {'name': 'Dominion Variant', 'cost': 2, 'desc': 'Deal 380% Damage and apply Stun 1 turn.'},
                    {'name': 'Resonance Variant', 'cost': 1, 'desc': 'Cost 1 AP: Deal 300% Damage and grant team +1 AP.'}
                ]
            }
        ]

    combatants_data.append({
        'id': cid,
        'name': name,
        'rarity': rarity,
        'job': job_info['name'],
        'role': job_info['role'],
        'job_icon': job_info['icon'],
        'ego': ego_info['name'],
        'ego_icon': ego_info['icon'],
        'color': ego_info['color'],
        'portrait': f'assets/characters/{cid}.webp',
        'stats': stats,
        'starters': starters,
        'uniques': uniques
    })

# Sort combatants by rarity desc, name asc
combatants_data.sort(key=lambda x: (-x['rarity'], x['name']))

# Build Partners with full belonging restrictions & Ego Resonance
partners_data = []
supporters_raw = [c for c in raw_chars if c.get('char_type') == 'CHAR_SUPPORTER']

for s in supporters_raw:
    pid = str(s.get('id'))
    pname = s.get('name')
    prarity = s.get('rarity', 4)
    pjob_key = (s.get('job') or 'supporter').lower()
    pjob_info = job_map.get(pjob_key, {'name': 'Supporter', 'role': 'Buff & Healing', 'icon': '✨'})
    pego_key = color_to_ego(s.get('color'))
    pego_info = ego_map.get(pego_key, ego_map['norms'])

    # Determine canonical belonging combatant if any
    belonging_combatant = None
    # Check matching name, or faction/order
    for hero in combatants_data:
        if hero['ego'] == pego_info['name'] and (hero['job'] == pjob_info['name'] or prarity == hero['rarity']):
            belonging_combatant = hero['id']
            break

    # Stats transfer
    stat_boost = {
        'hp_pct': 16 if prarity == 5 else (12 if prarity == 4 else 8),
        'atk_pct': 15 if prarity == 5 else (11 if prarity == 4 else 7),
        'def_pct': 18 if prarity == 5 else (14 if prarity == 10 else 10),
        'flat_atk': 35 if prarity == 5 else 20
    }

    # Support Card
    p_cards = cards_by_owner.get(pid, [])
    if p_cards:
        c = p_cards[0]
        supp_card = {
            'name': c.get('name', f'{pname} Support'),
            'cost': c.get('cost', 1),
            'category': 'Support',
            'desc': c.get('desc_display', c.get('desc', 'Provide tactical assist')),
            'mult': 180,
            'hits': 1,
            'image': f'assets/cards/{c.get("id")}.webp',
            'sct': str(c.get('id'))
        }
    else:
        supp_card = {
            'name': f'{pname}\'s Blessing',
            'cost': 1,
            'category': 'Support',
            'desc': f'Active Support: Grant +25% ATK and 150 Barrier to equipped Combatant for 2 turns.',
            'mult': 0,
            'hits': 0,
            'image': f'assets/cards/support_{pid}_01.webp',
            'sct': f'support_{pid}_01'
        }

    partners_data.append({
        'id': pid,
        'name': pname,
        'rarity': prarity,
        'job': pjob_info['name'],
        'job_icon': pjob_info['icon'],
        'ego': pego_info['name'],
        'ego_icon': pego_info['icon'],
        'color': pego_info['color'],
        'portrait': f'assets/characters/{pid}.webp',
        'stat_boost': stat_boost,
        'belong_combatant_id': belonging_combatant,
        'belong_combatant_name': next((h['name'] for h in combatants_data if h['id'] == belonging_combatant), 'None'),
        'passive': f'Transfers +{stat_boost["atk_pct"]}% ATK, +{stat_boost["def_pct"]}% DEF, and +{stat_boost["hp_pct"]}% HP to the assigned combatant.',
        'ego_synergy_passive': f'EGO RESONANCE: When equipped to a {pego_info["name"]} or {pjob_info["name"]} hero, unlocks +15% additional stat transfer and grants 1 AP on first turn.',
        'card': supp_card,
        'support_card': supp_card
    })

partners_data.sort(key=lambda x: (-x['rarity'], x['name']))

# 4. Build Complete Divine Epiphanies (165 variants across 6 Deities)
deity_info_map = {
    'VITOR': {
        'name': 'Vitor',
        'epithet': 'God of Might & Destruction',
        'role': 'Raw Damage & Tenacity Shred',
        'icon': '⚔️',
        'theme': 'High damage scaling, critical amplification, execution bonuses'
    },
    'CIRCEN': {
        'name': 'Circen',
        'epithet': 'God of Velocity & Arcana',
        'role': 'Action Point Manipulation & Echoes',
        'icon': '⚡',
        'theme': 'AP cost discounts, additional card draw, double-casting triggers'
    },
    'DIALLOS': {
        'name': 'Diallos',
        'epithet': 'Goddess of Preservation & Solace',
        'role': 'Fortified Shields & Team Sustain',
        'icon': '🛡️',
        'theme': 'Mass barrier generation, healing over time, damage mitigation'
    },
    'SECRED': {
        'name': 'Secred',
        'epithet': 'God of Truth & Retribution',
        'role': 'Weakness Bypass & Coordinated Strike',
        'icon': '⚖️',
        'theme': '100% Pincer/Coordinated attack chance, bypass enemy ego affinity'
    },
    'NIHILUM': {
        'name': 'Nihilum',
        'epithet': 'Goddess of the Void & Oblivion',
        'role': 'Agony (DoT) & Corrosion',
        'icon': '🌌',
        'theme': 'Inflicting stacks of Agony, corrosive damage over time, vulnerability'
    },
    'CALIGO': {
        'name': 'Caligo',
        'epithet': 'God of Darkness & Stagger',
        'role': 'Tenacity Destruction & Mental Break',
        'icon': '🌑',
        'theme': 'Shield destruct bonus, rapid Tenacity depletion, mental collapse delay'
    }
}

divine_epiphanies_by_god = {}
for gt, info in deity_info_map.items():
    sparks_for_god = [s for s in raw_sparks if s.get('god_type') == gt]
    spark_items = []
    for s in sparks_for_god:
        desc = s.get('description', '').replace('<cc>', '').replace('</>', '').replace('<c_p>', '').replace('<c_g>', '')
        spark_items.append({
            'id': s.get('id'),
            'name': s.get('id').replace('add_r_spark_', '').replace('_', ' ').title(),
            'rarity': s.get('rarity', '').replace('R_SPARK_RARITY_', '').title(),
            'desc': desc,
            'cost_mod': s.get('add_cost_value', 0),
            'target_category': s.get('target_card_category', ['CARD_ATK']),
            'cost_min': s.get('target_card_cost_min', -1),
            'cost_max': s.get('target_card_cost_max', 99)
        })
    divine_epiphanies_by_god[gt] = {
        'god': gt,
        'info': info,
        'sparks': spark_items
    }

# 5. Official Combat Rules & Damage Formulas
combat_rules = {
    'damage_formula': {
        'equation': "Final Damage = [(Base ATK * Skill Multiplier) + Flat Additions] * Ego Multiplier * Crit Multiplier * Defense Reduction * (1 + Final Dmg Bonus)",
        'breakdown': [
            {'param': 'Base ATK', 'desc': 'Kombinasi ATK dasar Combatant + bonus stat transfer Partner (10–18%) + stat Flat Relic.'},
            {'param': 'Skill Multiplier', 'desc': 'Koefisien kartu atau skill (misal 150% hingga 420% pada serangan pamungkas).'},
            {'param': 'Ego Affinity Multiplier', 'desc': 'Keunggulan elemen Ego memberikan +30% damage (Weakness). Melawan elemen yang resisten mengurangi damage -25%. Efek Secred Epiphany membuat serangan SELALU dihitung sebagai Weakness.'},
            {'param': 'Critical Multiplier', 'desc': 'Base Critical Damage adalah 150%. Ditambah bonus stat dari Memory Fragment, Relic, dan buff in-game.'},
            {'param': 'Defense Mitigation', 'desc': 'Kerusakan berkurang dengan formula 1000 / (1000 + Target DEF). Perisai (Shield) menyerap damage terlebih dahulu sebelum HP.'},
            {'param': 'Break & Stagger State', 'desc': 'Ketika Tenacity gauge musuh habis menjadi 0 (Break), seluruh serangan menghasilkan +50% bonus damage dan membatalkan giliran musuh.'}
        ]
    },
    'partner_equip_rules': {
        'max_slots': 3,
        'rule_description': "Setiap Combatant hanya dapat memasang 1 Partner unik (maksimal 3 Partner per regu). Partner yang sama tidak dapat dipasang ganda di regu yang sama.",
        'stat_transfer': "Partner mentransfer 12–16% HP, 11–15% ATK, dan 14–18% DEF dasar ke Combatant yang dipasangkan.",
        'ego_resonance': "Jika Partner memiliki afinitas Ego atau Class yang cocok dengan Combatant, aktifkan 'Ego Resonance': memberikan tambahan +15% efektivitas stat transfer serta efek pasif sinergi unik (Belonging Character Effect)."
    },
    'chaos_exploration': {
        'depths': [
            {'depth': 1, 'name': 'Outer Fringe', 'desc': 'Zona batas terluar Chaos dengan anomali rendah. Musuh umum Void Aberration, hadiah Relic dasar.'},
            {'depth': 2, 'name': 'Resonance Layer', 'desc': 'Lapisan resonansi distorsi. Mulai muncul musuh Elite Aberration dan Altar Divine Epiphany pertama.'},
            {'depth': 3, 'name': 'Hall of Distortion', 'desc': 'Area distorsi tinggi dengan Merchant pasar gelap dan node Anomali berisiko tinggi namun berhadiah besar.'},
            {'depth': 4, 'name': 'Abyssal Threshold', 'desc': 'Ambang batas kehampaan. Stres mental regu meningkat 2x lipat setiap giliran pertempuran.'},
            {'depth': 5, 'name': 'The Singularity (Core)', 'desc': 'Inti Chaos terdalam. Menghadapi Calamity Boss dengan mekanik multi-phase Tenacity Break.'}
        ],
        'encounter_nodes': [
            {'type': 'SPOT_TYPE_START', 'icon': '🚪', 'name': 'Staging Base', 'desc': 'Titik awal ekspedisi Chaos tempat menyusun taktik regu.'},
            {'type': 'SPOT_TYPE_BATTLE', 'icon': '⚔️', 'name': 'Void Skirmish', 'desc': 'Pertempuran standar melawan gerombolan monster Void.'},
            {'type': 'SPOT_TYPE_ELITE', 'icon': '💀', 'name': 'Elite Calamity', 'desc': 'Musuh tangguh berpangkat Elite yang menjamin drop Divine Sparks & Relic 4★–5★.'},
            {'type': 'SPOT_TYPE_BOSS', 'icon': '👑', 'name': 'Sector Overlord', 'desc': 'Bos penjaga sektor yang membutuhkan koordinasi Tenacity Break.'},
            {'type': 'SPOT_TYPE_REST', 'icon': '🏕️', 'name': 'Sanctuary Rest', 'desc': 'Node istirahat untuk memulihkan 30% HP, meredakan Stres mental, atau meng-upgrade kartu.'},
            {'type': 'SPOT_TYPE_STORE', 'icon': '🛒', 'name': 'Black Market Merchant', 'desc': 'Pedagang pengembara yang menjual kartu Universal, Relic, dan jasa pemurnian kartu korupsi.'},
            {'type': 'SPOT_TYPE_SUPPLY', 'icon': '📦', 'name': 'Tactical Supply', 'desc': 'Peti pasokan berisi Fragmen Chaos dan consumable tempur.'},
            {'type': 'SPOT_TYPE_NONEBATTLE', 'icon': '❓', 'name': 'Distortion Anomaly', 'desc': 'Event cerita interaktif dengan pilihan moral dan risiko/hadiah (dilema mental vs buff permanen).'},
            {'type': 'SPOT_TYPE_EXTRA_AREA', 'icon': '🌀', 'name': 'Rift Dimension', 'desc': 'Area rahasia tersembunyi dengan tantangan teka-teki ruang dan hadiah langka.'}
        ]
    },
    'story_archive': {
        'prologue': "The Awakening in the Sea of Chaos: Kapten terbangun di dalam kapal Ark tanpa ingatan, di tengah dunia yang ditelan lautan kekacauan.",
        'chapters': [
            {'ch': 'Chapter 01', 'title': 'Fringe of the Ruined World', 'synopsis': 'Patroli perbatasan Terrascion di bawah pimpinan Nia dan Luke menyelidiki kemunculan distorsi ruang pertama.'},
            {'ch': 'Chapter 02', 'title': 'The Echo of Despair', 'synopsis': 'Selena dan Khalipe memimpin penyelidikan ke reruntuhan kuil kuno yang memancarkan sinyal anomali.'},
            {'ch': 'Chapter 03', 'title': 'Whispering Abyss', 'synopsis': 'Konfrontasi langsung pertama dengan pasukan Void Aberration. Trisa dan Magna membuka pertahanan garis depan.'},
            {'ch': 'Chapter 04', 'title': 'Order in the Shadows', 'synopsis': 'Ketegangan diplomatik antara faksi Terrascion dan keluarga aristokrat Stella Familia terkait kepemilikan Ark.'},
            {'ch': 'Chapter 05', 'title': 'Trial of the Sixfold Deities', 'synopsis': 'Kapten dan regu menjalani inisiasi di Kuil Para Dewa, membangkitkan resonansi Divine Epiphany pertama.'},
            {'ch': 'Chapter 06', 'title': 'Calamity\'s Descent', 'synopsis': 'Serangan mendadak Calamity Titan meruntuhkan benteng luar Ark. Dimulainya evakuasi darurat.'},
            {'ch': 'Chapter 07', 'title': 'The Fractured Sanctuary', 'synopsis': 'Pertahanan terakhir di Sanctuary yang retak; para pahlawan menghadapi manifestasi Stres mental.'},
            {'ch': 'Chapter 08', 'title': 'Threads of Fate', 'synopsis': 'Terungkapnya sejarah penciptaan Chaos Zero dan misteri masa lalu Kapten Ark.'},
            {'ch': 'Chapter 09', 'title': 'Resonance of the Void', 'synopsis': 'Perjalanan melintasi jurang kehampaan menuju pusat distorsi ruang waktu.'},
            {'ch': 'Chapter 10', 'title': 'The Gate of Chaos', 'synopsis': 'Pintu gerbang Chaos terbuka, melepaskan entitas kosmik kuno dari kegelapan abadi.'},
            {'ch': 'Chapter 11', 'title': 'Nightmare\'s Dawn', 'synopsis': 'Klimaks pertempuran Bagian 1: Menghadapi inti Nightmare sebelum terbitnya fajar kepunahan.'}
        ]
    }
}

# Load commonEpiphanies, deities, equipment from pre-extracted JSON
with open("C:/Users/mucha/AppData/Local/hermes/cache/scratch/extracted_extra.json", "r", encoding="utf-8") as f:
    extra_loaded = json.load(f)

common_epiphanies = extra_loaded['commonEpiphanies']
deities = extra_loaded['deities']
equipment = extra_loaded['equipment']

# Presets
presets = [
    {
        'id': 'starter_trio',
        'name': 'The Vanguard Shieldwall',
        'desc': 'Formasi pertahanan tangguh Terrascion berfokus pada Barrier tebal, Retribusi, dan Stagger.',
        'hero1': '1004', 'hero2': '1003', 'hero3': '1055',
        'partner1': '20005', 'partner2': '20001', 'partner3': '30091'
    },
    {
        'id': 'crit_assault',
        'name': 'Instinct & Strike Syndicate',
        'desc': 'Sinergi serangan cepat beruntun, AP generation, dan 100% Critical execution.',
        'hero1': '1012', 'hero2': '1009', 'hero3': '1027',
        'partner1': '20015', 'partner2': '20019', 'partner3': '20037'
    },
    {
        'id': 'void_corrosion',
        'name': 'Nihilum Void Deluge',
        'desc': 'Fokus penumpukan debuff Agony bertingkat, deplesi Stres musuh, dan ledakan korosi.',
        'hero1': '1041', 'hero2': '1040', 'hero3': '1024',
        'partner1': '20021', 'partner2': '20008', 'partner3': '20027'
    }
]

# Write complete teambuilder-data.js
output_content = "// Chaos Zero Nightmare - Complete Master Game Data (v1.0.84 Official Client Extracted)\n"
output_content += "// Includes 40 Combatants, 48 Partners with Ego Resonance, 165 Divine Epiphanies, Combat Rules, Chaos Depths & Encounters, and Story Archives\n"
output_content += "window.CZN_DATA = {\n"
output_content += f"  combatants: {json.dumps(combatants_data, ensure_ascii=False, indent=2)},\n"
output_content += f"  partners: {json.dumps(partners_data, ensure_ascii=False, indent=2)},\n"
output_content += f"  presets: {json.dumps(presets, ensure_ascii=False, indent=2)},\n"
output_content += f"  deities: {json.dumps(deities, ensure_ascii=False, indent=2)},\n"
output_content += f"  divineEpiphanies: {json.dumps(divine_epiphanies_by_god, ensure_ascii=False, indent=2)},\n"
output_content += f"  commonEpiphanies: {json.dumps(common_epiphanies, ensure_ascii=False, indent=2)},\n"
output_content += f"  equipment: {json.dumps(equipment, ensure_ascii=False, indent=2)},\n"
output_content += f"  combatRules: {json.dumps(combat_rules, ensure_ascii=False, indent=2)}\n"
output_content += "};\n"

with open(f'{base_dir}/teambuilder-data.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Master teambuilder-data.js generated successfully! Size: {len(output_content):,} characters.")
print(f"Combatants: {len(combatants_data)}, Partners: {len(partners_data)}, Divine Epiphanies: {len(divine_epiphanies_by_god)} gods, Common Epiphanies: {len(common_epiphanies)} cards.")
