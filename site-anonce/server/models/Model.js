const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Remplacez par votre configuration de base de données

const Model = sequelize.define('Model', {
  marqueId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Marques', // Nom de la table référencée
      key: 'id'
    }
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
});

module.exports = Model;