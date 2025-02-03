const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Chintu2@2002', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
