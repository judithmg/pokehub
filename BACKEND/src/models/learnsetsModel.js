const { model, Schema } = require('mongoose');

const learnsetsSchema = new Schema({
  learnset: {
    type: Array,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('Learnset', learnsetsSchema);
