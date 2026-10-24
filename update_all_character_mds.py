"""
Script to update all 40 character markdown files in data/characters/
with comprehensive Build & Meta Guides.
"""
import os
import re
import json
from combatant_guides_data import COMBATANT_GUIDES

def main():
    base_dir = 'D:/agents/czn-fan-guide'
    chars_json_path = os.path.join(base_dir, 'raw-data/e7bot/characters-en.json')
    with open(chars_json_path, encoding='utf-8') as f:
        raw_chars = json.load(f)['data']

    slug_to_id = {}
    for c in raw_chars:
        if c.get('char_type') == 'CHAR_COMBATANT':
            slug = c['name'].lower().replace(' ', '-').replace('’', '').replace("'", '')
            slug_to_id[slug] = str(c['id'])

    characters_dir = os.path.join(base_dir, 'data/characters')
    updated_count = 0

    for root, dirs, files in os.walk(characters_dir):
        for f in files:
            if not f.endswith('.md') or f == 'index.md':
                continue
            slug = f.replace('.md', '')
            cid = slug_to_id.get(slug)
            if not cid or cid not in COMBATANT_GUIDES:
                print(f"Warning: No guide found for {f} (slug: {slug}, id: {cid})")
                continue

            guide = COMBATANT_GUIDES[cid]
            file_path = os.path.join(root, f)

            with open(file_path, 'r', encoding='utf-8') as mf:
                content = mf.read()

            # Format the guide markdown section
            teammates_str = ', '.join([f'**{t}**' for t in guide['best_teammates']])
            cards_str = ', '.join([f'`{c}`' for c in guide['core_cards']])

            guide_section = f"""---

## ⚔️ Build & Meta Guide (Day-1 & Endgame Optimization)

### Meta Tier & Role
- **Tier Rating**: **{guide['tier_label']}**
- **Tactical Role**: {guide['role']}

### Gear Matrix (Memory Fragments)
| Slot Type | Recommended Set | Tactical Role / Scaling |
|-----------|-----------------|-------------------------|
| **4-Piece Set (BiS)** | **{guide['best_set_4pc']}** | Core set bonus & multiplicative mechanic |
| **2-Piece Set (BiS)** | **{guide['best_set_2pc']}** | Stat amplification & execution threshold |
| **Alternative Set** | {guide['alt_sets']} | Secondary / budget option |

### Main Stat Priorities (Slots 4, 5, 6)
- **Slot 4 (Headpiece)**: {guide['slot_4']}
- **Slot 5 (Goblet)**: {guide['slot_5']}
- **Slot 6 (Accessory)**: {guide['slot_6']}
- **Sub-stat Priority**: `{guide['substats']}`

### Supporter Partners & Dream Squad
- **Best Partners (Supporters)**: {guide['best_partner']}
- **Dream Squad Synergies**: {teammates_str}
- **Zero System Priority Epiphanies**: {cards_str}

### Tactical Combat Playbook & Turn Execution
{guide['playstyle']}
"""

            # Remove existing guide section if present to avoid duplication
            clean_content = re.split(r'---\s*\n+## ⚔️ Build & Meta Guide', content)[0].rstrip()
            new_content = clean_content + "\n\n" + guide_section

            with open(file_path, 'w', encoding='utf-8') as mf:
                mf.write(new_content)

            updated_count += 1
            print(f"✓ Updated {f} (ID: {cid}, Tier: {guide['tier_label']})")

    print(f"\nSuccessfully updated {updated_count}/40 character markdown files with complete Build & Meta Guides.")

if __name__ == '__main__':
    main()
