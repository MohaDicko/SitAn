const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Remplacez par votre configuration de base de données

const Marque = sequelize.define('Marque', {
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
});

module.exports = Marque;