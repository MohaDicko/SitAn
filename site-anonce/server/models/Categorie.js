const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorie = sequelize.define('Categorie', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  parent_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'Categories', // Nom de la table référencée
      key: 'id'
    }
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = Categorie;