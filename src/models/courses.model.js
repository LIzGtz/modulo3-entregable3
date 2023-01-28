const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Category = require('./category.model');

const Course = db.define('course', {
    id: {
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
    description: {
        field: 'Description',
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdOn: {
        field: 'CreatedOn',
        type: DataTypes.DATE,
        allowNull: false
    },
    modifiedOn: {
        field: 'ModifiedOn',
        type: DataTypes.DATE,
        allowNull: true
    },
    categoryId: {
        field: 'CategoryId',
        type: DataTypes.TEXT,
        allowNull: false,
        references: {
            model: Category,
            key: "id"
        }
    }
}, {
    timestamps: false,
    schema: 'courses',
    tableName: 'Courses'
});

module.exports = Course;