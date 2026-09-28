# Colony Protocol: Influx

Ship-in-void **genetics / digital** teaching — mad-science recycle. Debris → typed matter → genetics. Not something-for-nothing.

**Loader:** NeoForge **1.21.1** (packwiz)  
**Series order:** Pack **3** of Colony Protocol — Verdant → Elysian → **Influx** → Liminal (recommended, not required)  
**Status:** Scaffold / coming soon — shared QoL soft-pinned; pillar mods stay soft until smoke-tested.

**CurseForge:** [colony-protocol-influx](https://www.curseforge.com/minecraft/modpacks/colony-protocol-influx) (id `1715476`) — public preview / Coming Soon (no zip yet)  
*(Separate CF project from Verdant; not crammed onto the Verdant page.)*

## What this is

You live on a **prebuilt ship in the void**, open dimensional workspaces, and rebuild resources from **something** — never from nothing. Headline: ship lab + genetics + recycle. Do **not** pitch this pack as “EMC solves everything.”

**Soft leans (not jar locks yet):** salvage / Recovery Bay–style bootstrap → genetics / breeding for advanced mats → digital workspace tools. Efficiency ladders (if present) stay pattern-first: first copy, then convert. Quests teach and reward; they never hard-gate the pack.

## Install tip (players)

1. Install [Prism Launcher](https://prismlauncher.org/) (or the CurseForge app).
2. Add an instance from this pack’s CurseForge page / downloaded zip when published.
3. Allocate ~6–8 GB RAM (more with shaders).
4. Launch with the NeoForge profile the pack ships.

## Dev quick start (Prism)

1. Create Prism instance `CP-Influx-Dev` → Minecraft **1.21.1** + NeoForge matching `pack.toml`.
2. `make serve` from this repo (or `packwiz serve`).
3. Instance pre-launch:

   ```text
   "$INST_JAVA" -jar "$INST_MC_DIR/packwiz-installer-bootstrap.jar" --bootstrap-no-update http://localhost:8080/pack.toml
   ```

4. `make setup-dev` once (Prism closed), then launch.

See [docs/workflow.md](docs/workflow.md).

## Series siblings

| Pack | Role | CF |
|------|------|-----|
| [Verdant](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant) | Pack 1 — overworld, no ore veins, sieve loop | [colony-protocol-verdant](https://www.curseforge.com/minecraft/modpacks/colony-protocol-verdant) |
| [Elysian](https://github.com/SpecterRealm/minecraft-modpack-cp-elysian) | Pack 2 — void magic | [colony-protocol-elysian](https://www.curseforge.com/minecraft/modpacks/colony-protocol-elysian) (preview) |
| **Influx** (this repo) | Pack 3 — ship lab / genetics | [colony-protocol-influx](https://www.curseforge.com/minecraft/modpacks/colony-protocol-influx) (preview) |
| [Liminal](https://github.com/SpecterRealm/minecraft-modpack-cp-liminal) | Pack 4 — planetfall reunite | [colony-protocol-liminal](https://www.curseforge.com/minecraft/modpacks/colony-protocol-liminal) (preview) |

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

Project store: `docs/influx-core-mods.md` · `pack-progression-arcs.md` §I · `influx-bay-alternatives.md` (Recovery Bay = KubeJS fallback only) · `influx-resource-loops.md`.

Tooling reference: [Verdant pack-template](https://github.com/MichaelHeaton/minecraft-modpack-cp-verdant/blob/main/docs/pack-template.md).
