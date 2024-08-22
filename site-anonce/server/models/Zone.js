const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  ville_id: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Zone = mongoose.model('Zone', zoneSchema);

module.exports = Zone;