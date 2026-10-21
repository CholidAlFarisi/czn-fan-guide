// Chaos Zero Nightmare - Team & Deck Builder Data
// Updated with Lv 60 baseline stats, 3-Combatant + 3-Partner configuration, card damage multipliers, and official Glossary
window.CZN_DATA = {
  combatants: [{"id": "1055", "name": "Adelheid", "rarity": 5, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Imperial High Command", "portrait": "assets/characters/1055.webp", "stats": {"atk": 305, "hp": 510, "def": 285, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Gather Around", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1055_01", "image": "assets/cards/start_1055_01.webp"}, {"name": "Fairy's Protection", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1055_02", "image": "assets/cards/start_1055_02.webp"}, {"name": "Adelheid Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Adelheid Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Doggie", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "1 Defense-Based Damage", "sct": "unique_1055_06", "image": "assets/cards/unique_1055_06.webp"}, {"name": "Teddy", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 80, "desc": "1 Shield1 Damage Reduction", "sct": "unique_1055_06", "image": "assets/cards/unique_1055_06.webp"}, {"name": "Once Upon A Time", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Apply Blessing to 2 random card(s) in Draw Pile, then Draw 1 of those cards", "sct": "unique_1055_01", "image": "assets/cards/unique_1055_01.webp"}, {"name": "Protect Us", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "For the next 2 Blessing cards activated, Draw 1 Blessing card", "sct": "unique_1055_02", "image": "assets/cards/unique_1055_02.webp"}, {"name": "Friends from Fairy Tales", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "Select and create 1 of either Doggie or Teddy", "sct": "unique_1055_03", "image": "assets/cards/unique_1055_03.webp"}, {"name": "Truth Behind A Story", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Defense-Based Damage+100% Damage Amount taken by the target for 1 turn", "sct": "unique_1055_04", "image": "assets/cards/unique_1055_04.webp"}, {"name": "Garden of Secrets", "cost": 1, "category": "Power", "mult": 200, "hits": 1, "shield": 200, "desc": "200% Shield25% Shield Retention", "sct": "unique_1055_05", "image": "assets/cards/unique_1055_05.webp"}, {"name": "Doggie (Pack)", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Defense-Based DamageIncrease Damage Amount by 50% for each Doggie in hand before activation", "sct": "unique_1055_06", "image": "assets/cards/unique_1055_06.webp"}, {"name": "Doggie (Morphed)", "cost": 0, "category": "Attack", "mult": 90, "hits": 1, "shield": 0, "desc": "90% x 4 Defense-Based DamageWhen an Attack Card is used, change this card into Teddy (Morphed)", "sct": "unique_1055_06", "image": "assets/cards/unique_1055_06.webp"}, {"name": "Teddy (Morphed)", "cost": 0, "category": "Skill", "mult": 300, "hits": 1, "shield": 300, "desc": "300% Shield3 Damage ReductionWhen a Skill Card is used, change this card into Doggie (Morphed)", "sct": "unique_1055_07", "image": "assets/cards/unique_1055_07.webp"}], "collapse": [{"name": "Happy Ending", "cost": 6, "category": "Skill", "mult": 300, "hits": 1, "shield": 300, "desc": "300% ShieldFixed Heal equal to Shield in possession(cannot exceed 30% of max HP)", "sct": "collapse_1055_01", "image": "assets/cards/collapse_1055_01.webp"}, {"name": "Escapism", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1055_02", "image": "assets/cards/collapse_1055_02.webp"}]}, {"id": "30115", "name": "Arabella", "rarity": 5, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Imperial High Command", "portrait": "assets/characters/30115.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Diagonal Slash", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage to all enemies", "sct": "start_30115_01", "image": "assets/cards/start_30115_01.webp"}, {"name": "Crimson Domain", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30115_02", "image": "assets/cards/start_30115_02.webp"}, {"name": "Arabella Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Arabella Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Scream For Me", "cost": 1, "category": "Attack", "mult": 40, "hits": 1, "shield": 0, "desc": "40% Damage and 2 Fracture to all enemies4 Fracture to the enemy with the highest HP", "sct": "unique_30115_01", "image": "assets/cards/unique_30115_01.webp"}, {"name": "Observer’s Pleasure", "cost": 0, "category": "Skill", "mult": 20, "hits": 1, "shield": 0, "desc": "1 Fracture AmplificationFor each enemy present, +20% Damage Amount to this unit for 1 turn", "sct": "unique_30115_02", "image": "assets/cards/unique_30115_02.webp"}, {"name": "Hollow Verdict", "cost": 1, "category": "Attack", "mult": 40, "hits": 1, "shield": 0, "desc": "40% Damage and 2 Fracture to all enemies, and activate Fracture inflicted by this unit", "sct": "unique_30115_03", "image": "assets/cards/unique_30115_03.webp"}, {"name": "Sadistic Restraint", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage, and activate Fracture inflicted by this unit 2 timesAdd 1 Hit for each type of harmful effect the target has (max 3 times)", "sct": "unique_30115_04", "image": "assets/cards/unique_30115_04.webp"}, {"name": "The Art of Unmaking", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Damage to all enemiesIncrease Damage Amount by 15% for each type of harmful effect the target has (max 120%)Fracture Amplification: 2x ", "sct": "unique_30115_05", "image": "assets/cards/unique_30115_05.webp"}], "collapse": [{"name": "Pathetic End", "cost": 5, "category": "Attack", "mult": 600, "hits": 1, "shield": 0, "desc": "600% DamageFor 2 turn(s), inflict Fixed Damage to the target equal to 30% of Damage Amount taken by all enemies(cannot exceed 1000% of Arabe", "sct": "collapse_30115_01", "image": "assets/cards/collapse_30115_01.webp"}, {"name": "Charm", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30115_02", "image": "assets/cards/collapse_30115_02.webp"}]}, {"id": "1060", "name": "Chizuru", "rarity": 5, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Imperial High Command", "portrait": "assets/characters/1060.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Moonslash", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1060_01", "image": "assets/cards/start_1060_01.webp"}, {"name": "Spiritflame’s Ward", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1060_02", "image": "assets/cards/start_1060_02.webp"}, {"name": "Chizuru Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Chizuru Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Karmic Flames", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage1 Cursed ShacklesCursed Shackles: Add 1 Hit", "sct": "unique_1060_01", "image": "assets/cards/unique_1060_01.webp"}, {"name": "Tsukuyomi", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "3 Will-O’-Wisp for each Hit of the next Attack Card of this unit activated", "sct": "unique_1060_03", "image": "assets/cards/unique_1060_03.webp"}, {"name": "Bound At Dusk", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "At the start of the turn, gain InhibitDecrease Cost of 2 random card(s) of other Combatants by 1 until activated", "sct": "unique_1060_02", "image": "assets/cards/unique_1060_02.webp"}, {"name": "Oni Hunt", "cost": 1, "category": "Attack", "mult": 70, "hits": 1, "shield": 0, "desc": "70% Damage+80% Damage Amount to the next Bind card activated", "sct": "unique_1060_04", "image": "assets/cards/unique_1060_04.webp"}, {"name": "Shadow of the Moon", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage × 1+80% Damage Amount for each Bind stack", "sct": "unique_1060_06", "image": "assets/cards/unique_1060_06.webp"}, {"name": "Shadow of the Moon+", "cost": 1, "category": "Attack", "mult": 180, "hits": 1, "shield": 0, "desc": "180% Damage × 2Recover 5% of Max HP+80% Damage Amount for each Bind stack", "sct": "unique_1060_06", "image": "assets/cards/unique_1060_06.webp"}], "collapse": [{"name": "Moonlight of High Tide", "cost": 5, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% Damage+100% Damage Amount for each Shadow of the Moon created (max 10)", "sct": "collapse_1060_01", "image": "assets/cards/collapse_1060_01.webp"}, {"name": "Fear", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1060_02", "image": "assets/cards/collapse_1060_02.webp"}]}, {"id": "1061", "name": "Diana", "rarity": 5, "job": "Hunter", "role": "Follow-Up / Extra Atk", "job_icon": "🏹", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "The Holy Crusaders", "portrait": "assets/characters/1061.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 10, "crit_dmg": 150}, "starters": [{"name": "Disruption Fire", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1061_01", "image": "assets/cards/start_1061_01.webp"}, {"name": "Protect Me", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1061_03", "image": "assets/cards/start_1061_03.webp"}, {"name": "Cupid Shot", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage60% Extra Attack × Bullet card count in hand x to a random enemy", "sct": "start_1061_02", "image": "assets/cards/start_1061_02.webp"}, {"name": "Diana Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "With All My Heart!", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageCreate 2 Heart Breaker", "sct": "unique_1061_01", "image": "assets/cards/unique_1061_01.webp"}, {"name": "C’mere, Milk & Pong!", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Heart Shaker", "sct": "unique_1061_02", "image": "assets/cards/unique_1061_02.webp"}, {"name": "Pistol of Purification", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage2 ResonanceIf this card is Discarded, activate Resonance inflicted on the target by this unit 3 more times", "sct": "unique_1061_03", "image": "assets/cards/unique_1061_03.webp"}, {"name": "Blooming Love", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 1 Quietus card(s)Discard 2", "sct": "unique_1061_04", "image": "assets/cards/unique_1061_04.webp"}, {"name": "Liberated Feelings", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "Draw 2 Exhaust Bullet card(s)300% DamageIncrease base Damage Amount by 30% for each different Bullet card in hand", "sct": "unique_1061_05", "image": "assets/cards/unique_1061_05.webp"}, {"name": "Heart Breaker", "cost": 0, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% DamageDiscard 1 random Bullet card(s)If this card is Discarded, 120% Extra Attack to a random enemy", "sct": "unique_1061_06", "image": "assets/cards/unique_1061_06.webp"}, {"name": "Heart Shaker", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "1 ResonanceDiscard 1 random card(s) in Draw PileWhen this card is Discarded, 2 Resonance to a random enemy", "sct": "unique_1061_07", "image": "assets/cards/unique_1061_07.webp"}], "collapse": [{"name": "Radiant Smile", "cost": 5, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 1 Cupid ShotCreate 2 Heart Bullet", "sct": "collapse_1061_01", "image": "assets/cards/collapse_1061_01.webp"}, {"name": "Gloom", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1061_02", "image": "assets/cards/collapse_1061_02.webp"}]}, {"id": "30048", "name": "Fei", "rarity": 5, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Imperial High Command", "portrait": "assets/characters/30048.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Azure Flame", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_30048_01", "image": "assets/cards/start_30048_01.webp"}, {"name": "Melancholy", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30048_02", "image": "assets/cards/start_30048_02.webp"}, {"name": "Fei Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Fei Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Exorcist’s Formation", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "On Draw through an ability, 1 DescentCreate 8 Inferno Rhapsody in Draw Pile", "sct": "unique_30048_01", "image": "assets/cards/unique_30048_01.webp"}, {"name": "Heavensfall", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage × 3", "sct": "unique_30048_07", "image": "assets/cards/unique_30048_07.webp"}, {"name": "Inferno Rhapsody", "cost": 0, "category": "Attack", "mult": 70, "hits": 1, "shield": 0, "desc": "70% Damage1 Flame ArtsWhen Flame Arts is activated through this card, Draw 1", "sct": "unique_30048_06", "image": "assets/cards/unique_30048_06.webp"}, {"name": "Inferno Rhapsody: Heaven", "cost": 0, "category": "Attack", "mult": 110, "hits": 1, "shield": 0, "desc": "110% Damage1 Flame ArtsWhen Flame Arts is activated through this card, 3 Descent", "sct": "unique_30048_06", "image": "assets/cards/unique_30048_06.webp"}, {"name": "Soliloquy", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 2Of those Drawn cards, Discard all 1-Cost or higher cards", "sct": "unique_30048_02", "image": "assets/cards/unique_30048_02.webp"}, {"name": "Night Rain", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "1 Flame ArtsStreak: Draw 1 Inferno Rhapsody", "sct": "unique_30048_03", "image": "assets/cards/unique_30048_03.webp"}, {"name": "Soulfire Dance", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage × X+1Draw X", "sct": "unique_30048_04", "image": "assets/cards/unique_30048_04.webp"}, {"name": "Blazing War Dance", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Move Inferno Rhapsody to hand for each Descent gained this turn", "sct": "unique_30048_05", "image": "assets/cards/unique_30048_05.webp"}], "collapse": [{"name": "Heavenscleaver", "cost": 5, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "8 DescentFor 2 turn(s), at the start of the turn, 8 DescentIncrease Damage Amount of the next Heavensfall by 100%", "sct": "collapse_30048_01", "image": "assets/cards/collapse_30048_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30048_02", "image": "assets/cards/collapse_30048_02.webp"}]}, {"id": "1062", "name": "Haru", "rarity": 5, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Void", "element_color": "#a855f7", "element_icon": "🌌", "faction": "Terrascion", "portrait": "assets/characters/1062.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Anchor", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1062_01", "image": "assets/cards/start_1062_01.webp"}, {"name": "Power Anchor", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Damage", "sct": "start_1062_03", "image": "assets/cards/start_1062_03.webp"}, {"name": "Anchor Drop", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1062_02", "image": "assets/cards/start_1062_02.webp"}, {"name": "Haru Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Anchor Shot", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Damage+100% Damage Amount for each activation of this card (max 10)", "sct": "unique_1062_01", "image": "assets/cards/unique_1062_01.webp"}, {"name": "Anchor Pointer", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Move Anchor Shot from Draw Pile or Graveyard to hand", "sct": "unique_1062_03", "image": "assets/cards/unique_1062_03.webp"}, {"name": "Power Charge", "cost": 2, "category": "Attack", "mult": 240, "hits": 1, "shield": 0, "desc": "240% Damage to all enemiesIf there is only one target, +100% Damage Amount", "sct": "unique_1062_05", "image": "assets/cards/unique_1062_05.webp"}, {"name": "Charge Energy", "cost": 0, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "Increase Damage Amount of Attack Cards of this unit by 50% for 1 turn", "sct": "unique_1062_04", "image": "assets/cards/unique_1062_04.webp"}, {"name": "Lift Anchor", "cost": 0, "category": "Skill", "mult": 80, "hits": 1, "shield": 0, "desc": "Increase Damage Amount of Anchor Shot in hand by 80% for 1 turn until activated", "sct": "unique_1062_02", "image": "assets/cards/unique_1062_02.webp"}], "collapse": [{"name": "Power Strike", "cost": 6, "category": "Attack", "mult": 600, "hits": 1, "shield": 0, "desc": "600% Damage+60% Damage Amount for each beneficial effect in possession (max +600%)", "sct": "collapse_1062_01", "image": "assets/cards/collapse_1062_01.webp"}, {"name": "Fear", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1062_02", "image": "assets/cards/collapse_1062_02.webp"}]}, {"id": "30093", "name": "Heidemarie", "rarity": 5, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Imperial High Command", "portrait": "assets/characters/30093.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Sword Flash", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_30093_01", "image": "assets/cards/start_30093_01.webp"}, {"name": "Sword Barrier", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30093_02", "image": "assets/cards/start_30093_02.webp"}, {"name": "Heidemarie Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Heidemarie Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Sword Rain", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage × 2Attunement: Create 1 Effulgent Blade", "sct": "unique_30093_01", "image": "assets/cards/unique_30093_01.webp"}, {"name": "Hero to All", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 3Apply Linked to those cards for this turn", "sct": "unique_30093_02", "image": "assets/cards/unique_30093_02.webp"}, {"name": "Thread of Light", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage+120% Damage Amount for each Linked card in hand before activation", "sct": "unique_30093_03", "image": "assets/cards/unique_30093_03.webp"}, {"name": "Effulgent Expansion", "cost": 2, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "Create 2 Effulgent Blade+50% Damage Amount to Effulgent Blade for 1 turn", "sct": "unique_30093_04", "image": "assets/cards/unique_30093_04.webp"}, {"name": "Effulgent Compression", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "When moved to Graveyard, 1 Effulgent Light", "sct": "unique_30093_05", "image": "assets/cards/unique_30093_05.webp"}, {"name": "Effulgent Release", "cost": 0, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% DamageExhaust all Effulgent Blade in Graveyard, then +100% base Damage Amount for each ExhaustedAt the end of the turn, change this car", "sct": "unique_30093_06", "image": "assets/cards/unique_30093_06.webp"}, {"name": "Effulgent Blade", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% DamageWhen this card is Discarded, 120% Extra Attack to a random enemyThis card does not move to Draw Pile on Shuffle", "sct": "unique_30093_07", "image": "assets/cards/unique_30093_07.webp"}], "collapse": [{"name": "Elysium of Blades", "cost": 5, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage+80% Damage Amount for each card Discarded this battle (max 20 cards)", "sct": "collapse_30093_01", "image": "assets/cards/collapse_30093_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30093_02", "image": "assets/cards/collapse_30093_02.webp"}]}, {"id": "30113", "name": "Hilde", "rarity": 5, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Ironrain", "portrait": "assets/characters/30113.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Multishot", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage to all enemies", "sct": "start_30113_01", "image": "assets/cards/start_30113_01.webp"}, {"name": "Bowguard", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30113_02", "image": "assets/cards/start_30113_02.webp"}, {"name": "Hilde Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Hilde Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Quiver Reload", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 3 Homing Arrow in Draw Pile", "sct": "unique_30113_01", "image": "assets/cards/unique_30113_01.webp"}, {"name": "Plasma Rain", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage and 2 Ionization to all enemies", "sct": "unique_30113_02", "image": "assets/cards/unique_30113_02.webp"}, {"name": "Draw & Release", "cost": 1, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "Draw 2 Attack Card(s) of this unit+50% Damage Amount to those cards for 1 turn until activated", "sct": "unique_30113_03", "image": "assets/cards/unique_30113_03.webp"}, {"name": "Big Game Ranger", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "On Hit, 2 Zero In", "sct": "unique_30113_04", "image": "assets/cards/unique_30113_04.webp"}, {"name": "Vortex Arrow", "cost": 1, "category": "Attack", "mult": 3120, "hits": 1, "shield": 0, "desc": "Draw 3120% Damage to all enemies+60% Damage Amount for each Attack Card Drawn through an ability this turn (max 8 cards)", "sct": "unique_30113_05", "image": "assets/cards/unique_30113_05.webp"}, {"name": "Homing Arrow", "cost": 0, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Extra Attack to the enemy with the lowest HPDraw 1Attunement: Proc this card", "sct": "unique_30113_06", "image": "assets/cards/unique_30113_06.webp"}, {"name": "Homing Arrow (Fracture)", "cost": 0, "category": "Attack", "mult": 50, "hits": 1, "shield": 0, "desc": "50% Extra Attack to all enemies1 FractureDraw 1Attunement: Proc this card", "sct": "unique_30113_07", "image": "assets/cards/unique_30113_07.webp"}, {"name": "Homing Arrow (Grand)", "cost": 0, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% Extra Attack to the enemy with the highest HPDraw 1Attunement: Proc this card", "sct": "unique_30113_07", "image": "assets/cards/unique_30113_07.webp"}], "collapse": [{"name": "Matrix Overlay", "cost": 4, "category": "Skill", "mult": 15, "hits": 1, "shield": 0, "desc": "+15% Weakness Damage Amount taken to all enemies for 1 turn(s)Draw 3 Attack Card(s) of this unitApply Weakness Attack to those cards for 1 t", "sct": "collapse_30113_01", "image": "assets/cards/collapse_30113_01.webp"}, {"name": "Despair", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30113_02", "image": "assets/cards/collapse_30113_02.webp"}]}, {"id": "1043", "name": "Hugo", "rarity": 5, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Stella Familia", "portrait": "assets/characters/1043.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Knife Toss", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1043_01", "image": "assets/cards/start_1043_01.webp"}, {"name": "Defense System", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1043_02", "image": "assets/cards/start_1043_02.webp"}, {"name": "Hugo Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Hugo Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Hunting Instincts", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When an Upgrade or Skill Card of a different Combatant is activated, 1 Commence the Hunt", "sct": "unique_1043_05", "image": "assets/cards/unique_1043_05.webp"}, {"name": "Fan of Daggers", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% × 3 Damage to random enemiesCommence the Hunt for each target hit", "sct": "unique_1043_04", "image": "assets/cards/unique_1043_04.webp"}, {"name": "Quick Fix", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage × 2If in a Commence the Hunt state, Draw 1 Attack Card(s)", "sct": "unique_1043_01", "image": "assets/cards/unique_1043_01.webp"}, {"name": "Dingo Howling", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield2 Commence the Hunt", "sct": "unique_1043_02", "image": "assets/cards/unique_1043_02.webp"}, {"name": "Fixer's Approach", "cost": 1, "category": "Power", "mult": 40, "hits": 1, "shield": 0, "desc": "Increase Damage Amount of Commence the Hunt's Extra Attacks by 40%", "sct": "unique_1043_03", "image": "assets/cards/unique_1043_03.webp"}], "collapse": [{"name": "Last Resort", "cost": 6, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "250% Damage to all enemiesIncrease Damage of Commence the Hunt by 30%", "sct": "collapse_1043_01", "image": "assets/cards/collapse_1043_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1043_02", "image": "assets/cards/collapse_1043_02.webp"}]}, {"id": "1064", "name": "Kayron", "rarity": 5, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Wanderers", "portrait": "assets/characters/1064.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Elimination", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1064_01", "image": "assets/cards/start_1064_01.webp"}, {"name": "Sphere", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1064_02", "image": "assets/cards/start_1064_02.webp"}, {"name": "Kayron Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Kayron Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Futility", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageHeal 100%", "sct": "abnormal_curse_00067", "image": "assets/cards/abnormal_curse_00067.webp"}, {"name": "Echo of Futility", "cost": 1, "category": "Attack", "mult": 320, "hits": 1, "shield": 0, "desc": "320% DamageCreate 2 Futility", "sct": "unique_1064_04", "image": "assets/cards/unique_1064_04.webp"}, {"name": "Brand of Annihilation", "cost": 3, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage to all enemiesWhen a card is Exhausted, decrease Cost of this card by 1 for 1 turn until activated", "sct": "unique_1064_05", "image": "assets/cards/unique_1064_05.webp"}, {"name": "Black Hole", "cost": 2, "category": "Attack", "mult": 240, "hits": 1, "shield": 0, "desc": "240% Damage+40% base Damage Amount for each Futility Exhausted", "sct": "unique_1064_02", "image": "assets/cards/unique_1064_02.webp"}, {"name": "Oath of Vanity", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When Futility is created, change those cards into 1-Cost Attack Cards with 100% Damage and Heal effects", "sct": "unique_1064_01", "image": "assets/cards/unique_1064_01.webp"}, {"name": "Echoes of True Abyss", "cost": 2, "category": "Attack", "mult": 240, "hits": 1, "shield": 0, "desc": "240% DamageCreate 3 Futility+40 base Damage Amount for each created", "sct": "unique_1064_03", "image": "assets/cards/unique_1064_03.webp"}], "collapse": [{"name": "Rift of Nothingness", "cost": 5, "category": "Skill", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Damage to all enemiesExhaust all Futility in hand+80% base Damage Amount for each Exhausted", "sct": "collapse_1064_01", "image": "assets/cards/collapse_1064_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1064_02", "image": "assets/cards/collapse_1064_02.webp"}]}, {"id": "1008", "name": "Khalipe", "rarity": 5, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Stella Familia", "portrait": "assets/characters/1008.webp", "stats": {"atk": 305, "hp": 510, "def": 285, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Lashing", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1008_03", "image": "assets/cards/start_1008_03.webp"}, {"name": "Upward Slash", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Defense-Based Damage", "sct": "start_1008_01", "image": "assets/cards/start_1008_01.webp"}, {"name": "Tyr’s Vow", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1008_02", "image": "assets/cards/start_1008_02.webp"}, {"name": "Khalipe Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Vulture Ejection", "cost": 3, "category": "Attack", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Defense-Based Damage to all enemies100% Shield1 Silver Veil", "sct": "unique_1008_05", "image": "assets/cards/unique_1008_05.webp"}, {"name": "Greatsword Aquila", "cost": 1, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% Defense-Based Damage to all enemiesIf Vulture Ejection is in hand, increase Cost by 1, +120% Damage Amount", "sct": "unique_1008_01", "image": "assets/cards/unique_1008_01.webp"}, {"name": "Overpower", "cost": 2, "category": "Skill", "mult": 250, "hits": 1, "shield": 250, "desc": "250% Shield1 Tenacity Damage to all enemies", "sct": "unique_1008_03", "image": "assets/cards/unique_1008_03.webp"}, {"name": "Rally", "cost": 1, "category": "Skill", "mult": 120, "hits": 1, "shield": 120, "desc": "120% ShieldDraw 1 highest-cost card(s)", "sct": "unique_1008_04", "image": "assets/cards/unique_1008_04.webp"}, {"name": "Absolute Protection", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield for each XFor 1 turn, Retain all cards in hand (cannot stack)", "sct": "unique_1008_02", "image": "assets/cards/unique_1008_02.webp"}], "collapse": [{"name": "Charisma of Resolve", "cost": 5, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Defense-Based Damage to all enemiesCreate 1 Vulture Ejection", "sct": "collapse_1008_01", "image": "assets/cards/collapse_1008_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1008_02", "image": "assets/cards/collapse_1008_02.webp"}]}, {"id": "1004", "name": "Luke", "rarity": 5, "job": "Hunter", "role": "Follow-Up / Extra Atk", "job_icon": "🏹", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Ironrain", "portrait": "assets/characters/1004.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 10, "crit_dmg": 150}, "starters": [{"name": "Single Shot", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1004_01", "image": "assets/cards/start_1004_01.webp"}, {"name": "Shadow Concealment", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1004_02", "image": "assets/cards/start_1004_02.webp"}, {"name": "Luke Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Luke Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Chain Fire", "cost": 1, "category": "Attack", "mult": 50, "hits": 1, "shield": 0, "desc": "50% Damage × 2For each Critical Hit create a Handgun Bullet+50% Critical Chance", "sct": "unique_1004_01", "image": "assets/cards/unique_1004_01.webp"}, {"name": "Stealth Reload", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 3 Handgun Bullets", "sct": "unique_1004_05", "image": "assets/cards/unique_1004_05.webp"}, {"name": "Seize the Opportunity", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield+120% Damage Amount to the next Bullet card activated", "sct": "unique_1004_04", "image": "assets/cards/unique_1004_04.webp"}, {"name": "Dance of the Demon", "cost": 1, "category": "Attack", "mult": 50, "hits": 1, "shield": 0, "desc": "50% DamageAdd 1 Hit for each Bullet card activated this turn", "sct": "unique_1004_03", "image": "assets/cards/unique_1004_03.webp"}, {"name": "Finisher Round", "cost": 0, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% DamageWhen 5 Handgun Bullet cards are activated, remove Unactivatable", "sct": "unique_1004_02", "image": "assets/cards/unique_1004_02.webp"}, {"name": "Magnum Shot", "cost": 0, "category": "Attack", "mult": 85, "hits": 1, "shield": 0, "desc": "85% Damage", "sct": "job_00404", "image": "assets/cards/job_00404.webp"}, {"name": "Silver Shot", "cost": 0, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% DamageWeakness Attack: Increase Damage Amount by 100%", "sct": "job_00405", "image": "assets/cards/job_00405.webp"}, {"name": "Uranium Shot", "cost": 0, "category": "Attack", "mult": 60, "hits": 1, "shield": 60, "desc": "60% DamageIf the target has Shield, increase Damage Amount by 100%", "sct": "job_00406", "image": "assets/cards/job_00406.webp"}, {"name": "Tracer Shot", "cost": 0, "category": "Attack", "mult": 30, "hits": 1, "shield": 0, "desc": "30% Damage1 Mark", "sct": "job_00407", "image": "assets/cards/job_00407.webp"}, {"name": "HVAP Round", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% DamageGuaranteed Critical", "sct": "job_00404", "image": "assets/cards/job_00404.webp"}], "collapse": [{"name": "Lethal Design", "cost": 5, "category": "Attack", "mult": 450, "hits": 1, "shield": 0, "desc": "450% Damage+25% base Damage Amount for each card in hand", "sct": "collapse_1004_01", "image": "assets/cards/collapse_1004_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1004_02", "image": "assets/cards/collapse_1004_02.webp"}]}, {"id": "1010", "name": "Magna", "rarity": 5, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Void", "element_color": "#a855f7", "element_icon": "🌌", "faction": "Stella Familia", "portrait": "assets/characters/1010.webp", "stats": {"atk": 305, "hp": 510, "def": 285, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Frozen Fist", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1010_01", "image": "assets/cards/start_1010_01.webp"}, {"name": "Frost Shield", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1010_02", "image": "assets/cards/start_1010_02.webp"}, {"name": "Magna Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Magna Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Ice Fragment", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "3 CrystallizationAt the start of the turn, 1 Counterattack", "sct": "unique_1010_01", "image": "assets/cards/unique_1010_01.webp"}, {"name": "Glacial Iron Fist", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 300, "desc": "300% Defense-Based Damage50% DMG-Based Shield", "sct": "unique_1010_02", "image": "assets/cards/unique_1010_02.webp"}, {"name": "Ice Wall", "cost": 2, "category": "Skill", "mult": 200, "hits": 1, "shield": 200, "desc": "200% Shield2 CounterattackSet the target of Counterattack to all enemies for 2 turn(s)", "sct": "unique_1010_03", "image": "assets/cards/unique_1010_03.webp"}, {"name": "Frost Charge", "cost": 1, "category": "Skill", "mult": 140, "hits": 1, "shield": 140, "desc": "140% Shield3 Vulnerable to all enemies", "sct": "unique_1010_04", "image": "assets/cards/unique_1010_04.webp"}, {"name": "Storm of Bitter Cold", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 80, "desc": "2 Crystallization When Shield is gained, 1 Counterattack", "sct": "unique_1010_05", "image": "assets/cards/unique_1010_05.webp"}], "collapse": [{"name": "Absolute Zero", "cost": 6, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Defense-Based DamageIncreases Damage Amount by 20% for each Counterattack on this unit", "sct": "collapse_1010_01", "image": "assets/cards/collapse_1010_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1010_02", "image": "assets/cards/collapse_1010_02.webp"}]}, {"id": "1027", "name": "Mei Lin", "rarity": 5, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Terrascion", "portrait": "assets/characters/1027.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1027_01", "image": "assets/cards/start_1027_01.webp"}, {"name": "Flame Dragon Guardian", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1027_02", "image": "assets/cards/start_1027_02.webp"}, {"name": "Mei Lin Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}, {"name": "Mei Lin Guard", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 120, "desc": "Grants 120% Shield and reduces team stress.", "sct": "", "image": ""}], "uniques": [{"name": "Flame Dragon's Jewel", "cost": 1, "category": "Power", "mult": 20, "hits": 1, "shield": 0, "desc": "Increase Damage Amount of Attack Cards of this unit by 20%When an Attack Card is activated, 1 Passion Weakness to the target", "sct": "unique_1027_04", "image": "assets/cards/unique_1027_04.webp"}, {"name": "Rising Dragon Spire", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage2 EmberStreak: Add 1 Hit(s)", "sct": "unique_1027_03", "image": "assets/cards/unique_1027_03.webp"}, {"name": "Unity of Attack and Defense", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 2 Basic Card(s) of this unit, then decrease Cost of those cards by 1 for 1 turn until activated", "sct": "unique_1027_01", "image": "assets/cards/unique_1027_01.webp"}, {"name": "Spirit of the Aromata", "cost": 1, "category": "Skill", "mult": 20, "hits": 1, "shield": 0, "desc": "For 1 turn, when a card of this unit is activated, +20% Damage Amount to this unit", "sct": "unique_1027_05", "image": "assets/cards/unique_1027_05.webp"}, {"name": "Flame Dragon's Sovereignty", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% DamageDestroy: Retain Ember", "sct": "unique_1027_02", "image": "assets/cards/unique_1027_02.webp"}], "collapse": [{"name": "Heavenly Flame Dragon", "cost": 6, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Add 1 Hit(s) to the next 4 Basic Attack Card(s) of this unit activated", "sct": "collapse_1027_01", "image": "assets/cards/collapse_1027_01.webp"}, {"name": "Daze", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1027_02", "image": "assets/cards/collapse_1027_02.webp"}]}, {"id": "1052", "name": "Narja", "rarity": 5, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Imperial High Command", "portrait": "assets/characters/1052.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "NA: Attack Response", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1052_01", "image": "assets/cards/start_1052_01.webp"}, {"name": "NA: Defense Response", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1052_02", "image": "assets/cards/start_1052_02.webp"}, {"name": "Narja Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Narja Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Shackles of Hunger", "cost": 1, "category": "Attack", "mult": 30, "hits": 1, "shield": 0, "desc": "30% Defense-Based Damage × 3Attunement: 4 Voracity", "sct": "unique_1052_02", "image": "assets/cards/unique_1052_02.webp"}, {"name": "Bottomless Hunger", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "The next 2 times Voracity is activated, decrease Cost of 1 random card in hand by 1 for 1 turn", "sct": "unique_1052_04", "image": "assets/cards/unique_1052_04.webp"}, {"name": "Voluntary Control", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "If Voracity is fewer than 6 stacks, gain 6 VoracityIf 6 or more stacks, gain 2 Predation", "sct": "unique_1052_05", "image": "assets/cards/unique_1052_05.webp"}, {"name": "Domain of Voracity", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage to all enemiesIncrease Tenacity Damage taken of the target by 100% until their next Ravage", "sct": "unique_1052_03", "image": "assets/cards/unique_1052_03.webp"}, {"name": "Mealtime", "cost": 6, "category": "Attack", "mult": 30, "hits": 1, "shield": 0, "desc": "If Voracity is decreased,decrease Cost by 1 and +30% Heal Amount (max 10) until activated160% Defense-Based Damage to all enemiesHeal 100%4 ", "sct": "unique_1052_06", "image": "assets/cards/unique_1052_06.webp"}], "collapse": [{"name": "Predator's Hunting Method", "cost": 5, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "10 Voracity250% Defense-Based DamageIf Mealtime is in Graveyard, 5 Predation", "sct": "collapse_1052_01", "image": "assets/cards/collapse_1052_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1052_02", "image": "assets/cards/collapse_1052_02.webp"}]}, {"id": "30047", "name": "Nine", "rarity": 5, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Imperial High Command", "portrait": "assets/characters/30047.webp", "stats": {"atk": 305, "hp": 510, "def": 285, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Slash", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_30047_01", "image": "assets/cards/start_30047_01.webp"}, {"name": "Back-Edge Parry", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30047_02", "image": "assets/cards/start_30047_02.webp"}, {"name": "Nine Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Nine Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Hew", "cost": 3, "category": "Attack", "mult": 350, "hits": 1, "shield": 0, "desc": "350% Defense-Based DamageIncinerate: Create 1 Hew Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew Lv. 1", "cost": 3, "category": "Attack", "mult": 420, "hits": 1, "shield": 0, "desc": "420% Defense-Based DamageIncinerate: Create 1 Hew Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew Lv. 2", "cost": 3, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% Defense-Based DamageIncinerate: Create 1 Hew Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew Lv. 3", "cost": 2, "category": "Attack", "mult": 600, "hits": 1, "shield": 0, "desc": "600% Defense-Based DamageIncinerate: At the start of the turn, create 1 Hew in hand", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ironclad)", "cost": 3, "category": "Attack", "mult": 400, "hits": 1, "shield": 400, "desc": "400% Defense-Based Damage200% ShieldIncinerate: Create 1 Hew (Ironclad) Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ironclad) Lv. 1", "cost": 3, "category": "Attack", "mult": 480, "hits": 1, "shield": 480, "desc": "480% Defense-Based Damage200% ShieldIncinerate: Create 1 Hew (Ironclad) Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ironclad) Lv. 2", "cost": 3, "category": "Attack", "mult": 580, "hits": 1, "shield": 580, "desc": "580% Defense-Based Damage200% ShieldIncinerate: Create 1 Hew (Ironclad) Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ironclad) Lv. 3", "cost": 2, "category": "Attack", "mult": 700, "hits": 1, "shield": 700, "desc": "700% Defense-Based Damage200% ShieldIncinerate: At the start of the turn, create 1 Hew (Ironclad) in hand", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme)", "cost": 3, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Defense-Based DamageIncinerate: Create 1 Hew (Extreme) Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme) Lv. 1", "cost": 3, "category": "Attack", "mult": 360, "hits": 1, "shield": 0, "desc": "360% Defense-Based DamageIncinerate: Create 1 Hew (Extreme) Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme) Lv. 2", "cost": 3, "category": "Attack", "mult": 420, "hits": 1, "shield": 0, "desc": "420% Defense-Based DamageIncinerate: Create 1 Hew (Extreme) Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme) Lv. 3", "cost": 3, "category": "Attack", "mult": 550, "hits": 1, "shield": 0, "desc": "550% Defense-Based DamageIncinerate: Create 1 Hew (Extreme) Lv. 4", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme) Lv. 4", "cost": 3, "category": "Attack", "mult": 680, "hits": 1, "shield": 0, "desc": "680% Defense-Based DamageIncinerate: Create 1 Hew (Extreme) Lv. 5", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Extreme) Lv. 5", "cost": 2, "category": "Attack", "mult": 1000, "hits": 1, "shield": 0, "desc": "1000% Defense-Based DamageIncinerate: At the start of the turn, create 1 Hew (Extreme) in hand", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Flash)", "cost": 3, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Defense-Based DamageIncinerate: Create 1 Hew (Flash) Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Flash) Lv. 1", "cost": 3, "category": "Attack", "mult": 480, "hits": 1, "shield": 0, "desc": "480% Defense-Based DamageIncinerate: Create 1 Hew (Flash) Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Flash) Lv. 2", "cost": 3, "category": "Attack", "mult": 580, "hits": 1, "shield": 0, "desc": "580% Defense-Based DamageIncinerate: Create 1 Hew (Flash) Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Flash) Lv. 3", "cost": 3, "category": "Attack", "mult": 700, "hits": 1, "shield": 0, "desc": "700% Defense-Based DamageIncinerate: At the start of the turn, create 1 Hew (Flash) in hand", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Massacre)", "cost": 3, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Defense-Based Damage to all enemiesDecrease Damage Amount by 10% for each targetIncinerate: Create1 Hew (Massacre) Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Massacre) Lv. 1", "cost": 3, "category": "Attack", "mult": 480, "hits": 1, "shield": 0, "desc": "480% Defense-Based Damage to all enemiesDecrease Damage Amount by 10% for each targetIncinerate: Create 1 Hew (Massacre) Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Massacre) Lv. 2", "cost": 3, "category": "Attack", "mult": 580, "hits": 1, "shield": 0, "desc": "580% Defense-Based Damage to all enemiesDecrease Damage Amount by 10% for each targetIncinerate: Create 1 Hew (Massacre) Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Massacre) Lv. 3", "cost": 3, "category": "Attack", "mult": 700, "hits": 1, "shield": 0, "desc": "700% Defense-Based Damage to all enemiesDecrease Damage Amount by 10% for each targetIncinerate: At the start of the turn, create 1 Hew (Mas", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ambush)", "cost": 3, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Defense-Based DamageOn ally Counterattack, proc this cardIncinerate: Create 1 Hew (Ambush) Lv. 1", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ambush) Lv. 1", "cost": 3, "category": "Attack", "mult": 480, "hits": 1, "shield": 0, "desc": "480% Defense-Based DamageOn ally Counterattack, proc this cardIncinerate: Create 1 Hew (Ambush) Lv. 2", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ambush) Lv. 2", "cost": 3, "category": "Attack", "mult": 580, "hits": 1, "shield": 0, "desc": "580% Defense-Based DamageOn ally Counterattack, proc this cardIncinerate: Create 1 Hew (Ambush) Lv. 3", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Hew (Ambush) Lv. 3", "cost": 3, "category": "Attack", "mult": 700, "hits": 1, "shield": 0, "desc": "700% Defense-Based DamageOn ally Counterattack, proc this cardIncinerate: At the start of the turn, create 1 Hew (Ambush) in hand", "sct": "unique_30047_01", "image": "assets/cards/unique_30047_01.webp"}, {"name": "Experienced Strike", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 140, "desc": "140% Defense-Based Damage20% DMG-Based ShieldIncrease Damage Amount of Exhaust cards by 20% for 1 turn", "sct": "unique_30047_02", "image": "assets/cards/unique_30047_02.webp"}, {"name": "Fatal Strike", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Defense-Based DamageIncrease Damage Amount by 20% for each Cost of the highest-Cost Exhaust card in hand, then Exhaust that card", "sct": "unique_30047_03", "image": "assets/cards/unique_30047_03.webp"}, {"name": "Counterblade", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 80, "desc": "When Shield is gained through an ability, 1 Honed Edge", "sct": "unique_30047_04", "image": "assets/cards/unique_30047_04.webp"}, {"name": "Fighting Spirit", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Proc 1 highest-Cost Attack Card(s) of this unit in hand, then Exhaust those cards", "sct": "unique_30047_05", "image": "assets/cards/unique_30047_05.webp"}, {"name": "Exploit Opening", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "1 Vulnerable1 Tenacity Damage", "sct": "unique_30047_06", "image": "assets/cards/unique_30047_06.webp"}], "collapse": [{"name": "Reflection: Zero", "cost": 6, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "250% Defense-Based Damage to all enemies+50% Damage Amount for each point of the combined Cost of the 2 highest-Cost cards, then Exhaust tho", "sct": "collapse_30047_01", "image": "assets/cards/collapse_30047_01.webp"}, {"name": "Impulse", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30047_02", "image": "assets/cards/collapse_30047_02.webp"}]}, {"id": "30117", "name": "Olga", "rarity": 5, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Imperial High Command", "portrait": "assets/characters/30117.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Reaping Slash", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_30117_01", "image": "assets/cards/start_30117_01.webp"}, {"name": "Slake Thirst", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_30117_02", "image": "assets/cards/start_30117_02.webp"}, {"name": "Olga Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Olga Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Rift of Severance", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage and 2 Fracture, then activate Fracture inflicted by this unit", "sct": "unique_30117_01", "image": "assets/cards/unique_30117_01.webp"}, {"name": "Dispersed Desire", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage and 4 Agony, then activate Agony inflicted by this unit", "sct": "unique_30117_02", "image": "assets/cards/unique_30117_02.webp"}, {"name": "Break Apart & Renew", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "1 Brand of Agony4 Agony to the enemy with the highest HP", "sct": "unique_30117_03", "image": "assets/cards/unique_30117_03.webp"}, {"name": "Insatiable Cravings", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When Fracture or Agony is activated through a Targeting Card, 2 Fracture and 3 Agony to the target (3 time(s) per turn)", "sct": "unique_30117_04", "image": "assets/cards/unique_30117_04.webp"}, {"name": "End of the Line", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "2 Shattering, 200% Damage, 2 Fracture, and 4 AgonyWhen this card is activated, change into Reckoning", "sct": "unique_30117_05", "image": "assets/cards/unique_30117_05.webp"}, {"name": "Reckoning", "cost": 0, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage+20% base Damage Amount for each RapacityActivate Agony and Fracture inflicted by this unitWhen this card is activated, change in", "sct": "unique_30117_06", "image": "assets/cards/unique_30117_06.webp"}], "collapse": [{"name": "Maelstrom of Oblivion", "cost": 5, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage to all enemiesFor each Fracture, Agony, and Scorched activated this turn, +50%, +20%, and +30% base Damage Amount, respectively ", "sct": "collapse_30117_01", "image": "assets/cards/collapse_30117_01.webp"}, {"name": "Fear", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30117_02", "image": "assets/cards/collapse_30117_02.webp"}]}, {"id": "1024", "name": "Orlea", "rarity": 5, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "The Holy Crusaders", "portrait": "assets/characters/1024.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Attack, My Minions", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1024_01", "image": "assets/cards/start_1024_01.webp"}, {"name": "Healing of Light", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1024_02", "image": "assets/cards/start_1024_02.webp"}, {"name": "Orlea Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Orlea Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Sacred Censer", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Creation★", "sct": "unique_1024_04", "image": "assets/cards/unique_1024_04.webp"}, {"name": "Growth Acceleration", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%Select 1 card of this unit in hand, then activate the Retain effect 2 time(s)", "sct": "unique_1024_03", "image": "assets/cards/unique_1024_03.webp"}, {"name": "Annoying", "cost": 0, "category": "Attack", "mult": 40, "hits": 1, "shield": 0, "desc": "For each card in hand, 40% Fixed Damage and Heal 20%", "sct": "unique_1024_01", "image": "assets/cards/unique_1024_01.webp"}, {"name": "Growing Creature", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 1 Creation★Retain: Change this card to Creation★★★", "sct": "unique_1024_05", "image": "assets/cards/unique_1024_05.webp"}, {"name": "Will of Light", "cost": 1, "category": "Skill", "mult": 200, "hits": 1, "shield": 0, "desc": "Heal 200%Activate the Retain effect of all cards in hand", "sct": "unique_1024_02", "image": "assets/cards/unique_1024_02.webp"}, {"name": "Softie ★", "cost": 0, "category": "Skill", "mult": 10, "hits": 1, "shield": 0, "desc": "Increase Damage Amount by 10% for 1 turnRetain: Increase Damage Amount of the next Attack Card activated by 10% (max 350%)", "sct": "unique_1024_08", "image": "assets/cards/unique_1024_08.webp"}, {"name": "Softie ★★", "cost": 0, "category": "Skill", "mult": 20, "hits": 1, "shield": 0, "desc": "Increase Damage Amount by 20% for 1 turnRetain: Increase Damage Amount of the next Attack Card activated by 20% (max 350%)", "sct": "unique_1024_14", "image": "assets/cards/unique_1024_14.webp"}, {"name": "Softie ★★★", "cost": 0, "category": "Skill", "mult": 35, "hits": 1, "shield": 0, "desc": "Increase Damage Amount by 35% for 1 turnRetain: Increase Damage Amount of the next Attack Card activated by 35% (max 350%)", "sct": "unique_1024_13", "image": "assets/cards/unique_1024_13.webp"}, {"name": "Swiftie ★", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageRetain: +40% Damage Amount", "sct": "unique_1024_07", "image": "assets/cards/unique_1024_07.webp"}, {"name": "Swiftie ★★", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% DamageRetain: +80% Damage Amount", "sct": "unique_1024_10", "image": "assets/cards/unique_1024_10.webp"}, {"name": "Swiftie ★★★", "cost": 0, "category": "Attack", "mult": 350, "hits": 1, "shield": 0, "desc": "350% DamageRetain: +150% Damage Amount", "sct": "unique_1024_09", "image": "assets/cards/unique_1024_09.webp"}, {"name": "Sturdie ★", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% ShieldRetain: Heal 60%", "sct": "unique_1024_06", "image": "assets/cards/unique_1024_06.webp"}, {"name": "Sturdie ★★", "cost": 0, "category": "Skill", "mult": 200, "hits": 1, "shield": 200, "desc": "200% ShieldRetain: Heal 120%", "sct": "unique_1024_12", "image": "assets/cards/unique_1024_12.webp"}, {"name": "Sturdie ★★★", "cost": 0, "category": "Skill", "mult": 350, "hits": 1, "shield": 350, "desc": "350% ShieldRetain: Heal 200%", "sct": "unique_1024_11", "image": "assets/cards/unique_1024_11.webp"}], "collapse": [{"name": "Salvation", "cost": 6, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 1 of each Creation★★", "sct": "collapse_1024_01", "image": "assets/cards/collapse_1024_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1024_02", "image": "assets/cards/collapse_1024_02.webp"}]}, {"id": "1041", "name": "Renoa", "rarity": 5, "job": "Hunter", "role": "Follow-Up / Extra Atk", "job_icon": "🏹", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Terrascion", "portrait": "assets/characters/1041.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 10, "crit_dmg": 150}, "starters": [{"name": "Annihilation Shot", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1041_01", "image": "assets/cards/start_1041_01.webp"}, {"name": "Black Veil", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1041_02", "image": "assets/cards/start_1041_02.webp"}, {"name": "Renoa Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Renoa Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Echo of Sorrow", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% DamageCreate 1 Dirge Bullet Card(s)", "sct": "unique_1041_01", "image": "assets/cards/unique_1041_01.webp"}, {"name": "Instant Judgment", "cost": 1, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% DamageIf Dirge Bullet is in hand, discard 1 and +100% Damage Amount", "sct": "unique_1041_05", "image": "assets/cards/unique_1041_05.webp"}, {"name": "Ballad of Pitch Black", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage × 3+20% base Damage Amount for each Dirge Bullet in hand", "sct": "unique_1041_04", "image": "assets/cards/unique_1041_04.webp"}, {"name": "Flower of Devoured Fate", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Discard up to 2 Card(s) from handCreate Dirge Bullet for each", "sct": "unique_1041_02", "image": "assets/cards/unique_1041_02.webp"}, {"name": "Last-Ditch Assault", "cost": 1, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Damage (+0%)Discard all Dirge Bullet, +50% Damage Amount for each", "sct": "unique_1041_03", "image": "assets/cards/unique_1041_03.webp"}, {"name": "Renoa’s Support", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Renoa’s Supporting Fire deals significant damage to all enemies.", "sct": "unique_1041_03", "image": "assets/cards/unique_1041_03.webp"}, {"name": "Dirge Bullet", "cost": 1, "category": "Attack", "mult": 160, "hits": 1, "shield": 0, "desc": "160% DamageWhen moved to Discard Pile, 120% Extra Attack to a random enemy", "sct": "unique_1041_06", "image": "assets/cards/unique_1041_06.webp"}, {"name": "Dirge Bullet: Finale", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% DamageWhen moved to Discard Pile, 160% Extra Attack x 2 to random enemies", "sct": "unique_1041_06", "image": "assets/cards/unique_1041_06.webp"}], "collapse": [{"name": "Black Thorn", "cost": 4, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "Move all Dirge Bullet from Draw Pile and Graveyard to hand300% Damage", "sct": "collapse_1041_01", "image": "assets/cards/collapse_1041_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1041_02", "image": "assets/cards/collapse_1041_02.webp"}]}, {"id": "1018", "name": "Rin", "rarity": 5, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Wanderers", "portrait": "assets/characters/1018.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Dark Mist Sword: First Form", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1018_01", "image": "assets/cards/start_1018_01.webp"}, {"name": "Dark Mist Sword: Third Form", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Damage", "sct": "start_1018_03", "image": "assets/cards/start_1018_03.webp"}, {"name": "Protection", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1018_02", "image": "assets/cards/start_1018_02.webp"}, {"name": "Rin Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Drawing Slash", "cost": 0, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% DamageGain Dark Mist StanceDark Mist Stance: Increase Damage Amount by 100%", "sct": "unique_1018_01", "image": "assets/cards/unique_1018_01.webp"}, {"name": "Dark Mist Secret Art: Destruction", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 1 card(s) of this unitGain Dark Mist Stance", "sct": "unique_1018_03", "image": "assets/cards/unique_1018_03.webp"}, {"name": "Dark Mist Secret Art: Annihilation", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% DamageDark Mist Stance: Add 1 Hit(s)", "sct": "unique_1018_04", "image": "assets/cards/unique_1018_04.webp"}, {"name": "Dark Mist Inner Art", "cost": 1, "category": "Skill", "mult": 40, "hits": 1, "shield": 0, "desc": "Retain Dark Mist Stance for 1 turnDark Mist Stance: +40% Damage Amount to Attack Cards of this unit for 1 turn", "sct": "unique_1018_02", "image": "assets/cards/unique_1018_02.webp"}, {"name": "Dark Mist Secret Art: Black Dance", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% DamageDark Mist Stance: Add 1 Hit(s) for each Skill Card in hand", "sct": "unique_1018_05", "image": "assets/cards/unique_1018_05.webp"}, {"name": "Sheathe Sword", "cost": 1, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage+20% base Damage Amount for each Attack Card of this unit activated this turnIf there is no other Attack Card of this unit in hand", "sct": "unique_1018_01", "image": "assets/cards/unique_1018_01.webp"}], "collapse": [{"name": "Dark Mist Secret Art: Slash", "cost": 6, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage6 Vulnerable​", "sct": "collapse_1018_01", "image": "assets/cards/collapse_1018_01.webp"}, {"name": "Charm", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1018_02", "image": "assets/cards/collapse_1018_02.webp"}]}, {"id": "30097", "name": "Rita", "rarity": 5, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Void", "element_color": "#a855f7", "element_icon": "🌌", "faction": "Imperial High Command", "portrait": "assets/characters/30097.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Time Acceleration", "cost": 3, "category": "Attack", "mult": 350, "hits": 1, "shield": 0, "desc": "350% Damage", "sct": "start_30097_01", "image": "assets/cards/start_30097_01.webp"}, {"name": "Rewind", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_30097_02", "image": "assets/cards/start_30097_02.webp"}, {"name": "Rita Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Rita Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Chrono Archon", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When a card is activated, 1 Chronicle for each Cost of that card", "sct": "unique_30097_01", "image": "assets/cards/unique_30097_01.webp"}, {"name": "Time Axis Collapse", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% DamageIncrease Damage Amount by 20% for each Cost of cards in hand(max 200%)", "sct": "unique_30097_02", "image": "assets/cards/unique_30097_02.webp"}, {"name": "Future Decreed", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Increase Cost of 1 2-Cost or lower card(s) in hand by 1 until activated, then proc 1 random 3-Cost card(s)", "sct": "unique_30097_03", "image": "assets/cards/unique_30097_03.webp"}, {"name": "Chrono Circle", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Fate Imprint", "sct": "unique_30097_04", "image": "assets/cards/unique_30097_04.webp"}, {"name": "Time Paradox", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Decrease all ChronicleGain Chronal Ascension for each descreased", "sct": "unique_30097_05", "image": "assets/cards/unique_30097_05.webp"}, {"name": "Fate Imprint", "cost": 2, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage for each Cost of this cardIncrease Cost of all Fate Imprint in hand by 1When this card leaves the hand, change Cost to 2", "sct": "unique_30097_06", "image": "assets/cards/unique_30097_06.webp"}, {"name": "Fate Distortion", "cost": 0, "category": "Skill", "mult": 30, "hits": 1, "shield": 0, "desc": "Increase Damage Amount of the next Attack Card of this unit activated by 30%Increase Damage Amount by an additional 10% for each Cost of tha", "sct": "unique_30097_07", "image": "assets/cards/unique_30097_07.webp"}], "collapse": [{"name": "Hour of Glory", "cost": 5, "category": "Skill", "mult": 10, "hits": 1, "shield": 0, "desc": "6 Chronal AscensionIncrease Damage Amount of the next Attack Card of this unit activated by 10% for each Cost of cards activated this battle", "sct": "collapse_30097_01", "image": "assets/cards/collapse_30097_01.webp"}, {"name": "Confusion", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30097_02", "image": "assets/cards/collapse_30097_02.webp"}]}, {"id": "30134", "name": "Rosweisse", "rarity": 5, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Terrascion", "portrait": "assets/characters/30134.webp", "stats": {"atk": 305, "hp": 510, "def": 285, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Vanguard Cleave", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage to target enemy.", "sct": "start_30134_01", "image": ""}, {"name": "Aegis Bastion", "cost": 1, "category": "Skill", "mult": 120, "hits": 1, "shield": 120, "desc": "Grants 120% Shield and 1 Counterattack stack.", "sct": "start_30134_02", "image": ""}, {"name": "Rosweisse Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Rosweisse Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Valkyrie Verdict", "cost": 2, "category": "Attack", "mult": 180, "hits": 1, "shield": 180, "desc": "180% Defense-Based Damage. Triggers Shield Destruct on shielded targets.", "sct": "unique_30134_01", "image": ""}, {"name": "Aegis Overdrive", "cost": 1, "category": "Skill", "mult": 150, "hits": 1, "shield": 150, "desc": "Gain 150% Shield and draw 2 cards.", "sct": "unique_30134_02", "image": ""}], "collapse": [{"name": "Desperate Shatter", "cost": 1, "category": "Attack", "mult": 20, "hits": 1, "shield": 0, "desc": "Sacrifice 20% current HP to deal 250% Defense-Based Damage and stun target for 1 turn.", "sct": "collapse_30134_01", "image": ""}]}, {"id": "30075", "name": "Sereniel", "rarity": 5, "job": "Hunter", "role": "Follow-Up / Extra Atk", "job_icon": "🏹", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Imperial High Command", "portrait": "assets/characters/30075.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 10, "crit_dmg": 150}, "starters": [{"name": "Pulse Fire", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_30075_01", "image": "assets/cards/start_30075_01.webp"}, {"name": "Magnetic Field", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_30075_02", "image": "assets/cards/start_30075_02.webp"}, {"name": "Sereniel Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Sereniel Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Homing Laser", "cost": 0, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage2 AfterglowOn Ravage, move from Graveyard to hand", "sct": "unique_30075_04", "image": "assets/cards/unique_30075_04.webp"}, {"name": "Plasma Missile", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage0.5 Tenacity DamageIf the target is not Ravaged, proc 1 more time.", "sct": "unique_30075_03", "image": "assets/cards/unique_30075_03.webp"}, {"name": "Shining Core", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Homing Laser L", "sct": "unique_30075_02", "image": "assets/cards/unique_30075_02.webp"}, {"name": "Cobalt Light", "cost": 3, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% x 4 Damage × 4 to random enemies1 Tenacity Damage for each Hit", "sct": "unique_30075_05", "image": "assets/cards/unique_30075_05.webp"}, {"name": "Pale Shooting Star", "cost": 2, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% DamageProc 3 Homing Laser in Draw Pile and Graveyard", "sct": "unique_30075_01", "image": "assets/cards/unique_30075_01.webp"}, {"name": "Homing Laser L", "cost": 0, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage1 AfterglowOn Ravage, move from Graveyard to hand", "sct": "unique_30075_04", "image": "assets/cards/unique_30075_04.webp"}], "collapse": [{"name": "Death Halo", "cost": 6, "category": "Attack", "mult": 500, "hits": 1, "shield": 0, "desc": "500% Damage to all enemiesMove all Homing Laser L in Exhaust Pile to hand", "sct": "collapse_30075_01", "image": "assets/cards/collapse_30075_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30075_02", "image": "assets/cards/collapse_30075_02.webp"}]}, {"id": "1058", "name": "Solia", "rarity": 5, "job": "Striker", "role": "Combatant", "job_icon": "⚔️", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Terrascion", "portrait": "assets/characters/1058.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Protective Pulse", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "Grants 100% Shield to the most vulnerable ally.", "sct": "start_1058_01", "image": ""}, {"name": "Vital Surge", "cost": 1, "category": "Skill", "mult": 120, "hits": 1, "shield": 0, "desc": "Heal target ally for 120% of Supporter ATK.", "sct": "start_1058_02", "image": ""}, {"name": "Solia Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Solia Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Radiant Haven", "cost": 2, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Teamwide 100% Heal and cleanse all non-permanent status ailments.", "sct": "support_1058_01", "image": "assets/cards/support_1058_01.webp"}], "collapse": []}, {"id": "1069", "name": "Tenebria", "rarity": 5, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Imperial High Command", "portrait": "assets/characters/1069.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Sound Check", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1069_01", "image": "assets/cards/start_1069_01.webp"}, {"name": "Fan Service", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1069_02", "image": "assets/cards/start_1069_02.webp"}, {"name": "Tenebria Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Tenebria Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Music, Start!", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "Exhaust all Basic Attack CardsCreate and give each ally 2 of their own Rhythm in Draw PileApply Haste to Rhythm cards of this unit", "sct": "unique_1069_06", "image": "assets/cards/unique_1069_06.webp"}, {"name": "Spotlight", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% DamageMove 1 Rhythm card(s) to handDecrease Cost of those cards by 2 until activated", "sct": "unique_1069_02", "image": "assets/cards/unique_1069_02.webp"}, {"name": "Call & Response", "cost": 1, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% DamageIf in hand, treat as a Rhythm cardAttunement: Draw 1 Rhythm card(s)", "sct": "unique_1069_01", "image": "assets/cards/unique_1069_01.webp"}, {"name": "Encore", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% DamageIf the last card activated was a Rhythm card, proc that card", "sct": "unique_1069_04", "image": "assets/cards/unique_1069_04.webp"}, {"name": "Photo Time", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "+1 Performance BuzzIf a Rhythm card is activated or moved to hand, increase Performance Buzz by 1 until this card is activated (max 9 times)", "sct": "unique_1069_05", "image": "assets/cards/unique_1069_05.webp"}, {"name": "Rhythm", "cost": 2, "category": "Attack", "mult": 60, "hits": 1, "shield": 0, "desc": "60% Damage+30% base Damage Amount for each RhythmProc 1 Rhythm in hand", "sct": "unique_1069_03", "image": "assets/cards/unique_1069_03.webp"}, {"name": "Rhythm: Crescendo", "cost": 2, "category": "Attack", "mult": 180, "hits": 1, "shield": 0, "desc": "180% Damage+40% base Damage Amount for each Rhythm in GraveyardFor 1 turn, decrease Cost of the next Rhythm card activated by 1", "sct": "unique_1069_07", "image": "assets/cards/unique_1069_07.webp"}, {"name": "Rhythm: Staccato", "cost": 1, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage+50% base Damage Amount for each RhythmIf the last card activated was a Rhythm card, increase Cost by 1", "sct": "unique_1069_08", "image": "assets/cards/unique_1069_08.webp"}, {"name": "Rhythm: Fortissimo", "cost": 2, "category": "Attack", "mult": 90, "hits": 1, "shield": 0, "desc": "90% Damage+55% base Damage Amount for each Linked Rhythm before activationWhen 3 or more cards are Linked, add 1 Hit", "sct": "unique_1069_09", "image": "assets/cards/unique_1069_09.webp"}, {"name": "Rhythm: Fermata", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Select 1 of 4 Rhythm cardsChange all Rhythm cards into the selected card for 1 turn and Draw 2 of them", "sct": "unique_1069_10", "image": "assets/cards/unique_1069_10.webp"}, {"name": "Rhythm: Arpeggio", "cost": 0, "category": "Attack", "mult": 15, "hits": 1, "shield": 0, "desc": "15% Damage for each RhythmDraw 1 of the lowest-Cost Rhythm cards and decrease Cost by 1 until activated", "sct": "unique_1069_11", "image": "assets/cards/unique_1069_11.webp"}, {"name": "Photo Card", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "2 Ego Points", "sct": "unique_1069_12", "image": "assets/cards/unique_1069_12.webp"}], "collapse": [{"name": "Everyone’s Idol", "cost": 7, "category": "Skill", "mult": 7, "hits": 1, "shield": 0, "desc": "For the next 7 Rhythm cards activated, increase Damage Amount of Rhythm cards by 7%If activated 7 times, add 1 Hit(s) to the next 7 Rhythm c", "sct": "collapse_1069_01", "image": "assets/cards/collapse_1069_01.webp"}, {"name": "Charm", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1069_02", "image": "assets/cards/collapse_1069_02.webp"}]}, {"id": "30084", "name": "Tiphera", "rarity": 5, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Imperial High Command", "portrait": "assets/characters/30084.webp", "stats": {"atk": 430, "hp": 350, "def": 185, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Matter Disintegration", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_30084_01", "image": "assets/cards/start_30084_01.webp"}, {"name": "Barrier Deployment", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_30084_02", "image": "assets/cards/start_30084_02.webp"}, {"name": "Tiphera Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Tiphera Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Quantum Seed", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%Create 2 Archetype card(s) in Draw PileDraw 1 of them", "sct": "unique_30084_01", "image": "assets/cards/unique_30084_01.webp"}, {"name": "○ △ □", "cost": 0, "category": "Skill", "mult": 150, "hits": 1, "shield": 0, "desc": "Heal 150%Increase Damage Amount of the first Hit of next Attack Card by 30%(max 300%)Draw 1 Archetype card", "sct": "unique_30084_01", "image": "assets/cards/unique_30084_01.webp"}, {"name": "Archetype: ○", "cost": 0, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "Heal 50%1 AP", "sct": "unique_30084_06", "image": "assets/cards/unique_30084_06.webp"}, {"name": "Archetype: △", "cost": 0, "category": "Skill", "mult": 50, "hits": 1, "shield": 50, "desc": "50% ShieldIncrease Damage Amount of the first Hit of next Attack Card by 30%(max 300%)", "sct": "unique_30084_07", "image": "assets/cards/unique_30084_07.webp"}, {"name": "Archetype: □", "cost": 0, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "Heal 50%Draw 1 Archetype card", "sct": "unique_30084_08", "image": "assets/cards/unique_30084_08.webp"}, {"name": "Form Convergence", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 2 Archetype card(s)Double a random effect of those cards for 1 turn", "sct": "unique_30084_02", "image": "assets/cards/unique_30084_02.webp"}, {"name": "Creation and Destruction", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Defense-Based Damage80% ShieldHeal 80%Harmonization: Double all effects", "sct": "unique_30084_03", "image": "assets/cards/unique_30084_03.webp"}, {"name": "Dual Creation", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When 2 Archetype cards are created, create 1 identical card in Discard Pile", "sct": "unique_30084_04", "image": "assets/cards/unique_30084_04.webp"}, {"name": "Event Horizon", "cost": 2, "category": "Skill", "mult": 40, "hits": 1, "shield": 0, "desc": "1 APDraw 1Increase Damage Amount of the first Hit of next Attack Card by 40%", "sct": "unique_30084_05", "image": "assets/cards/unique_30084_05.webp"}], "collapse": [{"name": "Archetype Resonance", "cost": 5, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Select and create 1 Archetype cardThe next 2 times an Ego Skill is used, create an additional cardDecrease Cost of the next Ego Skill used b", "sct": "collapse_30084_01", "image": "assets/cards/collapse_30084_01.webp"}, {"name": "Gloom", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_30084_02", "image": "assets/cards/collapse_30084_02.webp"}]}, {"id": "1033", "name": "Veronica", "rarity": 5, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Stella Familia", "portrait": "assets/characters/1033.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Rapid Fire", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1033_01", "image": "assets/cards/start_1033_01.webp"}, {"name": "Illusion of Golden Daffodils", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1033_02", "image": "assets/cards/start_1033_02.webp"}, {"name": "Veronica Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Veronica Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Firing Preparation", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 1 Ballista card(s)At the start of the turn, create 1 Ballista card(s)", "sct": "unique_1033_01", "image": "assets/cards/unique_1033_01.webp"}, {"name": "Repose", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% ShieldDraw 2 card(s) from other combatant", "sct": "unique_1033_02", "image": "assets/cards/unique_1033_02.webp"}, {"name": "Pendant of Resolution", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When a Skill Card of a different Combatant is activated, 1 Reload", "sct": "unique_1033_04", "image": "assets/cards/unique_1033_04.webp"}, {"name": "Sir Kowalski", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Select 1 Ballista card in hand and +100% Damage Amount until activatedDraw 1", "sct": "unique_1033_05", "image": "assets/cards/unique_1033_05.webp"}, {"name": "Bombardment Prep", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "Increase max stack of Reload by 12 Reload", "sct": "unique_1033_03", "image": "assets/cards/unique_1033_03.webp"}, {"name": "Ballista", "cost": 0, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% Extra Attack to a random enemyAt the end of the turn, proc", "sct": "unique_1033_06", "image": "assets/cards/unique_1033_06.webp"}, {"name": "Piercing Ballista", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 200, "desc": "200% Piercing Damage to a random enemyIf the target possesses Shield, +50% Damage AmountAt the end of the turn, proc", "sct": "unique_1033_07", "image": "assets/cards/unique_1033_07.webp"}, {"name": "Enhanced Ballista", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Extra Attack to a random enemy+30% Critical ChanceAt the end of the turn, proc", "sct": "unique_1033_08", "image": "assets/cards/unique_1033_08.webp"}, {"name": "Giant Ballista", "cost": 0, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% Extra Attack to all enemiesAt the end of the turn, proc", "sct": "unique_1033_09", "image": "assets/cards/unique_1033_09.webp"}, {"name": "Shelling Ballista", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Extra Attack to random enemiesAt the end of the turn, proc", "sct": "unique_1033_10", "image": "assets/cards/unique_1033_10.webp"}, {"name": "Micro Ballista", "cost": 0, "category": "Attack", "mult": 40, "hits": 1, "shield": 0, "desc": "40% Extra Attack to a random enemyAt the end of the turn, proc", "sct": "unique_1033_11", "image": "assets/cards/unique_1033_11.webp"}], "collapse": [{"name": "Hunting Time", "cost": 5, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "250% Piercing Damage to all enemiesGain Maximum Reload", "sct": "collapse_1033_01", "image": "assets/cards/collapse_1033_01.webp"}, {"name": "Fear", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1033_02", "image": "assets/cards/collapse_1033_02.webp"}]}, {"id": "1057", "name": "Yuki", "rarity": 5, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Terrascion", "portrait": "assets/characters/1057.webp", "stats": {"atk": 485, "hp": 360, "def": 160, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Longsword Slash", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1057_01", "image": "assets/cards/start_1057_01.webp"}, {"name": "Rapid Slash", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Damage", "sct": "start_1057_02", "image": "assets/cards/start_1057_02.webp"}, {"name": "Flowing Parry", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1057_03", "image": "assets/cards/start_1057_03.webp"}, {"name": "Yuki Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Prepare to Subdue", "cost": 0, "category": "Skill", "mult": 40, "hits": 1, "shield": 0, "desc": "Draw 1 Attack Card(s) of this unitIncrease Damage Amount of those cards by 40% for 1 turn", "sct": "unique_1057_03", "image": "assets/cards/unique_1057_03.webp"}, {"name": "Flash Slash", "cost": 2, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage+150% Damage Amount for each card of this unit Drawn that turn (max 5)", "sct": "unique_1057_05", "image": "assets/cards/unique_1057_05.webp"}, {"name": "Trickery Strike", "cost": 1, "category": "Attack", "mult": 180, "hits": 1, "shield": 0, "desc": "180% DamageEnable the Inspiration effect for 1 random card(s) of this unit in hand", "sct": "unique_1057_04", "image": "assets/cards/unique_1057_04.webp"}, {"name": "Freezing Blade", "cost": 1, "category": "Power", "mult": 120, "hits": 1, "shield": 0, "desc": "When an Inspiration-enabled card of this unit is activated, 120% Damage to all enemies", "sct": "unique_1057_02", "image": "assets/cards/unique_1057_02.webp"}, {"name": "Iceberg Cleave", "cost": 1, "category": "Attack", "mult": 180, "hits": 1, "shield": 0, "desc": "180% Damage to all enemiesInspiration: Add 1 Hit", "sct": "unique_1057_01", "image": "assets/cards/unique_1057_01.webp"}], "collapse": [{"name": "Skyscraper Cleave", "cost": 5, "category": "Attack", "mult": 450, "hits": 1, "shield": 0, "desc": "450% Damage to all enemiesMove all Attack Cards of this unit in hand to the top of Draw Pile+100% base Damage Amount for each card moved", "sct": "collapse_1057_01", "image": "assets/cards/collapse_1057_01.webp"}, {"name": "Impulse", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1057_02", "image": "assets/cards/collapse_1057_02.webp"}]}, {"id": "1017", "name": "Amir", "rarity": 4, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Terrascion", "portrait": "assets/characters/1017.webp", "stats": {"atk": 275, "hp": 465, "def": 245, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Rapier", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1017_01", "image": "assets/cards/start_1017_01.webp"}, {"name": "Steel Barrier", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1017_02", "image": "assets/cards/start_1017_02.webp"}, {"name": "Amir Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Amir Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Hovering Metal", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "3 Damage Reduction2 Metallization", "sct": "unique_1017_05", "image": "assets/cards/unique_1017_05.webp"}, {"name": "Metal Pierce", "cost": 1, "category": "Attack", "mult": 90, "hits": 1, "shield": 0, "desc": "90% Defense-Based Damage × 2 If in Metallization state, decrease Metallization by 1 and inflict 2 Vulnerable", "sct": "unique_1017_01", "image": "assets/cards/unique_1017_01.webp"}, {"name": "Metal Extraction", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "2 MetallizationFor 1 turn, 2 Resolve", "sct": "unique_1017_03", "image": "assets/cards/unique_1017_03.webp"}, {"name": "Full Metal Hurricane", "cost": 2, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Defense-Based Damage to all enemiesFor 1 turn, Metallization targets all enemies and +20% Damage Amount", "sct": "unique_1017_02", "image": "assets/cards/unique_1017_02.webp"}, {"name": "Iron Skin", "cost": 1, "category": "Skill", "mult": 20, "hits": 1, "shield": 0, "desc": "Decrease Damage Taken by 20% for 1 turnDecrease up to 4 MetallizationAdditionally decrease Damage Taken by 20% for each", "sct": "unique_1017_04", "image": "assets/cards/unique_1017_04.webp"}], "collapse": [{"name": "Steel Resolve", "cost": 4, "category": "Skill", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Shield for each MetallizationRemove MetallizationAt the start of the next turn, 3 Metallization", "sct": "collapse_1017_01", "image": "assets/cards/collapse_1017_01.webp"}, {"name": "Daze", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1017_02", "image": "assets/cards/collapse_1017_02.webp"}]}, {"id": "1012", "name": "Anika", "rarity": 4, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Order", "element_color": "#dfb235", "element_icon": "⚖️", "faction": "Terrascion", "portrait": "assets/characters/1012.webp", "stats": {"atk": 425, "hp": 330, "def": 150, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Blaster Swing", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1012_01", "image": "assets/cards/start_1012_01.webp"}, {"name": "Hold Position", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1012_02", "image": "assets/cards/start_1012_02.webp"}, {"name": "Anika Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Anika Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Ignition Slash", "cost": 2, "category": "Attack", "mult": 400, "hits": 1, "shield": 0, "desc": "400% Damage2 Tenacity DamageEfficiency: Gain 1 AP", "sct": "unique_1012_01", "image": "assets/cards/unique_1012_01.webp"}, {"name": "Shock Gun", "cost": 1, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% Damage1 ShockwaveEfficiency: 1 Tenacity Damage", "sct": "unique_1012_02", "image": "assets/cards/unique_1012_02.webp"}, {"name": "Reloading", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "At the start of the next turn, Draw 2 Lead card(s) of this unit", "sct": "unique_1012_03", "image": "assets/cards/unique_1012_03.webp"}, {"name": "Warming Up", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "For 1 turn, decrease Cost of the next card of this unit activated by 1Efficiency: Draw 1 Lead Attack Card(s) of this unit", "sct": "unique_1012_04", "image": "assets/cards/unique_1012_04.webp"}, {"name": "Rampage Trigger", "cost": 2, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageDestroy: +100% Damage Amount", "sct": "unique_1012_05", "image": "assets/cards/unique_1012_05.webp"}], "collapse": [{"name": "Buffalo Dive", "cost": 5, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "250% Damage to all enemies2 Tenacity Damage", "sct": "collapse_1012_01", "image": "assets/cards/collapse_1012_01.webp"}, {"name": "Guilt", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1012_02", "image": "assets/cards/collapse_1012_02.webp"}]}, {"id": "1040", "name": "Beryl", "rarity": 4, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Void", "element_color": "#a855f7", "element_icon": "🌌", "faction": "Ironrain", "portrait": "assets/characters/1040.webp", "stats": {"atk": 425, "hp": 330, "def": 150, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Launcher", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1040_01", "image": "assets/cards/start_1040_01.webp"}, {"name": "Charge Launcher", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Damage", "sct": "start_1040_03", "image": "assets/cards/start_1040_03.webp"}, {"name": "Barrier", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1040_02", "image": "assets/cards/start_1040_02.webp"}, {"name": "Beryl Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Opening Found", "cost": 1, "category": "Power", "mult": 150, "hits": 1, "shield": 0, "desc": "When a card of this unit is Retained, 150% Extra Attack to random enemies", "sct": "unique_1040_03", "image": "assets/cards/unique_1040_03.webp"}, {"name": "Charged Shot", "cost": 2, "category": "Attack", "mult": 270, "hits": 1, "shield": 0, "desc": "270% DamageRetain: +135% Damage Amount", "sct": "unique_1040_01", "image": "assets/cards/unique_1040_01.webp"}, {"name": "Guilty Pleasure", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 3", "sct": "unique_1040_05", "image": "assets/cards/unique_1040_05.webp"}, {"name": "Unlimited Firepower", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield+80% Damage Amount to the next Attack Card of this unit activated", "sct": "unique_1040_04", "image": "assets/cards/unique_1040_04.webp"}, {"name": "Heavy Weapons Specialist", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 1 Opening Found or Charged Shot, then apply Exhaust to that card and decrease Cost by 1 until activated", "sct": "unique_1040_02", "image": "assets/cards/unique_1040_02.webp"}], "collapse": [{"name": "Max Output Charged Shot", "cost": 5, "category": "Attack", "mult": 350, "hits": 1, "shield": 0, "desc": "350% Damage to all enemies​", "sct": "collapse_1040_01", "image": "assets/cards/collapse_1040_01.webp"}, {"name": "Daze", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1040_02", "image": "assets/cards/collapse_1040_02.webp"}]}, {"id": "1049", "name": "Cassius", "rarity": 4, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Peltion", "portrait": "assets/characters/1049.webp", "stats": {"atk": 385, "hp": 320, "def": 175, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Cards", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1049_01", "image": "assets/cards/start_1049_01.webp"}, {"name": "Wild Card", "cost": 2, "category": "Attack", "mult": 220, "hits": 1, "shield": 0, "desc": "220% Damage", "sct": "start_1049_03", "image": "assets/cards/start_1049_03.webp"}, {"name": "Mana Field", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1049_02", "image": "assets/cards/start_1049_02.webp"}, {"name": "Cassius Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Pop Eyed Popper", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "Start a random 1 out of 4 Quests", "sct": "unique_1049_03", "image": "assets/cards/unique_1049_03.webp"}, {"name": "Devil Dice", "cost": 1, "category": "Attack", "mult": 160, "hits": 1, "shield": 0, "desc": "160% DamageDraw 1", "sct": "unique_1049_05", "image": "assets/cards/unique_1049_05.webp"}, {"name": "Shuffle", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Discard all cards in handDraw for each Discarded", "sct": "unique_1049_04", "image": "assets/cards/unique_1049_04.webp"}, {"name": "Dice Trick", "cost": 2, "category": "Attack", "mult": 240, "hits": 1, "shield": 0, "desc": "240% DamageDecrease Morale by 1 for 1 turnDecrease Cost by the number of completed Quests", "sct": "unique_1049_02", "image": "assets/cards/unique_1049_02.webp"}, {"name": "Joker", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Select and Draw 1 card(s) from Draw Pile", "sct": "unique_1049_01", "image": "assets/cards/unique_1049_01.webp"}, {"name": "Triple 0", "cost": 0, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Damage+40% base Damage Amount for each Attack Card activated this turn(max 4 times)", "sct": "unique_1049_09", "image": "assets/cards/unique_1049_09.webp"}, {"name": "Triple 1", "cost": 0, "category": "Attack", "mult": 1150, "hits": 1, "shield": 0, "desc": "Draw 1150% DamageHeal 150%", "sct": "unique_1049_08", "image": "assets/cards/unique_1049_08.webp"}, {"name": "Straight", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 12 Morale, Resolve, and Fortitude for 1 turn", "sct": "unique_1049_07", "image": "assets/cards/unique_1049_07.webp"}, {"name": "Full House", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 1Decrease Stress of a random ally by 2", "sct": "unique_1049_06", "image": "assets/cards/unique_1049_06.webp"}, {"name": "Quest: Triple 0", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When 3 0-Cost cards are activated, create Triple 0", "sct": "unique_1049_09", "image": "assets/cards/unique_1049_09.webp"}, {"name": "Quest: Triple 1", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When 3 1-Cost cards are activated, create Triple 1", "sct": "unique_1049_08", "image": "assets/cards/unique_1049_08.webp"}, {"name": "Quest: Straight", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When 1 of each 0-Cost, 1-Cost, and 2-Cost cards are activated, create Straight", "sct": "unique_1049_07", "image": "assets/cards/unique_1049_07.webp"}, {"name": "Quest: Full House", "cost": 0, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "When a card of each Combatant has been activated, create Full House", "sct": "unique_1049_06", "image": "assets/cards/unique_1049_06.webp"}], "collapse": [{"name": "Death Trick", "cost": 4, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Quest card(s)Decrease Morale of all enemies by 3 for 1 turn", "sct": "collapse_1049_01", "image": "assets/cards/collapse_1049_01.webp"}, {"name": "Trance", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1049_02", "image": "assets/cards/collapse_1049_02.webp"}]}, {"id": "1021", "name": "Lucas", "rarity": 4, "job": "Hunter", "role": "Follow-Up / Extra Atk", "job_icon": "🏹", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Ironrain", "portrait": "assets/characters/1021.webp", "stats": {"atk": 425, "hp": 330, "def": 150, "crit_rate": 10, "crit_dmg": 150}, "starters": [{"name": "Machine Gun", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1021_01", "image": "assets/cards/start_1021_01.webp"}, {"name": "Shielding Incendiary Bomb", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1021_02", "image": "assets/cards/start_1021_02.webp"}, {"name": "Lucas Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Lucas Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Extended Magazine", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "At the start of the turn, create 1 Launcher Bullet", "sct": "unique_1021_03", "image": "assets/cards/unique_1021_03.webp"}, {"name": "S.S.S", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageFor 1 turn, +40% Bullet card Damage", "sct": "unique_1021_01", "image": "assets/cards/unique_1021_01.webp"}, {"name": "Flame Thrower", "cost": 2, "category": "Attack", "mult": 180, "hits": 1, "shield": 0, "desc": "180% Damage to all enemiesDraw 1Discard 1", "sct": "unique_1021_05", "image": "assets/cards/unique_1021_05.webp"}, {"name": "Flashbang", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Damage to all enemies2 WeakenIf the target has Shield, +50% Damage", "sct": "unique_1021_04", "image": "assets/cards/unique_1021_04.webp"}, {"name": "R.P.G-7", "cost": 1, "category": "Power", "mult": 40, "hits": 1, "shield": 0, "desc": "When Bullet cards are Exhausted, 40% Fixed Damage", "sct": "unique_1021_02", "image": "assets/cards/unique_1021_02.webp"}, {"name": "Armor-Piercing Rounds", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 140, "desc": "140% Damage70% Damage to another enemyIf the target has Shield, +30% Damage Amount", "sct": "job_00408", "image": "assets/cards/job_00408.webp"}, {"name": "Explosive Shot", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Damage70% Damage to another enemy1 Weaken to all enemies", "sct": "job_00409", "image": "assets/cards/job_00409.webp"}, {"name": "Dispersing Shot", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Damage70% Damage to another enemy1 Impair to all enemies", "sct": "job_00410", "image": "assets/cards/job_00410.webp"}, {"name": "Cold Shot", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Damage70% Damage to another enemyIncreases Action Count of all enemies by 1", "sct": "job_00412", "image": "assets/cards/job_00412.webp"}, {"name": "Flame Shot", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Damage70% Damage to another enemy1 Agony to all enemies", "sct": "job_00411", "image": "assets/cards/job_00411.webp"}], "collapse": [{"name": "Full Burst", "cost": 5, "category": "Attack", "mult": 2250, "hits": 1, "shield": 0, "desc": "Draw 2250% Damage to all enemies​", "sct": "collapse_1021_01", "image": "assets/cards/collapse_1021_01.webp"}, {"name": "Despair", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1021_02", "image": "assets/cards/collapse_1021_02.webp"}]}, {"id": "1028", "name": "Maribell", "rarity": 4, "job": "Vanguard", "role": "Defense / Shield", "job_icon": "🛡️", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Ironrain", "portrait": "assets/characters/1028.webp", "stats": {"atk": 275, "hp": 465, "def": 245, "crit_rate": 3, "crit_dmg": 125}, "starters": [{"name": "Shelter Kick", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Defense-Based Damage", "sct": "start_1028_01", "image": "assets/cards/start_1028_01.webp"}, {"name": "Shelter Defense", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1028_02", "image": "assets/cards/start_1028_02.webp"}, {"name": "Shelter Hold", "cost": 2, "category": "Skill", "mult": 220, "hits": 1, "shield": 220, "desc": "220% Shield", "sct": "start_1028_03", "image": "assets/cards/start_1028_03.webp"}, {"name": "Maribell Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}], "uniques": [{"name": "Resolute Blitz", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 140, "desc": "140% Defense-Based Damage20% DMG-Based Shield1 Counterattack", "sct": "unique_1028_03", "image": "assets/cards/unique_1028_03.webp"}, {"name": "Maribell Shelter MK.II", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Defense-Based Damage100% DMG-Based Shield", "sct": "unique_1028_01", "image": "assets/cards/unique_1028_01.webp"}, {"name": "Wolves’ Dome", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "2 CounterattackAt the start of the turn, 1 Counterattack2 Crystallization", "sct": "unique_1028_04", "image": "assets/cards/unique_1028_04.webp"}, {"name": "Oh... I see.", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield1 Counterattack1 Weaken to all enemies", "sct": "unique_1028_05", "image": "assets/cards/unique_1028_05.webp"}, {"name": "Shelter Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 80, "desc": "Fixed Damage equal to Shield owned", "sct": "unique_1028_02", "image": "assets/cards/unique_1028_02.webp"}], "collapse": [{"name": "Unbreakable", "cost": 4, "category": "Skill", "mult": 350, "hits": 1, "shield": 350, "desc": "350% Shield", "sct": "collapse_1028_01", "image": "assets/cards/collapse_1028_01.webp"}, {"name": "Fear", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1028_02", "image": "assets/cards/collapse_1028_02.webp"}]}, {"id": "1039", "name": "Mika", "rarity": 4, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Void", "element_color": "#a855f7", "element_icon": "🌌", "faction": "Terrascion", "portrait": "assets/characters/1039.webp", "stats": {"atk": 385, "hp": 320, "def": 175, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Water Arrow", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1039_01", "image": "assets/cards/start_1039_01.webp"}, {"name": "Water Barrier", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1039_02", "image": "assets/cards/start_1039_02.webp"}, {"name": "Mika Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Mika Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Source of Water", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%Gain 1 AP", "sct": "unique_1039_01", "image": "assets/cards/unique_1039_01.webp"}, {"name": "Blessing of Waves", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%Increase Heal Amount by 30% for each AP", "sct": "unique_1039_04", "image": "assets/cards/unique_1039_04.webp"}, {"name": "Tactical Analysis", "cost": 0, "category": "Skill", "mult": 50, "hits": 1, "shield": 0, "desc": "1 Wave+50% Heal Amount for 1 turn", "sct": "unique_1039_03", "image": "assets/cards/unique_1039_03.webp"}, {"name": "Whirlpool", "cost": 2, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Damage to all enemiesHeal 50% for each target hit", "sct": "unique_1039_02", "image": "assets/cards/unique_1039_02.webp"}, {"name": "Deluge", "cost": 1, "category": "Power", "mult": 100, "hits": 1, "shield": 0, "desc": "1 Wave At the start of the turn, 1 Wave", "sct": "unique_1039_05", "image": "assets/cards/unique_1039_05.webp"}], "collapse": [{"name": "Surge", "cost": 6, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Source of Water Card(s), grant Exhaust to it", "sct": "collapse_1039_01", "image": "assets/cards/collapse_1039_01.webp"}, {"name": "Escapism", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1039_02", "image": "assets/cards/collapse_1039_02.webp"}]}, {"id": "1003", "name": "Nia", "rarity": 4, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Instinct", "element_color": "#22d3ee", "element_icon": "⚡", "faction": "Terrascion", "portrait": "assets/characters/1003.webp", "stats": {"atk": 385, "hp": 320, "def": 175, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Stroke", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1003_01", "image": "assets/cards/start_1003_01.webp"}, {"name": "Amp Therapy", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1003_02", "image": "assets/cards/start_1003_02.webp"}, {"name": "Nia Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Nia Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "G Chord", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "2 DecibelProc the top 1 card(s) in Draw Pile", "sct": "unique_1003_02", "image": "assets/cards/unique_1003_02.webp"}, {"name": "Mute Accent", "cost": 1, "category": "Skill", "mult": 150, "hits": 1, "shield": 0, "desc": "Discard 1 card(s) with the highest Cost150% Extra Attack to a random enemy by the Combatant who owns that card", "sct": "unique_1003_05", "image": "assets/cards/unique_1003_05.webp"}, {"name": "Soul Riff", "cost": 1, "category": "Skill", "mult": 150, "hits": 1, "shield": 0, "desc": "Heal 150%For 1 turn, when a card is Discarded, 1 Decibel and 2 Elasticity", "sct": "unique_1003_01", "image": "assets/cards/unique_1003_01.webp"}, {"name": "Adagio", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Draw 1Discard 1Move the card Discarded through this effect to the top of Draw Pile", "sct": "unique_1003_04", "image": "assets/cards/unique_1003_04.webp"}, {"name": "Nia’s Curiosity", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Check 3 random cards in Draw PileSelect and Draw oneDiscard the rest", "sct": "unique_1003_03", "image": "assets/cards/unique_1003_03.webp"}], "collapse": [{"name": "Rock and Roll", "cost": 5, "category": "Attack", "mult": 200, "hits": 1, "shield": 0, "desc": "200% Damage to all enemies3 DecibelDiscard all cards in Draw Pile", "sct": "collapse_1003_01", "image": "assets/cards/collapse_1003_01.webp"}, {"name": "Charm", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1003_02", "image": "assets/cards/collapse_1003_02.webp"}]}, {"id": "1050", "name": "Owen", "rarity": 4, "job": "Striker", "role": "Melee Burst DPS", "job_icon": "⚔️", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Terrascion", "portrait": "assets/characters/1050.webp", "stats": {"atk": 425, "hp": 330, "def": 150, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Downward Cut", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1050_01", "image": "assets/cards/start_1050_01.webp"}, {"name": "Weapon Block", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1050_02", "image": "assets/cards/start_1050_02.webp"}, {"name": "Owen Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Owen Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Wind Charge", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Add 1 Hit(s) to the next Attack Card of this unit activated", "sct": "unique_1050_04", "image": "assets/cards/unique_1050_04.webp"}, {"name": "Wind Slash", "cost": 2, "category": "Attack", "mult": 280, "hits": 1, "shield": 0, "desc": "280% Damage to all enemies", "sct": "unique_1050_05", "image": "assets/cards/unique_1050_05.webp"}, {"name": "Break Armor", "cost": 1, "category": "Attack", "mult": 140, "hits": 1, "shield": 0, "desc": "140% Damage3 VulnerableWhen Wind Charge is activated, move this card from Discard Pile to hand", "sct": "unique_1050_03", "image": "assets/cards/unique_1050_03.webp"}, {"name": "Wind Riding", "cost": 1, "category": "Skill", "mult": 150, "hits": 1, "shield": 150, "desc": "150% ShieldMove Wind Charge from Discard Pile to hand", "sct": "unique_1050_02", "image": "assets/cards/unique_1050_02.webp"}, {"name": "Gale Strike", "cost": 2, "category": "Attack", "mult": 300, "hits": 1, "shield": 300, "desc": "300% Damage130% Shield", "sct": "unique_1050_01", "image": "assets/cards/unique_1050_01.webp"}], "collapse": [{"name": "Raging Storm", "cost": 5, "category": "Attack", "mult": 250, "hits": 1, "shield": 250, "desc": "250% Damage250% Shield​", "sct": "collapse_1050_01", "image": "assets/cards/collapse_1050_01.webp"}, {"name": "Gloom", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1050_02", "image": "assets/cards/collapse_1050_02.webp"}]}, {"id": "1056", "name": "Rei", "rarity": 4, "job": "Controller", "role": "AP / Card Draw", "job_icon": "✨", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Terrascion", "portrait": "assets/characters/1056.webp", "stats": {"atk": 385, "hp": 320, "def": 175, "crit_rate": 4, "crit_dmg": 135}, "starters": [{"name": "Dark Blade", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1056_01", "image": "assets/cards/start_1056_01.webp"}, {"name": "Material Regeneration", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1056_02", "image": "assets/cards/start_1056_02.webp"}, {"name": "Rei Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Rei Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "Strike of Darkness", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% DamageIncrease Damage Amount of Basic Attack Cards by 100% for 1 turn", "sct": "unique_1056_04", "image": "assets/cards/unique_1056_04.webp"}, {"name": "Resonating Darkness", "cost": 1, "category": "Power", "mult": 40, "hits": 1, "shield": 0, "desc": "+40% Damage Amount to 1-Cost cardsAt the end of the turn, Heal 60%", "sct": "unique_1056_03", "image": "assets/cards/unique_1056_03.webp"}, {"name": "Snack Time", "cost": 0, "category": "Skill", "mult": 200, "hits": 1, "shield": 0, "desc": "Choose 1 card(s) in hand to ExhaustHeal 200%Draw 1", "sct": "unique_1056_05", "image": "assets/cards/unique_1056_05.webp"}, {"name": "Dark Condensation", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Select 1 Attack Card(s) in hand, then +100% Damage Amount for 1 turn until activated", "sct": "unique_1056_01", "image": "assets/cards/unique_1056_01.webp"}, {"name": "Predator's Blade", "cost": 1, "category": "Attack", "mult": 250, "hits": 1, "shield": 0, "desc": "250% DamageFor 1 turn, 2 Morale", "sct": "unique_1056_02", "image": "assets/cards/unique_1056_02.webp"}], "collapse": [{"name": "Final Shadow", "cost": 4, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Damage15% DMG-Based RecoveryGain 1 AP", "sct": "collapse_1056_01", "image": "assets/cards/collapse_1056_01.webp"}, {"name": "Confusion", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1056_02", "image": "assets/cards/collapse_1056_02.webp"}]}, {"id": "1005", "name": "Selena", "rarity": 4, "job": "Ranger", "role": "Multi-Hit / Mark", "job_icon": "🎯", "element": "Passion", "element_color": "#f85058", "element_icon": "🔥", "faction": "Terrascion", "portrait": "assets/characters/1005.webp", "stats": {"atk": 425, "hp": 330, "def": 150, "crit_rate": 5, "crit_dmg": 150}, "starters": [{"name": "Engagement Fire", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1005_01", "image": "assets/cards/start_1005_01.webp"}, {"name": "Emergency Shielding", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield", "sct": "start_1005_02", "image": "assets/cards/start_1005_02.webp"}, {"name": "Selena Strike", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Deals 100% damage to a single enemy.", "sct": "", "image": ""}, {"name": "Selena Defend", "cost": 1, "category": "Skill", "mult": 0, "hits": 0, "shield": 100, "desc": "Grants 100% Shield to the squad.", "sct": "", "image": ""}], "uniques": [{"name": "High-Power Scope", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "2 Mark", "sct": "unique_1005_01", "image": "assets/cards/unique_1005_01.webp"}, {"name": "Target Spotted", "cost": 1, "category": "Attack", "mult": 150, "hits": 1, "shield": 0, "desc": "150% DamageAttunement: 1 Mark to a random enemy", "sct": "unique_1005_02", "image": "assets/cards/unique_1005_02.webp"}, {"name": "Drone Bombing", "cost": 1, "category": "Attack", "mult": 120, "hits": 1, "shield": 0, "desc": "120% Damage to all enemies, 1 Passion Weakness", "sct": "unique_1005_03", "image": "assets/cards/unique_1005_03.webp"}, {"name": "Tactical Maneuver", "cost": 1, "category": "Skill", "mult": 150, "hits": 1, "shield": 150, "desc": "150% Shield2 Tenacity Damage", "sct": "unique_1005_04", "image": "assets/cards/unique_1005_04.webp"}, {"name": "Sniper's Domain", "cost": 0, "category": "Power", "mult": 80, "hits": 1, "shield": 0, "desc": "+80% Mark Damage", "sct": "unique_1005_05", "image": "assets/cards/unique_1005_05.webp"}], "collapse": [{"name": "Final Shot", "cost": 5, "category": "Attack", "mult": 300, "hits": 1, "shield": 0, "desc": "300% Damage3 Mark​", "sct": "collapse_1005_01", "image": "assets/cards/collapse_1005_01.webp"}, {"name": "Daze", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1005_02", "image": "assets/cards/collapse_1005_02.webp"}]}, {"id": "1009", "name": "Tressa", "rarity": 4, "job": "Psionic", "role": "Magic / Discard", "job_icon": "🔮", "element": "Justice", "element_color": "#10664d", "element_icon": "⚔️", "faction": "Terrascion", "portrait": "assets/characters/1009.webp", "stats": {"atk": 385, "hp": 320, "def": 175, "crit_rate": 5, "crit_dmg": 140}, "starters": [{"name": "Dagger Throw", "cost": 1, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "100% Damage", "sct": "start_1009_01", "image": "assets/cards/start_1009_01.webp"}, {"name": "Touch of Darkness", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%", "sct": "start_1009_02", "image": "assets/cards/start_1009_02.webp"}, {"name": "Shadow Dagger", "cost": 0, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage2 Agony", "sct": "start_1009_03", "image": "assets/cards/start_1009_03.webp"}, {"name": "Advanced Shadow Dagger", "cost": 0, "category": "Attack", "mult": 50, "hits": 1, "shield": 0, "desc": "4 Agony50% Damage+10% Damage Amount for each Agony on the target", "sct": "start_1009_03", "image": "assets/cards/start_1009_03.webp"}], "uniques": [{"name": "Unsheathe Dagger", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Shadow Dagger", "sct": "unique_1009_01", "image": "assets/cards/unique_1009_01.webp"}, {"name": "Curse", "cost": 0, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "For 1 turn, when an Attack Card is activated, 1 Agony to the target", "sct": "unique_1009_05", "image": "assets/cards/unique_1009_05.webp"}, {"name": "Shadow Reload", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Heal 100%Create 1 Advanced Shadow Dagger", "sct": "unique_1009_04", "image": "assets/cards/unique_1009_04.webp"}, {"name": "Vital Attack", "cost": 2, "category": "Attack", "mult": 80, "hits": 1, "shield": 0, "desc": "80% Damage × 3If the target is in an Agony state, +50% Damage Amount", "sct": "unique_1009_03", "image": "assets/cards/unique_1009_03.webp"}, {"name": "Cursed Gouge", "cost": 1, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Activate Agony inflicted by this unit on the target", "sct": "unique_1009_02", "image": "assets/cards/unique_1009_02.webp"}], "collapse": [{"name": "Wave of Darkness", "cost": 5, "category": "Skill", "mult": 100, "hits": 1, "shield": 0, "desc": "Create 2 Shadow Dagger2 Agony × 2", "sct": "collapse_1009_01", "image": "assets/cards/collapse_1009_01.webp"}, {"name": "Escapism", "cost": 0, "category": "Attack", "mult": 100, "hits": 1, "shield": 0, "desc": "Has a low chance for unexpected results to occur on use.", "sct": "collapse_1009_02", "image": "assets/cards/collapse_1009_02.webp"}]}],
  partners: [{"id": "30091", "name": "Alcea", "rarity": 5, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/30091.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 20, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +20% and Shield gain by +20%.", "card": {"name": "If You Require Assistance", "cost": 3, "category": "Support", "mult": 250, "hits": 1, "shield": 120, "desc": "250% Defense-Based Damage5 Caustic Remarks", "image": "assets/cards/support_30091_01.webp", "sct": "support_30091_01"}}, {"id": "20008", "name": "Anteia", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/20008.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Scholarly Measures", "cost": 2, "category": "Support", "mult": 180, "hits": 1, "shield": 120, "desc": "180% Damage to all enemies1 Vulnerable", "image": "assets/cards/support_20008_01.webp", "sct": "support_20008_01"}}, {"id": "1070", "name": "Aria", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/1070.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "An Aria For You", "cost": 2, "category": "Support", "mult": 20, "hits": 1, "shield": 120, "desc": "Increase Damage Amount of the assigned Combatant‘s Basic Attack Cards by 20%If the assigned Combatant‘s Ego Skill was used, decrease Cost of", "image": "assets/cards/support_1070_01.webp", "sct": "support_1070_01"}}, {"id": "30045", "name": "Asteria", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/30045.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Light of Ark", "cost": 2, "category": "Support", "mult": 40, "hits": 1, "shield": 120, "desc": "+40% Damage Amount to the assigned Combatant‘s next Attack card activated for each Cost of all cards in hand (max 10)", "image": "assets/cards/support_30045_01.webp", "sct": "support_30045_01"}}, {"id": "20021", "name": "Bria", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/20021.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Capable Secretary", "cost": 3, "category": "Support", "mult": 10, "hits": 1, "shield": 120, "desc": "Exhaust all Status Ailment Cards (including those that were originally Status Ailment) and Curse Cards from Discard PileIncrease Damage Amou", "image": "assets/cards/support_20021_01.webp", "sct": "support_20021_01"}}, {"id": "30095", "name": "Clara", "rarity": 5, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/30095.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 20, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +20% and Shield gain by +20%.", "card": {"name": "Genius Stage Director", "cost": 3, "category": "Support", "mult": 200, "hits": 1, "shield": 200, "desc": "200% ShieldSelect and Draw 2 Blessing card(s) from Draw Pile", "image": "assets/cards/support_30095_01.webp", "sct": "support_30095_01"}}, {"id": "20005", "name": "Eishlen", "rarity": 5, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/20005.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 20, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +20% and Shield gain by +20%.", "card": {"name": "Innos’s Guardian", "cost": 4, "category": "Support", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield50% Shield Retention for 1 turn (cannot stack)", "image": "assets/cards/support_20005_01.webp", "sct": "support_20005_01"}}, {"id": "30118", "name": "Emilie", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/30118.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "For My Mistress", "cost": 2, "category": "Support", "mult": 300, "hits": 1, "shield": 120, "desc": "300% Damage2 Sensory Deprivation", "image": "assets/cards/support_30118_01.webp", "sct": "support_30118_01"}}, {"id": "30054", "name": "Erica", "rarity": 5, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/30054.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 20, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +20% and Shield gain by +20%.", "card": {"name": "Crackdown Beam Bombardment", "cost": 2, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Defense-based Damage to all enemies1 CounterattackIf any enemy’s Anticipated Action is attack, 1 Counterattack", "image": "assets/cards/support_30054_01.webp", "sct": "support_30054_01"}}, {"id": "30114", "name": "Eunie", "rarity": 5, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/30114.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Lay Down Suppressive Fire!", "cost": 3, "category": "Support", "mult": 80, "hits": 1, "shield": 120, "desc": "80% Damage to all enemies1 Leaving the Rest to You!, and when an enemy is defeated, 1 Ammo Transfer for each defeated", "image": "assets/cards/support_30114_01.webp", "sct": "support_30114_01"}}, {"id": "20002", "name": "Gaya", "rarity": 5, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/20002.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Ice Wyrm’s Roar", "cost": 3, "category": "Support", "mult": 60, "hits": 1, "shield": 120, "desc": "60% Defense-Based DamageDraw 1 Attack Card(s)", "image": "assets/cards/support_20002_01.webp", "sct": "support_20002_01"}}, {"id": "30046", "name": "Itsuku", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/30046.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Moonlit Leisure", "cost": 3, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Damage to all enemies2 Fierce Winds", "image": "assets/cards/support_30046_01.webp", "sct": "support_30046_01"}}, {"id": "1025", "name": "Ivy", "rarity": 5, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/1025.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "A New Visitor", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "2 Illusory Erosion", "image": "assets/cards/support_1025_01.webp", "sct": "support_1025_01"}}, {"id": "20004", "name": "Janet", "rarity": 5, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20004.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Ultimate Missile Turret!", "cost": 3, "category": "Support", "mult": 150, "hits": 1, "shield": 120, "desc": "150% Damage to all enemiesIncrease Damage Amount of the assigned Combatant‘s Bullets by 20% for 1 turn", "image": "assets/cards/support_20004_01.webp", "sct": "support_20004_01"}}, {"id": "20030", "name": "Kiara", "rarity": 5, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20030.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Lumina Explosion", "cost": 3, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Damage+20% base Damage Amount for each card in Graveyard", "image": "assets/cards/support_20030_01.webp", "sct": "support_20030_01"}}, {"id": "30116", "name": "Licinia", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/30116.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Blossoming Venom", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Gain 1 AP3 Paralytic Poison to all enemies", "image": "assets/cards/support_30116_01.webp", "sct": "support_30116_01"}}, {"id": "20037", "name": "Marianne", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20037.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Blood Stalker", "cost": 3, "category": "Support", "mult": 350, "hits": 1, "shield": 120, "desc": "350% Damage", "image": "assets/cards/support_20037_01.webp", "sct": "support_20037_01"}}, {"id": "30051", "name": "Marin", "rarity": 5, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/30051.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Azure Fury", "cost": 3, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Damage to all enemiesDraw 1 skill card(s)", "image": "assets/cards/support_30051_01.webp", "sct": "support_30051_01"}}, {"id": "30052", "name": "Noel", "rarity": 5, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/30052.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Legato of Faith", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Heal 100%Activate the Retain effect of all of the assigned Combatant‘s cards in hand", "image": "assets/cards/support_30052_01.webp", "sct": "support_30052_01"}}, {"id": "20006", "name": "Nyx", "rarity": 5, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/20006.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Errante Hurricane", "cost": 4, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Discard up to 3 card(s),then Draw +1 card(s) equal to the number discarded", "image": "assets/cards/support_20006_01.webp", "sct": "support_20006_01"}}, {"id": "30076", "name": "Peko", "rarity": 5, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/30076.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Overclock Beacon", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "When an ally inflicts Ravage, 1 Overclock to the assigned Combatant (1 time per turn)", "image": "assets/cards/support_30076_01.webp", "sct": "support_30076_01"}}, {"id": "20019", "name": "Priscilla", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20019.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Arachnid Web", "cost": 2, "category": "Support", "mult": 250, "hits": 1, "shield": 120, "desc": "250% DamageApply Weakness Attack to 1 of the assigned Combatant's random Attack Cards in hand", "image": "assets/cards/support_20019_01.webp", "sct": "support_20019_01"}}, {"id": "30092", "name": "Ruixiang", "rarity": 5, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/30092.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Incense", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Draw 1 of the assigned Combatant’s Attack CardIf Cost of that card is either 0 or X, Draw 2", "image": "assets/cards/support_30092_01.webp", "sct": "support_30092_01"}}, {"id": "20034", "name": "Scarlet", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20034.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Binding Knot", "cost": 3, "category": "Support", "mult": 250, "hits": 1, "shield": 120, "desc": "250% DamageFor 1 turn, +10% Damage Amount to the assigned Combatant's Attack Cards for each beneficial effect in possession", "image": "assets/cards/support_20034_01.webp", "sct": "support_20034_01"}}, {"id": "20014", "name": "Serithea", "rarity": 5, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20014.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Crimson Romance", "cost": 3, "category": "Support", "mult": 250, "hits": 1, "shield": 120, "desc": "250% Damage2 Vulnerable", "image": "assets/cards/support_20014_01.webp", "sct": "support_20014_01"}}, {"id": "30053", "name": "Sophia", "rarity": 5, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/30053.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Always Cheer For You", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "3 Die-hard FanDraw 1Discard up to 2 cards", "image": "assets/cards/support_30053_01.webp", "sct": "support_30053_01"}}, {"id": "30094", "name": "Sylvia", "rarity": 5, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/30094.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Field Overview", "cost": 2, "category": "Support", "mult": 10, "hits": 1, "shield": 120, "desc": "Select up to 2 cards in hand and apply LinkedIf a selected card is the assigned Combatant’s Linked card, +10% Critical Damage to the assigne", "image": "assets/cards/support_30094_01.webp", "sct": "support_30094_01"}}, {"id": "30085", "name": "Tiana", "rarity": 5, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/30085.webp", "stat_boost": {"atk_pct": 10, "flat_atk": 60, "def_pct": 10, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Phase Alignment", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Draw 1 Exhaust card(s)The next 2 time(s) an Ego Skill is used, Draw 1 Exhaust card(s)Decrease Cost of the next Ego Skill used by 1", "image": "assets/cards/support_30085_01.webp", "sct": "support_30085_01"}}, {"id": "20038", "name": "Tina", "rarity": 5, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/20038.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Target confirmed, initiating support!", "cost": 2, "category": "Support", "mult": 30, "hits": 1, "shield": 120, "desc": "Draw 1Increase Damage Amount of the assigned Combatant's Extra Attacks by 30% for 1 turn", "image": "assets/cards/support_20038_01.webp", "sct": "support_20038_01"}}, {"id": "30044", "name": "Westmacott", "rarity": 5, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/30044.webp", "stat_boost": {"atk_pct": 16, "flat_atk": 110, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +16% and Attack Card damage by +15%.", "card": {"name": "Clue Spotted", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Move 1 card(s) from hand to top of Draw PileDraw 2 of the assigned Combatant’s card(s)", "image": "assets/cards/support_30044_01.webp", "sct": "support_30044_01"}}, {"id": "20009", "name": "Zeta", "rarity": 5, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/20009.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 20, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +20% and Shield gain by +20%.", "card": {"name": "Undertaking the Mission", "cost": 2, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Defense-Based DamageDraws 1 highest-cost card(s)", "image": "assets/cards/support_20009_01.webp", "sct": "support_20009_01"}}, {"id": "20007", "name": "Akad", "rarity": 4, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20007.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "What I Wished to Protect", "cost": 2, "category": "Support", "mult": 25, "hits": 1, "shield": 120, "desc": "+25% Critical Chance of the assigned Combatant’s Attack cards for 1 turn", "image": "assets/cards/support_20007_01.webp", "sct": "support_20007_01"}}, {"id": "20003", "name": "Alyssa", "rarity": 4, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/20003.webp", "stat_boost": {"atk_pct": 8, "flat_atk": 40, "def_pct": 6, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Vitality Boosting Potion", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Heal 100%1 Morale for 1 turnWhen below 50% HP, increase Heal Amount by 50%", "image": "assets/cards/support_20003_01.webp", "sct": "support_20003_01"}}, {"id": "20001", "name": "Arwen", "rarity": 4, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/20001.webp", "stat_boost": {"atk_pct": 8, "flat_atk": 40, "def_pct": 6, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Pokopo ponpon!", "cost": 3, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "Heal 200%1 Damage Reduction", "image": "assets/cards/support_20001_01.webp", "sct": "support_20001_01"}}, {"id": "20036", "name": "Carroty", "rarity": 4, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20036.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Eating Soft Carrots", "cost": 2, "category": "Support", "mult": 20, "hits": 1, "shield": 120, "desc": "For 1 turn, increase the damage of cards generated by the assigned combatant’s abilities by 20%", "image": "assets/cards/support_20036_01.webp", "sct": "support_20036_01"}}, {"id": "20011", "name": "Daisy", "rarity": 4, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/20011.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Commencing Detection!", "cost": 2, "category": "Support", "mult": 180, "hits": 1, "shield": 180, "desc": "180% Shield1 Morale for 1 turn", "image": "assets/cards/support_20011_01.webp", "sct": "support_20011_01"}}, {"id": "20027", "name": "Eloise", "rarity": 4, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/20027.webp", "stat_boost": {"atk_pct": 8, "flat_atk": 40, "def_pct": 6, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Activate Defense Module", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "For 1 turn, when a card is Exhausted, 1 Weaken to a random enemy", "image": "assets/cards/support_20027_01.webp", "sct": "support_20027_01"}}, {"id": "20033", "name": "Lillian", "rarity": 4, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20033.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Light of Judgment", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "100% Damage to all enemiesDraw 1 Attack Cards with Cost 1 or less from the assigned Combatant", "image": "assets/cards/support_20033_01.webp", "sct": "support_20033_01"}}, {"id": "20032", "name": "Rachel", "rarity": 4, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/20032.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 14, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +14% and Shield gain by +20%.", "card": {"name": "Hamburger Delivery, Sir!", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 100, "desc": "100% ShieldDraw 1", "image": "assets/cards/support_20032_01.webp", "sct": "support_20032_01"}}, {"id": "20035", "name": "Ritochka", "rarity": 4, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20035.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Workplace hazards ahead!", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "For 1 turn, 3 Morale", "image": "assets/cards/support_20035_01.webp", "sct": "support_20035_01"}}, {"id": "20025", "name": "Rosaria", "rarity": 4, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/20025.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Security team, requesting support!", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Draw 1 Upgrade Card(s)If there are no Upgrade Cards in Draw Pile, Draw 1", "image": "assets/cards/support_20025_01.webp", "sct": "support_20025_01"}}, {"id": "20024", "name": "Wilhelmina", "rarity": 4, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/20024.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 14, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +14% and Shield gain by +20%.", "card": {"name": "Tactical Command", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "For 1 turn, 2 MoraleFor 1 turn, 1 Fortitude", "image": "assets/cards/support_20024_01.webp", "sct": "support_20024_01"}}, {"id": "20015", "name": "Douglas", "rarity": 3, "job": "Striker", "job_icon": "⚔️", "portrait": "assets/characters/20015.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Giant Bazooka", "cost": 2, "category": "Support", "mult": 120, "hits": 1, "shield": 120, "desc": "120% Damage to all enemies", "image": "assets/cards/support_20015_01.webp", "sct": "support_20015_01"}}, {"id": "20010", "name": "Nakia", "rarity": 3, "job": "Ranger", "job_icon": "🎯", "portrait": "assets/characters/20010.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Powerful Shot", "cost": 2, "category": "Support", "mult": 200, "hits": 1, "shield": 120, "desc": "200% Damage", "image": "assets/cards/support_20010_01.webp", "sct": "support_20010_01"}}, {"id": "20013", "name": "Raidel", "rarity": 3, "job": "Vanguard", "job_icon": "🛡️", "portrait": "assets/characters/20013.webp", "stat_boost": {"atk_pct": 0, "flat_atk": 0, "def_pct": 14, "hp_pct": 16}, "passive": "Increases assigned combatant's DEF by +14% and Shield gain by +20%.", "card": {"name": "Analyze Weakness", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 100, "desc": "100% Shield1 Counterattack", "image": "assets/cards/support_20013_01.webp", "sct": "support_20013_01"}}, {"id": "20016", "name": "Yuri", "rarity": 3, "job": "Hunter", "job_icon": "🏹", "portrait": "assets/characters/20016.webp", "stat_boost": {"atk_pct": 12, "flat_atk": 80, "def_pct": 0, "hp_pct": 8}, "passive": "Increases assigned combatant's ATK by +12% and Attack Card damage by +15%.", "card": {"name": "Drone Deployment!", "cost": 3, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Draw 2", "image": "assets/cards/support_20016_01.webp", "sct": "support_20016_01"}}, {"id": "20026", "name": "Yvonne", "rarity": 3, "job": "Controller", "job_icon": "✨", "portrait": "assets/characters/20026.webp", "stat_boost": {"atk_pct": 8, "flat_atk": 40, "def_pct": 6, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Consecration", "cost": 2, "category": "Support", "mult": 100, "hits": 1, "shield": 120, "desc": "Heal 100%1 Fortitude for 1 turn", "image": "assets/cards/support_20026_01.webp", "sct": "support_20026_01"}}, {"id": "20012", "name": "Zatera", "rarity": 3, "job": "Psionic", "job_icon": "🔮", "portrait": "assets/characters/20012.webp", "stat_boost": {"atk_pct": 8, "flat_atk": 40, "def_pct": 6, "hp_pct": 12}, "passive": "Increases assigned combatant's HP and AP cycle efficiency.", "card": {"name": "Flower of Memory", "cost": 2, "category": "Support", "mult": 200, "hits": 1, "shield": 200, "desc": "200% Shield", "image": "assets/cards/support_20012_01.webp", "sct": "support_20012_01"}}],
  presets: [{"id": "apex_hunt", "name": "The Apex Hunt Barrage", "desc": "Single-target assassination engine. Tressa applies rapid debuffs, Hugo triggers repeated follow-ups, and Cassius clears curses and regulates draw flow.", "hero_ids": ["1010", "1009", "1049"], "partner_ids": ["30091", "20008", "1070"]}, {"id": "passion_firestorm", "name": "Passion Firestorm", "desc": "Explosive AoE burst squad. Heidemarie chains Passion volleys with Hugo follow-up strikes while Cassius guarantees steady 3 AP hand flow.", "hero_ids": ["1061", "1010", "1049"], "partner_ids": ["30045", "30091", "20021"]}, {"id": "iron_bulwark", "name": "The Iron Bulwark", "desc": "High-sustain, near-zero Stress tanking. Magna and Khalipe stack massive barriers and counterattacks while Mika fuels AP.", "hero_ids": ["1064", "1062", "1017"], "partner_ids": ["30095", "20005", "30118"]}, {"id": "dark_mist_blades", "name": "Dark Mist Blades", "desc": "Void discard and bleeding combo. Rin transitions through stance swordplay while Luke marks critical vulnerabilities.", "hero_ids": ["1018", "1004", "1050"], "partner_ids": ["30054", "30114", "20002"]}],
  glossary: [{"term": "Action Points (AP)", "category": "Resource & Economy", "desc": "Sumber daya energi per giliran untuk memainkan kartu. Setiap tim memulai giliran dengan 3 AP (dapat bertambah melalui kondisi Ravage atau Divine Sparks)."}, {"term": "Tenacity & Tenacity Bar", "category": "Combat Mechanics", "desc": "Bilah pertahanan kuning di bawah HP musuh. Mengurangi damage yang diterima dan terkikis saat musuh terkena serangan (kartu single-target mengikis 1/3 bar per AP; kartu dengan kelemahan elemen mengikis 1 bar penuh per AP)."}, {"term": "Ravage State", "category": "Combat Mechanics", "desc": "Kondisi saat bilah Tenacity musuh terkuras habis (0). Musuh terkena stun, menerima peningkatan damage kerentanan (+50% DMG), dan regu pemain langsung memperoleh +1 Bonus AP!"}, {"term": "Elemental Weakness (+25% DMG)", "category": "Combat Mechanics", "desc": "Mengeksploitasi kelemahan elemen Ego musuh (Passion, Order, Justice, Void, Instinct). Serangan yang cocok memberikan bonus damage multiplikatif +25% dan mengikis Tenacity 3x lebih cepat."}, {"term": "Critical Hit & Crit Damage", "category": "Stats & Combat", "desc": "Serangan kritikal berbasis Crit Rate (standar dasar 5%). Saat aktif, menghasilkan 150% Crit DMG (tanpa perlengkapan), tetapi tidak menambah pengikisan Tenacity."}, {"term": "Combatant", "category": "Entities", "desc": "Pahlawan petarung utama di garis depan. Tepat 3 Combatant membentuk satu tim, berbagi satu bilah total HP, dan masing-masing membawa 8 kartu (4 Starter + 4 Unique)."}, {"term": "Partner (Supporter)", "category": "Entities", "desc": "Karakter pendukung yang dipasangkan 1-ke-1 ke setiap Combatant (total 3 Partner per tim). Memberikan bonus stat dasar (ATK/DEF/HP), talenta pasif sinergi, dan 1 kartu Assist aktif di medan tempur."}, {"term": "Mental Breakdown & Trauma Collapse", "category": "Psychological System", "desc": "Saat Stres regu mencapai batas maksimal 100 poin, pahlawan mengalami gangguan jiwa. Kartu Trauma Collapse dipaksa masuk ke dek operasi, namun membuka akses ke Ego Ultimate Skill."}, {"term": "Equipment (Relics)", "category": "Gear System", "desc": "Perlengkapan dasar 3 slot (Weapon, Armor, Trinket) dengan tingkat bintang 1★ hingga 5★. Memberikan stat flat pasti (ATK, DEF, HP) dan pasif tempur unik saat memasuki pertempuran."}, {"term": "Memory Fragments (Artifacts)", "category": "Gear System", "desc": "Sistem artefak 6 slot (Shock, Suppression, Denial, Ideal, Desire, Imagination) dengan 1 stat utama dan hingga 4 sub-stat acak. Mengaktifkan bonus set 2-piece dan 4-piece (seperti Conqueror, Spark of Passion, Line of Justice)."}, {"term": "Inspiration", "category": "Card Keywords", "desc": "Efek mutasi kartu yang mengurangi biaya AP atau menambahkan hit ekstra ketika kondisi pemicu tertentu di tangan terpenuhi."}, {"term": "Exhaust", "category": "Card Keywords", "desc": "Kartu yang setelah dimainkan langsung dikeluarkan dari pertempuran hingga pertarungan selesai (tidak masuk ke Graveyard/Discard Pile)."}, {"term": "Retain", "category": "Card Keywords", "desc": "Kartu yang tetap berada di tangan saat giliran berakhir dan tidak dibuang ke Graveyard."}, {"term": "Agony", "category": "Status Effects", "desc": "Status debuff kerusakan berkala (DoT) yang meledakkan damage pada awal giliran musuh atau saat dipicu oleh kartu Hunter/Psionic."}, {"term": "Fixed Shield & Barrier", "category": "Defense", "desc": "Lapisan pelindung yang menyerap kerusakan sebelum mengenai bilah HP tim, mencegah akumulasi Stres mental regu."}],
  "commonEpiphanies": [
    {
      "id": "c00000",
      "desc": "Morale 1",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c00002",
      "desc": "Morale 2",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c03010",
      "desc": "For 1 turn, gain 1 Morale",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c03011",
      "desc": "For 1 turn, gain 2 Morale",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c03012",
      "desc": "For 1 turn, gain 3 Morale",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c03013",
      "desc": "For 1 turn, gain 4 Morale",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c04010",
      "desc": "For 1 turn, gain 1 Resolve",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c04011",
      "desc": "For 1 turn, gain 2 Resolve",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c04012",
      "desc": "For 1 turn, gain 3 Resolve",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c04013",
      "desc": "For 1 turn, gain 4 Resolve",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c06000",
      "desc": "Draw 1",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c06001",
      "desc": "Draw 2",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c06003",
      "desc": "Draw 3",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c09000",
      "desc": "Apply 2 Weaken to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c09002",
      "desc": "Apply 3 Weaken to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c09010",
      "desc": "Apply 1 Weaken to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c11000",
      "desc": "Apply 2 Mark to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c11002",
      "desc": "Apply 3 Mark to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c11010",
      "desc": "Apply 1 Mark to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c15000",
      "desc": "1 Tenacity Damage",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c15001",
      "desc": "2 Tenacity Damage",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c15003",
      "desc": "3 Tenacity Damage",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c15010",
      "desc": "0.5 Tenacity Damage",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c17000",
      "desc": "Gain 1 Ego Points",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c17001",
      "desc": "Gain 2 Ego Points",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c17003",
      "desc": "Gain 3 Ego Points",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c19000",
      "desc": "3 Agony to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c19002",
      "desc": "4 Agony to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c19010",
      "desc": "2 Agony to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c20110",
      "desc": "At the start of the turn, 2 Agony to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c20113",
      "desc": "At the start of the turn, 4 Agony to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c22110",
      "desc": "At the end of the turn, Fixed Heal 20%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c22112",
      "desc": "At the end of the turn, Fixed Heal 40%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c22113",
      "desc": "At the end of the turn, Fixed Heal 60%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c01000",
      "desc": "Resolve 1",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c01002",
      "desc": "Resolve 2",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c28000",
      "desc": "1 Morale next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c28001",
      "desc": "2 Morale next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c28002",
      "desc": "3 Morale next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c28003",
      "desc": "4 Morale next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c29000",
      "desc": "1 Resolve next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c29001",
      "desc": "2 Resolve next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c29002",
      "desc": "3 Resolve next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c29003",
      "desc": "4 Resolve next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c31000",
      "desc": "Draw 1 next turn",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c31001",
      "desc": "Draw 2 next turn",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c31003",
      "desc": "Draw 3 next turn",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c23000",
      "desc": "Apply Weaken 2 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c23002",
      "desc": "Apply Weaken 3 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c23010",
      "desc": "Apply Weaken 1 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c25000",
      "desc": "Apply Mark 2 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c25002",
      "desc": "Apply Mark 3 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c25010",
      "desc": "Apply Mark 1 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c26000",
      "desc": "Apply Agony 2 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c26002",
      "desc": "Apply Agony 3 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c26010",
      "desc": "Apply Agony 1 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c02000",
      "desc": "Fortitude 1",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c02002",
      "desc": "Fortitude 2",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c05010",
      "desc": "For 1 turn, gain 1 Fortitude",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c05011",
      "desc": "For 1 turn, gain 2 Fortitude",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c05012",
      "desc": "For 1 turn, gain 3 Fortitude",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c05013",
      "desc": "For 1 turn, gain 4 Fortitude",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c07010",
      "desc": "Counterattack 1",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c07012",
      "desc": "Counterattack 2",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c08000",
      "desc": "At turn start, Counterattack 1",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c08003",
      "desc": "At turn start, Counterattack 2",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c10000",
      "desc": "Apply 2 Vulnerable to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c10002",
      "desc": "Apply 3 Vulnerable to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c10010",
      "desc": "Apply 1 Vulnerable to the target",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c12000",
      "desc": "2 Damage Reduction",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c12002",
      "desc": "3 Damage Reduction",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c12010",
      "desc": "1 Damage Reduction",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c13010",
      "desc": "Increase Action Count by 2",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c13012",
      "desc": "Increase Action Count by 3",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c14001",
      "desc": "Reduce Cost of this card by 1",
      "category": "Resource",
      "cost_mod": -1,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c16000",
      "desc": "Gain 1 AP",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c16002",
      "desc": "Gain 2 AP",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c18001",
      "desc": "1 Immunity",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c21110",
      "desc": "At the end of the turn, Fixed Shield 20%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c21112",
      "desc": "At the end of the turn, Fixed Shield 40%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c21113",
      "desc": "At the end of the turn, Fixed Shield 60%",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "power"
      ]
    },
    {
      "id": "c24000",
      "desc": "Apply Vulnerable 2 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c24002",
      "desc": "Apply Vulnerable 3 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c24010",
      "desc": "Apply Vulnerable 1 to all enemies",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c27010",
      "desc": "Increase Action Count of all enemies by 1",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c27012",
      "desc": "Increase Action Count of all enemies by 2",
      "category": "Debuff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c30000",
      "desc": "1 Fortitude next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c30001",
      "desc": "2 Fortitude next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c30002",
      "desc": "3 Fortitude next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c30003",
      "desc": "4 Fortitude next turn",
      "category": "Buff",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c33000",
      "desc": "1 AP next turn",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    },
    {
      "id": "c33002",
      "desc": "2 AP next turn",
      "category": "Resource",
      "cost_mod": 0,
      "targets": [
        "atk",
        "skill"
      ]
    }
  ],
  "divineEpiphanies": {
    "VITOR": {
      "god": "VITOR",
      "info": {
        "name": "Vitor",
        "epithet": "God of Might & Destruction",
        "role": "Raw Damage & Tenacity Shred",
        "icon": "\u2694\ufe0f"
      },
      "sparks": [
        {
          "id": "add_r_spark_vitor_01",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_vitor_02",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_vitor_03",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_vitor_04",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_vitor_05",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_vitor_06",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_vitor_07",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_vitor_08",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_vitor_09",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_vitor_10",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_vitor_11",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_vitor_12",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_vitor_13",
          "desc": "Draw 1 card(s) of this unit",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_vitor_14",
          "desc": "Apply Initiation to this card",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_vitor_15",
          "desc": "Weakness Attack: Decrease Fortitude by 2 for 1 turn",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_1",
          "desc": "Inspiration: Change Cost to 0",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_vitor_4",
          "desc": "Guaranteed Critical",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_5",
          "desc": "Ravage: Move to hand",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_6",
          "desc": "Streak: Increase Damage Amount by 50%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_7",
          "desc": "Destroy: Add 1 Hit(s)",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_8",
          "desc": "+100% Critical Damage",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_vitor_11",
          "desc": "Apply Opener to this card",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "assault_r_spark_vitor_12",
          "desc": "Treat as a Basic Card | Proc a random Basic Card from Draw Pile",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        }
      ]
    },
    "CIRCEN": {
      "god": "CIRCEN",
      "info": {
        "name": "Circen",
        "epithet": "God of Time & Efficiency",
        "role": "AP Reduction & Energy Cycling",
        "icon": "\u23f3"
      },
      "sparks": [
        {
          "id": "add_r_spark_circen_01",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_circen_03",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_circen_02",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_circen_04",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_circen_05",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_circen_06",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_circen_07",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_circen_08",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_circen_09",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_circen_10",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_circen_11",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_circen_12",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_circen_13",
          "desc": "Decrease Stress by 5",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_circen_14",
          "desc": "Harmonization: 2 AP on the next turn",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_circen_15",
          "desc": "Decrease Cost of Ego Skill by 1 for this turn",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_circen_1",
          "desc": "Apply Celestial to this card",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_circen_2",
          "desc": "When an Ego Skill is used, decrease Cost by 1",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_circen_5",
          "desc": "Treated as a Basic Card | Draw 1 Basic Cards",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_circen_6",
          "desc": "Increase Cost by 1, and increase Damage Amount by 100%",
          "cost_mod": 1,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_circen_7",
          "desc": "Decrease Cost of Basic Cards by 1",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "assault_r_spark_circen_8",
          "desc": "Create a random Neutral Skill Card, then apply Exhaust to that card",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_circen_11",
          "desc": "Apply the next X as X+2",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_circen_12",
          "desc": "Decrease Cost of the next card of this unit activated by 2",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        }
      ]
    },
    "SECRED": {
      "god": "SECRED",
      "info": {
        "name": "Secred",
        "epithet": "God of Synergy & Harmony",
        "role": "Coordinated Attack & Weakness Exploit",
        "icon": "\u2728"
      },
      "sparks": [
        {
          "id": "add_r_spark_secred_01",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_secred_02",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_secred_03",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_secred_04",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_secred_05",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_secred_06",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_secred_07",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_secred_08",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_secred_09",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_secred_10",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_secred_11",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_secred_12",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_secred_13",
          "desc": "At the start of each turn, when this card is the first card activated, Draw 2",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_secred_14",
          "desc": "When HP is less than 50%, increase Heal Amount by 100%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_secred_15",
          "desc": "At the start of the turn, 2 Mark to a random enemy",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "assault_r_spark_secred_2",
          "desc": "Draw until 4 cards are in hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_secred_3",
          "desc": "At the start of the turn, proc this card in hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_secred_4_0",
          "desc": "1 Evasion, and 1 Immunity",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_secred_5",
          "desc": "If HP is full, change Cost to 0",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_secred_6",
          "desc": "When moved to Discard Pile, 100% Coordinated Attack to a random enemy",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_secred_8",
          "desc": "Apply Weakness Attack to this card | Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_secred_9",
          "desc": "100% Coordinated Attack by all Combatants",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_secred_11",
          "desc": "Apply Lead to this card, then proc a random Lead card from hand",
          "cost_mod": 0,
          "targets": [
            "skill",
            "power"
          ]
        },
        {
          "id": "assault_r_spark_secred_12",
          "desc": "On Recover, decrease Cost by 1 for 1 turn or until activated",
          "cost_mod": 0,
          "targets": []
        }
      ]
    },
    "DIALLOS": {
      "god": "DIALLOS",
      "info": {
        "name": "Diallos",
        "epithet": "God of Aegis & Protection",
        "role": "Shield Gain & Healing Amplification",
        "icon": "\ud83d\udee1\ufe0f"
      },
      "sparks": [
        {
          "id": "add_r_spark_diallos_01",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_diallos_02",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_diallos_03",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_diallos_04",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_diallos_05",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_06",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_diallos_07",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_diallos_08",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_09",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_10",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_diallos_11",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_12",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_13",
          "desc": "Apply Pulverize to this card | 3 Impair to all enemies",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_diallos_14",
          "desc": "Apply Retain to this card",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_diallos_15",
          "desc": "If no Shield is present, increase Shield Gain Amount by 100%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_diallos_1",
          "desc": "Create 2 Activation Core",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_diallos_3",
          "desc": "Retain: 200% Shield",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_diallos_5",
          "desc": "At the start of battle, proc this card",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_diallos_7",
          "desc": "If 8 or more cards are in hand, | change Cost to 0",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_diallos_8",
          "desc": "After creating a random Neutral Upgrade Card, proc that card",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "assault_r_spark_diallos_9",
          "desc": "Increase Damage Amount by 50% for each enemy present",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_diallos_10",
          "desc": "When attacked, proc this card in hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_diallos_11",
          "desc": "If Shield is held, increase Damage Amount by 50%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_diallos_12",
          "desc": "1 Counterattack to each Combatant",
          "cost_mod": 0,
          "targets": []
        }
      ]
    },
    "NIHILUM": {
      "god": "NIHILUM",
      "info": {
        "name": "Nihilum",
        "epithet": "God of Void & Entropy",
        "role": "Card Draw & Agony/Vulnerable Stacking",
        "icon": "\ud83c\udf0c"
      },
      "sparks": [
        {
          "id": "add_r_spark_nihilum_01",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_nihilum_02",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_nihilum_03",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_nihilum_04",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_nihilum_05",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_nihilum_06",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_nihilum_07",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_nihilum_08",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_nihilum_09",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_nihilum_10",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_nihilum_11",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_nihilum_12",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_nihilum_13",
          "desc": "At the start of the turn, change Cost of this card to 0-3",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_nihilum_14",
          "desc": "Move 2 Exhaust card(s) from Discard Pile to hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_nihilum_15",
          "desc": "Increase base Damage Amount by 100% | Apply Finale to this card",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_1",
          "desc": "At the start of the turn, change Cost of this card to 0-2",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_nihilum_2",
          "desc": "Incinerate: 50% chance to move to hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_nihilum_3",
          "desc": "Apply Ignition to this card",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_nihilum_5",
          "desc": "Create 1 Void Fragment",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_nihilum_6",
          "desc": "If a Status Ailment or Curse card is in hand, double Hit Count",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_8",
          "desc": "6 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_9",
          "desc": "3 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_10",
          "desc": "Increase Stress by 5, and double Hit Count",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_11",
          "desc": "Increase Damage Amount by 20% for each type of harmful effect on the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_nihilum_12_0",
          "desc": "Change Cost to 0",
          "cost_mod": -9,
          "targets": [
            "power"
          ]
        }
      ]
    },
    "CALIGO": {
      "god": "CALIGO",
      "info": {
        "name": "Caligo",
        "epithet": "God of Tenacity & Breakdown",
        "role": "Tenacity Destruction & Breakdown Defense",
        "icon": "\u26a1"
      },
      "sparks": [
        {
          "id": "add_r_spark_caligo_01",
          "desc": "Increase Tenacity Damage of this card by 100%",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_02",
          "desc": "1 Morale, 1 Resolve",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        },
        {
          "id": "add_r_spark_caligo_03",
          "desc": "Increase this card\u2019s Shield by 30%.",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_caligo_04",
          "desc": "Increase Heal Amount of this card by 30%",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_caligo_05",
          "desc": "Always Attack Weakness",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_06",
          "desc": "100% Coordinated Attack by a random ally to the target",
          "cost_mod": 0,
          "targets": [
            "atk",
            "skill"
          ]
        },
        {
          "id": "add_r_spark_caligo_07",
          "desc": "Gain 1 AP",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_caligo_08",
          "desc": "Reduce Cost of this card by 1",
          "cost_mod": -1,
          "targets": []
        },
        {
          "id": "add_r_spark_caligo_09",
          "desc": "4 Agony to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_10",
          "desc": "2 Vulnerable to the target",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_11",
          "desc": "Draw 1",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "add_r_spark_caligo_12",
          "desc": "Increase this card\u2019s Damage by 30%.",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_13",
          "desc": "Defeat: Draw 3",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "add_r_spark_caligo_14",
          "desc": "Apply Combo to this card",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "add_r_spark_caligo_15",
          "desc": "Treated as a Neutral Card | Draw 1 Neutral Card(s)",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_1",
          "desc": "Attunement: 3 Morale for 1 turn",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_3",
          "desc": "Apply Linked and Quietus to this card",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_5",
          "desc": "On Shuffle, move from Draw Pile to hand",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_6",
          "desc": "Increase Damage Amount by 50% against targets haven\u2019t acted",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_caligo_7_0",
          "desc": "30 Credit",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_8",
          "desc": "Draw for each Cost",
          "cost_mod": 0,
          "targets": [
            "skill"
          ]
        },
        {
          "id": "assault_r_spark_caligo_10",
          "desc": "Increase Damage Amount by 200% in Boss Battles",
          "cost_mod": 0,
          "targets": [
            "atk"
          ]
        },
        {
          "id": "assault_r_spark_caligo_11",
          "desc": "Apply Quietus to this card | Discard from Draw Pile for each Cost+1",
          "cost_mod": 0,
          "targets": []
        },
        {
          "id": "assault_r_spark_caligo_12",
          "desc": "Create 1 random Monster Card(s), then change Cost of those cards to 0",
          "cost_mod": 0,
          "targets": [
            "power"
          ]
        }
      ]
    }
  }
};

window.CZN_DATA.deities = {
  "vitor": {
    "id": "vitor",
    "name": "Vitor",
    "title": "Deity of Might & Destruction",
    "domain": "Direct Damage & Crit Amplification",
    "icon": "🔥",
    "color": "#ef4444",
    "sparkId": "add_r_spark_vitor_01",
    "sparkDesc": "Destruction Flare: Multiplier boosted to +100% Damage!",
    "effect": "vitor_boost"
  },
  "circen": {
    "id": "circen",
    "name": "Circen",
    "title": "Deity of Time & Efficiency",
    "domain": "AP Cost Reduction & Tempo",
    "icon": "⏳",
    "color": "#22d3ee",
    "sparkId": "add_r_spark_circen_02",
    "sparkDesc": "Chrono Shift: -1 AP Cost and refunds +1 AP on use!",
    "effect": "circen_refund"
  },
  "caligo": {
    "id": "caligo",
    "name": "Caligo",
    "title": "Deity of Tenacity & Breakdown",
    "domain": "Tenacity Shred & Ravage Burst",
    "icon": "⚡",
    "color": "#a855f7",
    "sparkId": "add_r_spark_caligo_01",
    "sparkDesc": "Tenacity Rupture: Shreds 1.5 extra Tenacity bars on hit!",
    "effect": "caligo_shred"
  },
  "diallos": {
    "id": "diallos",
    "name": "Diallos",
    "title": "Deity of Aegis & Protection",
    "domain": "Shield Amplification & Bastion Armor",
    "icon": "🛡️",
    "color": "#10b981",
    "sparkId": "add_r_spark_diallos_01",
    "sparkDesc": "Aegis Bastion: Generates an additional +300 Shield for squad!",
    "effect": "diallos_shield"
  },
  "nihilum": {
    "id": "nihilum",
    "name": "Nihilum",
    "title": "Deity of Void & Flow",
    "domain": "Card Draw & Pile Flow",
    "icon": "🌌",
    "color": "#818cf8",
    "sparkId": "add_r_spark_nihilum_01",
    "sparkDesc": "Void Resonance: Instantly draws +1 extra card to Hand!",
    "effect": "nihilum_draw"
  },
  "secred": {
    "id": "secred",
    "name": "Secred",
    "title": "Deity of Synergy & Coordination",
    "domain": "Coordinated Strike & Co-op Pincer",
    "icon": "🤝",
    "color": "#f59e0b",
    "sparkId": "add_r_spark_secred_01",
    "sparkDesc": "Pincer Strike: Triggers 100% Coordinated Attack by a random ally!",
    "effect": "secred_pincer"
  }
};

window.CZN_DATA.equipment = {
  "weapons": [
    {
      "id": "eq_p_inv_ca_001",
      "name": "Mutation: Twin Swords of Great and Lesser Evil",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, Critical Chance +10% for each Status Ailment and Curse card in hand",
      "icon": "relics/relic_1081"
    },
    {
      "id": "eq_p_inv_ca_002",
      "name": "Mutation: Shell Bug Horn",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+1% Critical Chance, +20% Critical Damage",
      "icon": "relics/relic_1082"
    },
    {
      "id": "eq_p_inv_ca_003",
      "name": "Mutation: Abyssal Bug Tooth",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Critical Hit, apply 2 Weaken and 2 Vulnerable to the target",
      "icon": "relics/relic_1083"
    },
    {
      "id": "eq_p_inv_ca_004",
      "name": "Harmonization: The Destruction of Erysichthon",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% chance to add 1 Hit",
      "icon": "relics/relic_1141_6"
    },
    {
      "id": "eq_p_dll_ca_002",
      "name": "Mutation: Radiant Orb",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 60% against targets in a Ravaged state",
      "icon": "relics/relic_1096"
    },
    {
      "id": "eq_p_nih_ca_001",
      "name": "Harmonization: Foggy Crystal Ball",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 60 by 60%",
      "icon": "relics/relic_0040"
    },
    {
      "id": "eq_p_nih_ca_002",
      "name": "Harmonization: Unexploded Plasma Bomber",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, 60% Fixed Damage on a random enemy",
      "icon": "relics/relic_1088"
    },
    {
      "id": "eq_p_nih_ca_003",
      "name": "Harmonization: Blood Giant Claw",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Ravage, 300% Fixed Damage to the target",
      "icon": "relics/relic_1092"
    },
    {
      "id": "eq_p_sec_ca_001",
      "name": "Harmonization: Dagger That Tricked the Shadow",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+15% Critical Chance",
      "icon": "relics/relic_1231"
    },
    {
      "id": "eq_p_sec_ca_002",
      "name": "Harmonization: Sword Reflected in the Lake",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When there are 55 or more cards in hand, increase Damage Amount by 55%",
      "icon": "relics/relic_1187"
    },
    {
      "id": "eq_p_sec_ca_003",
      "name": "Mutation: Sun-Setting Bow",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a Neutral Card is activated, increase Damage Amount by 45% for 1 turn (1 time per turn)",
      "icon": "relics/relic_1191"
    },
    {
      "id": "eq_p_var_ca_001",
      "name": "Harmonization: Dark Grip’s Claws",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of All-Target Attacks by 60%",
      "icon": "relics/relic_1118"
    },
    {
      "id": "eq_p_var_ca_002",
      "name": "Harmonization: Nature’s Hostility",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated, 300% Fixed Damage to all enemies",
      "icon": "relics/relic_1120"
    },
    {
      "id": "eq_p_var_ca_003",
      "name": "Harmonization: Mutated Claws",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Drawing a Status Ailment or Curse Card, +40% Damage Amount for 1 turn",
      "icon": "relics/relic_0048"
    },
    {
      "id": "eq_pub_ca_001",
      "name": "Harmonization: Second Method",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+55% Damage Amount to Extra Attacks",
      "icon": "relics/relic_1168"
    },
    {
      "id": "eq_pub_ca_002",
      "name": "Harmonization: Gastronomicon",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a 5-Cost or higher Attack Card is activated, 5 Agony to the target",
      "icon": "relics/relic_1037"
    },
    {
      "id": "eq_pub_ca_003",
      "name": "Harmonization: RFS-17",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+30% Critical Chance of Attack Cards with cost 0",
      "icon": "relics/relic_0072"
    },
    {
      "id": "eq_pub_ca_004",
      "name": "Mutation: Mountain of Corpses",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "At the start of battle, add 1 Hit(s) to the first Attack Card activated",
      "icon": "relics/relic_0072_6"
    },
    {
      "id": "eq_pub_ca_005",
      "name": "Harmonization: M85 Military Grenade",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Upgrade Card is activated, 230% Fixed Damage to all enemies",
      "icon": "relics/relic_0084"
    },
    {
      "id": "eq_pub_ca_006",
      "name": "Harmonization: Obsidian Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 18%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_pub_ca_007",
      "name": "Mutation: Sneering Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Discarded, 80% Fixed Damage to a random enemy",
      "icon": "relics/relic_1154"
    },
    {
      "id": "eq_pub_ca_008",
      "name": "Distortion: Crimson Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "2 Agony on the target damaged by a Targeting Attack Card",
      "icon": "relics/relic_1170"
    },
    {
      "id": "eq_pub_ca_009",
      "name": "Harmonization: Big Game Hunter",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Tenacity Damage of the first Attack Card activated each battle by 150%",
      "icon": "relics/relic_1195"
    },
    {
      "id": "eq_pub_ca_010",
      "name": "Harmonization: Bone Cutter",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When hitting a target under Weakened status, +45% Damage",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_pub_ca_011",
      "name": "Mutation: Command: #108",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount of Attack Cards by 15%, and when an enemy is defeated, decrease Stress of random allies by 2",
      "icon": "relics/relic_1202"
    },
    {
      "id": "eq_pub_ca_012",
      "name": "Distortion: Torch of Wrath",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "At the start of the turn, 2 Mark to a random enemy",
      "icon": "relics/relic_1164"
    },
    {
      "id": "eq_pub_ca_013",
      "name": "Mutation: Flashbang",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "At the start of battle, apply 2 Weaken to a random enemy, increase Action Count of all enemies by 2",
      "icon": "relics/relic_1161"
    },
    {
      "id": "eq_pub_ca_038",
      "name": "Harmonization: Criticism of Discord",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+1% AttackOn Ravage, decrease Stress of a random ally by 2",
      "icon": "relics/relic_0094"
    },
    {
      "id": "eq_pub_ca_039",
      "name": "Harmonization: Tentacles of a Ruined Age",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+1% Attack to alliesWhen an enemy is defeated, decrease Stress of a Combatant with high Stress by 3",
      "icon": "relics/relic_0095"
    },
    {
      "id": "eq_pub_ca_044",
      "name": "Bloom: Obsidian Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 45%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_pub_ca_050",
      "name": "Bloom: Mountain of Corpses",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, add 1 Hit(s) to the first Attack Card activated",
      "icon": "relics/relic_0072_6"
    },
    {
      "id": "eq_pub_ca_051",
      "name": "Bloom: Command: #108",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Attack Cards by 40%, and when an enemy is defeated, decrease Stress of a random ally by 3",
      "icon": "relics/relic_1202"
    },
    {
      "id": "eq_arena_ca_001",
      "name": "Arm of Lost Valor",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Attack Card was not activated for 1 turn and the turn is ended, create 1 Rocket Punch",
      "icon": "relics/relic_5029"
    },
    {
      "id": "eq_arena_ca_002",
      "name": "Harpoon Case of Broken Resolve",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Create 1 1 each odd turn",
      "icon": "relics/relic_5030"
    },
    {
      "id": "eq_arena_ca_007",
      "name": "Harmonization: Harp of Conflict",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "For 1 turn, when each of Damage, Shield, and Heal has been activated through ally cards, increase Damage Amount of allies by 20% for 1 turn",
      "icon": "relics/relic_5035"
    },
    {
      "id": "eq_chr_ca_001",
      "name": "Distortion: Steeler’s Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When defeating an enemy, gain 1-20 Credits",
      "icon": "relics/relic_1298"
    },
    {
      "id": "eq_chr_ca_003",
      "name": "Mutation: Dull Bone Blade",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 30%, cannot deal Critical Hits",
      "icon": "relics/relic_1085"
    },
    {
      "id": "eq_chr_ca_010",
      "name": "Mutation: Executioner's Edge",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Basic Attack Cards by 15% for each Basic Card in All Piles",
      "icon": "relics/relic_1151_6"
    },
    {
      "id": "eq_chr_ca_011",
      "name": "Distortion: Ritual Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated, +1% Damage Amount to Attack Cards",
      "icon": "relics/relic_1186"
    },
    {
      "id": "eq_chr_ca_017",
      "name": "Harmonization: Mutated Order",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 60% against targets that haven't acted",
      "icon": "relics/relic_1111_6"
    },
    {
      "id": "eq_chr_ca_018",
      "name": "Harmonization: Esophagus of Madness",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 40% against targets in a Agony state",
      "icon": "relics/relic_1151"
    },
    {
      "id": "eq_chr_ca_026",
      "name": "Rose Pattern Knife",
      "type": "EQUIP_WEAPON",
      "rarity": "COMMON",
      "desc": "The pattern is unusually ornamental for something that was once used in a butcher shop. It looks like it could slice through anything.",
      "icon": "relics/relic_11005"
    },
    {
      "id": "eq_chr_ca_029",
      "name": "Bloom: Dull Bone Blade",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 50%, cannot deal Critical Hits",
      "icon": "relics/relic_1085"
    },
    {
      "id": "eq_dll_ca_002",
      "name": "Distortion: Rune Lance",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Each time 100 or more AP is used, +100% Damage, Shield Gain, and Heal Amounts for 1 turn (resets at the start of the turn)",
      "icon": "relics/relic_1296"
    },
    {
      "id": "eq_dll_ca_003",
      "name": "Mutation: Flame of Purification",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+60% Damage Amount to Bullet cards",
      "icon": "relics/relic_1295"
    },
    {
      "id": "eq_dll_ca_004",
      "name": "Distortion: Trumpet of Revelation",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Draw through a card, +30% Damage Amount for 1 turn",
      "icon": "relics/relic_1294"
    },
    {
      "id": "eq_dll_ca_010",
      "name": "Mutation: Singing Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+80% Damage Amount against targets owning Shield",
      "icon": "relics/relic_1098"
    },
    {
      "id": "eq_inv_ca_001",
      "name": "Harmonization: Violet Butterfly's Whip",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 30 or less by 30%",
      "icon": "relics/relic_1226"
    },
    {
      "id": "eq_inv_ca_002",
      "name": "Harmonization: Formica’s Broken Spear",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 1% for each enemy",
      "icon": "relics/relic_1229"
    },
    {
      "id": "eq_inv_ca_003",
      "name": "Mutation: Formica's Perfect Spear",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 1% per enemy, +10% Critical Chance for 1-Cost or lower Attack Cards",
      "icon": "relics/relic_1230"
    },
    {
      "id": "eq_inv_ca_005",
      "name": "Mutation: Bug Killer",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "On Ravage, 1 Vulnerable on the target",
      "icon": "relics/relic_1282"
    },
    {
      "id": "eq_inv_ca_006",
      "name": "Harmonization: Lepidola’s Whip",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 40 or less by 40%",
      "icon": "relics/relic_1288"
    },
    {
      "id": "eq_nih_ca_010",
      "name": "Distortion: Dream of the Devoured",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a 1-Cost or higher card is Exhausted, increase Damage Amount of the next card activated by 50%",
      "icon": "relics/relic_1285"
    },
    {
      "id": "eq_nih_ca_011",
      "name": "Distortion: Void of the Devourer",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "When a 1-Cost or higher card is Exhausted, increase Damage Amount of the next card activated by 75%",
      "icon": "relics/relic_1286"
    },
    {
      "id": "eq_nih_ca_012",
      "name": "Grip Trainer",
      "type": "EQUIP_WEAPON",
      "rarity": "COMMON",
      "desc": "A grip trainer used by a space pirate. It might be useful someday with consistent training.",
      "icon": "relics/relic_1028"
    },
    {
      "id": "eq_sec_ca_003",
      "name": "Harmonization: Branch of the Sacred Tree",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Heal or Recover through an ally ability, inflict Fixed Damage equal to 1% of Recover Amount to all enemies",
      "icon": "relics/relic_1061"
    },
    {
      "id": "eq_sec_ca_007",
      "name": "Harmonization: The Fading Flower of Life",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "If at max HP, +60% Damage Amount",
      "icon": "relics/relic_1301"
    },
    {
      "id": "eq_sec_ca_008",
      "name": "Harmonization: The Flower of Life",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If at max HP, +80% Damage Amount",
      "icon": "relics/relic_1302"
    },
    {
      "id": "eq_sec_ca_009",
      "name": "Harmonization: Branch of the Evil Tree",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Heal or Recover through an ally ability, inflict Fixed Damage equal to 1% of Recover Amount to a random enemy",
      "icon": "relics/relic_1303"
    },
    {
      "id": "eq_sec_ca_010",
      "name": "Harmonization: Branch of Eternity",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "On Heal or Recover through an ability, inflict Fixed Damage equal to 1% of Recover Amount to all enemies",
      "icon": "relics/relic_1304"
    },
    {
      "id": "eq_sec_ca_014",
      "name": "Poacher's Slingshot",
      "type": "EQUIP_WEAPON",
      "rarity": "COMMON",
      "desc": "A poacher's slingshot that doesn't seem capable of killing anything. It looks useless, but was taken anyway.",
      "icon": "relics/relic_1030"
    },
    {
      "id": "eq_sec_ca_020",
      "name": "Bloom: The Flower of Life",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "If at max HP, +120% Damage Amount",
      "icon": "relics/relic_1302"
    },
    {
      "id": "eq_ds01_ca_001",
      "name": "Harmonization: Overcurrent Shock Unit",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When you Draw through an ability, 75% Fixed Damage to a random enemy",
      "icon": "relics/relic_0100"
    },
    {
      "id": "eq_ds01_ca_007",
      "name": "Harmonization: Mutagenic Wave Amplifier",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Drawing a Status Ailment or Curse Card, +18% Damage Amount for 1 turn",
      "icon": "relics/relic_0106"
    },
    {
      "id": "eq_ds01_ca_008",
      "name": "Mutation: W-52 \"Dopamine Injector\"",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If Ego Points are 50 or less, increase Damage Amount by 50%",
      "icon": "relics/relic_0107"
    },
    {
      "id": "eq_ds01_ca_009",
      "name": "Harmonization: Mutant Predator Spike",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When there are 45 or more cards in hand, increase Damage Amount of cards by 45%",
      "icon": "relics/relic_0108"
    },
    {
      "id": "eq_g01_ca_005",
      "name": "Harmonization: Replica Core",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When drawing your own Attack Card through an ability, that card +75% Damage Amount for 1 turn",
      "icon": "relics/relic_5007"
    },
    {
      "id": "eq_g01_ca_007",
      "name": "Mutation: Chimeranite",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "When a Single-Target Attack Card is activated, increase Damage Amount by 35%",
      "icon": "relics/relic_5009"
    },
    {
      "id": "eq_ds02_ca_001",
      "name": "Harmonization: Millennium Arbor",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a 1-Cost or higher card is activated, 1 Vulnerable to a random enemy",
      "icon": "relics/relic_5021"
    },
    {
      "id": "eq_ds02_ca_002",
      "name": "Harmonization: Veiled Thorn",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If Damage through a card was not dealt to an enemy by an ally for 75 turn, at the start of the next turn, increase Damage Amount by 75% for 1 turn",
      "icon": "relics/relic_5022"
    },
    {
      "id": "eq_g02_ca_001",
      "name": "Distortion: Sword of Judgment",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, increase Damage Amount by 10% for 10 turn",
      "icon": "relics/relic_5013"
    },
    {
      "id": "eq_g02_ca_009",
      "name": "Distortion: Pale Eternal Flame",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, increase Damage Amount of allies by 1% for 1 turn",
      "icon": "relics/relic_5018"
    },
    {
      "id": "eq_g02_ca_010",
      "name": "Harmonization: Brilliant Eternal Flame",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of 60-Cost or higher Exhaust cards by 60%",
      "icon": "relics/relic_5019"
    },
    {
      "id": "eq_ds03_ca_001",
      "name": "Distortion: The Order's Baton",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is created through an ability, increase Damage Amount of ally Attack Cards by 1% for 1 turn",
      "icon": "relics/relic_5041"
    },
    {
      "id": "eq_ds03_ca_002",
      "name": "Mutation: Corrupted Gauntlet",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "On ally Extra Attack, +1% Critical Chance for 1 turn",
      "icon": "relics/relic_5043"
    },
    {
      "id": "eq_ds03_ca_006",
      "name": "Harmonization: Key of Sleep",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+1% Damage Amount to Attack CardsWhen the target count of the Attack Card is 2 or more, -20% Damage Amount for each target (max -60%)",
      "icon": "relics/relic_5042"
    },
    {
      "id": "eq_g03_ca_001",
      "name": "Mutation: Broken Golden Quill Pen",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+50% Damage Amount to Attack Cards against targets with 50 or higher Action Count",
      "icon": "relics/relic_5049"
    },
    {
      "id": "eq_g03_ca_006",
      "name": "Mutation: Yearning Left Hand",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+50% Defense-Based Damage Amount",
      "icon": "relics/relic_5054"
    },
    {
      "id": "eq_ds04_ca_001",
      "name": "Harmonization: The Exsanguine",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Attack Card is activated, 1 Scorched to the target (1 time per turn)",
      "icon": "relics/relic_5058"
    },
    {
      "id": "eq_ds04_ca_002",
      "name": "Distortion: Gauntlets of Protection",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a base 1-Cost or higher Attack Card is activated, 200% Fixed Damage to all enemies",
      "icon": "relics/relic_5059"
    },
    {
      "id": "eq_ds04_ca_003",
      "name": "Harmonization: Raider's Harpoon Gun",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "On Critical Hit, 1% Fixed Damage to all enemies (5 times per turn)",
      "icon": "relics/relic_5060"
    },
    {
      "id": "eq_g04_ca_004",
      "name": "Distortion: Eternal Wedge",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, to an enemy inflicted with harmful effects, 1% Fixed Damage x each type of harmful effect",
      "icon": "relics/relic_5069"
    },
    {
      "id": "eq_g04_ca_005",
      "name": "Mutation: Twisted Drill Bit",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If the target has Shield, decrease Damage Amount by 20%If the target does not have Shield, increase Damage Amount by 60%",
      "icon": "relics/relic_5070"
    },
    {
      "id": "eq_ds01_001",
      "name": "Overcurrent Shock Unit",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When you Draw through an ability, 50% Fixed Damage to a random enemy",
      "icon": "relics/relic_0100"
    },
    {
      "id": "eq_ds01_007",
      "name": "Mutagenic Wave Amplifier",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Drawing a Status Ailment or Curse Card, +12% Damage Amount for 1 turn",
      "icon": "relics/relic_0106"
    },
    {
      "id": "eq_ds01_008",
      "name": "W-52 \"Dopamine Injector\"",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Drawing through an ability, increase Damage Amount by 1% for 1 turn (2 times per turn)",
      "icon": "relics/relic_0107"
    },
    {
      "id": "eq_ds01_009",
      "name": "Mutant Predator Spike",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When there are 30 or more cards in hand, increase Damage Amount of cards by 30%",
      "icon": "relics/relic_0108"
    },
    {
      "id": "eq_ds02_001",
      "name": "Millennium Arbor",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a 1-Cost or higher card is activated, 1 Vulnerable to a random enemy",
      "icon": "relics/relic_5021"
    },
    {
      "id": "eq_ds02_002",
      "name": "Veiled Thorn",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If Damage through a card was not dealt to an enemy by an ally for 50 turn, at the start of the next turn, increase Damage Amount by 50% for 1 turn",
      "icon": "relics/relic_5022"
    },
    {
      "id": "eq_ds03_001",
      "name": "Order’s Baton",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Each time a card is created, +1% Damage Amount for 1 turn (2 times per turn)",
      "icon": "relics/relic_5041"
    },
    {
      "id": "eq_ds03_002",
      "name": "Corrupted Gauntlet",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "On Extra Attack, increase Critical Chance by 1% for 1 turn (5 times per turn)",
      "icon": "relics/relic_5043"
    },
    {
      "id": "eq_ds03_006",
      "name": "Key of Sleep",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+1% Damage Amount to Attack CardsWhen the target count of the Attack Card is 2 or more, -10% Damage Amount for each target (max -30%)",
      "icon": "relics/relic_5042"
    },
    {
      "id": "eq_arena_001",
      "name": "Arm of Lost Valor",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Attack Card was not activated for 1 turn and the turn is ended, create 1 Rocket Punch",
      "icon": "relics/relic_5029"
    },
    {
      "id": "eq_arena_002",
      "name": "Harpoon Case of Broken Resolve",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Create 1 1 each odd turn",
      "icon": "relics/relic_5030"
    },
    {
      "id": "eq_arena_007",
      "name": "Harp of Conflict",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "For 1 turn, when each of Damage, Shield, and Heal has been activated through ally cards, increase Damage Amount of allies by 15% for 1 turn",
      "icon": "relics/relic_5035"
    },
    {
      "id": "eq_g01_005",
      "name": "Replica Core",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When drawing your own Attack Card through an ability, that card +50% Damage Amount for 1 turn",
      "icon": "relics/relic_5007"
    },
    {
      "id": "eq_g01_007",
      "name": "Chimeranite",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "When Drawing through an ability, increase Damage Amount of Attack Cards of this unit by 35% for 1 turn (1 time per turn)",
      "icon": "relics/relic_5009"
    },
    {
      "id": "eq_g02_001",
      "name": "Sword of Judgment",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, increase Damage Amount by 10% for 10 turn (1 time per turn)",
      "icon": "relics/relic_5013"
    },
    {
      "id": "eq_g02_009",
      "name": "Pale Eternal Flame",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, increase Damage Amount of allies by 1% for 1 turn (1 time per turn)​",
      "icon": "relics/relic_5018"
    },
    {
      "id": "eq_g02_010",
      "name": "Brilliant Eternal Flame",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of 40-Cost or higher Exhaust cards by 40%",
      "icon": "relics/relic_5019"
    },
    {
      "id": "eq_g03_001",
      "name": "Broken Golden Quill Pen",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a Linked card is Discarded through an ability, increase Damage Amount by 20% for 1 turn (1 time per turn)",
      "icon": "relics/relic_5049"
    },
    {
      "id": "eq_g03_006",
      "name": "Yearning Left Hand",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 30% to targets in an Aftershock state",
      "icon": "relics/relic_5054"
    },
    {
      "id": "eq_ds04_001",
      "name": "The Exsanguine",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Attack Card is activated, 1 Scorched to the target (1 time per turn)",
      "icon": "relics/relic_5058"
    },
    {
      "id": "eq_ds04_002",
      "name": "Gauntlets of Protection",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a base 1-Cost or higher Attack Card is used, 250% Fixed Damage to all enemies (2 times per turn)",
      "icon": "relics/relic_5059"
    },
    {
      "id": "eq_ds04_003",
      "name": "Raider’s Harpoon Gun",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "On Critical Hit, 1% Fixed Damage to all enemies (3 times per turn)",
      "icon": "relics/relic_5060"
    },
    {
      "id": "eq_g04_004",
      "name": "Eternal Wedge",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, 1% Fixed Damage to a random enemy possessing DoT effects",
      "icon": "relics/relic_5069"
    },
    {
      "id": "eq_g04_005",
      "name": "Twisted Drill Bit",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an ally Desire Card is activated, 1% Fixed Damage to all enemies (3 times per turn)",
      "icon": "relics/relic_5070"
    },
    {
      "id": "eq_dpt_test_101",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 10%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_102",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 20%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_103",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 30%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_104",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 40%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_105",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 50%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_106",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 60%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_107",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 70%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_108",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 80%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_109",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 90%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_110",
      "name": "DPT Benchmark Equipment 1",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 100%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_dpt_test_201",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+10% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_202",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+20% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_203",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+30% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_204",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+40% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_205",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+50% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_206",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+60% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_207",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+70% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_208",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+80% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_209",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+90% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_dpt_test_210",
      "name": "DPT Benchmark Equipment 2",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "+100% Damage Amount",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_pub_001",
      "name": "Second Method",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+35% Damage Amount to Extra Attacks",
      "icon": "relics/relic_1168"
    },
    {
      "id": "eq_pub_002",
      "name": "Gastronomicon",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When a 3-Cost or higher Attack Card is activated, 3 Agony to the target",
      "icon": "relics/relic_1037"
    },
    {
      "id": "eq_pub_003",
      "name": "RFS-17",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+10% Critical Chance of Attack Cards with cost 0",
      "icon": "relics/relic_0072"
    },
    {
      "id": "eq_pub_004",
      "name": "Mountain of Corpses",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Attack Cards by 25% (1 time per turn)",
      "icon": "relics/relic_0072_6"
    },
    {
      "id": "eq_pub_005",
      "name": "M85 Military Grenade",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Upgrade Card is activated, 150% Fixed Damage to all enemies",
      "icon": "relics/relic_0084"
    },
    {
      "id": "eq_pub_006",
      "name": "Obsidian Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage Amount by 12%",
      "icon": "relics/relic_1060"
    },
    {
      "id": "eq_pub_007",
      "name": "Sneering Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated, 2 Vulnerable to all enemies",
      "icon": "relics/relic_1154"
    },
    {
      "id": "eq_pub_008",
      "name": "Crimson Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When dealing Damage with a targeting Attack Card, 3 Agony (1 per turn)",
      "icon": "relics/relic_1170"
    },
    {
      "id": "eq_tut_002",
      "name": "Crimson Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When dealing Damage with a Targeting Attack Card, 3 Agony to the target (1 per turn)",
      "icon": "relics/relic_1170"
    },
    {
      "id": "eq_pub_009",
      "name": "Big Game Hunter",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Tenacity Damage of the first Attack Card activated each battle by 100%",
      "icon": "relics/relic_1195"
    },
    {
      "id": "eq_pub_010",
      "name": "Bone Cutter",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When hitting a target under Weakened status, +30% Damage",
      "icon": "relics/relic_1200"
    },
    {
      "id": "eq_pub_011",
      "name": "Command: #108",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "Increase Damage of Attack Cards by 40% (1 time per battle)",
      "icon": "relics/relic_1202"
    },
    {
      "id": "eq_pub_012",
      "name": "Torch of Wrath",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "At the start of battle, 2 Mark to a random enemy",
      "icon": "relics/relic_1164"
    },
    {
      "id": "eq_pub_013",
      "name": "Flashbang",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "At the start of battle, apply 3 Weaken to a random enemy",
      "icon": "relics/relic_1161"
    },
    {
      "id": "eq_pub_038",
      "name": "Criticism of Discord",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+1% AttackOn Ravage, decrease Stress of allies by 1",
      "icon": "relics/relic_0094"
    },
    {
      "id": "eq_pub_039",
      "name": "Tentacles of a Ruined Age",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+1% ally AttackUpon enemy Defeat, -2 Stress to the Combatant with the highest Stress",
      "icon": "relics/relic_0095"
    },
    {
      "id": "eq_event_1055_01",
      "name": "Key to the Twisted Dream",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, gain 1 EPWhen a Blessing card is activated, 3 Morale for 1 turn",
      "icon": "relics/relic_5042"
    },
    {
      "id": "eq_chr_001",
      "name": "Steeler’s Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When defeating an enemy, gain 1-10 Credits (1 time per battle)",
      "icon": "relics/relic_1298"
    },
    {
      "id": "eq_chr_003",
      "name": "Dull Bone Blade",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "10% Attack, -5% Critical Chance",
      "icon": "relics/relic_1085"
    },
    {
      "id": "eq_chr_010",
      "name": "Executioner’s Edge",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 35% against enemies with 50% of Max HP or less",
      "icon": "relics/relic_1151_6"
    },
    {
      "id": "eq_chr_011",
      "name": "Ritual Dagger",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated, +1% Attack Card Damage amount (Max 2 times)",
      "icon": "relics/relic_1186"
    },
    {
      "id": "eq_chr_017",
      "name": "Mutated Order",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 25% against targets that haven't acted",
      "icon": "relics/relic_1111_6"
    },
    {
      "id": "eq_chr_018",
      "name": "Esophagus of Madness",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 20% against targets in a Agony state",
      "icon": "relics/relic_1151"
    },
    {
      "id": "eq_dll_002",
      "name": "Rune Lance",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When using 25 or more Action Points, +25% Damage Amount, Shield gain, and Healing (1 time per battle)",
      "icon": "relics/relic_1296"
    },
    {
      "id": "eq_dll_003",
      "name": "Flame of Purification",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, 1 Punishment on a random enemy (2 times per turn)",
      "icon": "relics/relic_1295"
    },
    {
      "id": "eq_dll_004",
      "name": "Trumpet of Revelation",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Draw a card, +20% Damage for 1 turn (2 per turn)",
      "icon": "relics/relic_1294"
    },
    {
      "id": "eq_dll_010",
      "name": "Singing Sword",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+1% AttackWhen dealing Damage to a target with Shield, 1 Punishment",
      "icon": "relics/relic_1098"
    },
    {
      "id": "eq_inv_001",
      "name": "Violet Butterfly's Whip",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 20 or less by 20%",
      "icon": "relics/relic_1226"
    },
    {
      "id": "eq_inv_002",
      "name": "Formica’s Broken Spear",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 1% for each enemy",
      "icon": "relics/relic_1229"
    },
    {
      "id": "eq_inv_003",
      "name": "Formica’s Perfect Spear",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increases Damage Amount by 1% for each enemyIncrease Damage Amount of All-Target Attacks by 10%",
      "icon": "relics/relic_1230"
    },
    {
      "id": "eq_inv_005",
      "name": "Bug Killer",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "When an Attack Card is activated, 1 Agony on the target (2 time per turn)If it is an Invader battle, add 2 Agony",
      "icon": "relics/relic_1282"
    },
    {
      "id": "eq_inv_006",
      "name": "Lepidola's Whip",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 25 or less by 25%",
      "icon": "relics/relic_1288"
    },
    {
      "id": "eq_nih_010",
      "name": "Dream of the Devoured",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, increase Damage Amount of the next card activated by 25% (cannot stack)",
      "icon": "relics/relic_1285"
    },
    {
      "id": "eq_nih_011",
      "name": "Void of the Devourer",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "When a card is Exhausted, increase Damage Amount of the next card activated by 35% (cannot stack)",
      "icon": "relics/relic_1286"
    },
    {
      "id": "eq_sec_003",
      "name": "Branch of the Sacred Tree",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Heal or Recover through an ally ability, inflict Fixed Damage equal to 1% of Recover Amount to all enemies",
      "icon": "relics/relic_1061"
    },
    {
      "id": "eq_sec_007",
      "name": "The Fading Flower of Life",
      "type": "EQUIP_WEAPON",
      "rarity": "RARE",
      "desc": "If at max HP, +40% Damage Amount",
      "icon": "relics/relic_1301"
    },
    {
      "id": "eq_sec_008",
      "name": "The Flower of Life",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "If at max HP, +50% Damage Amount",
      "icon": "relics/relic_1302"
    },
    {
      "id": "eq_sec_009",
      "name": "Branch of the Evil Tree",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Heal or Recover through an ability, inflict Fixed Damage equal to 1% of Recover Amount to a random enemy",
      "icon": "relics/relic_1303"
    },
    {
      "id": "eq_sec_010",
      "name": "Branch of Eternity",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "On Heal or Recover through an ability, inflict Fixed Damage equal to 1% of Recover Amount to all enemies",
      "icon": "relics/relic_1304"
    },
    {
      "id": "eq_p_dll_001",
      "name": "Cavalry of Lightning",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Damage is dealt to a target possessing Shield, +100% Damage Amount to the next activated Attack Card",
      "icon": "relics/relic_1095"
    },
    {
      "id": "eq_p_dll_002",
      "name": "Radiant Orb",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 25% against targets holding Shield",
      "icon": "relics/relic_1096"
    },
    {
      "id": "eq_p_inv_001",
      "name": "Twin Swords of Great and Lesser Evil",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 30% against targets in a Ravaged state",
      "icon": "relics/relic_1081"
    },
    {
      "id": "eq_p_inv_002",
      "name": "Shell Bug Horn",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "+20% Critical Damage",
      "icon": "relics/relic_1082"
    },
    {
      "id": "eq_p_inv_003",
      "name": "Abyssal Bug Tooth",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Critical Hit, 1% chance to 1 Agony",
      "icon": "relics/relic_1083"
    },
    {
      "id": "eq_p_inv_004",
      "name": "The Destruction of Erysichthon",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% chance to add 1 Hit",
      "icon": "relics/relic_1141_6"
    },
    {
      "id": "eq_p_nih_001",
      "name": "Foggy Crystal Ball",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 40 by 40%",
      "icon": "relics/relic_0040"
    },
    {
      "id": "eq_p_nih_002",
      "name": "Unexploded Plasma Bomber",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, 40% Fixed Damage on a random enemy",
      "icon": "relics/relic_1088"
    },
    {
      "id": "eq_p_nih_003",
      "name": "Blood Giant Claw",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "On Ravage, 150% Fixed Damage to the target",
      "icon": "relics/relic_1092"
    },
    {
      "id": "eq_p_sec_001",
      "name": "Dagger That Tricked the Shadow",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "+12% Critical Damage",
      "icon": "relics/relic_1231"
    },
    {
      "id": "eq_p_sec_002",
      "name": "Sword Reflected in the Lake",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When there are 25 or more cards in hand, increase Damage Amount by 25%",
      "icon": "relics/relic_1187"
    },
    {
      "id": "eq_p_sec_003",
      "name": "Sun-Setting Bow",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Attack Cards with a Cost of 30 or higher by 30% (1 time per turn)",
      "icon": "relics/relic_1191"
    },
    {
      "id": "eq_p_var_001",
      "name": "Dark Grip’s Claws",
      "type": "EQUIP_WEAPON",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of All-Target Attacks by 25%",
      "icon": "relics/relic_1118"
    },
    {
      "id": "eq_p_var_002",
      "name": "Nature’s Hostility",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated, 200% Fixed Damage to all enemies",
      "icon": "relics/relic_1120"
    },
    {
      "id": "eq_p_var_003",
      "name": "Mutated Claws",
      "type": "EQUIP_WEAPON",
      "rarity": "LEGEND",
      "desc": "When Drawing a Status Ailment or Curse Card, +15% Damage Amount for 1 turn",
      "icon": "relics/relic_0048"
    }
  ],
  "armors": [
    {
      "id": "eq_p_inv_ca_005",
      "name": "Harmonization: Growing Carapace",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, gain 80% Fixed Shield",
      "icon": "relics/relic_0064"
    },
    {
      "id": "eq_p_inv_ca_006",
      "name": "Harmonization: Dance of the Night Butterflies",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "On Ravage, 150% Fixed Shield",
      "icon": "relics/relic_1143_6"
    },
    {
      "id": "eq_p_inv_ca_007",
      "name": "Mutation: Wings of the Swarm",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "When the Retain effect is activated, 80% Fixed Shield",
      "icon": "relics/relic_1143"
    },
    {
      "id": "eq_p_dll_ca_004",
      "name": "Harmonization: Consecrated Halo",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Shield Gain Amount by 30%",
      "icon": "relics/relic_1094"
    },
    {
      "id": "eq_p_dll_ca_005",
      "name": "Mutation: Wings of Light",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 1 Counter Surge",
      "icon": "relics/relic_1179"
    },
    {
      "id": "eq_p_dll_ca_006",
      "name": "Harmonization: Ring of the Seraphim",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated, +60% Damage Amount for 1 turn",
      "icon": "relics/relic_1181"
    },
    {
      "id": "eq_p_nih_ca_004",
      "name": "Mutation: Regenerative Ribcage",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Decrease Cost of all Monster Cards in hand by 1",
      "icon": "relics/relic_1089"
    },
    {
      "id": "eq_p_nih_ca_005",
      "name": "Fragment of the Empty Void",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, Discard up to 1 cards, Draw equal to the number",
      "icon": "relics/relic_1093"
    },
    {
      "id": "eq_p_nih_ca_006",
      "name": "Mutation: Gluttonous Tailcoat",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "If a turn is ended with 1 or more AP remaining, create 1 random Neutral Card at the start of the next turn",
      "icon": "relics/relic_1183"
    },
    {
      "id": "eq_p_sec_ca_004",
      "name": "Bloom: Immortal Scale",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "When Counterattack is gained through an ability, add 1 CounterattackIncrease Damage Amount of Counterattacks by 50%",
      "icon": "relics/relic_1114"
    },
    {
      "id": "eq_p_sec_ca_005",
      "name": "Mutation: Star-Lit Cloak",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, gain 2 Fortitude and 2 Resolve",
      "icon": "relics/relic_1189"
    },
    {
      "id": "eq_p_sec_ca_006",
      "name": "Harmonization: Fairy King’s Crown",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "+25% Critical Chance",
      "icon": "relics/relic_1062"
    },
    {
      "id": "eq_p_sec_ca_007",
      "name": "Harmonization: Mask of Flames",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 60% against targets in a Vulnerable state",
      "icon": "relics/relic_1115"
    },
    {
      "id": "eq_p_var_ca_004",
      "name": "Mutation: Wolves Bane's Spine",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a Skill Card is activated, 1% HP Reduction, 90% Fixed Shield",
      "icon": "relics/relic_1119"
    },
    {
      "id": "eq_p_var_ca_005",
      "name": "Mutation: Wild Fur Cloak",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, if HP is below 30%, Critical Chance +30%",
      "icon": "relics/relic_1122"
    },
    {
      "id": "eq_p_var_ca_006",
      "name": "Mutation: Kentris Chitin Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the end of the turn, if HP is below 150%, 1% Fixed Shield, 1 Damage Reduction",
      "icon": "relics/relic_1123"
    },
    {
      "id": "eq_p_var_ca_007",
      "name": "Harmonization: Shield of the Watcher",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When taking Damage, 2 Mark on the attacker",
      "icon": "relics/relic_1171"
    },
    {
      "id": "eq_pub_ca_014",
      "name": "Harmonization: Cloud-Walking Shoes",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an ally inflicts Ravage, 120% Fixed Shield",
      "icon": "relics/relic_1188"
    },
    {
      "id": "eq_pub_ca_015",
      "name": "Mutation: Gladiator's Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, 2 Damage Reduction, 100% Fixed Shield",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_pub_ca_016",
      "name": "Harmonization: Scout’s Combat Boots",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When defeating the enemy, 100% Fixed Shield",
      "icon": "relics/relic_0070"
    },
    {
      "id": "eq_pub_ca_017",
      "name": "Attune: Standard Gas Mask",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, 2 Immunity",
      "icon": "relics/relic_0074"
    },
    {
      "id": "eq_pub_ca_018",
      "name": "Harmonization: Assault Boots",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the 300 turn, 300% Fixed Shield",
      "icon": "relics/relic_1065"
    },
    {
      "id": "eq_pub_ca_019",
      "name": "Mutation: Assault Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, 3 Counterattack, 1 Fortitude",
      "icon": "relics/relic_1072"
    },
    {
      "id": "eq_pub_ca_020",
      "name": "Harmonization: Reinforced Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if there is no Shield, gain 120% Fixed Shield",
      "icon": "relics/relic_1076"
    },
    {
      "id": "eq_pub_ca_021",
      "name": "Mutation: Titan Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the end of the turn, Recover 2% of Max HP and decrease Stress of a random ally by 1",
      "icon": "relics/relic_1136"
    },
    {
      "id": "eq_pub_ca_022",
      "name": "Harmonization: Survivor’s Hood",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, gain 210% Fixed Shield",
      "icon": "relics/relic_1148"
    },
    {
      "id": "eq_pub_ca_023",
      "name": "Distortion: Psionic Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, 60% Fixed Shield",
      "icon": "relics/relic_1158_6"
    },
    {
      "id": "eq_pub_ca_024",
      "name": "Harmonization: Lush Seaweed Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Shield is gained through a card, 45% Fixed Shield",
      "icon": "relics/relic_1196"
    },
    {
      "id": "eq_pub_ca_040",
      "name": "Harmonization: Shell of Aberration",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+1% DefenseWhen Stress increases, there is a 50% chance that Stress increases by 2 less",
      "icon": "relics/relic_0098"
    },
    {
      "id": "eq_pub_ca_041",
      "name": "Harmonization: Announcement of Catastrophe",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+18% DefenseDecrease the number of Break Recovery cards required by all Combatants by 1",
      "icon": "relics/relic_0099"
    },
    {
      "id": "eq_arena_ca_003",
      "name": "Shield of Ashen Sacrifice",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "If Damage is completely blocked, at the start of the next turn, create 1 1",
      "icon": "relics/relic_5031"
    },
    {
      "id": "eq_arena_ca_010",
      "name": "Harmonization: Victor’s Laurel",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Counterattack by 50%",
      "icon": "relics/relic_5038"
    },
    {
      "id": "eq_arena_ca_011",
      "name": "Bangle of Valor",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of ally Arena cards by 20%At the start of battle, create 1 Forgotten Sword",
      "icon": "relics/relic_5039"
    },
    {
      "id": "eq_chr_ca_013",
      "name": "Harmonization: The Chosen Vessel",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the 380 and fourth turns, 380% Fixed Shield",
      "icon": "relics/relic_1218"
    },
    {
      "id": "eq_chr_ca_014",
      "name": "Mutation: Resolute Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a Basic Card is activated, 40% Fixed Shield",
      "icon": "relics/relic_1219"
    },
    {
      "id": "eq_chr_ca_015",
      "name": "Bloom: Resolute Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+1 Hit Count to Basic Attack Cards",
      "icon": "relics/relic_1219"
    },
    {
      "id": "eq_chr_ca_019",
      "name": "Harmonization: Cursed Doll",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of turn, Heal 90% for each Status Ailment and Curse card in hand",
      "icon": "relics/relic_0056"
    },
    {
      "id": "eq_chr_ca_020",
      "name": "Harmonization: Torture Toolbox",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, increase Action Count of all enemies by 3",
      "icon": "relics/relic_1157"
    },
    {
      "id": "eq_chr_ca_021",
      "name": "Harmonization: Chains of Obsession",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% HP Reduction, 80% Fixed Shield",
      "icon": "relics/relic_1152_6"
    },
    {
      "id": "eq_dll_ca_005",
      "name": "Mutation: Twisted Discipline",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a Duplicated Card is activated, gain 1 AP",
      "icon": "relics/relic_1293"
    },
    {
      "id": "eq_dll_ca_006",
      "name": "Mutation: Primordial Discipline",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "When a Bullet card of an ally is activated, 80% Fixed Shield",
      "icon": "relics/relic_1292"
    },
    {
      "id": "eq_inv_ca_007",
      "name": "Harmonization: Crustacean Fluider",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the next turn after taking Damage, 150% Fixed Shield",
      "icon": "relics/relic_0063"
    },
    {
      "id": "eq_inv_ca_015",
      "name": "Bloom: Crustacean Fluider",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+180% Defense, and at the start of the next turn after receiving Damage, 180% Fixed Shield",
      "icon": "relics/relic_0063"
    },
    {
      "id": "eq_nih_ca_004",
      "name": "Harmonization: Contaminated Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "+9% Max Health+18% Defense",
      "icon": "relics/relic_1246"
    },
    {
      "id": "eq_nih_ca_009",
      "name": "Harmonization: M.S.S Scope",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "For 180 turn, if a harmful effect is inflicted, at the end of the turn, 180% Fixed Shield",
      "icon": "relics/relic_0060"
    },
    {
      "id": "eq_sec_ca_006",
      "name": "Mutation: Mask of Evil Spirits",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "If at max HP, +30% Critical Chance",
      "icon": "relics/relic_1117"
    },
    {
      "id": "eq_ds01_ca_003",
      "name": "Mutation: Brainwave-Blocking Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the turn, 75% Fixed Shield for each Status Ailment and Curse Card in hand",
      "icon": "relics/relic_0102"
    },
    {
      "id": "eq_ds01_ca_005",
      "name": "Mutation: Incomplete Carapace",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "On Counterattack, Heal 50%",
      "icon": "relics/relic_0104"
    },
    {
      "id": "eq_g01_ca_002",
      "name": "Rocket-Adorned Cape",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the battle, 1 Damage Reduction and Draw 1",
      "icon": "relics/relic_5004"
    },
    {
      "id": "eq_g01_ca_003",
      "name": "Distortion: Wings of Freedom",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When attacked, increase Damage Amount by 10%",
      "icon": "relics/relic_5005"
    },
    {
      "id": "eq_ds02_ca_003",
      "name": "Mutation: Phytotype Synthetic",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a Basic Card is activated, Heal 40%",
      "icon": "relics/relic_5023"
    },
    {
      "id": "eq_ds02_ca_004",
      "name": "Mutation: Vine Camouflage",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "On Hit, enable Inspiration effect for 1 random card in hand",
      "icon": "relics/relic_5025"
    },
    {
      "id": "eq_ds02_ca_005",
      "name": "Harmonization: Moss Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When an ally Attack Card was not activated for 150 turn and the turn is ended, 150% Fixed Shield",
      "icon": "relics/relic_5024"
    },
    {
      "id": "eq_g02_ca_002",
      "name": "Harmonization: Shining Lyre",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the turn, if an ally Exhaust card is in hand, 90% Fixed Shield",
      "icon": "relics/relic_5011"
    },
    {
      "id": "eq_g02_ca_007",
      "name": "Distortion: Robe of Oblivion",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Shield is gained through an ally Exhaust card, increase Damage Amount by 20% for 20 turn",
      "icon": "relics/relic_5016"
    },
    {
      "id": "eq_g02_ca_008",
      "name": "Distortion: Vine Lord’s Mask",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an Exhaust card is Drawn through an ally ability, 1% Fixed Shield",
      "icon": "relics/relic_5017"
    },
    {
      "id": "eq_g02_ca_012",
      "name": "Bloom: Shining Lyre",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, 5 Stockpile",
      "icon": "relics/relic_5011"
    },
    {
      "id": "eq_ds03_ca_003",
      "name": "Distortion: Mask of Emotions",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Damage is taken by allies, 1 Resonance to the attacker",
      "icon": "relics/relic_5044"
    },
    {
      "id": "eq_ds03_ca_004",
      "name": "Distortion: Cloak of the Heart",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the turn, 1 Damage Reduction",
      "icon": "relics/relic_5045"
    },
    {
      "id": "eq_ds03_ca_007",
      "name": "Harmonization: Nightmare Hairpin",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a Single-Target Attack Card is used, increase Action Count of the target by 1 (1 time per turn)",
      "icon": "relics/relic_5046"
    },
    {
      "id": "eq_g03_ca_004",
      "name": "Mutation: Incomprehensible Holy Object",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When attacked, Discard 1 random ally Quietus card in handIf Discarded, 250% Fixed Shield",
      "icon": "relics/relic_5052"
    },
    {
      "id": "eq_g03_ca_005",
      "name": "Mutation: Delicate Collarbone",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a card is Discarded through an ability, decrease Stress of a random ally by 1 (1 times per battle)",
      "icon": "relics/relic_5053"
    },
    {
      "id": "eq_g03_ca_008",
      "name": "Mutation: Crushed Angel Feather",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Increases Damage, Shield Gain, and Heal Amounts of Celestial cards by 60%",
      "icon": "relics/relic_5056"
    },
    {
      "id": "eq_ds04_ca_004",
      "name": "Distortion: Chitin Shield",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 1 CounterattackOn Counterattack, 1 Weaken to the target",
      "icon": "relics/relic_5061"
    },
    {
      "id": "eq_ds04_ca_005",
      "name": "Harmonization: Essence-Fueled Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Shield is gained through an ally ability, +1% Critical Chance to Attack Cards for 1 turn or until activated (1 time per turn)",
      "icon": "relics/relic_5062"
    },
    {
      "id": "eq_ds04_ca_006",
      "name": "Distortion: Contaminated Cocoon Cape",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When attacked, 1 Scorched to the attacker on the next turn (3 times per turn)",
      "icon": "relics/relic_5063"
    },
    {
      "id": "eq_g04_ca_001",
      "name": "Mutation: Pagna Mushroom",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Shield is gained through an ability, create 1Apply Haste to those cards (2 times per turn)",
      "icon": "relics/relic_5066"
    },
    {
      "id": "eq_g04_ca_007",
      "name": "Mutation: Contaminated Drone Lens",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an ally Lead card is used, decrease Cost of the next card activated by 1",
      "icon": "relics/relic_5072"
    },
    {
      "id": "eq_g04_ca_008",
      "name": "Mutation: Remnants of Succession",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "On Ravage by allies, 1 Morale",
      "icon": "relics/relic_5073"
    },
    {
      "id": "eq_ds01_005",
      "name": "Incomplete Carapace",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the end of the turn, if there are 140 or more cards in hand, 140% Fixed Shield",
      "icon": "relics/relic_0104"
    },
    {
      "id": "eq_ds01_003",
      "name": "Brainwave-Blocking Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Drawing through an ability, 1% Fixed Shield (5 times per turn)",
      "icon": "relics/relic_0102"
    },
    {
      "id": "eq_ds02_003",
      "name": "Phytotype Synthetic",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Shield is gained through a card, increase Damage Amount of the next 2 Attack Card activated by 20% for 1 turn (2 time(s) per turn)",
      "icon": "relics/relic_5023"
    },
    {
      "id": "eq_ds02_004",
      "name": "Vine Camouflage",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the turn, if Health is 2% or less, 1 Evasion (2 times per battle)",
      "icon": "relics/relic_5025"
    },
    {
      "id": "eq_ds02_005",
      "name": "Moss Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When an ally Attack Card was not activated for 100 turn and the turn is ended, 100% Fixed Shield",
      "icon": "relics/relic_5024"
    },
    {
      "id": "eq_ds03_003",
      "name": "Mask of Emotions",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When attacked, 1 Resonance to the attacker (3 times per turn)",
      "icon": "relics/relic_5044"
    },
    {
      "id": "eq_ds03_004",
      "name": "Cloak of the Heart",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is Discarded through an ally ability, 1 Damage Reduction (1 time per turn)",
      "icon": "relics/relic_5045"
    },
    {
      "id": "eq_ds03_007",
      "name": "Nightmare Hairpin",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a Single-Target Attack Card is activated, increase Action Count of the target by 1 (1 time per turn)",
      "icon": "relics/relic_5046"
    },
    {
      "id": "eq_arena_003",
      "name": "Shield of Ashen Sacrifice",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "If Damage is completely blocked, at the start of the next turn, create 1 1",
      "icon": "relics/relic_5031"
    },
    {
      "id": "eq_arena_010",
      "name": "Victor’s Laurel",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of Counterattack by 40%",
      "icon": "relics/relic_5038"
    },
    {
      "id": "eq_arena_011",
      "name": "Bangle of Valor",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount of ally Arena cards by 20%At the start of battle, create 1 Forgotten Sword",
      "icon": "relics/relic_5039"
    },
    {
      "id": "eq_g01_002",
      "name": "Rocket-Adorned Cape",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the battle, 1 Damage Reduction and Draw 1",
      "icon": "relics/relic_5004"
    },
    {
      "id": "eq_g01_003",
      "name": "Wings of Freedom",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When hit, increase Damage Amount 10% (can stack up to 3 times)",
      "icon": "relics/relic_5005"
    },
    {
      "id": "eq_g02_002",
      "name": "Shining Lyre",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the turn, if an ally Exhaust card is in hand, 60% Fixed Shield",
      "icon": "relics/relic_5011"
    },
    {
      "id": "eq_g02_007",
      "name": "Robe of Oblivion",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Shield is gained through an Exhaust card, increase Damage Amount by 20% for 20 turn (1 time per turn)",
      "icon": "relics/relic_5016"
    },
    {
      "id": "eq_g02_008",
      "name": "Vine Lord’s Mask",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Drawing an Exhaust card through an ally ability, 2% Fixed Shield (2 times per turn)",
      "icon": "relics/relic_5017"
    },
    {
      "id": "eq_g03_004",
      "name": "Incomprehensible Holy Object",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Each time a Quietus card is Discarded through an ability, 80% Fixed Shield (2 times per turn)",
      "icon": "relics/relic_5052"
    },
    {
      "id": "eq_g03_005",
      "name": "Delicate Collarbone",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, if an ally Persona Card is in hand, decrease Stress of allies by 1",
      "icon": "relics/relic_5053"
    },
    {
      "id": "eq_g03_008",
      "name": "Crushed Angel Feather",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When ally Linked cards are activated, increase Action Count of all enemies by 2 (1 time per turn)",
      "icon": "relics/relic_5056"
    },
    {
      "id": "eq_ds04_004",
      "name": "Chitin Shield",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "1 CounterattackOn Counterattack, 1 Aftershock to the target (1 time per turn)",
      "icon": "relics/relic_5061"
    },
    {
      "id": "eq_ds04_005",
      "name": "Essence-Fueled Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Shield is gained through an ability, +1% Critical Chance to Attack Cards for 1 turn until activated (1 time per turn)",
      "icon": "relics/relic_5062"
    },
    {
      "id": "eq_ds04_006",
      "name": "Contaminated Cocoon Cape",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When attacked, apply 1 random effect(s) among Agony, Vulnerable, or Scorched to the attacker (1 times per turn)",
      "icon": "relics/relic_5063"
    },
    {
      "id": "eq_g04_001",
      "name": "Pagna Mushroom",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When attacked, apply 1 random effect(s) among Vulnerable, Weaken, Agony, or Scorched to the attacker (1 times per turn)",
      "icon": "relics/relic_5066"
    },
    {
      "id": "eq_g04_007",
      "name": "Contaminated Drone Lens",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, if an ally Desire Card is in hand, decrease Stress of a random ally by 1",
      "icon": "relics/relic_5072"
    },
    {
      "id": "eq_g04_008",
      "name": "Remnants of Succession",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "When 1 Attack Cards are activated, 4 Scorched to all enemies (1 time per turn)",
      "icon": "relics/relic_5073"
    },
    {
      "id": "eq_dpt_test_301",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 1 or fewer cards are in hand, Draw 1 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_302",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 2 or fewer cards are in hand, Draw 2 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_303",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 3 or fewer cards are in hand, Draw 3 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_304",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 4 or fewer cards are in hand, Draw 4 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_305",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 5 or fewer cards are in hand, Draw 5 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_306",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 6 or fewer cards are in hand, Draw 6 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_307",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 7 or fewer cards are in hand, Draw 7 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_308",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 8 or fewer cards are in hand, Draw 8 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_dpt_test_309",
      "name": "DPT Benchmark Equipment 3",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When a card is activated by allies, if 9 or fewer cards are in hand, Draw 9 (max 2 times per activation, 5 times per turn)",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_tut_005",
      "name": "Reactive Deflecting Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, gain 5 Thorns",
      "icon": "relics/relic_1158"
    },
    {
      "id": "eq_tut_001",
      "name": "Light Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "COMMON",
      "desc": "+20% Shield Gain Amount",
      "icon": "relics/relic_1158"
    },
    {
      "id": "eq_pub_014",
      "name": "Cloud-Walking Shoes",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an ally inflicts Ravage, 40% Fixed Shield",
      "icon": "relics/relic_1188"
    },
    {
      "id": "eq_pub_015",
      "name": "Gladiator’s Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, gain 2 Damage Reduction",
      "icon": "relics/relic_1165"
    },
    {
      "id": "eq_pub_016",
      "name": "Scout’s Combat Boots",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When defeating the enemy, 60% Fixed Shield",
      "icon": "relics/relic_0070"
    },
    {
      "id": "eq_pub_017",
      "name": "Standard Gas Mask",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, 1 Immunity",
      "icon": "relics/relic_0074"
    },
    {
      "id": "eq_pub_018",
      "name": "Assault Boots",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the 200 turn, 200% Fixed Shield",
      "icon": "relics/relic_1065"
    },
    {
      "id": "eq_pub_019",
      "name": "Assault Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, gain 3 Counterattack",
      "icon": "relics/relic_1072"
    },
    {
      "id": "eq_pub_020",
      "name": "Reinforced Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if there is no Shield, gain 60% Fixed Shield",
      "icon": "relics/relic_1076"
    },
    {
      "id": "eq_pub_021",
      "name": "Titan Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Damage is taken, Recover 2% of Max HP (1 time per turn)",
      "icon": "relics/relic_1136"
    },
    {
      "id": "eq_pub_022",
      "name": "Survivor’s Hood",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of battle, gain 140% Fixed Shield",
      "icon": "relics/relic_1148"
    },
    {
      "id": "eq_pub_024",
      "name": "Lush Seaweed Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "When Shield is gained through a card, 30% Fixed Shield",
      "icon": "relics/relic_1196"
    },
    {
      "id": "eq_pub_040",
      "name": "Shell of Aberration",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+1% DefenseWhen Stress increases, there is a 50% chance that Stress increases by 1 less",
      "icon": "relics/relic_0098"
    },
    {
      "id": "eq_pub_041",
      "name": "Announcement of Catastrophe",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "+12% DefenseDecrease the number of Break Recovery cards required by all Combatants by 1",
      "icon": "relics/relic_0099"
    },
    {
      "id": "eq_tut_006",
      "name": "Reinforced Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if there is no Shield, gain 60% Fixed Shield",
      "icon": "relics/relic_1076"
    },
    {
      "id": "eq_pub_023",
      "name": "Psionic Combat Suit",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When a card is Exhausted, 1% Fixed Shield (5 times per turn)",
      "icon": "relics/relic_1158_6"
    },
    {
      "id": "eq_chr_013",
      "name": "The Chosen Vessel",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the 250 turn, 250% Fixed Shield",
      "icon": "relics/relic_1218"
    },
    {
      "id": "eq_chr_014",
      "name": "Resolute Gauntlets",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of Chaos Order battle, +20% Damage, 1 Damage Reduction",
      "icon": "relics/relic_1219"
    },
    {
      "id": "eq_chr_019",
      "name": "Cursed Doll",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of turn, Heal 60% for each Status Ailment and Curse card in hand",
      "icon": "relics/relic_0056"
    },
    {
      "id": "eq_chr_020",
      "name": "Torture Toolbox",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, increase Action Count of all enemies by 1",
      "icon": "relics/relic_1157"
    },
    {
      "id": "eq_chr_021",
      "name": "Chains of Obsession",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% HP Reduction, 60% Fixed Shield",
      "icon": "relics/relic_1152_6"
    },
    {
      "id": "eq_dll_005",
      "name": "Twisted Discipline",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When 2 or more Action Points are used, 2 Immunity (1 time per battle)",
      "icon": "relics/relic_1293"
    },
    {
      "id": "eq_dll_006",
      "name": "Primordial Discipline",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, 2 Immunity",
      "icon": "relics/relic_1292"
    },
    {
      "id": "eq_inv_007",
      "name": "Crustacean Fluider",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the next turn after taking Damage, 60% Fixed Shield",
      "icon": "relics/relic_0063"
    },
    {
      "id": "eq_nih_004",
      "name": "Contaminated Helmet",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "Max HP +6%, Defense +12%",
      "icon": "relics/relic_1246"
    },
    {
      "id": "eq_nih_009",
      "name": "M.S.S Scope",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "For 80 turn, if a harmful effect is inflicted, at the end of the turn, 80% Fixed Shield",
      "icon": "relics/relic_0060"
    },
    {
      "id": "eq_sec_006",
      "name": "Mask of Evil Spirits",
      "type": "EQUIP_ARMOR",
      "rarity": "RARE",
      "desc": "At the start of the next turn after taking Damage, 60% Fixed Shield",
      "icon": "relics/relic_1117"
    },
    {
      "id": "eq_p_dll_004",
      "name": "Consecrated Halo",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Shield Gain Amount by 25%",
      "icon": "relics/relic_1094"
    },
    {
      "id": "eq_p_dll_005",
      "name": "Wings of Light",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When Ego Points are 2 or lower, 0.2 Ego Points on Critical Hit",
      "icon": "relics/relic_1179"
    },
    {
      "id": "eq_p_dll_006",
      "name": "Ring of the Seraphim",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated, +30% Damage Amount for 1 turn",
      "icon": "relics/relic_1181"
    },
    {
      "id": "eq_p_inv_005",
      "name": "Growing Carapace",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, gain 40% Fixed Shield",
      "icon": "relics/relic_0064"
    },
    {
      "id": "eq_p_inv_006",
      "name": "Dance of the Night Butterflies",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "On Ravage, 60% Fixed Shield",
      "icon": "relics/relic_1143_6"
    },
    {
      "id": "eq_p_inv_007",
      "name": "Wings of the Swarm",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, 2 Immunity",
      "icon": "relics/relic_1143"
    },
    {
      "id": "eq_p_nih_004",
      "name": "Regenerative Ribcage",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "Max HP +12%",
      "icon": "relics/relic_1089"
    },
    {
      "id": "eq_p_nih_005",
      "name": "Fragment of the Empty Void",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, Discard up to 1 cards, Draw equal to the number",
      "icon": "relics/relic_1093"
    },
    {
      "id": "eq_p_nih_006",
      "name": "Gluttonous Tailcoat",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "At the start of the next turn after taking Damage, 80% Fixed Shield",
      "icon": "relics/relic_1183"
    },
    {
      "id": "eq_p_sec_004",
      "name": "Immortal Scale",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When gaining Counterattack through an ability, add 1 Counterattack",
      "icon": "relics/relic_1114"
    },
    {
      "id": "eq_p_sec_005",
      "name": "Star-Lit Cloak",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Decrease Damage Taken by 10% (1 time per turn)",
      "icon": "relics/relic_1189"
    },
    {
      "id": "eq_p_sec_006",
      "name": "Fairy King’s Crown",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "+6% Critical Chance",
      "icon": "relics/relic_1062"
    },
    {
      "id": "eq_p_sec_007",
      "name": "Mask of Flames",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 35% against targets in a Vulnerable state",
      "icon": "relics/relic_1115"
    },
    {
      "id": "eq_p_var_004",
      "name": "Wolves Bane’s Spine",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "On Critical Hit, 10% Fixed Shield",
      "icon": "relics/relic_1119"
    },
    {
      "id": "eq_p_var_005",
      "name": "Wild Fur Cloak",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "At turn start, Counterattack 1",
      "icon": "relics/relic_1122"
    },
    {
      "id": "eq_p_var_006",
      "name": "Kentris Chitin Armor",
      "type": "EQUIP_ARMOR",
      "rarity": "UNIQUE",
      "desc": "Increase Shield Gain Amount of allies by 15%",
      "icon": "relics/relic_1123"
    },
    {
      "id": "eq_p_var_007",
      "name": "Shield of the Watcher",
      "type": "EQUIP_ARMOR",
      "rarity": "LEGEND",
      "desc": "When taking Damage, 1 Mark on the attacker",
      "icon": "relics/relic_1171"
    }
  ],
  "accessories": [
    {
      "id": "eq_p_inv_ca_008",
      "name": "Mutation: Pulsating Egg",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+15% Attack, +15% Defense, +15% Max Health",
      "icon": "relics/relic_1140"
    },
    {
      "id": "eq_p_inv_ca_009",
      "name": "Harmonization: Natural Predator",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Ravage, +150% Damage Amount to next 1 Attack Card activated",
      "icon": "relics/relic_1144_6"
    },
    {
      "id": "eq_p_inv_ca_010",
      "name": "Mutation: Voracious Swarm",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, create 1 1 in handAt the start of the turn, 1 Morale for each Status Ailment and Curse in hand",
      "icon": "relics/relic_1176"
    },
    {
      "id": "eq_p_dll_ca_007",
      "name": "Mutation: Lead-Colored Holy Water",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Ravage, 200% Fixed Damage to all enemies",
      "icon": "relics/relic_0002"
    },
    {
      "id": "eq_p_dll_ca_008",
      "name": "Harmonization: Eye of the Punisher",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "If the enemy is alone, increase damage by 45%",
      "icon": "relics/relic_1097"
    },
    {
      "id": "eq_p_dll_ca_009",
      "name": "Harmonization: Viadeus's Reactor",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated, 2 Damage Reduction",
      "icon": "relics/relic_1099"
    },
    {
      "id": "eq_p_dll_ca_010",
      "name": "Harmonization: The Golden Rule",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+30% Damage Amount, +30 Shield gain",
      "icon": "relics/relic_1180"
    },
    {
      "id": "eq_p_nih_ca_007",
      "name": "Mutation: Eye of the Eyeless",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+30% Critical Chance to Basic Attack Cards",
      "icon": "relics/relic_1040"
    },
    {
      "id": "eq_p_nih_ca_008",
      "name": "Mutation: Palasia's Orb",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "If a Monster Card is in hand, +25% Critical Chance",
      "icon": "relics/relic_1090"
    },
    {
      "id": "eq_p_nih_ca_009",
      "name": "Harmonization: Torch That Should Not Be Extinguished",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "If you have Shield at the start of turn, 150% Fixed Shield",
      "icon": "relics/relic_1132"
    },
    {
      "id": "eq_p_nih_ca_010",
      "name": "Bloom: Torch That Should Not Be Extinguished",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "If Shield is held at the start of the turn, 120% Fixed Shield, 120% Fixed Damage to all enemies",
      "icon": "relics/relic_1132"
    },
    {
      "id": "eq_p_sec_ca_008",
      "name": "Mutation: Bone Ring of Wildfire",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, create 1 random Neutral Cards in hand",
      "icon": "relics/relic_1113"
    },
    {
      "id": "eq_p_sec_ca_009",
      "name": "Mutation: Dormant Seeds",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "On Heal or Recover through an ally ability, 80% Fixed Shield",
      "icon": "relics/relic_1112"
    },
    {
      "id": "eq_p_sec_ca_010",
      "name": "Harmonization: Call of the Ancient Spirit",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Critical Hit, 15% Fixed Heal",
      "icon": "relics/relic_1116"
    },
    {
      "id": "eq_p_var_ca_008",
      "name": "Harmonization: Nature’s Gift",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Heal 60% at the end of turn",
      "icon": "relics/relic_0023"
    },
    {
      "id": "eq_p_var_ca_009",
      "name": "Mutation: Eternal Stone",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if Status Ailment or Curse cards are in hand, 150% Fixed Damage to all enemies",
      "icon": "relics/relic_1047"
    },
    {
      "id": "eq_p_var_ca_010",
      "name": "Mutation: Gloomy Prime's Eye",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "Increase Damage Amount by 60% against Marked targets",
      "icon": "relics/relic_1121"
    },
    {
      "id": "eq_pub_ca_026",
      "name": "Mutation: Magic-Infused Sapphire",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "+2% Max HP. At the start of battle, decrease Stress of the Combatant with the highest Stress by 2",
      "icon": "relics/relic_0008"
    },
    {
      "id": "eq_pub_ca_027",
      "name": "Distortion: Quantum Collector",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated by allies, increase Damage, Shield Gain, and Heal Amounts by 20%",
      "icon": "relics/relic_1043"
    },
    {
      "id": "eq_pub_ca_028",
      "name": "Harmonization: Heart of Gold",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of battle, if HP is 12% or less, Recover 12% of Max HP",
      "icon": "relics/relic_1048"
    },
    {
      "id": "eq_pub_ca_029",
      "name": "Multifaceted Parallel Universe Nexus",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, proc 1 random Lead card in hand",
      "icon": "relics/relic_1059"
    },
    {
      "id": "eq_pub_ca_030",
      "name": "Harmonization: Absolute Zero Tetrahedron",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, +30% Shield",
      "icon": "relics/relic_1063"
    },
    {
      "id": "eq_pub_ca_031",
      "name": "Harmonization: Amorphous Cube",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "+40% Damage Amount",
      "icon": "relics/relic_1075"
    },
    {
      "id": "eq_pub_ca_032",
      "name": "Distortion: Dimensional Cube",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a card is Discarded, +1% Damage Amount for 1 turn (max 10 stacks)",
      "icon": "relics/relic_1077"
    },
    {
      "id": "eq_pub_ca_033",
      "name": "Mutation: Water Drops of the Goddess",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 1 Stockpile, and 100% Fixed Shield",
      "icon": "relics/relic_1079"
    },
    {
      "id": "eq_pub_ca_034",
      "name": "Harmonization: Moon of Destruction",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 300% Fixed Damage to all enemies",
      "icon": "relics/relic_1080"
    },
    {
      "id": "eq_pub_ca_035",
      "name": "Mutation: Time Regulator",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Trigger random Divine Epiphany for the equipped Combatant",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_pub_ca_036",
      "name": "Harmonization: Heart of the Jewel",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "1 is applied as X+2",
      "icon": "relics/relic_1146"
    },
    {
      "id": "eq_pub_ca_037",
      "name": "Mutation: Grey Orb",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+10% Critical Chance. At the start of battle, 2 Damage Reduction",
      "icon": "relics/relic_5002"
    },
    {
      "id": "eq_pub_ca_042",
      "name": "Harmonization: Sphere of Randomness",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% Max HealthAt the start of battle, gain 1 AP, Draw 2",
      "icon": "relics/relic_0096"
    },
    {
      "id": "eq_pub_ca_043",
      "name": "Harmonization: Dice of Derangement",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% Max HPAt the end of battle, if HP is below 50%, recover 12% Max HPAt the end of the battle, if HP is 50% or higher, -5 Stress to the Combatant with the highest Stress",
      "icon": "relics/relic_0097"
    },
    {
      "id": "eq_pub_ca_045",
      "name": "Bloom: Absolute Zero Tetrahedron",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+80% Shield Gain Amount",
      "icon": "relics/relic_1063"
    },
    {
      "id": "eq_pub_ca_046",
      "name": "Bloom: Quantum Collector",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "Decrease Cost of all Status Ailment and Curse Cards in hand by 1",
      "icon": "relics/relic_1043"
    },
    {
      "id": "eq_pub_ca_047",
      "name": "Bloom: Heart of Gold",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, enable all Inspiration effects in hand",
      "icon": "relics/relic_1048"
    },
    {
      "id": "eq_pub_ca_048",
      "name": "Bloom: Multifaceted Parallel Universe Nexus",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 1 AP, and Draw 1 Upgrade Cards of this unit",
      "icon": "relics/relic_1059"
    },
    {
      "id": "eq_pub_ca_049",
      "name": "Bloom: Grey Orb",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "When an Upgrade Card is activated, Draw 1 and gain 1 AP",
      "icon": "relics/relic_5002"
    },
    {
      "id": "eq_arena_ca_004",
      "name": "Launcher of Ruined Honor",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Create 1 1 each even turn",
      "icon": "relics/relic_5032"
    },
    {
      "id": "eq_arena_ca_005",
      "name": "Charger of Weathered Glory",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "If a turn is ended with 1 or more AP remaining, at the start of the next turn, create 1 Charged Strike",
      "icon": "relics/relic_5033"
    },
    {
      "id": "eq_arena_ca_006",
      "name": "Distortion: Combat Drum",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 Skill Cards are created, increase Damage Amount of the next ally card activated by 20%",
      "icon": "relics/relic_5034"
    },
    {
      "id": "eq_arena_ca_008",
      "name": "Harmonization: Gladiator’s Medallion",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Shield is gained 130 times through cards, 130% Fixed Damage to all enemies",
      "icon": "relics/relic_5036"
    },
    {
      "id": "eq_arena_ca_009",
      "name": "Harmonization: Rage Potion",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Attack Cards are activated 1 times, increase Damage Amount of the next Attack Card activated by 50%",
      "icon": "relics/relic_5037"
    },
    {
      "id": "eq_chr_ca_002",
      "name": "Mutation: Madman's Masterpiece",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of an Elite Boss Battle, +75% Damage Amount",
      "icon": "relics/relic_1184"
    },
    {
      "id": "eq_chr_ca_005",
      "name": "Harmonization: Chaos Scripture",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the 600 turn, 600% Fixed Damage to all enemies",
      "icon": "relics/relic_0009"
    },
    {
      "id": "eq_chr_ca_006",
      "name": "Distortion: Bloodstone of the Void",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When an Attack Card is activated, 1% DMG-Based Recovery",
      "icon": "relics/relic_1299"
    },
    {
      "id": "eq_chr_ca_007",
      "name": "Harmonization: Forbidden Scripture",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the 825 turn, 825% Fixed Damage to all enemies",
      "icon": "relics/relic_1300"
    },
    {
      "id": "eq_chr_ca_008",
      "name": "Distortion: Crimson Bloodstone",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% DMG-Based Recovery",
      "icon": "relics/relic_1214"
    },
    {
      "id": "eq_chr_ca_012",
      "name": "Mutation: Order’s Emblem",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of turn, 120% Fixed Damage for each Status Ailment and Curse card in hand to a random enemy",
      "icon": "relics/relic_1308"
    },
    {
      "id": "eq_chr_ca_016",
      "name": "Mutation: Proof of Initiation",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of turn, 80% Fixed Damage for each Status Ailment and Curse card in hand to a random enemy",
      "icon": "relics/relic_1107"
    },
    {
      "id": "eq_chr_ca_022",
      "name": "Mutation: Bloody Pendant",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a Duplicated card is activated, increase Action Count of all enemies by 3",
      "icon": "relics/relic_1223"
    },
    {
      "id": "eq_chr_ca_023",
      "name": "Harmonization: Dice of Discord",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the end of the turn, activate 1 random effect; 100% Fixed Damage x 2-6 to random enemies or 200% Fixed Damage to allies",
      "icon": "relics/relic_1185"
    },
    {
      "id": "eq_chr_ca_024",
      "name": "Phonograph",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A phonograph containing records that the Heretic Interrogator once listened to.",
      "icon": "relics/relic_0018"
    },
    {
      "id": "eq_chr_ca_025",
      "name": "Blood Pack",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Blood carried by a heretic. It's unclear whether it was donated or offered.",
      "icon": "relics/relic_10004"
    },
    {
      "id": "eq_chr_ca_027",
      "name": "Order Uniform",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Clothing worn by a heretic. It could be useful as a disguise.",
      "icon": "relics/relic_1216"
    },
    {
      "id": "eq_chr_ca_028",
      "name": "Proof of Love",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When attacking a target that has already acted through a Single-Target card, increase Critical Chance by 1%",
      "icon": "relics/relic_1212"
    },
    {
      "id": "eq_dll_ca_001",
      "name": "Mutation: Guardian Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if 220 or more cards are in hand, 220% Fixed Shield",
      "icon": "relics/relic_1291"
    },
    {
      "id": "eq_dll_ca_007",
      "name": "Harmonization: Rune Code",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of the turn, if there is a Retained card, 150% Fixed Shield",
      "icon": "relics/relic_1297"
    },
    {
      "id": "eq_dll_ca_008",
      "name": "Mutation: Corroded Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a Duplicated Card is activated, 130% Fixed Damage to all enemies",
      "icon": "relics/relic_1290"
    },
    {
      "id": "eq_dll_ca_009",
      "name": "Mutation: Corrupted Core",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of battle, 2 Damage Reduction2% Shield Retention#3",
      "icon": "relics/relic_1289"
    },
    {
      "id": "eq_dll_ca_011",
      "name": "Dark Star Radio",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A standard radio carried by Dark Star, taken on a hunch that it might come in handy.",
      "icon": "relics/relic_0038"
    },
    {
      "id": "eq_dll_ca_012",
      "name": "Data Chip",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A chip containing emotional data collected by the Black Angels. It is marked with 'Sample Classification: Excellent. Requires Re-observation.'",
      "icon": "relics/relic_0069"
    },
    {
      "id": "eq_dll_ca_013",
      "name": "Self-Defense Manual",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A self-defense manual carried by Dark Star. It doesn't seem to have been very helpful.",
      "icon": "relics/relic_10002"
    },
    {
      "id": "eq_dll_ca_014",
      "name": "Black Angel Bolt",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Bolts and nuts that fell from somewhere on the Black Angel's body.",
      "icon": "relics/relic_1162"
    },
    {
      "id": "eq_dll_ca_015",
      "name": "Dark Star Stimulant",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A stimulant carried by Dark Star. It appears highly effective.",
      "icon": "relics/relic_1004"
    },
    {
      "id": "eq_dll_ca_016",
      "name": "Spirit’s Feather",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a Skill Card is activated, increase Critical Chance by 20% for 1 turn",
      "icon": "relics/relic_1141"
    },
    {
      "id": "eq_dll_ca_017",
      "name": "Bloom: Rune Chord",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "1 Damage Reduction, 50% Shield Retention#3",
      "icon": "relics/relic_1297"
    },
    {
      "id": "eq_inv_ca_004",
      "name": "Mutation: Lepidola's Wing",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount by 40% against targets in a Vulnerable state",
      "icon": "relics/relic_1283"
    },
    {
      "id": "eq_inv_ca_008",
      "name": "Harmonization: Kirak’s Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, if below 8% of Max HP, Recover 8% of Max HP",
      "icon": "relics/relic_1287"
    },
    {
      "id": "eq_inv_ca_009",
      "name": "Mutation: First Aid Kit",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of battle, Recover 6% of Max HP",
      "icon": "relics/relic_1001"
    },
    {
      "id": "eq_inv_ca_010",
      "name": "Unidentified Sauce",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "An unidentified sauce stored in a leather pouch. It has a sweet yet unusual scent.",
      "icon": "relics/relic_1155"
    },
    {
      "id": "eq_inv_ca_011",
      "name": "Nest Slime",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Slime the Nest's heart secreted after overreacting to purple dust, now hardened and faintly sweet-smelling.",
      "icon": "relics/relic_1091"
    },
    {
      "id": "eq_inv_ca_012",
      "name": "Spore Powder",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Spore powder collected from a giant mushroom. It induces a hazy sensation.",
      "icon": "relics/relic_0003"
    },
    {
      "id": "eq_inv_ca_013",
      "name": "Essence of Evolution",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Essence cherished by an Invader. Not yet fully condensed.",
      "icon": "relics/relic_1225"
    },
    {
      "id": "eq_inv_ca_014",
      "name": "The Invader's Honey",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Invader-made honey. Its taste is divisive, but it's apparently quite addictive once you get hooked.",
      "icon": "relics/relic_11007"
    },
    {
      "id": "eq_nih_ca_001",
      "name": "Harmonization: Flower of Dead Souls",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of the second Attack Card onward each turn by 30%",
      "icon": "relics/relic_1243"
    },
    {
      "id": "eq_nih_ca_002",
      "name": "Distortion: Soul Orb",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, 1 Tenacity Damage to a random enemy",
      "icon": "relics/relic_1244"
    },
    {
      "id": "eq_nih_ca_003",
      "name": "Distortion: The Famished One’s Belly",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, +5% Damage Amount and Recover 20% of Max HP (3 times per battle)",
      "icon": "relics/relic_1245"
    },
    {
      "id": "eq_nih_ca_005",
      "name": "Mutation: M.S.S. Data Pad",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, 2 Vulnerable on all enemies",
      "icon": "relics/relic_1247"
    },
    {
      "id": "eq_nih_ca_006",
      "name": "Mutation: Revelations of Futility",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "When a card is Discarded by an ally, 80% Fixed Shield",
      "icon": "relics/relic_1248"
    },
    {
      "id": "eq_nih_ca_007",
      "name": "Harmonization: Eye of Gluttony",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% Damage Amount, and at the end of the turn, Exhaust 1 card in hand",
      "icon": "relics/relic_1249"
    },
    {
      "id": "eq_nih_ca_008",
      "name": "Mutation: M.S.S. Data Pad SE",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 3 Vulnerable to all enemies and decrease Stress of allies by 2",
      "icon": "relics/relic_1250"
    },
    {
      "id": "eq_nih_ca_013",
      "name": "Undigested Prey",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A lump of prey that stopped digesting inside an overfed monster. Certain things are better off unknown.",
      "icon": "relics/relic_1144"
    },
    {
      "id": "eq_nih_ca_014",
      "name": "Undigested Eyeball",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "An eyeball that could not be digested. Its original owner is unknown.",
      "icon": "relics/relic_0036"
    },
    {
      "id": "eq_nih_ca_015",
      "name": "Energy Drink",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A drink the researcher was never without. The taste is a mystery, but the stimulating effect is undeniable.",
      "icon": "relics/relic_10009"
    },
    {
      "id": "eq_nih_ca_016",
      "name": "Jump Starter",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A jump starter a Moss Robot carried for emergencies. It looks slightly worn.",
      "icon": "relics/relic_0049"
    },
    {
      "id": "eq_nih_ca_017",
      "name": "Bloom: Soul Orb",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "When 400 cards are Exhausted, 400% Fixed Damage to all enemies",
      "icon": "relics/relic_1244"
    },
    {
      "id": "eq_sec_ca_004",
      "name": "Mutation: Clover of the Forest",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of the turn, activate the Retain effect of a random ally Retain card 1 times",
      "icon": "relics/relic_1232"
    },
    {
      "id": "eq_sec_ca_005",
      "name": "Mutation: Poacher’s Pathfinder",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "+20% Damage Amount, and at the start of battle, 2 Vulnerable to a random enemy",
      "icon": "relics/relic_1160"
    },
    {
      "id": "eq_sec_ca_011",
      "name": "Harmonization: Verdant Day",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On odd turns, +12% Attack, +18% Defense",
      "icon": "relics/relic_1305"
    },
    {
      "id": "eq_sec_ca_012",
      "name": "Harmonization: Verdant Night",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On even turns, +18% Attack, +12% Defense",
      "icon": "relics/relic_1306"
    },
    {
      "id": "eq_sec_ca_013",
      "name": "Harmonization: Verdant Shackles",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+20% Attack, +20% Defense",
      "icon": "relics/relic_1307"
    },
    {
      "id": "eq_sec_ca_015",
      "name": "Screamer Root",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A plant root that screams wildly, swaying side to side.",
      "icon": "relics/relic_1031"
    },
    {
      "id": "eq_sec_ca_016",
      "name": "Poacher's Trap",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "A trap used to capture countless spirits. It's impossible to tell how many it has caught.",
      "icon": "relics/relic_1108"
    },
    {
      "id": "eq_sec_ca_017",
      "name": "Evil Spirit Sap",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "Sap extracted from an evil spirit. Its dense black color makes it suitable for dye.",
      "icon": "relics/relic_0004"
    },
    {
      "id": "eq_sec_ca_018",
      "name": "Employee ID Card",
      "type": "EQUIP_ACC",
      "rarity": "COMMON",
      "desc": "An employee ID card belonging to a Dark Star researcher. They look exhausted from working overnight.",
      "icon": "relics/relic_1255"
    },
    {
      "id": "eq_sec_ca_019",
      "name": "Sapient Particle",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Critical Chance by 25% against targets owning Shield",
      "icon": "relics/relic_1135"
    },
    {
      "id": "eq_sec_ca_021",
      "name": "Bloom: Clover of the Forest",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Each turn, starting with the third Attack Card, increase Critical Chance by 50%",
      "icon": "relics/relic_1232"
    },
    {
      "id": "eq_sec_ca_023",
      "name": "Bloom: Poacher's Pathfinder",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+60% Damage Amount, and at the start of battle, 2 Vulnerable on all enemies",
      "icon": "relics/relic_1160"
    },
    {
      "id": "eq_ds01_ca_002",
      "name": "Mutation: Nerve Hacking Module",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When an ally Ego Skill is used, +80% Damage Amount for 80 turn",
      "icon": "relics/relic_0101"
    },
    {
      "id": "eq_ds01_ca_004",
      "name": "Mutation: Hyperimmunity Hormone",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When an Upgrade Card is activated, change Cost of a random card in hand to 1 for 1 turn",
      "icon": "relics/relic_0103"
    },
    {
      "id": "eq_ds01_ca_006",
      "name": "Mutation: Unconfirmed Recovery Ampule",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Counterattack, apply 1 Vulnerable to the target",
      "icon": "relics/relic_0105"
    },
    {
      "id": "eq_ds01_ca_010",
      "name": "Superconductive Protein",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the battle, change the cost of 1 card in your hand to 0 for 1 turn",
      "icon": "relics/relic_0109"
    },
    {
      "id": "eq_g01_ca_001",
      "name": "Administrator ID Badge",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the battle, 1 Evasion",
      "icon": "relics/relic_5003"
    },
    {
      "id": "eq_g01_ca_004",
      "name": "Mutation: Emblem of an Exceptional Entity",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+1% Damage Amount, and when Stress is increased, have a 30% chance to increase by 1 less",
      "icon": "relics/relic_5006"
    },
    {
      "id": "eq_g01_ca_006",
      "name": "Distortion: Source of the Forbidden",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When attacked, inflict 1 random effects between Vulnerable, Weaken, or Impair on the attacker",
      "icon": "relics/relic_5008"
    },
    {
      "id": "eq_ds02_ca_006",
      "name": "Harmonization: Leaf of the World Tree",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 2-Cost or higher cards are used, 1 Stockpile",
      "icon": "relics/relic_5026"
    },
    {
      "id": "eq_ds02_ca_007",
      "name": "Harmonization: Plant Doll",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When 1 Skill Cards are Exhausted, decrease Stress of a random ally by 2",
      "icon": "relics/relic_5027"
    },
    {
      "id": "eq_ds02_ca_008",
      "name": "Mutation: Luminescent Shroom",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 cards are Exhausted, Draw 1",
      "icon": "relics/relic_5028"
    },
    {
      "id": "eq_g02_ca_003",
      "name": "Golden Bell",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, decrease Stress of a random ally by 3",
      "icon": "relics/relic_5012"
    },
    {
      "id": "eq_g02_ca_004",
      "name": "Harmonization: Summoned Lump of Light",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Increase Damage Amount of the 45 Attack Card created by 45% for 1 turn",
      "icon": "relics/relic_5010"
    },
    {
      "id": "eq_g02_ca_005",
      "name": "Harmonization: Lightless Stem",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Increase Heal Amount by 25%",
      "icon": "relics/relic_5014"
    },
    {
      "id": "eq_g02_ca_006",
      "name": "Harmonization: Shining World Tree Stem",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Heal Amount by 40%",
      "icon": "relics/relic_5015"
    },
    {
      "id": "eq_g02_ca_011",
      "name": "Liberated Essence",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, decrease Cost of 1 random Exhaust card in hand by 1 for 1 turn",
      "icon": "relics/relic_5020"
    },
    {
      "id": "eq_ds03_ca_005",
      "name": "Bloom: Stele of Heresy",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, inflict Mark and Resonance to all enemies for each Cost of the highest-Cost card in hand",
      "icon": "relics/relic_5047"
    },
    {
      "id": "eq_ds03_ca_008",
      "name": "Mutation: Gospel of Lament",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "+1% Damage Amount to Haste cards",
      "icon": "relics/relic_5048"
    },
    {
      "id": "eq_g03_ca_002",
      "name": "Mutation: Lonesome Wedding Ring",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, proc 1 random Basic Card(s) from Draw Pile",
      "icon": "relics/relic_5050"
    },
    {
      "id": "eq_g03_ca_003",
      "name": "Mutation: Someone's Letter",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of the turn, 100% Fixed Damage to random enemies for each card in hand",
      "icon": "relics/relic_5051"
    },
    {
      "id": "eq_g03_ca_007",
      "name": "Mutation: Hymn-Singing Lips",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, apply Quietus to all cards in hand",
      "icon": "relics/relic_5055"
    },
    {
      "id": "eq_g03_ca_009",
      "name": "Mutation: An Eye Plucked from a Mural",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+20% Damage Amount to Attack Cards for each Morale+20% Shield Gain Amount to Skill Cards for each Resolve",
      "icon": "relics/relic_5057"
    },
    {
      "id": "eq_ds04_ca_007",
      "name": "Distortion: Essence-Fragmented Necklace",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an enemy is defeated by allies, gain 1 AP (1 time per turn)",
      "icon": "relics/relic_5064"
    },
    {
      "id": "eq_ds04_ca_008",
      "name": "Harmonization: Raider's Scanning Gear",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "On Critical Hit, +1% Critical Damage to Attack Cards (1 time per turn)",
      "icon": "relics/relic_5065"
    },
    {
      "id": "eq_g04_ca_002",
      "name": "Mutation: Final Entry",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, 1 MoraleIncrease Stress of all allies by 2",
      "icon": "relics/relic_5067"
    },
    {
      "id": "eq_g04_ca_003",
      "name": "Mutation: Kaleidoscope Fragment",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, 2 Scorched to all enemiesAgainst targets in a Scorched state, +60% Damage Amount to Attack Cards",
      "icon": "relics/relic_5068"
    },
    {
      "id": "eq_g04_ca_006",
      "name": "Harmonization: Closed-Circuit Terminal",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On an All-Target Attack through an ally ability, 1 Vulnerable to all enemies (1 time per turn)",
      "icon": "relics/relic_5071"
    },
    {
      "id": "eq_g04_ca_009",
      "name": "Harmonization: Cycle of Circulation",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, Fixed Heal 1% (3 times per battle)",
      "icon": "relics/relic_5074"
    },
    {
      "id": "eq_g04_ca_010",
      "name": "Harmonization: Invader Observation Logs",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+1% Damage Amount to Attack CardsFor each enemy present, +4% Critical Chance",
      "icon": "relics/relic_5075"
    },
    {
      "id": "eq_ds01_002",
      "name": "Nerve Hacking Module",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When a Forbidden Card is activated by an ally, +1% Damage Amount and +20% Shield Gain Amount (2 times per battle)",
      "icon": "relics/relic_0101"
    },
    {
      "id": "eq_ds01_004",
      "name": "Hyperimmunity Hormone",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When you Draw through an ability, +1% Shield gain for 1 turn (Max 2 times per turn)",
      "icon": "relics/relic_0103"
    },
    {
      "id": "eq_ds01_006",
      "name": "Unconfirmed Recovery Ampule",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a Forbidden Card is activated by an ally, Recover 3% of max HP and gain 80% Fixed Shield",
      "icon": "relics/relic_0105"
    },
    {
      "id": "eq_ds01_010",
      "name": "Superconductive Protein",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the battle, change the cost of 1 card in your hand to 0 for 1 turn",
      "icon": "relics/relic_0109"
    },
    {
      "id": "eq_ds02_006",
      "name": "Leaf of the World Tree",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 2-Cost or higher cards are used, 1 Stockpile",
      "icon": "relics/relic_5026"
    },
    {
      "id": "eq_ds02_007",
      "name": "Plant Doll",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When 1 Skill Cards are Exhausted, decrease Stress of a random ally by 1",
      "icon": "relics/relic_5027"
    },
    {
      "id": "eq_ds02_008",
      "name": "Luminescent Shroom",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "1 the effect of Spore Propagation on the 6th Attack Card created for 1 turn",
      "icon": "relics/relic_5028"
    },
    {
      "id": "eq_ds03_005",
      "name": "Stele of Heresy",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Each time 1 cards are Discarded through an ally ability, randomly inflict 1 of either Vulnerable or Mark on a random enemy (5 times per turn)",
      "icon": "relics/relic_5047"
    },
    {
      "id": "eq_ds03_008",
      "name": "Gospel of Lament",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When Action Count of the enemy is increased through an ability, +1% Damage Amount for 1 turn (1 time per turn)",
      "icon": "relics/relic_5048"
    },
    {
      "id": "eq_arena_004",
      "name": "Launcher of Ruined Honor",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Create 1 1 each even turn",
      "icon": "relics/relic_5032"
    },
    {
      "id": "eq_arena_005",
      "name": "Charger of Weathered Glory",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "If a turn is ended with 1 or more AP remaining, at the start of the next turn, create 1 Charged Strike",
      "icon": "relics/relic_5033"
    },
    {
      "id": "eq_arena_006",
      "name": "Combat Drum",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 Skill Cards are created, increase Damage Amount of the next ally card activated by 20% (cannot stack)",
      "icon": "relics/relic_5034"
    },
    {
      "id": "eq_arena_008",
      "name": "Gladiator’s Medallion",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Shield is gained 100 times through cards, 100% Fixed Damage to all enemies",
      "icon": "relics/relic_5036"
    },
    {
      "id": "eq_arena_009",
      "name": "Rage Potion",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Attack Cards are activated 1 times, increase Damage Amount of the next Attack Card activated by 40%",
      "icon": "relics/relic_5037"
    },
    {
      "id": "eq_g01_001",
      "name": "Administrator ID Badge",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the battle, 1 Evasion",
      "icon": "relics/relic_5003"
    },
    {
      "id": "eq_g01_004",
      "name": "Emblem of an Exceptional Entity",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+30% Damage AmountStress received becomes 1 (1 for each battle)",
      "icon": "relics/relic_5006"
    },
    {
      "id": "eq_g01_006",
      "name": "Source of the Forbidden",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When hit, inflict 1 random effects among Vulnerable, Weaken, or Impair to the attacker (3 times per turn)",
      "icon": "relics/relic_5008"
    },
    {
      "id": "eq_g02_003",
      "name": "Golden Bell",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, decrease Stress of a random ally by 3",
      "icon": "relics/relic_5012"
    },
    {
      "id": "eq_g02_004",
      "name": "Summoned Lump of Light",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Increase Damage Amount of the 30 Attack Card created by 30% for 1 turn",
      "icon": "relics/relic_5010"
    },
    {
      "id": "eq_g02_005",
      "name": "Lightless Stem",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Increase Heal Amount by 15%",
      "icon": "relics/relic_5014"
    },
    {
      "id": "eq_g02_006",
      "name": "Shining World Tree Stem",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Heal Amount by 25%",
      "icon": "relics/relic_5015"
    },
    {
      "id": "eq_g02_011",
      "name": "Liberated Essence",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, decrease Cost of 1 random Exhaust card in hand by 1 for 1 turn",
      "icon": "relics/relic_5020"
    },
    {
      "id": "eq_g03_002",
      "name": "A Lonesome Wedding Ring",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, Discard 1 random ally Quietus card in hand",
      "icon": "relics/relic_5050"
    },
    {
      "id": "eq_g03_003",
      "name": "Someone’s Letter",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of the turn, if an ally Persona Card is in hand, 150% Fixed Damage to a random enemy",
      "icon": "relics/relic_5051"
    },
    {
      "id": "eq_g03_007",
      "name": "Hymn-Singing Lips",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a card is Discarded through an ability, 1 Resonance to all enemies (3 times per turn)",
      "icon": "relics/relic_5055"
    },
    {
      "id": "eq_g03_009",
      "name": "An Eye Plucked from a Mural",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the turn, increase Damage Amount of this unit by 20% for each ally Persona Card in hand for 1 turn",
      "icon": "relics/relic_5057"
    },
    {
      "id": "eq_ds04_007",
      "name": "Essence-Fragmented Necklace",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When 1 enemies are defeated by allies in 1 turn, gain 1 AP (1 time per turn)",
      "icon": "relics/relic_5064"
    },
    {
      "id": "eq_ds04_008",
      "name": "Raider’s Scanning Gear",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, +1% Critical Damage to the first Attack Card activated",
      "icon": "relics/relic_5065"
    },
    {
      "id": "eq_g04_002",
      "name": "Final Entry",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, increase Stress of a random ally by 1, then 150% Damage to all enemies",
      "icon": "relics/relic_5067"
    },
    {
      "id": "eq_g04_003",
      "name": "Kaleidoscope Fragment",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Weaken is applied through an ability, 1 Weaken and 1 Scorched to the target (1 time per turn)",
      "icon": "relics/relic_5068"
    },
    {
      "id": "eq_g04_006",
      "name": "Closed-Circuit Terminal",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On an All-Target Attack through an ally ability, 1 Vulnerable to a random enemy (1 time per turn)",
      "icon": "relics/relic_5071"
    },
    {
      "id": "eq_g04_009",
      "name": "Cycle of Circulation",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of the turn, if HP is less than 1%, 70% Fixed Heal (3 times per battle)",
      "icon": "relics/relic_5074"
    },
    {
      "id": "eq_g04_010",
      "name": "Invader Observation Logs",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+1% Damage Amount to Attack Cards, and for each enemy present, +2% Critical Chance",
      "icon": "relics/relic_5075"
    },
    {
      "id": "eq_dpt_test_401",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 1 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_402",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 2 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_403",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 3 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_404",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 4 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_405",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 5 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_406",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 6 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_407",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 7 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_408",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 8 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_dpt_test_409",
      "name": "DPT Benchmark Equipment 4",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, gain 9 AP",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_pub_026",
      "name": "Magic-Infused Sapphire",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, if the Initiation card is in hand, 1 Tenacity Damage to all enemies",
      "icon": "relics/relic_0008"
    },
    {
      "id": "eq_pub_027",
      "name": "Quantum Collector",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated by allies, increase Damage, Shield Gain, Heal Amounts by 20% for 1 turn",
      "icon": "relics/relic_1043"
    },
    {
      "id": "eq_pub_028",
      "name": "Heart of Gold",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the end of battle, if HP is 8% or less, Recover 8% of Max HP",
      "icon": "relics/relic_1048"
    },
    {
      "id": "eq_pub_029",
      "name": "Multifaceted Parallel Universe Nexus",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of the turn, proc 1 random Lead card in hand",
      "icon": "relics/relic_1059"
    },
    {
      "id": "eq_pub_030",
      "name": "Absolute Zero Tetrahedron",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of battle, +20% Shield",
      "icon": "relics/relic_1063"
    },
    {
      "id": "eq_pub_031",
      "name": "Amorphous Cube",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "+25% Damage Amount",
      "icon": "relics/relic_1075"
    },
    {
      "id": "eq_pub_034",
      "name": "Moon of Destruction",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 200% Fixed Damage to all enemies",
      "icon": "relics/relic_1080"
    },
    {
      "id": "eq_pub_035",
      "name": "Time Regulator",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Activate Epiphany for the equipped combatant",
      "icon": "relics/relic_1130"
    },
    {
      "id": "eq_pub_036",
      "name": "Heart of the Jewel",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "1 is applied as X+1",
      "icon": "relics/relic_1146"
    },
    {
      "id": "eq_pub_037",
      "name": "Grey Orb",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, gain 3 Damage Reduction",
      "icon": "relics/relic_5002"
    },
    {
      "id": "eq_pub_042",
      "name": "Sphere of Randomness",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% max HPAt the start of battle, +1 AP, Draw 1",
      "icon": "relics/relic_0096"
    },
    {
      "id": "eq_pub_043",
      "name": "Dice of Derangement",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% Max HPAt the end of battle, if HP is below 50%, recover 8% Max HPAt the end of the battle, if HP is 50% or higher, -5 Stress to the Combatant with the highest Stress",
      "icon": "relics/relic_0097"
    },
    {
      "id": "eq_tut_007",
      "name": "Arc Drive",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "Activate Epiphany for the equipped combatant",
      "icon": "relics/relic_12027"
    },
    {
      "id": "eq_pub_032",
      "name": "Dimensional Cube",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a card is Discarded by an ally, +1% Damage Amount for 1 turn (max 3 times)",
      "icon": "relics/relic_1077"
    },
    {
      "id": "eq_pub_033",
      "name": "Water Drops of the Goddess",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of battle, 1 Stockpile",
      "icon": "relics/relic_1079"
    },
    {
      "id": "eq_story_05_01",
      "name": "Core of Chimework",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "The power source of a music box that portends the coming of a god.When the two melodies resonate, it heralds the descent of the golden light.",
      "icon": "relics/relic_1220"
    },
    {
      "id": "eq_chr_002",
      "name": "Madman’s Masterpiece",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of an Elite Battle, +50% Damage Amount",
      "icon": "relics/relic_1184"
    },
    {
      "id": "eq_chr_005",
      "name": "Chaos Scripture",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the 400 turn, 400% Fixed Damage to all enemies",
      "icon": "relics/relic_0009"
    },
    {
      "id": "eq_chr_006",
      "name": "Bloodstone of the Void",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When an Attack Card is activated, 1% DMG-Based Recovery (1 time per turn)",
      "icon": "relics/relic_1299"
    },
    {
      "id": "eq_chr_007",
      "name": "Forbidden Scripture",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the start of the 550 turn, 550% Fixed Damage to all enemies",
      "icon": "relics/relic_1300"
    },
    {
      "id": "eq_chr_008",
      "name": "Crimson Bloodstone",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Attack Card is activated, 1% DMG-Based Recovery (1 time per turn)",
      "icon": "relics/relic_1214"
    },
    {
      "id": "eq_chr_012",
      "name": "Order’s Emblem",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "In Chaos Order battles, +15% Defense",
      "icon": "relics/relic_1308"
    },
    {
      "id": "eq_chr_016",
      "name": "Proof of Initiation",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "In Chaos Order battles, +10% Defense",
      "icon": "relics/relic_1107"
    },
    {
      "id": "eq_chr_022",
      "name": "Bloody Pendant",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When a Duplicated card is activated, increase Action Count of all enemies by 3 (1 time per battle)",
      "icon": "relics/relic_1223"
    },
    {
      "id": "eq_chr_023",
      "name": "Dice of Discord",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "At the end of the turn, activate 1 of the following effects at random: 60% Fixed Damage x 2-6 to random enemies, or 200% Fixed Damage to allies",
      "icon": "relics/relic_1185"
    },
    {
      "id": "eq_dll_001",
      "name": "Guardian Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When there is an enemy whose Anticipated Action is Attack, 60% Fixed Shield (1 time per turn)",
      "icon": "relics/relic_1291"
    },
    {
      "id": "eq_dll_007",
      "name": "Rune Code",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of the turn, if there is a Retained card, 60% Fixed Shield",
      "icon": "relics/relic_1297"
    },
    {
      "id": "eq_dll_008",
      "name": "Corroded Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "If an attack is perfectly blocked with Shield, 1 Impair on all enemies (1 per turn)",
      "icon": "relics/relic_1290"
    },
    {
      "id": "eq_dll_009",
      "name": "Corrupted Core",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+20% Defense, 20% Shield Retention#3",
      "icon": "relics/relic_1289"
    },
    {
      "id": "eq_inv_004",
      "name": "Lepidola's Wing",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the battle, 1 Evasion",
      "icon": "relics/relic_1283"
    },
    {
      "id": "eq_inv_008",
      "name": "Kirak’s Core",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, if below 5% of Max HP, Recover 5% of Max HP",
      "icon": "relics/relic_1287"
    },
    {
      "id": "eq_inv_009",
      "name": "First Aid Kit",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the end of battle, Recover 5% of Max HP",
      "icon": "relics/relic_1001"
    },
    {
      "id": "eq_nih_001",
      "name": "Flower of Dead Souls",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase Damage Amount of the second Attack Card onward each turn by 20%",
      "icon": "relics/relic_1243"
    },
    {
      "id": "eq_nih_002",
      "name": "Soul Orb",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, 1 Tenacity Damage to all enemies (1 time per battle)",
      "icon": "relics/relic_1244"
    },
    {
      "id": "eq_nih_003",
      "name": "The Famished One’s Belly",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "When a card is Exhausted, +5% Damage Amount and Recover 25% of Max HP (1 times per battle)",
      "icon": "relics/relic_1245"
    },
    {
      "id": "eq_nih_005",
      "name": "M.S.S. Data Pad",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "At the start of Nihilum battle, 2 Vulnerable to all enemies",
      "icon": "relics/relic_1247"
    },
    {
      "id": "eq_nih_006",
      "name": "Revelations of Futility",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "When an Attack Card is activated, 20% Fixed Shield (1 times per turn)",
      "icon": "relics/relic_1248"
    },
    {
      "id": "eq_nih_007",
      "name": "Eye of Gluttony",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+1% Damage amount. At the end of the turn, 30% chance to Exhaust 1 card in hand",
      "icon": "relics/relic_1249"
    },
    {
      "id": "eq_nih_008",
      "name": "M.S.S. Data Pad SE",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of Nihilum battle, 3 Vulnerable to all enemies",
      "icon": "relics/relic_1250"
    },
    {
      "id": "eq_sec_004",
      "name": "Clover of the Forest",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "On Recover through a card, +10% Attack to allies for 1 turn (max 1 stack)",
      "icon": "relics/relic_1232"
    },
    {
      "id": "eq_sec_005",
      "name": "Poacher’s Pathfinder",
      "type": "EQUIP_ACC",
      "rarity": "RARE",
      "desc": "In Sekred battle, +25% Damage, 2 Vulnerable to all enemies",
      "icon": "relics/relic_1160"
    },
    {
      "id": "eq_sec_011",
      "name": "Verdant Day",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On odd turns, +8% Attack, +12% Defense",
      "icon": "relics/relic_1305"
    },
    {
      "id": "eq_sec_012",
      "name": "Verdant Night",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On even turns, +12% Attack, +8% Defense",
      "icon": "relics/relic_1306"
    },
    {
      "id": "eq_sec_013",
      "name": "Verdant Shackles",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+12% Attack, +12% Defense",
      "icon": "relics/relic_1307"
    },
    {
      "id": "eq_p_dll_007",
      "name": "Lead-Colored Holy Water",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Ravage, 2 Impair to the target",
      "icon": "relics/relic_0002"
    },
    {
      "id": "eq_p_dll_008",
      "name": "Eye of the Punisher",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "If the enemy is alone, increase damage by 30%",
      "icon": "relics/relic_1097"
    },
    {
      "id": "eq_p_dll_009",
      "name": "Viadeus’s Reactor",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated, 1 Damage Reduction",
      "icon": "relics/relic_1099"
    },
    {
      "id": "eq_p_dll_010",
      "name": "The Golden Rule",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "+20% Damage Amount, +20 Shield gain",
      "icon": "relics/relic_1180"
    },
    {
      "id": "eq_p_inv_008",
      "name": "Pulsating Egg",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+15% Attack, +10% Max HP",
      "icon": "relics/relic_1140"
    },
    {
      "id": "eq_p_inv_009",
      "name": "Natural Predator",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Ravage, +100% Damage Amount to next 1 Attack Card activated",
      "icon": "relics/relic_1144_6"
    },
    {
      "id": "eq_p_inv_010",
      "name": "Voracious Swarm",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When taking Damage, 4 Agony on the attacker",
      "icon": "relics/relic_1176"
    },
    {
      "id": "eq_p_nih_007",
      "name": "Eye of the Eyeless",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Increase damage of Basic attack cards by 40%",
      "icon": "relics/relic_1040"
    },
    {
      "id": "eq_p_nih_008",
      "name": "Palasia’s Orb",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When Vulnerable is applied by a card, also 1 Weaken to the target",
      "icon": "relics/relic_1090"
    },
    {
      "id": "eq_p_nih_009",
      "name": "Torch That Should Not Be Extinguished",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "If you have Shield at the start of turn, 80% Fixed Shield",
      "icon": "relics/relic_1132"
    },
    {
      "id": "eq_p_sec_008",
      "name": "Bone Ring of Wildfire",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "When an Upgrade Card is activated, +30% Damage Amount for 1 turn",
      "icon": "relics/relic_1113"
    },
    {
      "id": "eq_p_sec_009",
      "name": "Dormant Seeds",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "When Shield is gained through a card, 100% Fixed Shield (1 time per turn)",
      "icon": "relics/relic_1112"
    },
    {
      "id": "eq_p_sec_010",
      "name": "Call of the Ancient Spirit",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "On Critical Hit, 10% Fixed Heal",
      "icon": "relics/relic_1116"
    },
    {
      "id": "eq_p_var_008",
      "name": "Nature’s Gift",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "Heal 40% at the end of turn",
      "icon": "relics/relic_0023"
    },
    {
      "id": "eq_p_var_009",
      "name": "Eternal Stone",
      "type": "EQUIP_ACC",
      "rarity": "LEGEND",
      "desc": "At the start of the turn, 25% Fixed Shield for each enemy count",
      "icon": "relics/relic_1047"
    },
    {
      "id": "eq_p_var_010",
      "name": "Gloomy Prime’s Eye",
      "type": "EQUIP_ACC",
      "rarity": "UNIQUE",
      "desc": "+40% Shield Gain Amount",
      "icon": "relics/relic_1121"
    }
  ]
};

window.CZN_DATA.universalCards = [
  {
    "id": "card_mon_assualt_00001",
    "name": "Harmonization: Hunger of the Void",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00002",
    "name": "Mutation: Shy Gardener",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00003",
    "name": "Bloom: Sorrowful Godfather",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00004",
    "name": "Bloom: Gloomy Godmother",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00005",
    "name": "Distortion: Automata Cavalry",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00006",
    "name": "Distortion: Dominion",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00007",
    "name": "Bloom: Slaughter",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00008",
    "name": "Bloom: Beam Shooter",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00009",
    "name": "Harmonization: Winged Humanoid Beast",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00010",
    "name": "Harmonization: Wolves Bane",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00011",
    "name": "Bloom: Dark Grip",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00012",
    "name": "Harmonization: Seraphim of Pain",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00013",
    "name": "Bloom: Evil Spirit Salamander",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00014",
    "name": "Harmonization: Elemental Phoenix",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00015",
    "name": "Harmonization: Spirit Kefox",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00016",
    "name": "Mutation: Evil Spirit Dullahan",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00017",
    "name": "Bloom: Abyssal Bug",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00018",
    "name": "Mutation: Arbitum",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00019",
    "name": "Distortion: Shell Bug",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00020",
    "name": "Bloom: Soldier Prime",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00021",
    "name": "Harmonization: Seven Arms",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00022",
    "name": "Mutation: Trapper",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00023",
    "name": "Mutation: Cultist Arbiter",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00024",
    "name": "Harmonization: Rotten Ripper",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00026",
    "name": "Distortion: Chilling Godfather",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00027",
    "name": "Distortion: Hunger of Loss",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00028",
    "name": "Distortion: Vine Lord",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_assualt_00029",
    "name": "Mutation: Cyborg Automaton",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00030",
    "name": "Mutation: Enforcer Slaughter",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00031",
    "name": "Mutation: Automata Hussar",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00032",
    "name": "Mutation: Evil Spirit Salamander of Desolation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00033",
    "name": "Mutation: Evil Spirit Dullahan of Desolation",
    "type": "Skill",
    "cost": -1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00034",
    "name": "Mutation: Wanderer Abyssal Bug",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00035",
    "name": "Mutation: Wanderer Soldier Prime",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00036",
    "name": "Mutation: Wanderer Arbitum",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00037",
    "name": "Mutation: Revenant Arbiter",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00038",
    "name": "Mutation: Rusted Nail Rotten Ripper",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00039",
    "name": "Mutation: Rusted Nail Seven Arms",
    "type": "Power",
    "cost": 3,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00040",
    "name": "Mutation: Judge Dominion",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00041",
    "name": "Mutation: The Cold Godmother",
    "type": "Skill",
    "cost": 8,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_mon_assualt_00042",
    "name": "Mutation: Venom Spirit Kefox",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_enc_ca_00003",
    "name": "Old Sword",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00015",
    "name": "Poacher’s First Aid Kit",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00041",
    "name": "Paralysis Trap",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00042",
    "name": "Net Trap",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00043",
    "name": "Vicious Instincts",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ab_assault_00021",
    "name": "Essence",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_assault_00007",
    "name": "Bloom: Judgment",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_assault_00046",
    "name": "Mutation: HA-00",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_enc_ca_00006",
    "name": "Unknown: Hunk of Meat",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00010",
    "name": "Unknown: Fluider",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00018",
    "name": "Unknown: Fragrant Bait",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00032",
    "name": "Unknown: Order’s Bible Page",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00033",
    "name": "Unknown: Elixir of Mutation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_enc_ca_00034",
    "name": "Unknown: Black Stain Bundle",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00035",
    "name": "Unknown: Heavenly Judgment",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00036",
    "name": "Unknown: Tactical Debilitation",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00037",
    "name": "Unknown: Purple Duty",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00038",
    "name": "Unknown: Abyssalization",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00039",
    "name": "Unknown: Infection",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00040",
    "name": "Unknown: Heart of the Nest",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00044",
    "name": "Unknown: Mutant Sample",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00045",
    "name": "Unknown: Hyper Regeneration",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00047",
    "name": "Unknown: Crimson Lumen",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00048",
    "name": "Unknown: Azure Lumen",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00049",
    "name": "Unknown: Amber Lumen",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00050",
    "name": "Unknown: Ebony Lumen",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00053",
    "name": "Unknown: A Girl And Her Rotted Apple",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00054",
    "name": "Unknown: The Inverted Messiah",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00055",
    "name": "Unknown: Faceless Woman",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00060",
    "name": "Unknown: Jury-Rigged Powder Keg",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_ca_00061",
    "name": "Unknown: Simulacrum's Echo",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_assualt_00001",
    "name": "Kyrken’s Revelation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_assualt_00002",
    "name": "Diallos’s Declaration",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_assualt_00003",
    "name": "Sekred’s Pulsation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_assualt_00004",
    "name": "Nihilum’s Resonance",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00001",
    "name": "Harmonization: Heavy Bash",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00002",
    "name": "Bloom: Relentless Endurance",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00003",
    "name": "Mutation: Prepare for Battle",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00004",
    "name": "Bloom: Shock",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00005",
    "name": "Distortion: Hand-to-Hand Combat",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00006",
    "name": "Harmonization: Criticism of Discord",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00007",
    "name": "Distortion: Protective Shout",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00008",
    "name": "Harmonization: Leap Attack",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00009",
    "name": "Mutation: Skull Bash",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00010",
    "name": "Distortion: Attack!",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00011",
    "name": "Mutation: Consecutive Attack",
    "type": "Attack",
    "cost": -1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00012",
    "name": "Mutation: Arcane Rush",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00013",
    "name": "Harmonization: Quick Shelling",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00014",
    "name": "Mutation: Counterattack Preparation",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00015",
    "name": "Distortion: Overwhelm",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00016",
    "name": "Distortion: Repentance",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00017",
    "name": "Distortion: Wanderer of the Void",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00018",
    "name": "Harmonization: Moon of Destruction",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00019",
    "name": "Mutation: Energy Barrier",
    "type": "Skill",
    "cost": -1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00020",
    "name": "Distortion: Glorious Resistance",
    "type": "Power",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00021",
    "name": "Mutation: Iron Wall",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00022",
    "name": "Harmonization: Maneuvering Fire",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00023",
    "name": "Harmonization: Ambush",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00024",
    "name": "Mutation: Atomic Decomposition",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00025",
    "name": "Harmonization: Camouflage",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00026",
    "name": "Distortion: Gear Bag",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00027",
    "name": "Distortion: Instinct Ignition",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00028",
    "name": "Distortion: Tactical Reformation",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00029",
    "name": "Distortion: Belligerence",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00030",
    "name": "Mutation: Tactical Action",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ne_assualt_00031",
    "name": "Bloom: Strategic Starting Point",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00032",
    "name": "Bloom: Aimed Fire",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00033",
    "name": "Harmonization: Rage Potion",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00034",
    "name": "Harmonization: Sacred Strike",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00035",
    "name": "Distortion: Deadly Shot",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00036",
    "name": "Bloom: Reorganize",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00037",
    "name": "Harmonization: Precision Aim",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00038",
    "name": "Distortion: Knowledge of Darkness",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00039",
    "name": "Harmonization: Tackle",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00040",
    "name": "Distortion: Spiked Shield",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00041",
    "name": "Harmonization: Fortitude",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00042",
    "name": "Bloom: Pulverize",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00043",
    "name": "Harmonization: Negotiation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00044",
    "name": "Harmonization: Determination",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00045",
    "name": "Bloom: Acid Gas",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00046",
    "name": "Harmonization: Quickdraw",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00047",
    "name": "Harmonization: Hidden Bullet",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00048",
    "name": "Distortion: Wind of Relief",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00049",
    "name": "Distortion: Financial Therapy",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00050",
    "name": "Harmonization: First Aid Kit",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00051",
    "name": "Distortion: Assemble",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00052",
    "name": "Harmonization: Recycling",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00053",
    "name": "Harmonization: Sadism",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_assualt_00054",
    "name": "Distortion: Somnolent Fruit",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00001",
    "name": "Distortion: Aggressive Mutant",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00002",
    "name": "Distortion: Shell-Forming Cell",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00003",
    "name": "Distortion: Propagative Virus",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00004",
    "name": "Harmonization: Muscle-Enhanced Evolver",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00005",
    "name": "Mutation: Self-Generating Experiment",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds01_assualt_00006",
    "name": "Distortion: Forced Learning Apparatus",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_assualt_00007",
    "name": "Mutation: Confiscation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds01_assualt_00008",
    "name": "Mutation: Forbidden Algorithm",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds02_assualt_00001",
    "name": "Harmonization: Residual Herb",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_assualt_00002",
    "name": "Bloom: Forest's Hunger",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_assualt_00003",
    "name": "Mutation: Forgotten Grave",
    "type": "Skill",
    "cost": 6,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds02_assualt_00004",
    "name": "Distortion: Mushroom Ammo",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_assualt_00005",
    "name": "Mutation: One With All",
    "type": "Skill",
    "cost": -1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds02_assualt_00006",
    "name": "Distortion: Nature's Gift",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_assualt_00007",
    "name": "Bloom: Spore Harvester",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_assualt_00008",
    "name": "Mutation: Nutrient Absorption",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_assault_00001",
    "name": "Distortion: Persona of Loss",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_assault_00002",
    "name": "Bloom: Doctrine of Binding",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_assault_00003",
    "name": "Mutiation: Whispers of Madness",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_assault_00004",
    "name": "Distortion: Echoes of Abundance",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_assault_00005",
    "name": "Mutation: Explosion of Emotions",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_assault_00006",
    "name": "Mutation: Inner Awakening",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_assault_00007",
    "name": "Harmonization: Dream World",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_assault_00008",
    "name": "Distortion: The Other Side of Nightmares",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_assault_00009",
    "name": "Bloom: Resonance of Truth",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_assault_00001",
    "name": "Bloom: Marauder’s Charge",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_assault_00002",
    "name": "Distortion: Barrier Utilization",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_assault_00003",
    "name": "Distortion: Horde Eradication",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_assault_00004",
    "name": "Mutation: Essence Tracking",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds04_assault_00005",
    "name": "Mutation: Refracted Insight",
    "type": "Skill",
    "cost": -1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds04_assault_00006",
    "name": "Distortion: Inner Corruption",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_assault_00007",
    "name": "Mutation: Hand Enthralled by Light",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds04_assault_00008",
    "name": "Bloom : Instinct Resonance",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00003",
    "name": "Propagative Virus",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00004",
    "name": "Muscle-Enhanced Evolver",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00005",
    "name": "Self-Generating Experiment",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00006",
    "name": "Forced Learning Apparatus",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00007",
    "name": "Confiscation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00008",
    "name": "Forbidden Algorithm",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00001",
    "name": "Forbidden: Engraved Malice",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00002",
    "name": "Forbidden: Portrait of Fury",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00003",
    "name": "Forbidden: Ecstasy of Violence",
    "type": "Attack",
    "cost": 9,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00004",
    "name": "Forbidden: Guidance of Futility",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00005",
    "name": "Forbidden: Disposable Ego",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00006",
    "name": "Forbidden: Gesture of Freedom",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ta_00007",
    "name": "Forbidden: Eternal Hunger",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00003",
    "name": "Forgotten Grave",
    "type": "Skill",
    "cost": 6,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00004",
    "name": "Mushroom Ammo",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00005",
    "name": "One With All",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00006",
    "name": "Nature’s Gift",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00007",
    "name": "Spore Harvester",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00008",
    "name": "Nutrient Absorption",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00009",
    "name": "Contaminated Spore",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00001",
    "name": "Rocket Punch",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00002",
    "name": "Pierce",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00003",
    "name": "Shield Blast",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00004",
    "name": "Heavy Blow",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00005",
    "name": "Charged Strike",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00006",
    "name": "Forgotten Sword",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_arena_00007",
    "name": "Judgment",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00003",
    "name": "Whispers of Madness",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00004",
    "name": "Echoes of Abundance",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00005",
    "name": "Explosion of Emotions",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00006",
    "name": "Inner Awakening",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00007",
    "name": "Dream World",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00008",
    "name": "The Other Side of Nightmares",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00009",
    "name": "Resonance of Truth",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00003",
    "name": "Horde Eradication",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00004",
    "name": "Essence Tracking",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00005",
    "name": "Refracted Insight",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00006",
    "name": "Inner Corruption",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00007",
    "name": "Hand Enthralled by Light",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00008",
    "name": "Instinct Resonance",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00001",
    "name": "Aggressive Mutant",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds01_00002",
    "name": "Shell-Forming Cell",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00001",
    "name": "Residual Herb",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds02_00002",
    "name": "Forest’s Hunger",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_00001",
    "name": "Persona of Loss",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_00002",
    "name": "Doctrine of Binding",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00001",
    "name": "Marauder’s Charge",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_00002",
    "name": "Barrier Utilization",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_eid_00001",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00002",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00003",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00004",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00005",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00006",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00007",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00010",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00011",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00012",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00013",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00015",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00016",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00017",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00018",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00019",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00020",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds04_des_10011",
    "name": "Sample Collection",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10012",
    "name": "Sample Collection",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10013",
    "name": "Sample Collection",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10021",
    "name": "Knowledge Addiction",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10022",
    "name": "Knowledge Addiction",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10023",
    "name": "Knowledge Addiction",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10041",
    "name": "Sensory Overload",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10042",
    "name": "Sensory Overload",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10043",
    "name": "Sensory Overload",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10051",
    "name": "Forbidden Hypothesis",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10052",
    "name": "Forbidden Hypothesis",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10053",
    "name": "Forbidden Hypothesis",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10061",
    "name": "Desire Manifestation: Inquiry",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20011",
    "name": "Indiscriminate Slaughter",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20012",
    "name": "Indiscriminate Slaughter",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20013",
    "name": "Indiscriminate Slaughter",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20021",
    "name": "Order of Dominance",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20022",
    "name": "Order of Dominance",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20023",
    "name": "Order of Dominance",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20041",
    "name": "Mark of Servitude",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20042",
    "name": "Mark of Servitude",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20043",
    "name": "Mark of Servitude",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20051",
    "name": "Kneel Before Me",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20052",
    "name": "Kneel Before Me",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20053",
    "name": "Kneel Before Me",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20061",
    "name": "Desire Manifestation: Control",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30011",
    "name": "Obsession",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30012",
    "name": "Obsession",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30013",
    "name": "Obsession",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30021",
    "name": "Gilded Nest",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30022",
    "name": "Gilded Nest",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30023",
    "name": "Gilded Nest",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30041",
    "name": "Narcissism",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30042",
    "name": "Narcissism",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30043",
    "name": "Narcissism",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30051",
    "name": "It’s All Mine",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30052",
    "name": "It’s All Mine",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30053",
    "name": "It’s All Mine",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30061",
    "name": "Desire Manifestation: Claim",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40011",
    "name": "Final Struggle",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40012",
    "name": "Final Struggle",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40013",
    "name": "Final Struggle",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40021",
    "name": "Harrowing Reign",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40022",
    "name": "Harrowing Reign",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40023",
    "name": "Harrowing Reign",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40041",
    "name": "Driven Hunt",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40042",
    "name": "Driven Hunt",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40043",
    "name": "Driven Hunt",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40051",
    "name": "Feralization",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40052",
    "name": "Feralization",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40053",
    "name": "Feralization",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40061",
    "name": "Desire Manifestation: Survival",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds03_eid_00008",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00009",
    "name": "Persona",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds03_eid_00014",
    "name": "Persona",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_ds04_des_10031",
    "name": "Postmortem Analysis",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10032",
    "name": "Postmortem Analysis",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_10033",
    "name": "Postmortem Analysis",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20031",
    "name": "Traitor's Execution",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20032",
    "name": "Traitor's Execution",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_20033",
    "name": "Traitor's Execution",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30031",
    "name": "Sever Ties",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30032",
    "name": "Sever Ties",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_30033",
    "name": "Sever Ties",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40031",
    "name": "Cutting Loose",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40032",
    "name": "Cutting Loose",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds04_des_40033",
    "name": "Cutting Loose",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00001",
    "name": "Awakening Serum",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00002",
    "name": "Odyssey Recovery Kit",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00003",
    "name": "Old Sword",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00004",
    "name": "Lame Shaman",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00006",
    "name": "Hunk of Meat",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00010",
    "name": "Fluider",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00011",
    "name": "Fresh Raw Meat",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00015",
    "name": "Poacher’s First Aid Kit",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00017",
    "name": "Flame of Eternity",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00018",
    "name": "Fragrant Bait",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00020",
    "name": "Refined Chaos Capsule",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00022",
    "name": "William",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00024",
    "name": "The Rabbit’s Special Snack",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00026",
    "name": "Chaos Creature",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00027",
    "name": "Picky Palate",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00029",
    "name": "Fruit of Dead Souls",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00030",
    "name": "Mother-of Pearl Thorns",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00032",
    "name": "Order’s Bible Page",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00033",
    "name": "Elixir of Mutation",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Unique"
  },
  {
    "id": "card_enc_00034",
    "name": "Black Stain Bundle",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00035",
    "name": "Heavenly Judgment",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00036",
    "name": "Tactical Debilitation",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00037",
    "name": "Purple Duty",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00038",
    "name": "Abyssalization",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00039",
    "name": "Infection",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00040",
    "name": "Heart of the Nest",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00041",
    "name": "Paralysis Trap",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00042",
    "name": "Net Trap",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00043",
    "name": "Vicious Instincts",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00044",
    "name": "Mutant Sample",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00045",
    "name": "Hyper Regeneration",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00046",
    "name": "HA-00",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00047",
    "name": "Crimson Lumen",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00048",
    "name": "Azure Lumen",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00049",
    "name": "Amber Lumen",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00050",
    "name": "Ebony Lumen",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00051",
    "name": "Broken Ebony Lumen",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00052",
    "name": "Fragments of Ebony Lumen",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00053",
    "name": "A Girl And Her Rotted Apple",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00054",
    "name": "The Inverted Messiah",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00055",
    "name": "Faceless Woman",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00057",
    "name": "Activation Core",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00060",
    "name": "Jury-Rigged Powder Keg",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_enc_00061",
    "name": "Simulacrum’s Echo",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00001",
    "name": "Waypoint Installation Module",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00003",
    "name": "Luche",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00004",
    "name": "Carol's Special Blood",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00012",
    "name": "Fear",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00013",
    "name": "Fear",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00014",
    "name": "Fear",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00006",
    "name": "Discharged Android",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00007",
    "name": "Android",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_qu_00008",
    "name": "Narja",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_event_1055_00001",
    "name": "Dream Guide",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00001",
    "name": "Hammer",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00002",
    "name": "Crowbar",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00003",
    "name": "Cutter",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00004",
    "name": "The Lord’s Benediction",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00005",
    "name": "Extended Magazine",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00006",
    "name": "Fire Support Drone",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00007",
    "name": "Time Acceleration Capsule",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00008",
    "name": "Phantom Cloning Device",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00009",
    "name": "Poison Bomb",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_etc_00010",
    "name": "Revelation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00025",
    "name": "Ghost",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00001",
    "name": "Hunger of the Void",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00002",
    "name": "Shy Gardener",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00003",
    "name": "Sorrowful Godfather",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00004",
    "name": "Gloomy Godmother",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00005",
    "name": "Automata Cavalry",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00006",
    "name": "Dominion",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00007",
    "name": "Slaughter",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00008",
    "name": "Beam Shooter",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00009",
    "name": "Winged Humanoid Beast",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00010",
    "name": "Wolves Bane",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00011",
    "name": "Dark Grip",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00012",
    "name": "Seraphim of Pain",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00013",
    "name": "Evil Spirit Salamander",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00013_opt1",
    "name": "Evil Spirit Salamander",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00013_opt2",
    "name": "Evil Spirit Salamander",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00014",
    "name": "Elemental Phoenix",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00015",
    "name": "Spirit Kefox",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00016",
    "name": "Evil Spirit Dullahan",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00017",
    "name": "Abyssal Bug",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00018",
    "name": "Arbitum",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00019",
    "name": "Shell Bug",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00020",
    "name": "Soldier Prime",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00021",
    "name": "Seven Arms",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00022",
    "name": "Trapper",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00023",
    "name": "Cultist Arbiter",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00024",
    "name": "Rotten Ripper",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00026",
    "name": "Chilling Godfather",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00027",
    "name": "Hunger of Loss",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00028",
    "name": "Vine Lord",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00029",
    "name": "Cyborg Automaton",
    "type": "Attack",
    "cost": 5,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00030",
    "name": "Enforcer Slaughter",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00031",
    "name": "Automata Hussar",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00032",
    "name": "Evil Spirit Salamander of Desolation",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00033",
    "name": "Evil Spirit Dullahan of Desolation",
    "type": "Skill",
    "cost": -1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00034",
    "name": "Wanderer Abyssal Bug",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00035",
    "name": "Wanderer Soldier Prime",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00036",
    "name": "Wanderer Arbitum",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00037",
    "name": "Revenant Arbiter",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00038",
    "name": "Rusted Nail Rotten Ripper",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00039",
    "name": "Rusted Nail Seven Arms",
    "type": "Power",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00040",
    "name": "Judge Dominion",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00041",
    "name": "The Cold Godmother",
    "type": "Skill",
    "cost": 8,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_mon_00042",
    "name": "Venom Spirit Kefox",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20001",
    "name": "Pokopo ponpon!",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20002",
    "name": "Ice Wyrm’s Roar",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20003",
    "name": "Vitality Boosting Potion",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20004",
    "name": "Ultimate Missile Turret!",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20005",
    "name": "Innos’s Guardian",
    "type": "Skill",
    "cost": 4,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20006",
    "name": "Errante Hurricane",
    "type": "Skill",
    "cost": 4,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20007",
    "name": "What I Wished to Protect",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20008",
    "name": "Scholarly Measures",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20009",
    "name": "Undertaking the Mission",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20010",
    "name": "Powerful Shot",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20011",
    "name": "Commencing Detection!",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20012",
    "name": "Flower of Memory",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20013",
    "name": "Analyze Weakness",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20014",
    "name": "Crimson Romance",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20015",
    "name": "Giant Bazooka",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20016",
    "name": "Drone Deployment!",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20019",
    "name": "Arachnid Web",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20021",
    "name": "Capable Secretary",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20023",
    "name": "Here’s a shot!",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20024",
    "name": "Tactical Command",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20025",
    "name": "Security team, requesting support!",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20026",
    "name": "Consecration",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20027",
    "name": "Activate Defense Module",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20028",
    "name": "High-Powered Beam Shooter",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20030",
    "name": "Lumina Explosion",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20032",
    "name": "Hamburger Delivery, Sir!",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20033",
    "name": "Light of Judgment",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20034",
    "name": "Binding Knot",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20035",
    "name": "Workplace hazards ahead!",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20036",
    "name": "Eating Soft Carrots",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20037",
    "name": "Blood Stalker",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_20038",
    "name": "Target confirmed, initiating support!",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30044",
    "name": "Clue Spotted",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30045",
    "name": "Light of Ark",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_1058",
    "name": "Spacetime Rift",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30051",
    "name": "Azure Fury",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30052",
    "name": "Legato of Faith",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30054",
    "name": "Crackdown Beam Bombardment",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30046",
    "name": "Moonlit Leisure",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30076",
    "name": "Overclock Beacon",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30085",
    "name": "Phase Alignment",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30091",
    "name": "If You Require Assistance",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_1025",
    "name": "A New Visitor",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30053",
    "name": "Always Cheer For You",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30092",
    "name": "Incense",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30094",
    "name": "Field Overview",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30095",
    "name": "Genius Stage Director",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_1070",
    "name": "An Aria For You",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30114",
    "name": "Lay Down Suppressive Fire!",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30116",
    "name": "Blossoming Venom",
    "type": "Skill",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "p_30118",
    "name": "For My Mistress",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00001",
    "name": "Heavy Bash",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00002",
    "name": "Relentless Endurance",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00003",
    "name": "Prepare for Battle",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00004",
    "name": "Shock",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00005",
    "name": "Hand-to-Hand Combat",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00006",
    "name": "Devotion",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00007",
    "name": "Protective Shout",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00008",
    "name": "Leap Attack",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00009",
    "name": "Skull Bash",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00010",
    "name": "Attack!",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00011",
    "name": "Consecutive Attack",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00012",
    "name": "Arcane Rush",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00013",
    "name": "Quick Shelling",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00014",
    "name": "Counterattack Preparation",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00015",
    "name": "Overwhelm",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00016",
    "name": "Repent",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00017",
    "name": "Wanderer of the Void",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00018",
    "name": "Destruction",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00019",
    "name": "Energy Barrier",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00020",
    "name": "Glorious Resistance",
    "type": "Power",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00021",
    "name": "Iron Wall",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00022",
    "name": "Maneuvering Fire",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00023",
    "name": "Ambush",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00024",
    "name": "Atomic Decomposition",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00025",
    "name": "Camouflage",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00026",
    "name": "Gear Bag",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00027",
    "name": "Instinct Ignition",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00028",
    "name": "Tactical Reformation",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00029",
    "name": "Belligerence",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00030",
    "name": "Tactical Action",
    "type": "Power",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00031",
    "name": "Strategic Starting Point",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00032",
    "name": "Aimed Fire",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00033",
    "name": "Rage",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00034",
    "name": "Sacred Strike",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00035",
    "name": "Deadly Shot",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00036",
    "name": "Reorganize",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00037",
    "name": "Precision Aim",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00038",
    "name": "Knowledge of Darkness",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00039",
    "name": "Tackle​",
    "type": "Attack",
    "cost": 3,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00040",
    "name": "Spiked Shield​",
    "type": "Attack",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00041",
    "name": "Fortitude",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00042",
    "name": "Pulverize​",
    "type": "Attack",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00043",
    "name": "Negotiate​",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00044",
    "name": "Determination​",
    "type": "Power",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00045",
    "name": "Acid Gas​",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00046",
    "name": "Quickdraw​",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00047",
    "name": "Hidden Bullet​",
    "type": "Attack",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00048",
    "name": "Wind of Relief​",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00049",
    "name": "Financial Therapy​",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00050",
    "name": "First Aid Kit​",
    "type": "Skill",
    "cost": 2,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00051",
    "name": "Rally​",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00052",
    "name": "Recycling​",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00053",
    "name": "Sadism​",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ne_00054",
    "name": "Somnolent Fruit",
    "type": "Skill",
    "cost": 1,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_mem_blank",
    "name": "Blank Memory",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_mem_frag",
    "name": "Shattered Memory",
    "type": "Skill",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_1_1",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_1_2",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_1_3",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_1_4",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_1_1",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_1_2",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_1_3",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_1_4",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_1_1",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_1_2",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_1_3",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_1_4",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_1_1",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_1_2",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_1_3",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_1_4",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_1_1",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_1_2",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_1_3",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_1_4",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_1_1",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_1_2",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_1_3",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_1_4",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_1_1",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_1_2",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_1_3",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_1_4",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_1_1",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_1_2",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_1_3",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_1_4",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_2_1",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_2_2",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_2_3",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_2_4",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_2_1",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_2_2",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_2_3",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_2_4",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_2_1",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_2_2",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_2_3",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_2_4",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_2_1",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_2_2",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_2_3",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_2_4",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_2_1",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_2_2",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_2_3",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_2_4",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_2_1",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_2_2",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_2_3",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_2_4",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_2_1",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_2_2",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_2_3",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_2_4",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_2_1",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_2_2",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_2_3",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_2_4",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_3_1",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_3_2",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_3_3",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_3_4",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_3_1",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_3_2",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_3_3",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_3_4",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_3_1",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_3_2",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_3_3",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_3_4",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_3_1",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_3_2",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_3_3",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_3_4",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_3_1",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_3_2",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_3_3",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_3_4",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_3_1",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_3_2",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_3_3",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_3_4",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_3_1",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_3_2",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_3_3",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_3_4",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_3_1",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_3_2",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_3_3",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_3_4",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_4_1",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_4_2",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_4_3",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b1_4_4",
    "name": "Memory: Suppression",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_4_1",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_4_2",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_4_3",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b2_4_4",
    "name": "Memory: Desire",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_4_1",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_4_2",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_4_3",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b3_4_4",
    "name": "Memory: Kingdom",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_4_1",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_4_2",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_4_3",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b4_4_4",
    "name": "Memory: Golden",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_4_1",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_4_2",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_4_3",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b5_4_4",
    "name": "Memory: Resentment",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_4_1",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_4_2",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_4_3",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b6_4_4",
    "name": "Memory: Lady",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_4_1",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_4_2",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_4_3",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b7_4_4",
    "name": "Memory: Greed",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_4_1",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_4_2",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_4_3",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  },
  {
    "id": "card_ds05_a_b8_4_4",
    "name": "Memory: Kaleidoscope",
    "type": "Power",
    "cost": 0,
    "desc": "",
    "rarity": "Common"
  }
];
