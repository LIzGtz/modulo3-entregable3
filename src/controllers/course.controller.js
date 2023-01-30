const Category = require("../models/category.model");
const Course = require("../models/courses.model");
const Video = require("../models/videos.model");

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
    const options = {
        attributes: [ 'id', 'name', 'description', 'createdOn', 'modifiedOn' ]
    };

    if (req.query.full != undefined) {
        options.include = [ Video, Category ];
    }

    const courses = await Course.findAll(options);

    res.status(200).json(courses);
};

// PUT /courses/:courseId
const updateCourse = async (req, res) => {
    // 1. Obtener el courseId del curso a actualizar
    const { courseId } = req.params;

    // 2. Obtener el curso de la base de datos
    const course = await Course.findByPk(courseId);

    // 3. Si el curso == null -> 404
    if (course == null) {
        res.status(404).end();
        return;
    }

    // 4. Obtener los datos del body
    const { description } = req.body; // Solo se permite description
    course.description = description;

    // 5. Guardar curso
    await course.save();

    res.status(200).end();
}

module.exports = {
    createCourse,
    getCourses,
    updateCourse
}