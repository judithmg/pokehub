const { Schema, model } = require('mongoose');

const rankingSchema = new Schema({

  email: String,
  userId: String,
  ranking: {
    won: Number,
    lost: Number,
  },
  won: Number,
  lost: Number,
});

module.exports = model('Ranking', rankingSchema);
