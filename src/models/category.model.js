const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Category = db.define('category', {
    id: {
        // Nuestra base de datos existe ya. Necesitamos decirle cual es el nombre de la columna correcto. 
        // Al parecer a postgres considera diferente mayus/minus.
        field: 'Id',
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        field: 'Name',
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdOn: {
        field: 'CreatedOn',
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    schema: 'courses',
    tableName: 'Categories'
    // tableName: 'courses.Categories'
});

module.exports = Category;