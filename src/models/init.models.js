const Category = require("./category.model");
const Course = require("./courses.model");
const User = require("./user.model");
const UserCourses = require("./userCourses.model");
const Video = require("./videos.model");

const initModels = () => {
    Course.hasMany(Video, {
        foreignKey: 'courseId'
    });
    Video.belongsTo(Course);

    Category.hasMany(Course, {
        foreignKey: 'categoryId'
    }); 
    Course.belongsTo(Category);

    User.belongsToMany(Course, {
        through: UserCourses
    });
    Course.belongsToMany(User, {
        through: UserCourses
    });
};

module.exports = initModels;