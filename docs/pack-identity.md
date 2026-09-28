# Colony Protocol: Influx — identity

**Theme (LOCKED):** Ship-in-void genetics / digital teaching — mad-science recycle; debris → typed matter → genetics (not something-for-nothing).

**Loader:** Minecraft 1.21.1 · NeoForge 21.1.228 (match Verdant).

**Mod set:** Shared series QoL + locked landings (HNN / Placebo / Azurum) + **identity soft pins** (**69** `.pw.toml`): thin **AE2** (Spanner workspace; Verdant `19.2.17` pin), **ProjectE**, **AppliedE**, **AgriCraft ReReloaded**, **Replication** (+ **Titanium**). See `mods/*.pw.toml` and series `influx-core-mods.md`.

## Not in this scaffold

- Full quest chapters (empty `config/ftbquests/` — quest worker owns SNBT)
- Full AE2 depth (AdvancedAE / MEGA / wireless / QoL addons) — thin AE2 only for now
- AE↔Replication bridge pick (Applied Replicatics vs Replication AE2 Bridge) — hold until compared
- Mystical Agriculture plant fallback — prefer AgriCraft-only until smoke fails
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
