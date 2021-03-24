const { Schema, model } = require('mongoose');

const teamSchema = new Schema({

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  id: {
    type: Number,
  },
  pokemons: [
    {
      id: Number,
      abbilities: Schema.Types.Mixed,
      types: [String],
      baseStats: {
        hp: {
          type: Number,
          max: 255,
        },
        atk: {
          type: Number,
          max: 255,

        },
        def: {
          type: Number,
          max: 255,

        },
        spa: {
          type: Number,
          max: 255,

        },
        spd: {
          type: Number,
          max: 255,

        },
        spe: {
          type: Number,
          max: 255,

        },
      },
      name: String,
      moveset: [{
        name: String,
      }],
      num: Number,
    },
  ],
});

module.exports = model('Team', teamSchema);
