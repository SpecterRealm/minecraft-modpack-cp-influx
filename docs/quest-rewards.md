# Colony Protocol: Influx — Quest reward tables (scaffold)

**Spine:** Debris Replication basics → AgriCraft + PE efficiency → Azurum + AppliedE (stubs)

**Locks applied:** teach + QoL rewards · never sole progression path · Field Manual topic advancements · flexible progression · learning ladder.

| Chapter | Quest | QoL reward | Field Manual advancement | Notes |
|---------|-------|------------|--------------------------|-------|
| Welcome | Field Manual | Field Manual book | `specterrealm:field_manual/orientation` |  |
| Ship Camp | Ship Stash | backpack | `specterrealm:field_manual/influx/early_stash` |  |
| Ship Camp | Silent Gear Tools | repair kit | `specterrealm:field_manual/influx/silent_gear` |  |
| Typed Matter | Replicator | 8× iron | `specterrealm:field_manual/influx/replication_basics` |  |
| Genetics Lab | First Seeds | 8× bone meal | `specterrealm:field_manual/influx/agricraft_basics` |  |
| EMC Ladder | Philosopher's Stone | 1× diamond (not sole path) | `specterrealm:field_manual/influx/emc_ladder` | CRITICAL: inherent gem path required; quest diamond is QoL only |
| Spanner Workspace | Open a Pocket (stub) | xp | `specterrealm:field_manual/influx/spanner` | Late stub |
| Specimen Loop | HNN Mid Feed (stub) | xp | `specterrealm:field_manual/influx/hnn` | Late stub |
| Azurum Mass | Powered Miner (stub) | xp | `specterrealm:field_manual/influx/azurum` | Late stub |
| AppliedE | ME Matter Bridge (stub) | xp | `specterrealm:field_manual/influx/appliede` | Late stub |
| Side Quests | Optional Paths (stub) | xp | `specterrealm:field_manual/influx/side_niches` | Late stub |

## Placeholder Manual topic IDs

- `specterrealm:field_manual/orientation`
- `specterrealm:field_manual/influx/early_stash`
- `specterrealm:field_manual/influx/silent_gear`
- `specterrealm:field_manual/influx/replication_basics`
- `specterrealm:field_manual/influx/typed_matter`
- `specterrealm:field_manual/influx/agricraft_basics`
- `specterrealm:field_manual/influx/genetics_ladder`
- `specterrealm:field_manual/influx/emc_ladder`
- `specterrealm:field_manual/influx/pattern_matter`
- `specterrealm:field_manual/influx/spanner`
- `specterrealm:field_manual/influx/hnn`
- `specterrealm:field_manual/influx/azurum`
- `specterrealm:field_manual/influx/appliede`
- `specterrealm:field_manual/influx/side_niches`

Advancement JSON + Patchouli entries land in `specterrealm-core` later (see series `field-manual-architecture.md`). Scaffold grants IDs now so quest wiring is ready.

## Starter quest book

FTB Quests does **not** auto-give `ftbquests:book` on NeoForge 1.21.1 (2101.x). This pack ships `kubejs/server_scripts/quest_book_login.js` to grant the book if missing, plus `options.txt` binding **B** to the quest journal (Elysian #16 / Verdant keybind pattern).
