const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  categorie: {
    type: String,
    required: true,
    trim: true
  },
  utilisateur_id: {
    type: String,
    required: true,
    trim: true
  },
  tel: {
    type: String,
    required: true,
    trim: true
  },
  tel_whatsapp: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;