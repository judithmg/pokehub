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
});

module.exports = model('Move', movesSchema);
