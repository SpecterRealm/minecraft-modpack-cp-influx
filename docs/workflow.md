# Dev workflow — Colony Protocol: Influx

## Prerequisites

- [Packwiz](https://packwiz.infra.link/) on `PATH` (`go install github.com/packwiz/packwiz@latest`)
- Java 21, Prism Launcher
- Prism instance **`CP-Influx-Dev`** (or set `PRISM_INSTANCE`)

## Prism smoke (one terminal)

**One manual step Make cannot do:** create an empty Prism instance named `CP-Influx-Dev` (Minecraft **1.21.1** + NeoForge matching `pack.toml`). Close Prism before `setup-dev`.

```bash
cd /Users/michaelheaton/Projects/specterrealm/esport/minecraft-modpack-cp-influx
make setup-dev          # once — RAM, window, installer jars, packwiz PreLaunch
make serve-bg           # primary daily target (alias: make up)
# Launch CP-Influx-Dev in Prism
make serve-stop         # when done (aliases: make down / make stop)
```

`make setup-dev` writes the packwiz PreLaunch command — you do **not** paste it into Prism Settings by hand.

**Port:** all CP packs share `:8080`. One serve at a time — `make serve-stop` before `make serve-bg` in another pack repo.

Optional cleanup after pack removals (packwiz does not delete leftovers):

```bash
make prune-instance-orphans   # known-bad paths (e.g. kubejs README orphans)
make prune-dev-mods           # stale mod JARs not in mods/*.pw.toml
```

`make help` lists this smoke path first.

## First-time extras

```bash
make install-hooks   # optional: auto-refresh index on commit
```

Shared stack is soft-pinned under `mods/`. Add pillar mods with `packwiz` when ready; `make refresh` after each batch (also runs inside `serve-bg`).

## Daily loop

```bash
make serve-bg       # backgrounds packwiz; log → .serve.log
# Launch CP-Influx-Dev in Prism
make logs           # optional second terminal
make serve-stop
```

Or on macOS with Prism at the default path: `make dev` (configure + serve-bg + launch).

Foreground serve (blocks the terminal): `make serve`.

## Void test world

Influx is a void pack, and some questions (for example whether the Azurum Miner works with nothing beneath it — [#29](https://github.com/SpecterRealm/minecraft-modpack-cp-influx/issues/29)) can only be answered in a void. Neither this pack nor Elysian configures a void world yet ([#28](https://github.com/SpecterRealm/minecraft-modpack-cp-influx/issues/28)), so for now create one by hand:

1. In Prism, launch `CP-Influx-Dev`.
2. **Create New World → More World Options → World Type: Superflat → Customize → Presets → "The Void".**
3. Create the world, then use creative mode for a small starting platform and any test items.

*Untested with this pack's mod list — note any spawn, lighting, or mob-spawn oddities on #28.* The pack-default mechanism (how Influx actually starts players in a void, and where the "prebuilt ship" comes from) is still to be decided.

## After edits

- New tracked files → `make refresh` (or just `make serve-bg`)
- In-game quest edits → pull into `config/ftbquests/` (quest worker / `quest-pull` when wired)
- Config drift → `make config-pull` / `make config-diff`

## Export

```bash
make export-cf
make validate-export
```

See [curseforge-export.md](curseforge-export.md). Modrinth export may fail if a mod requires manual CF download.

## Design

Series design: Liminal [`docs/series/`](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal/blob/main/docs/series/README.md). Pack scope: [pack-identity.md](pack-identity.md).
