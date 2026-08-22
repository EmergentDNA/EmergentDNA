# Machine DNA — chronicle

**Canonical meaning of Machine DNA for every Walhimer Studio piece and repo.**

If a sketch comment, essay, deck, or site doc disagrees with *meaning* here, update that other file — or amend this chronicle deliberately. Do not invent a third definition.

**Repo:** [walhimer-studio/Machine-DNA](https://github.com/walhimer-studio/Machine-DNA)  
**Revised:** 2026-08-22

---

## Origin (why this repo exists)

One morning the idea of a **DAO** — an autonomous organization with rules, members, votes, shares on a chain — landed as more than crypto machinery. A lot of what a typical business does can be automated; the interesting question was whether that pattern applied to **artwork**.

The answer was closer to **DNA** than to a business plan: identity, heredity, many expressions of one lineage, an organization that can live without a single ego holding every decision. That led to writing **Emergent DNA** (Document 5 / genotype spec). **Machine DNA** is the clearer studio name for the full practice — genotype plus ecology plus phenotype plus bodies.

This repository exists so that definition can be **versioned and shared** across every piece repo, instead of drifting inside one artwork site.

---

## What this repo is (and is not)

| Layer | Lives where | Role |
|-------|-------------|------|
| **Genotype / DNA** | **This repo** (`src/emergent-dna-core.js`, [`SPEC.md`](./SPEC.md)) | Seed, `Rand` / `SeedRng`, species/individual traits, optional `SocialPool` |
| **Ecology / lifecycle** | Each piece (or a future shared ecology module) | Lifeline, spawn/death, narrative arc, rebirth, scars as events |
| **Phenotype** | Each piece / install | p5, Three.js, OF, Pure Data, LED, MP4 pixels & audio |
| **Practice mirror (site)** | [`walhimer.github.io/docs/machine-dna-chronicle.md`](https://github.com/walhimer-studio/walhimer.github.io/blob/main/docs/machine-dna-chronicle.md) | Points here + **worked examples** (One Row, Black Dove, …) |

**This repository does not draw, spatialize, or score.** It is the source of uniqueness. Phenotype consumes traits; ecology schedules life.

**Naming**

| Name | Use |
|------|-----|
| **Machine DNA** | Studio / public system name (preferred) |
| **Emergent DNA** | Historical + genotype-package name (Document 5, `Rand`, this code’s npm-era label) |

Same practice; different altitude. Prefer **Machine DNA** in grants, catalogs, and new writing.

---

## One sentence

**Machine DNA** is a seed-driven organism with a lifeline: one genome expressed as **co-created** image and sound across many **bodies**, aging and rebirthing so the work never hardens into a single perfect loop.

---

## Many species (not one forever project)

Machine DNA is a **studio system**, not a single artwork. You can run **many species** side by side across years:

| | |
|-|-|
| **Today** | e.g. Centered / One Row — one species, its seeds, lifeline, bodies |
| **Six months later** | Mint a **new species** (new `speciesId`, new trait/gene contract, new catalog series) |
| **Meanwhile** | The previous species **keeps existing** — its seeds still replay, its N150 / Black Dove / wall bodies still valid |

A species is a **lineage with one shared contract**. New species = new contract. Do not silently mutate an old species’ gene schema under published seeds; that breaks replay. Evolve by **generation within a species**, or by **founding a new species**.

**Examples of distinct species (illustrative):** Centered · Invisible Layer · Surrender Machines · Bloom — each its own `speciesId`, catalog path, and bodies.

Species can carry different temperaments. **Surrender Machines**, for example, is the species where the machine practices yield — ego, agency, pride, and attachment stay human; the machine is somewhere else for surrender to happen until you can take more of it yourself. That story lives with the species; the *system* rule is: many species, one Machine DNA contract.

---

## Three DNA types ([SPEC.md](./SPEC.md))

| Type | DNA is… | `Rand`? | Examples |
|------|---------|---------|----------|
| **1 — Seeded** | Integer seed → all varying params through `Rand` | Required | Bloom, Traveling Landscape, **Centered / One Row → Black Dove** |
| **2 — Relational** | People present / live input | **No** (no hidden seed for uniqueness) | Shared Ground, Living Commons |
| **3 — Hybrid** | Seeded structural core + intentional unseeded surface | Structural core only | Surrender Machines (target) |

Black Dove / N150 narrative pieces are **Type 1** unless you explicitly document otherwise. Do not plan Type 1 delivery seeds and Type 2 board pieces as the same organism.

---

## Vocabulary

| Term | Meaning | Not this |
|------|---------|----------|
| **DNA / genome** | Seed + PRNG + trait rules (this repo) | Not the MP4; not the p5 file alone |
| **Species** | One lineage with a shared trait/gene contract (`speciesId` / catalog series). Many species can coexist; founding a new one does not retire the old | Not “Machine DNA” (= the whole system); not one sketch file |
| **Individual** | One expressed genome under a species | |
| **Organism** | Running life: age, stage, phases (ecology) | Not a static export |
| **Body** | Host channel: browser, N150, wall, Black Dove file, OF, PD, LED | Not a convenience fork of the art |
| **Expression** | Phenotype reads the same snapshot — `visualExpress` · `soundExpress` | Not a second PRNG; not “soundtrack later” |
| **Lifeline** | Ecology of a life: aging, stages, end condition (death / rebirth / silence→black). **Duration is per species** — read catalog / `{artwork}.md`; never assume a studio-wide constant | Not 8 minutes globally; not `480000` unless that species documents it; not camera Z; not clip length |
| **Narrative arc** | Dramatic shape *inside* one life — things happen; build, crest, fall, silence | Not the same as lifeline duration; arc can complete before or after a nominal lifespan |
| **Solidification** | Freeze one seeded run (genome + clock + both expressions) for replay | Not A/V from two different processes |
| **Slice / excerpt** | Timed window of a solidified run (e.g. 2 min Black Dove) | Not the whole life compressed |
| **Social / chronicle learning** | `SocialPool` / scar events biasing later individuals | Not pixel or audio stream sync |

**Mnemonic:** *Genotype in Machine-DNA. Ecology in the piece. Phenotype consumes traits. Bodies are where it plays. Many species over time.*

---

## Non‑negotiable contract

### 1. Genotype rules (this repo)

- Seeded world params flow through **`Rand` / `SeedRng`** — see [`SPEC.md`](./SPEC.md).
- No `Math.random()` inside the seeded world.
- Gene / trait schema is versioned; adding a gene mid-series changes replay — freeze before delivery.

### 2. Co-creation of image and sound (phenotype)

```
                    ┌── visualExpress(snapshot)  → screen / MP4 video
ecology.update(dt) ─┤     (traits from genotype)
                    └── soundExpress(snapshot)   → speakers / MP4 audio
```

Same tick. Same snapshot. Neither masters the other.

| Pattern | Machine DNA? |
|---------|----------------|
| Both expressions read genome/snapshot | **Yes** |
| Motion / RGB → piano as primary coupling | **No** (label Type 2 or experiment) |
| Analyzer → shaders as primary driver | **No** |
| Separate BPM clock + separate visual seed | **No** |
| Video from run A + audio from run B | **No** (unless same solidification) |

### 3. Lifeline + narrative (ecology)

Works age. **There is no studio-wide lifeline duration.** Eight minutes (`480000` ms) is a **One Row / Centered catalog value** in some sketches — not Machine DNA law. Other species use other lifespans (kernel examples use 3600 s; demo machines vary; N150 pieces may run all day).

**Lifeline is ecology, not a copied constant.** It means:

- the organism has a **life** (birth → stages → end or rebirth)  
- **things happen** inside that life (narrative arc, scars, surrender)  
- end may be **time**, **narrative completion** (silence → black), or **species rules** documented in catalog  

Before setting `LIFESPAN_MS` (or equivalent) in code, read **`catalog/{species}/{artwork}.md`**. Agents must **not** impose `480000` on a piece unless that catalog entry says so.

Every life also has dramatic shape (compose per species), e.g.:

- Slow → pulse → crescendo → taper  
- Strong → hold → drop → second crest → **silence → black** → rebirth  

### 4. Many bodies, one organism

| Body | Role |
|------|------|
| Browser / desk | Authoring |
| **N150 (always-on)** | Full life, all day |
| Wall / AbelSign | Edition body |
| **Black Dove** | Solidified **slice** (30s–2min), Type 1 seeded |
| OF / Pure Data / LED | Spatial / instrument hosts |

Prefer **one piece + role/format params**, not three rewritten artworks for square / portrait / landscape.

### 5. Life vs slice

| | Full organism | Slice |
|-|---------------|-------|
| Where | N150, install, desk all-day | Black Dove, jury clip |
| Duration | Lifeline | Platform window (e.g. 2 min) |
| Meaning | Living arc(s) | Chapter of same solidified run |

**Default for narrative Type 1 species:** long life on N150; Black Dove gets an excerpt — clip length ≠ lifeline unless you deliberately ship a short-life loop.

### 6. Solidification

1. Lock seed + schema version  
2. Run ecology with both expressions  
3. Capture A/V from **that** run  
4. Name file with seed (+ format)  
5. Point delivery back at live code  

A video is an **output**, never a substitute for the system.

---

## Known tension (do not paper over)

| Source | Says |
|--------|------|
| **This repo `SPEC.md`** | Canonical `Rand` = sine `Math.sin(this.s++)` stream |
| **Site delivery notes** (`blackdove-system.md`) | Prefer hash/`splitmix32` for bit-exact cross-engine replay; sine may differ by JS engine |

**Rule until closed:** shipped / locked seeds document **which engine** they used. Do not silently switch PRNG under a published seed. Closing this is a **semver-major** decision in this repo if the canonical `Rand` changes.

Site organism host code (`walhimer.github.io/machine-aesthetic/emergent-dna/`) is an **ecology + express() experiment** — it must call **this** genotype (or document a deliberate fork). It is not a second definition of DNA.

---

## Checklist — every piece

1. DNA type (1 / 2 / 3) named in catalog  
2. Species named (`speciesId`) — new work may found a new species  
3. Seed minted (Type 1 / Hybrid core) or relational rules stated (Type 2)  
4. Genotype from **this** package (or documented fork + version)  
5. Lifeline + narrative arc documented **per species** (no global `480000` / 8 min unless catalog says so)  
6. Dual expression (or explicitly mute / votive)  
7. Bodies listed (browser · N150 · wall · Black Dove · OF · PD · …)  
8. Solidification / slice rule if exporting  
9. Social pool / lineage mode if used  

---

## One paragraph (grants / Black Dove / advisors)

*Machine DNA is the studio system in which artworks live as organisms: a genotype (seed and traits), an ecology (lifeline and narrative), and a phenotype (image and sound co-created from the same state). Many species can coexist across years; founding a new species does not erase the ones that came before. Bodies differ — desk, always-on machine, wall, instrument host, or a two-minute distribution file that is only a solidified slice of a longer life. Outputs are permitted; substitution is not. The work never settles into one perfect masterpiece because it ages, ends, and begins again.*

---

*Walhimer Studio — Machine DNA chronicle (canonical). Spec: `docs/SPEC.md`. Code: `src/emergent-dna-core.js`. Site worked examples: walhimer.github.io `docs/machine-dna-chronicle.md`.*
