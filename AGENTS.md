# Colony Protocol: Influx — Agent Instructions

Locked in a ship in the void — use what you have to make everything. Space is the scarce resource: you cannot build another floor, so loops are closed and compact (debris → typed matter → genetics).

**Series story, pack roles, and mod ownership live in Liminal:** [`docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md). Link there; do not copy it here. **Liminal is designed first** — scope Influx to build the road to it ([`road-to-liminal.md`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/road-to-liminal.md)).

**Loader:** NeoForge 1.21.1 (match Verdant). **Not** a copy of Verdant quests or world model.

## Canonical paths

| Purpose | Path |
|---------|------|
| Pack repo | repo root |
| Prism | `~/Library/Application Support/PrismLauncher/instances/CP-Influx-Dev/minecraft/` |
| Quests | `config/ftbquests/` (**quest worker owns SNBT** — scaffolding PRs leave empty) |
| KubeJS | `kubejs/` |
| Mods | `mods/*.pw.toml` |

## Dev loop

1. Edit → `make refresh` → `make serve-bg` → Launch `CP-Influx-Dev` in Prism (PreLaunch pulls `http://localhost:8080/pack.toml`)
2. Stop with `make serve-stop` (aliases: `down`, `stop`)
3. `make help` — smoke path listed first; also exports / config pull
4. Do **not** invent final pillar modlists — soft pins + TODOs only
5. Quests teach; rewards = QoL + Field Manual pages — **never** progression gates

First-time (Prism closed): `make setup-dev` (jars + PreLaunch + RAM/window). Optional: `make prune-instance-orphans` after pack removals.

## Design pointers

Pack scope: `docs/pack-identity.md`. Series design: Liminal `docs/series/pack-architecture.md` (Influx section).

## GitHub

- Repo: `specterrealm/minecraft-modpack-cp-influx`
- Do not close code issues until PR merged to `main`
- Do not bump `pack.toml` version in feature PRs (CI blocks)

## What not to copy from Verdant

- Verdant quest chapters / lore SNBT
- Verdant-only pillars (Ex Deorum, Create, Mekanism as V teaching path)
- `pack-content/cpverdant` / `cpverdant:` namespaces — use SpecterRealm Core
