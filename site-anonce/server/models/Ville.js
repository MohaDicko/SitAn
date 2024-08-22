const mongoose = require('mongoose');

const villeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  pays_id: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Ville = mongoose.model('Ville', villeSchema);

module.exports = Ville;