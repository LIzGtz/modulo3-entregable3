const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Course = require('./courses.model');
const User = require('./user.model');

const UserCourses = db.define('userCourses', {
    userId: {
        field: 'UserId',
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: User,
            key: 'id'
        }
    },
    courseId: {
        field: 'CourseId',
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Course,
            key: 'id'
        }
    },
    createdOn: {
        field: 'CreatedOn',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now()
    }
}, {
    schema: 'courses',
    tableName: 'UserCourses',
    timestamps: false
});

module.exports = UserCourses;