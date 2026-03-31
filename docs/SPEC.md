# Emergent DNA — specification (summary)

This file summarizes **Document 5** from the ARS *system-prompt* workflow. If this file and the full Document 5 ever disagree, **reconcile them** and bump the spec version.

---

## Definition

Every piece in this body of work can produce a visual state that has never existed before and will never exist again in exactly that form. **Emergent DNA** is the mechanism that makes this true. It is **not** the artwork. It is **not** the visual logic, the color palette, or the physics. It is the **source of uniqueness** — the input that, when fed into the piece’s rules, determines exactly which version of that piece you are seeing at this moment.

The word *emergent* is precise. **The DNA does not draw anything.** It is a number, a position, or a sequence of inputs that the system transforms into a specific world. The same rules applied to different DNA produce a completely different world. The same rules applied to the same DNA reproduce that world exactly.

**This repository** implements the **Seeded** stream as **`Rand` / `SeedRng`** plus optional **species / individual** helpers. **Relational** and **Hybrid** types are defined by rules below; they do not require this JS file when the piece correctly avoids hidden seeds.

---

## The three DNA types

### Type 1 — Seeded

A single integer — the **seed** — is chosen (often `Date.now() % 99991` in sketches). Every visual parameter that varies in the seeded world flows from that seed through **`Rand`**. The seed *is* the DNA for that mode.

### Type 2 — Relational

The DNA is the **input of the people present**. Do not instantiate **`Rand`** for uniqueness. Do not add hidden seeds that fix the work before interaction.

### Type 3 — Hybrid

Seeded structural core + **intentionally unseeded** surface (e.g. grain). Document what is in and out of the seed.

---

## Canonical `Rand` class (Seeded + Hybrid structural core)

Must be **identical** in every seeded piece:

```javascript
class Rand {
  constructor(seed) { this.s = (seed >>> 0) || 1; }
  next() { const x = Math.sin(this.s++) * 10000; return x - Math.floor(x); }
  range(a, b) { return a + this.next() * (b - a); }
}

const rng = new Rand(Date.now() % 99991);
```

In **`emergent-dna-core.js`**, the same implementation is exposed as **`SeedRng`** and aliased as **`Rand`**.

**Rules for seeded pieces**

- Varying parameters in the seeded world flow through **`rng.next()`** or **`rng.range()`**.
- Do not use **`Math.random()`** for anything that is part of the seeded world.
- **`Math.random()`** is allowed only for things intentionally outside the seed (e.g. small velocity jitter, hybrid grain).

**Rules for relational pieces**

- Do not instantiate **`Rand`** for the work’s core uniqueness.

---

## Genome vs lifecycle vs phenotype

| Layer | Meaning |
|-------|---------|
| **DNA / genome** | Seed + PRNG + trait rules (this repo). |
| **Lifecycle / ecology** | When entities spawn, hold, die — **not** in this core file. |
| **Phenotype** | Three.js, p5, WebGL, pixels, sound — **consumes** traits. |

---

## Piece reference (from Document 5 table)

| Piece | DNA type | Rand? |
|-------|----------|-------|
| Bloom / Release | Seeded | Yes |
| Traveling Landscape | Seeded | Yes |
| Surrender Machines | Hybrid | Structural seed (target: canonical Rand) |
| Shared Ground | Relational | No |
| Living Commons | Relational | No |
