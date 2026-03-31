# Emergent DNA — canonical genotype

This repository is the **reference implementation** of **Emergent DNA** as a **genome layer**: seeded deterministic randomness and optional trait bundles for **individuals of a species**. It does **not** include Three.js, p5.js, WebGL, Tone.js, spawn timers, or death waves — those are **phenotype** and **ecology** in your pieces.

## Install

**Script tag (global):**

```html
<script src="https://cdn.jsdelivr.net/gh/EmergentDNA/EmergentDNA@1.0.0/src/emergent-dna-core.js"></script>
<script>
  var rng = new EmergentDNA.SeedRng(12345);
  // Alias matching Document 5 naming:
  var rng2 = new EmergentDNA.Rand(12345);
</script>
```

**Node / bundler:**

```javascript
const { SeedRng, Rand, SpeciesGenome, expressIndividual } = require('./src/emergent-dna-core.js');
```

(Tag a release instead of `@main` in production.)

## Canonical random engine

The **`Rand` / `SeedRng`** constructor must match everywhere:

```javascript
constructor(seed) { this.s = (seed >>> 0) || 1; }
next() { const x = Math.sin(this.s++) * 10000; return x - Math.floor(x); }
```

See **`docs/SPEC.md`** for the three DNA types (Seeded / Relational / Hybrid) and rules copied from the ARS *system-prompt* Document 5.

## Layout

| Path | Contents |
|------|----------|
| `src/emergent-dna-core.js` | Implementation |
| `docs/SPEC.md` | Conceptual + canonical `Rand` |
| `docs/index.html` | Landing for GitHub Pages |
| `examples/minimal.html` | Local demo |

## Versioning

Use **semver** tags (`v1.0.0`). Breaking changes to the PRNG or constructor require a **major** bump.

## License

MIT — see `LICENSE`.
