const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
  },

  username: { type: String },

  profilePicture: {
    type: String,
  },

  creationDate: {
    type: Date,
    default: Date.now,
  },

  teams: [
    {
      id: {
        type: Schema.Types.Mixed,
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
    },
  ],

});

module.exports = model('User', userSchema);
