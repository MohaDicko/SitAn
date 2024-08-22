const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
  designation: {
    type: String,
    required: true,
    trim: true
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie',
    default: null
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Categorie = mongoose.model('Categorie', categorieSchema);

module.exports = Categorie;