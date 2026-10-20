# Zero Archive: The 6 Deities & Divine Sparks System

In Chaos Zero Nightmare, deep runs through the Zero System and Mythic Codices reveal the lore and power of 6 Primordial Deities. Each deity bestows unique **Sparks** (Divine Epiphany modifiers) that transform standard card behavior.

## Overview of the 6 Gods

### Caligo — Deity of Tenacity & Breakdown
- **Focus**: Tenacity Damage & Ravage Amplification
- **Total Associated Sparks**: 28
- **Core Effect**: Sparks aligned with Caligo enhance the team's ability to deplete enemy Tenacity bars rapidly, accelerating the trigger of Ravage State (+1 AP, enemy turn delays).

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_caligo_01` | Unique | ATK | Increase Tenacity Damage of this card by 100% |
| `add_r_spark_caligo_02` | Unique | POWER | 1 Morale, 1 Resolve |
| `add_r_spark_caligo_03` | Unique | SKILL | Increase this card’s Shield by 30%. |
| `add_r_spark_caligo_04` | Unique | SKILL | Increase Heal Amount of this card by 30% |
| `add_r_spark_caligo_05` | Unique | ATK | Always Attack Weakness |
| `add_r_spark_caligo_06` | Unique | ATK, SKILL | 100% Coordinated Attack by a random ally to the target |

### Circen — Deity of Time & Efficiency
- **Focus**: Action Point (AP) Cost Reduction & Tempo
- **Total Associated Sparks**: 27
- **Core Effect**: Circen's sparks reduce AP costs (often by -1 AP or even to 0 AP), granting massive tempo advantages and enabling prolonged combo chains within a single turn.

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_circen_01` | Unique |  | Reduce Cost of this card by 1 |
| `add_r_spark_circen_03` | Unique | ATK | Increase this card’s Damage by 30%. |
| `add_r_spark_circen_02` | Unique |  | Gain 1 AP |
| `add_r_spark_circen_04` | Unique | ATK | Increase Tenacity Damage of this card by 100% |
| `add_r_spark_circen_05` | Unique | ATK, SKILL | 100% Coordinated Attack by a random ally to the target |
| `add_r_spark_circen_06` | Unique | ATK | Always Attack Weakness |

### Diallos — Deity of Aegis & Protection
- **Focus**: Shield Amplification & Damage Mitigation
- **Total Associated Sparks**: 27
- **Core Effect**: Diallos provides substantial shield boosts (+30% or more) and defensive buffs, which are vital for preventing unblocked damage from accumulating Stress and triggering Mental Breakdown.

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_diallos_01` | Unique | SKILL | Increase this card’s Shield by 30%. |
| `add_r_spark_diallos_02` | Unique | SKILL | Increase Heal Amount of this card by 30% |
| `add_r_spark_diallos_03` | Unique | POWER | 1 Morale, 1 Resolve |
| `add_r_spark_diallos_04` | Unique | ATK, SKILL | 100% Coordinated Attack by a random ally to the target |
| `add_r_spark_diallos_05` | Unique | ATK | Always Attack Weakness |
| `add_r_spark_diallos_06` | Unique |  | Reduce Cost of this card by 1 |

### Nihilum — Deity of Void & Flow
- **Focus**: Card Draw, Hand Cycling & Pile Manipulation
- **Total Associated Sparks**: 28
- **Core Effect**: Nihilum focuses on cycling resources: extra card draws (+1 to +2 cards), moving key cards from Graveyard/Draw Pile, and maintaining full hand options.

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_nihilum_01` | Unique | SKILL | Draw 1 |
| `add_r_spark_nihilum_02` | Unique | ATK | 4 Agony to the target |
| `add_r_spark_nihilum_03` | Unique | ATK | 2 Vulnerable to the target |
| `add_r_spark_nihilum_04` | Unique | SKILL | Increase this card’s Shield by 30%. |
| `add_r_spark_nihilum_05` | Unique | SKILL | Increase Heal Amount of this card by 30% |
| `add_r_spark_nihilum_06` | Unique | POWER | 1 Morale, 1 Resolve |

### Secred — Deity of Synergy & Coordination
- **Focus**: Dual Attack, Pincer Attack & Extra Strike
- **Total Associated Sparks**: 28
- **Core Effect**: Secred empowers team coordination, causing allies to execute follow-up Pincer Attacks (夾擊 / Co-op strike at 100% damage) whenever specific conditions or card types are played.

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_secred_01` | Unique | ATK, SKILL | 100% Coordinated Attack by a random ally to the target |
| `add_r_spark_secred_02` | Unique | ATK | Always Attack Weakness |
| `add_r_spark_secred_03` | Unique |  | Reduce Cost of this card by 1 |
| `add_r_spark_secred_04` | Unique |  | Gain 1 AP |
| `add_r_spark_secred_05` | Unique | ATK | Increase this card’s Damage by 30%. |
| `add_r_spark_secred_06` | Unique | ATK | Increase Tenacity Damage of this card by 100% |

### Vitor — Deity of Might & Destruction
- **Focus**: Direct Damage Amplification & Multiplier Boosts
- **Total Associated Sparks**: 27
- **Core Effect**: Vitor sparks directly scale card damage amounts (+30% to +100%), critical hit parameters, and execution damage on weakened enemies.

**Notable Sparks:**
| Spark ID | Rarity | Target Category | Effect Summary |
|----------|--------|-----------------|----------------|
| `add_r_spark_vitor_01` | Unique | ATK | Increase this card’s Damage by 30%. |
| `add_r_spark_vitor_02` | Unique | ATK | Increase Tenacity Damage of this card by 100% |
| `add_r_spark_vitor_03` | Unique |  | Reduce Cost of this card by 1 |
| `add_r_spark_vitor_04` | Unique |  | Gain 1 AP |
| `add_r_spark_vitor_05` | Unique | ATK, SKILL | 100% Coordinated Attack by a random ally to the target |
| `add_r_spark_vitor_06` | Unique | ATK | Always Attack Weakness |

---

## Spark Acquisition & Zero System Synergy
1. **Encountering Gods**: Players encounter deities in the Zero System through **Mythic Codices** (40% chance of being Unique).
2. **Affixing Sparks**: Sparks attach to character cards during exploration, permanently elevating their TB/PT Save Value upon extraction.
3. **Zero Archive Rewards**: Unlocking deity lore entries in the Zero Archive awards Crystals and permanent account upgrades.
