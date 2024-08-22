const mongoose = require('mongoose');

const paysSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Pays = mongoose.model('Pays', paysSchema);

module.exports = Pays;