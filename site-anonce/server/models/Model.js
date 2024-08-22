const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  marque_id: {
    type: String,
    required: true,
    trim: true
  },
  annee: {
    type: Number,
    required: true
  },
  caracteristiques: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;