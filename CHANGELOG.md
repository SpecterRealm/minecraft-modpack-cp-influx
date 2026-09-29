# Changelog

## [Unreleased]

### Mod stack

- **Added:** Baubley Heart Canisters (health progression; needs Curios, already present), so all four packs carry it.
- **Added:** Essential Mod as client-only (`side = "client"`), matching the other packs: servers do not install it, players' clients get it from the pack (friends list, cosmetics, world hosting).
- **Added:** Flux Networks (from Verdant): wireless FE transfer and Flux Storage blocks, so power moves and is stored without cables taking ship space.
- **Added:** Extreme Reactors (+ ZeroCore 2) as the power pillar for the Azurum Miner's power-scale lesson, taken from Verdant. Early-game power and reactor fuel are still to be designed.
- **Added:** Animal Pens — stores animals in pens, aquariums and aviaries with breeding, shearing, milking and drops intact; a fit for livestock in limited ship space.
- **Restored:** Productive Farming (removed in error as a "duplicate" of AgriCraft; it adds about 160 crops, flower/dye breeding and bee integration). Whether to keep both crop mods is tracked in #31.

### Docs / copy

- EMC is now stated as the destination (a Star Trek-style replicator, earned via the ladder). Added void test-world steps to `docs/workflow.md` (#28, #29).
- Theme rewritten: locked in a ship, use what you have to make everything, space (not material) is the constraint. Replaces the "something-for-nothing" framing in README, identity doc, site, quest text, and the login message.
- Series content now links to Liminal (`docs/series/`, the source of truth) instead of being copied; removed pointers to design docs that live outside the repos and hard-coded mod counts.
- Story doc added (`docs/story.md`). Azurum Miner reframed as asteroid/debris mining that teaches power scale; AE2 named as a pillar for limited-space automation; farming overlap recorded as an open decision.
- Quest welcome text now says "Module 3 · CP Influx — Cohort CP-Verdant-S1"; the ship is the *Longwatch* (Liminal-first design).
- Welcome quest and story doc now place Influx aboard the real *Longwatch* in flight (final practical). "Colonial Program" renamed to Cohort Protocol.

## [0.1.0]

- Initial packwiz scaffold (NeoForge 1.21.1)
- Soft-pin shared QoL / quest / storage / EMI stack from Verdant pins
- Empty FTB Quests tree + KubeJS skeleton (content TBD)
