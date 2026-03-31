/**
 * emergent-dna-core.js — v1.0.0
 *
 * GENOTYPE ONLY:
 *   • seeded randomness + trait vectors for individuals of a species
 *   • no Three.js, p5, WebGL, Tone; no spawn/hold/death scheduling
 *
 * Canonical constructor matches Document 5 / ARS system-prompt:
 *   this.s = (seed >>> 0) || 1
 */
(function (global) {
  'use strict';

  function SeedRng(seed) {
    this.s = (seed >>> 0) || 1;
  }
  SeedRng.prototype.next = function () {
    var x = Math.sin(this.s++) * 10000;
    return x - Math.floor(x);
  };
  SeedRng.prototype.range = function (a, b) {
    return a + this.next() * (b - a);
  };
  SeedRng.prototype.pick = function (arr) {
    return arr[Math.floor(this.next() * arr.length)];
  };
  SeedRng.prototype.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(this.next() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };

  /** Document 5 name — same constructor as SeedRng */
  var Rand = SeedRng;

  function SpeciesGenome(seed, geneSchema) {
    this.seed = seed >>> 0;
    this.rng = new SeedRng(this.seed);
    this.speciesTraits = {
      metabolic: this.rng.range(0.85, 1.15),
      plasticity: this.rng.range(0.7, 1.3),
    };
    this.geneSchema = geneSchema || {};
    this._extra = {};
    var self = this;
    Object.keys(this.geneSchema).forEach(function (key) {
      var pair = self.geneSchema[key];
      self._extra[key] = self.rng.range(pair[0], pair[1]);
    });
  }

  function expressIndividual(species, defaultTraits) {
    var rng = species.rng;
    var st = species.speciesTraits;
    var out = {};
    var defs =
      defaultTraits ||
      {
        span: function (r, sp) {
          return r.range(0.4, 1.0) * st.plasticity;
        },
        hue: function (r) {
          return r.range(0, 360);
        },
        expressedGrow: function (r, sp) {
          return r.range(4200, 10000) / st.metabolic;
        },
        expressedFade: function (r, sp) {
          return r.range(4500, 8000) / st.metabolic;
        },
        breathAmp: function (r) {
          return r.range(0.8, 2.8);
        },
        breathPhase: function (r) {
          return r.range(0, Math.PI * 2);
        },
      };

    Object.keys(defs).forEach(function (k) {
      out[k] = defs[k](rng, species);
    });
    Object.assign(out, species._extra);
    return out;
  }

  /** Uses Math.random — not part of deterministic seeded world */
  function mutateSeed(seed, magnitude) {
    var m = magnitude == null ? 0x1fffff : magnitude;
    return (seed ^ (Math.floor(Math.random() * m) + 1)) >>> 0;
  }

  var api = {
    SeedRng: SeedRng,
    Rand: Rand,
    SpeciesGenome: SpeciesGenome,
    expressIndividual: expressIndividual,
    mutateSeed: mutateSeed,
  };

  global.EmergentDNA = api;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
