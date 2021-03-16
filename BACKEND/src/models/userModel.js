const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
  },

  creationDate: { type: Date, default: Date.now },

  teams: [
    {
      id: {
        type: Number,
      },
      pokemons: [
        {
          name: {
            type: String,
          },
          num: {
            type: Number,
            min: 1,
          },

        },
      ],
    },
  ],

});

module.exports = model('User', userSchema);
