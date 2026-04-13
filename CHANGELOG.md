# Changelog

All notable changes to this repository will be documented in this file.

## [Unreleased]

- GitHub Action **Sync org profile**: push `org-profile/README.md` to **`EmergentDNA/.github`** (requires secret `ORG_DOTGITHUB_TOKEN`). See **`docs/ORG_PROFILE_SYNC.md`**.

## [1.1.0] — 2026-04-13

- **Social learning layer:** `SocialPool` (record / centroid / clear; optional `localStorage`), `nudgeSpeciesFromPool`, `learnFromPeers`. Documented in **`docs/SPEC.md`**. Canonical **`Rand` / `SeedRng`** unchanged.

## [1.0.0] — 2026-03-31

- Initial public release as canonical **genotype** module (`SeedRng`, `Rand` alias, `SpeciesGenome`, `expressIndividual`).
- `docs/SPEC.md` summarizes Document 5 (three DNA types, rules for seeded vs relational pieces).
- Example: `examples/minimal.html`.
- GitHub Pages landing: `docs/index.html`.
