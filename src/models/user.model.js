const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const User = db.define('user', {
    id: {
        field: 'Id',
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        field: 'FirstName',
        type: DataTypes.TEXT,
        allowNull: false
    },
    lastName: {
        field: 'LastName',
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        field: 'Email',
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        field: 'Password',
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
    }
}, {
    timestamps: false,
    schema: 'courses',
    tableName: 'Users'
});

module.exports = User;