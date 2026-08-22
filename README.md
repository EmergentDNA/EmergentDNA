# Machine DNA

**Canonical genotype + studio meaning** for Walhimer Studio generative work.

| Doc | Role |
|-----|------|
| **[`docs/CHRONICLE.md`](docs/CHRONICLE.md)** | **What Machine DNA means** — species, bodies, lifeline, co-created sound+image, solidification. Start here. |
| **[`docs/SPEC.md`](docs/SPEC.md)** | Genotype law — Type 1 / 2 / 3, canonical `Rand` / `SeedRng` (Document 5) |
| **`src/emergent-dna-core.js`** | Reference implementation (no renderer, no lifecycle clock) |

Piece repos (e.g. [walhimer.github.io](https://github.com/walhimer-studio/walhimer.github.io)) hold ecology and phenotype. They **point here** for meaning; they do not redefine it.

**Naming:** *Machine DNA* = preferred studio name. *Emergent DNA* = historical / package name for this genotype code. Same practice.

---

## Install

**Script tag (global):**

```html
<script src="https://cdn.jsdelivr.net/gh/walhimer-studio/Machine-DNA@main/src/emergent-dna-core.js"></script>
<script>
  var rng = new EmergentDNA.SeedRng(12345);
  // Alias matching Document 5 naming:
  var rng2 = new EmergentDNA.Rand(12345);
</script>
```

Prefer a **semver tag** instead of `@main` in production.

**Node / bundler:**

```javascript
const { SeedRng, Rand, SpeciesGenome, expressIndividual, SocialPool, nudgeSpeciesFromPool } = require('./src/emergent-dna-core.js');
```

### Social learning (ecology-adjacent)

Runs can **record** trait snapshots into a **`SocialPool`**, then **nudge** new genomes toward that shared memory (optional `localStorage` via `storageKey`). Peers in the same cohort can **`learnFromPeers`**. See **`docs/SPEC.md`** — pool state is not part of pure seed replay unless you restore the same pool.

## Canonical random engine

The **`Rand` / `SeedRng`** constructor must match everywhere:

```javascript
constructor(seed) { this.s = (seed >>> 0) || 1; }
next() { const x = Math.sin(this.s++) * 10000; return x - Math.floor(x); }
```

See **`docs/SPEC.md`**. Known tension with hash/`splitmix32` for cross-engine bit-exact replay is documented in **`docs/CHRONICLE.md`** — do not switch under a published seed without a major version bump.

## Layout

| Path | Contents |
|------|----------|
| `docs/CHRONICLE.md` | **Machine DNA meaning** (canonical across studio) |
| `docs/SPEC.md` | Type 1/2/3 + canonical `Rand` |
| `src/emergent-dna-core.js` | Implementation |
| `docs/index.html` | GitHub Pages landing |
| `examples/minimal.html` | Local demo |
| `org-profile/README.md` | Source for [EmergentDNA](https://github.com/EmergentDNA) org homepage (Actions sync) |

## Organization homepage ([EmergentDNA](https://github.com/EmergentDNA))

Edit **`org-profile/README.md`**. On push to **`main`**, a workflow may copy it to **`EmergentDNA/.github/profile/README.md`**. See **`docs/ORG_PROFILE_SYNC.md`**.

## Versioning

Use **semver** tags (`v1.0.0`). Breaking changes to the PRNG or constructor require a **major** bump.

## License

MIT — see `LICENSE`.
