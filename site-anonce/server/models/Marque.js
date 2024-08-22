const mongoose = require('mongoose');

const marqueSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  pays_origine: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Marque = mongoose.model('Marque', marqueSchema);

module.exports = Marque;