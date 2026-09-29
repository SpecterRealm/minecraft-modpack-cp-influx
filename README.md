# Colony Protocol: Influx

Locked in a **ship in the void** — use what you have to make everything. You can't build another floor, so you learn to recycle, convert, and breed inside the hull you've got.

**Loader:** NeoForge **1.21.1** (packwiz)  
**Series order:** Pack **3** of Colony Protocol — Verdant → Elysian → **Influx** → Liminal (recommended, not required). Series story and pack roles: [Liminal `docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md).  
**Status:** Scaffold / coming soon — shared QoL soft-pinned; pillar mods stay soft until smoke-tested.

**CurseForge:** [colony-protocol-influx](https://www.curseforge.com/minecraft/modpacks/colony-protocol-influx) (id `1715476`) — public preview / Coming Soon (no zip yet)  
*(Separate CF project from Verdant; not crammed onto the Verdant page.)*

## What this is

You live on a **prebuilt ship in the void**. There is no next island and no second floor — space, not material, is what's scarce. So the pack teaches the opposite of expansion: make everything from what you have. Salvage and debris become typed matter, typed matter feeds breeding and genetics, and every loop is closed. When you do need room, it opens *inward* through AE2 Spanner pocket dimensions — usable for almost anything — not outward. Do **not** pitch this pack as “EMC solves everything.”

**Soft leans (not jar locks yet):** salvage / Recovery Bay–style bootstrap → genetics / breeding for advanced mats → compact, closed-loop production and digital workspace tools. Efficiency ladders (if present) stay pattern-first: first copy, then convert. Quests teach and reward; they never hard-gate the pack.

## Install tip (players)

1. Install [Prism Launcher](https://prismlauncher.org/) (or the CurseForge app).
2. Add an instance from this pack’s CurseForge page / downloaded zip when published.
3. Allocate ~6–8 GB RAM (more with shaders).
4. Launch with the NeoForge profile the pack ships.

## Prism smoke (one terminal)

**One manual step Make cannot do:** create an empty Prism instance named **`CP-Influx-Dev`** with Minecraft **1.21.1** + NeoForge matching `pack.toml`. Close Prism before step 2.

```bash
cd /Users/michaelheaton/Projects/specterrealm/esport/minecraft-modpack-cp-influx
make setup-dev          # RAM, window, installer jars, packwiz PreLaunch
make serve-bg           # primary — backgrounds packwiz on :8080
# Launch CP-Influx-Dev in Prism
make serve-stop         # when done (aliases: make down / make stop)
```

**Port:** all CP packs use `:8080`. Switch packs with `make serve-stop` here, then `make serve-bg` in the other repo (one serve at a time).

Optional after pack removals (packwiz does not delete leftovers): `make prune-instance-orphans` and/or `make prune-dev-mods`.

See [docs/workflow.md](docs/workflow.md).

## The series

Influx is pack 3 of Colony Protocol. Pack roles, sibling links, CurseForge projects, and the full story live in Liminal, the series source of truth: **[`docs/series/README.md`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md)**.

Shared library: [SpecterRealm Core](https://github.com/SpecterRealm/specterrealm-core) · CF [SpecterRealm Core](https://www.curseforge.com/minecraft/mc-mods/specterrealm-core)

## What's ready vs stubbed

| Area | Status |
|------|--------|
| packwiz + Makefile + CI | Ready |
| Shared stack (`mods/*.pw.toml`) | Soft-pinned — smoke-test pending |
| `config/ftbquests/` | Early/Mid spine + Late stubs |
| KubeJS | Skeleton + TODOs |
| Pack pillar mods | Soft candidates — not locked as shipping features |
| FancyMenu / Field Manual content | Mod pinned; assets TBD |

## Design pointers

- Pack identity and scope: [`docs/pack-identity.md`](docs/pack-identity.md)
- Series story, pack roles, mod ownership: [Liminal `docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md)

Tooling reference: [Verdant pack-template](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant/blob/main/docs/pack-template.md).
