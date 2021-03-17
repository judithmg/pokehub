const { Schema, model } = require('mongoose');

const teamSchema = new Schema({

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
