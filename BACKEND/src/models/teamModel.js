const { Schema, model } = require('mongoose');

const teamSchema = new Schema({

  user: { type: Schema.Types.ObjectId, ref: 'User' },
  id: {
    type: Number,
  },
  pokemons: [
    {
      id: Number,
      moveset: [{
        name: String,
        moveId: Number,
      }],
      pokeData: { type: Schema.Types.ObjectId, ref: 'Pokemon' },
    },
  ],
});

module.exports = model('Team', teamSchema);
