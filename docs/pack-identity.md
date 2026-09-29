# Colony Protocol: Influx — identity

**Theme (LOCKED):** Locked in a ship in the void — use what you have to make everything. You can't just build another floor on your base, so the pack is about what to do when you can't expand: recycle, convert, breed, and grow *inward*.

**Loader:** Minecraft 1.21.1 · NeoForge 21.1.228 (series-wide; match `pack.toml`).

**Series context:** Influx is pack 3. Story, pack roles, and mod ownership are in Liminal's [`docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md) — this file covers only what Influx owns.

## What Influx owns

- **World:** a prebuilt ship in the void. Finite, fixed space; no new land, no outward expansion.
- **Scarcity:** *space*, not raw material. Design questions are "how do I get more out of what's aboard?" and "how do I fit it?" — never "where do I build next?"
- **Loop:** closed loops. Salvage / debris → typed matter → genetics and breeding for advanced materials. Outputs feed back in.
- **Pattern first, then convert — and EMC is the destination.** The ladder is: recycle what you have → keep a first pattern → convert → and finally EMC becomes the way things get made, like a Star Trek replicator (ProjectE, Replication, AutoEMC, AppliedE). It is earned step by step, not a day-one button. AutoEMC stays so EMC covers the whole modpack.
- **AE2 is a pillar for automation in limited space.** Influx applies AE2 (taught in Verdant) rather than re-teaching it; more AE2 depth is welcome where it serves compact, closed-loop automation. Which AE2 addons come in is still to be decided.
- **Azurum Miner = asteroid / debris mining.** The player works what drifts near the ship, and it turns into a **power** lesson: generating enough power to run the miner is the real challenge. Power sources are still to be chosen.
- **Crops:** AgriCraft (a hands-on genetics system) and Productive Farming (about 160 crops with traits, flower/dye breeding, bee integration) are **both kept for now** — whether to keep both, or which is the pillar, is open ([#31](https://github.com/SpecterRealm/minecraft-modpack-cp-influx/issues/31)). Botany Pots (+ Tiers, Trees, KubeJS) are the compact planting answer; Productive Trees and Productive Bees supply tree and bee genetics.
- **Space answers:** compact production (Productive Bees / Trees / Farming, AgriCraft), dense storage, and **AE2 Spanner** pocket dimensions — general-purpose space usable for almost anything (farms, labs, storage, machines) — that open inward.
- **Mods it teaches (soft-pinned, not final):** ProjectE (+ Useful ProjectE, ProjectE Integration, AutoEMC), AppliedE, thin AE2 (Spanner workspace), Replication (+ Titanium), AgriCraft ReReloaded, Productive Bees / Trees / Farming / Metalworks, Hostile Neural Networks, Azurum Miner, Silent Gear Metalworks, Animal Pens (compact livestock for a space-limited ship). The `mods/` folder is authoritative; do not hard-code counts in prose.
- **Quest chapters:** Welcome, Ship Camp, Typed Matter, Genetics Lab, EMC Ladder, Spanner Workspace, Specimen Loop, Azurum Mass, AppliedE, Side Quests.

## What Influx does *not* own

Sieving (Verdant), spell/essence magic (Elysian), or cross-pack bridges and colony features (Liminal). Verdant-only pillars — Ex Deorum, Create, Mekanism — are not taught here.

## Not yet done

- Early chapters have content; Spanner Workspace, Specimen Loop, Azurum Mass, AppliedE, and Side Quests are stubs.
- **Which AE2 addons to add** (AdvancedAE / MEGA / wireless / QoL) for limited-space automation — AE2 depth is welcome; picks TBD.
- **Power sources** for the Azurum Miner.
- **Crop pillar:** decide between AgriCraft, Productive Farming, or both, and how each works with the rest of the pack ([#31](https://github.com/SpecterRealm/minecraft-modpack-cp-influx/issues/31)).
- **Verify Botany Trees + Productive Trees together:** Botany Trees is about *where and how* trees are planted (compact, pot-grown); Productive Trees is about *what trees produce*. They should complement each other — confirm Productive Trees species can be grown via Botany Trees.
- AE ↔ Replication bridge pick (Applied Replicatics vs Replication AE2 Bridge) — hold until compared.
- Mystical Agriculture plant fallback — prefer AgriCraft-only until smoke fails.
- Recovery Bay / gem bootstrap KubeJS — design first, then implement. Recovery Bay is a KubeJS fallback only.
- Full FancyMenu Bridge chrome (buttons / CALIBRATE) — title, drippy, level-loading, and pause backgrounds ship under `config/fancymenu/`.

## How to add mods

```bash
packwiz curseforge add <slug>   # or packwiz modrinth add …
make refresh
```

Pin soft / candidate jars only after 1.21.1 confirm + smoke-test. Prefer documenting TODOs over guessing pins.

## Recipe viewer defaults

Shipped EMI/JEI configs match the series pattern (`index-source = registered`, EMI++ stack groups on, JEI `maxColumns = 12`). Sophisticated Storage wood-variant barrels/chests collapse via `kubejs/assets/cpinflux/stack_groups/ss_*.json`. Verify barrel page count in Prism after pull.
