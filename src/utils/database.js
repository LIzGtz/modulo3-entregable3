const { Sequelize } = require('sequelize');

const db = new Sequelize('postgresql://postgres:ruut@localhost:5432/entregable3');

module.exports = db;