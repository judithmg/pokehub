const { model, Schema } = require('mongoose');

const abilitiesSchema = new Schema({
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

module.exports = model('Abilities', abilitiesSchema);
