const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
  },

  username: { type: String },

  profilePicture: {
    type: String,
    default: '',
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
