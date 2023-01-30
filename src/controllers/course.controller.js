const Course = require("../models/courses.model");

// POST /courses
const createCourse = async (req, res) => {
    const { name, description, categoryId } = req.body;

    const newCourse = Course.build({
        name,
        description,
        categoryId,
        createdOn: Date.now()
    });

    await newCourse.save();

    res.status(200).json(newCourse);
}

// GET /courses
const getCourses = async (req, res) => {
    const courses = await Course.findAll({
        attributes: [ 'id', 'name', 'description', 'createdOn', 'modifiedOn' ]
    });

    res.status(200).json(courses);
};

module.exports = {
    createCourse,
    getCourses
}