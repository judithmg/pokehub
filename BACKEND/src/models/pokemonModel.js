const { model, Schema } = require('mongoose');

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  num: {
    type: Number,
    required: true,
    min: 1,
  },
  genderRatio: {
    M: {
      type: Number,
    },
    F: {
      type: Number,
    },
  },
  baseStats: {
    hp: {
      type: Number,
      required: true,
      max: 255,
    },
    atk: {
      type: Number,
      required: true,
      max: 255,

    },
    def: {
      type: Number,
      required: true,
      max: 255,

    },
    spa: {
      type: Number,
      required: true,
      max: 255,

    },
    spd: {
      type: Number,
      required: true,
      max: 255,

    },
    spe: {
      type: Number,
      required: true,
      max: 255,

    },
  },
  abilities: {
    0: {
      type: String,
      required: true,
    },
    1: {
      type: String,
    },
    H: {
      type: String,
    },
  },
  color: {
    type: String,
  },
  prevo: {
    type: String,
  },
  eggGroups: {
    type: Array,
  },
  evo: {
    type: String,
  },
  evoType: {
    type: String,
  },
  evoItem: {
    type: String,
  },
  evoMove: {
    type: String,
  },
  heightm: {
    type: Number,
  },
  weightkg: {
    type: Number,
  },
  evoLevel: {
    type: Number,
  },

});

module.exports = model('Pokemon', pokemonSchema);
