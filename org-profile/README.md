## Emergent DNA

**Open specification** for *sources of uniqueness* in generative works — not the artwork, palette, or physics. Same rules + same DNA reproduce the same world.

### Current (canonical)

| Resource | Role |
|----------|------|
| **[EmergentDNA/EmergentDNA](https://github.com/EmergentDNA/EmergentDNA)** | Reference implementation: canonical **`Rand`** / **`SeedRng`**, optional **`SpeciesGenome`** + **`expressIndividual`** (genotype only; no renderer, no audio). |
| **Releases** | Tagged versions (semver). Pin integrations to a release tag. |

**Three DNA types (conceptual):** **Seeded** (integer seed → PRNG), **Relational** (viewer / co-presence input), **Hybrid** (seeded structure + intentional unseeded surface).  
Seeded pieces use one **`Rand`** constructor everywhere — see the spec repo `docs/SPEC.md`.

### Works that use this (examples)

- **Bloom / Release**, **Traveling Landscape** — seeded generative works (see ARS / studio documentation for piece-specific rules).

### Archive (previous chapter)

Earlier experiments described a **distributed kinetic organism**, **DAO**, and **real-time parameter streams** mapped to hardware. That narrative may live in **archived** repositories under this org and is **not** the definition of the browser **genome** spec above.

If you landed from old links: use **[EmergentDNA/EmergentDNA](https://github.com/EmergentDNA/EmergentDNA)** for the current **code + law**.

---

*Maintained by Mark Walhimer.*
