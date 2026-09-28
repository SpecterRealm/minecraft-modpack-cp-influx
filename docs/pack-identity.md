# Colony Protocol: Influx — identity

**Theme (LOCKED):** Ship-in-void genetics / digital teaching — mad-science recycle; debris → typed matter → genetics (not something-for-nothing).

**Loader:** Minecraft 1.21.1 · NeoForge 21.1.228 (match Verdant).

**Shared stack (soft-pinned from Verdant):** FTB Quests + KubeJS + SpecterRealm Core + Patchouli + Sophisticated Storage (series early stash) + EMI/Jade/IPN lean + Silent Gear (tools soft lean) + client perf. See `mods/*.pw.toml` and series `shared-mod-stack.md`.

## Not in this scaffold

- Full quest chapters (empty `config/ftbquests/` — quest worker owns SNBT)
- Pack pillar mods (Ars / PE / AgriCraft / etc.) — candidates until smoke-test; do not invent final modlists
- Recovery Bay / gem bootstrap KubeJS — design first, then implement
- Full FancyMenu Bridge chrome (buttons / CALIBRATE) — title, drippy, level-loading, and pause backgrounds ship under `config/fancymenu/`

## Design pointers

Project store: docs/influx-core-mods.md · pack-progression-arcs.md §I · influx-bay-alternatives.md (Recovery Bay = KubeJS fallback only — not implemented here) · influx-resource-loops.md.

## How to add mods

```bash
packwiz curseforge add <slug>   # or packwiz modrinth add …
make refresh
```

Pin Soft / candidate jars only after 1.21.1 confirm + smoke-test. Prefer documenting TODOs over guessing pins.

## Recipe viewer defaults

Shipped EMI/JEI configs match Verdant/Elysian patterns (`index-source = registered`, EMI++ stack groups on, JEI `maxColumns = 12`). Sophisticated Storage wood-variant barrels/chests collapse via `kubejs/assets/cpinflux/stack_groups/ss_*.json`. Verify barrel page count in Prism after pull.
