# Combat System

*Chaos Zero Nightmare* features **turn-based card combat** where a team of **3 Combatants** shares a single unified HP bar and plays cards from a pooled deck to fight enemies across multi-round encounters.

---

## Core Turn Flow

1. **Draw Phase:** Draw **5 cards** from the shared draw pile at the start of each turn.
2. **Action Phase:** Spend **3 Action Points (AP)** to play cards (Attack, Skill, Upgrade, or manage Status Ailments).
3. **End Turn:** Click the blue play icon. Remaining cards and unused AP are discarded. Cards move to the **Graveyard**. A new turn begins.
4. **Graveyard Reshuffle:** When the draw pile is empty, the graveyard is shuffled back into the draw pile. The **Exhaust pile** is separate — exhausted cards are permanently removed for the remainder of combat.

---

## Action Points (AP)

| Rule | Detail |
| :--- | :--- |
| Starting AP | **3 AP** per turn |
| Card AP cost | Shown in upper-left of each card (0, 1, 2, 3, or X) |
| 0-cost cards | Free plays — extend combos without consuming AP |
| X-cost cards | Consume **all remaining AP** when played |
| No-cost cards | Conditional — require specific triggers instead of AP |
| Unused AP | Lost at end of turn unless a card or effect says otherwise |

---

## Card Hand Limit

Maximum of **10 cards** in hand at any time. Cards drawn beyond the limit are discarded.

---

## Card Types

| Type | Role |
| :--- | :--- |
| **Attack** | Deal damage. May include buffs, debuffs, or conditional triggers. |
| **Skill** | Provide healing, shields, buffs, debuffs, card draw, or AP manipulation. |
| **Upgrade** | Grant permanent stat boosts for the remainder of combat. Removed from deck after play. |
| **Status Ailment** | Debuff cards inflicted on your team. Clog hand slots and must be played or purged. |

---

## Card Tags

| Tag | Effect |
| :--- | :--- |
| **Retain** | Card stays in hand between turns instead of going to graveyard. |
| **Exhaust** | Card is permanently removed from play after use (sent to Exhaust pile). |
| **Ultimate** | Ends your turn immediately after being played. |
| **Lead** | Chance to reduce cost by 1 at the start of each turn. |
| **Outbreak of War** | Drawn first at the start of the battle. |
| **Haste** | Playing this card does NOT reduce enemy Action Count. |
| **Ephemeral** | Temporary card — disappears under specific conditions. |
| **Bullet** | Ammunition-type cards (Lucas, Luke). Exhausted after use; interact with firearm synergies. |
| **Unique** | Only one copy can exist in the deck at a time. |
| **Linked** | Heidemarie's mechanic — cards gain Link status for chain synergy. |
| **Quietus** | Discard synergy tag — rewards discarding cards from hand. |
| **Pulverize** | Heavy-impact damage tag. |
| **Celestial** | Divine/cosmic tier tag. |
| **Finale** | Powerful finisher card. |
| **Creation** | Created by Orlea's summoning mechanics (★/★★/★★★ tiers). |

---

## Attribute Weaknesses

There are **5 combat attributes**:

| Attribute | Icon Theme |
| :--- | :--- |
| **Passion** | Fire |
| **Void** | Violet |
| **Instinct** | Eye |
| **Order** | Cross |
| **Justice** | Scale |

> **Only enemies have attribute weaknesses.** Hitting a weak attribute grants **+25% attack damage** and increased **break (Tenacity) damage**. There are no inter-attribute weaknesses between player characters.

---

## Tenacity Bar & Ravage State

Stronger enemies possess a **Tenacity Bar** (break gauge) that partially absorbs damage.

When the Tenacity bar is fully depleted, the enemy enters **Ravage State**:
- Your team gains **+1 AP**.
- Team accumulates **less Stress**.
- Enemy's **Action Count increases** (more turns before they attack).

---

## Enemy Action Count

Each enemy has an **Action Count** displayed next to their HP bar:
- The count **decreases by 1** for each card you play (unless that card has the **Haste** tag).
- When it reaches **0**, the enemy performs its telegraphed attack or skill.
- An **infinity symbol (∞)** means the enemy attacks at the **end of every player turn** regardless of cards played.

---

## Protos Skill (Time Rewind)

The **Protos Skill** (sandglass icon) uses **Sands of Time** to undo the last action:
- Maximum **15 Sands of Time** per match.
- Multiple rewind options unlockable via the **Research Facility** in Ark City.
- Vital for optimizing critical turns and recovering from misplays.
