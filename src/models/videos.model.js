const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Video = db.define('video', {
    id: {
        field: 'Id',
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        field: 'Title',
        type: DataTypes.TEXT,
        allowNull: false
    },
    url: {
        field: 'Url',
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdOn: {
        field: 'CreatedOn',
        type: DataTypes.DATE,
        allowNull: false
    },
    courseId: {
        field: 'CourseId',
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    schema: 'courses',
    tableName: 'Videos'
});

module.exports = Video;