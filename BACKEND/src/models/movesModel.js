const { model, Schema } = require('mongoose');

const movesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  accuracy: {
    type: [],
  },
  basePower: {
    type: Number,
  },
  category: {
    type: String,
  },
  id: {
    type: String,
    required: true,

  },
  pp: {
    type: Number,
  },
  num: {
    type: Number,
  },
  priority: {
    type: Number,
  },
  critRatio: {
    type: Number,
  },
  target: {
    type: String,
  },
  type: {
    type: String,
  },
  contestType: {
    type: String,
  },

});

module.exports = model('Move', movesSchema);
