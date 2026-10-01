# Recipe analyze summary

Generated: `2026-10-01T16:26:07.252646+00:00`

Regenerate after mod list / KubeJS changes: `make recipe-audit`.

## Recipe dump

- Source: `docs/recipe_data.json`
- Dump generated: `2026-10-01T16:26:06.623671+00:00`
- Items: **6115**
- Mods with result items: **51**

### Namespaces with no installed jar

25 namespaces appear in the dump only because an installed mod ships
compat recipes for them. They are not in the pack; do not count them as mods.

| Namespace | Items |
|-----------|------:|
| `allthemodium` | 23 |
| `alltheores` | 127 |
| `create` | 15 |
| `create_enchantment_industry` | 1 |
| `create_ironworks` | 12 |
| `everythingcopper` | 2 |
| `ftbmaterials` | 123 |
| `hostilenetworks` | 8 |
| `immersiveengineering` | 24 |
| `integrateddynamics` | 6 |
| `magistuarmory` | 3 |
| `mekanism` | 26 |
| `modern_industrialization` | 58 |
| `more_tier_upgrade` | 14 |
| `mysticalagradditions` | 10 |
| `mysticalagriculture` | 16 |
| `pamhc2foodcore` | 1 |
| `pneumaticcraft` | 1 |
| `productivelib` | 3 |
| `productivemetalworks` | 158 |
| `replication` | 14 |
| `sgearmetalworks` | 65 |
| `silentgems` | 42 |
| `simplemagnets` | 4 |
| `twilightforest` | 7 |

### Per-mod counts (top by items)

| Mod | Items | Jar recipes on results | Seed-like ids |
|-----|------:|-----------------------:|--------------:|
| `productivetrees` | 2776 | 3153 | 0 |
| `botanypotstiers` | 552 | 1467 | 0 |
| `productivebees` | 390 | 615 | 0 |
| `ae2` | 330 | 408 | 0 |
| `silentgear` | 279 | 572 | 1 |
| `botanypots` | 183 | 244 | 0 |
| `productivemetalworks` | 158 | 557 | 0 |
| `farmersdelight` | 150 | 180 | 2 |
| `powah` | 133 | 171 | 0 |
| `alltheores` | 127 | 127 | 0 |
| `sophisticatedstorage` | 124 | 278 | 0 |
| `ftbmaterials` | 123 | 123 | 0 |
| `minecraft` | 114 | 200 | 2 |
| `projecte` | 107 | 141 | 0 |
| `sgearmetalworks` | 65 | 181 | 0 |
| `modern_industrialization` | 58 | 58 | 0 |
| `sophisticatedbackpacks` | 57 | 92 | 0 |
| `azurum_miner` | 42 | 67 | 1 |
| `silentgems` | 42 | 42 | 0 |
| `comforts` | 33 | 66 | 0 |
| `bhc` | 29 | 36 | 0 |
| `mekanism` | 26 | 28 | 0 |
| `immersiveengineering` | 24 | 24 | 0 |
| `allthemodium` | 23 | 50 | 0 |
| `animal_pen` | 18 | 18 | 0 |
| `mysticalagriculture` | 16 | 16 | 1 |
| `create` | 15 | 16 | 0 |
| `more_tier_upgrade` | 14 | 28 | 0 |
| `replication` | 14 | 16 | 0 |
| `create_ironworks` | 12 | 12 | 0 |
| `mysticalagradditions` | 10 | 16 | 0 |
| `appliede` | 8 | 9 | 0 |
| `hostilenetworks` | 8 | 8 | 0 |
| `agricraft` | 7 | 7 | 0 |
| `fluxnetworks` | 7 | 7 | 0 |
| `ftbquests` | 7 | 7 | 0 |
| `twilightforest` | 7 | 7 | 0 |
| `integrateddynamics` | 6 | 12 | 0 |
| `simplemagnets` | 4 | 4 | 0 |
| `magistuarmory` | 3 | 3 | 0 |
| … | (11 more mods in `by-mod/`) | | |

### Farming / resource-crop namespaces

| Namespace | Items | Seed-like |
|-----------|------:|----------:|
| `mysticalagriculture` | 16 | 1 |
| `agricraft` | 7 | 0 |
| `productivefarming` | 0 | 0 |
| `productivetrees` | 2776 | 0 |
| `botanypots` | 183 | 0 |

Seed-like lists: `mysticalagriculture-seeds.txt`, `agricraft-seeds.txt`, …
Full per-mod item lists: `by-mod/<mod>.txt`.

## AgriCraft plant datapacks

- Plants found: **299**
- Mods dir: `~/Library/Application Support/PrismLauncher/instances/CP-Influx-Dev/minecraft/mods`

| Plant namespace | Count |
|----------------|------:|
| `mysticalagriculture` | 136 |
| `pamhc2crops` | 97 |
| `minecraft` | 32 |
| `agricraft` | 18 |
| `biomesoplenty` | 11 |
| `farmersdelight` | 4 |
| `immersiveengineering` | 1 |

Full list: [`agricraft-plants.txt`](agricraft-plants.txt).
These are datapack plant defs (products / genetics), not JEI craftable
seed recipes. Use both this file and `recipe_data.json` for lane work;
do not treat recipe-dump seed counts alone as the AgriCraft plant catalog.
