const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Remplacez par votre configuration de base de données

const Zone = sequelize.define('Zone', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
});

module.exports = Zone;