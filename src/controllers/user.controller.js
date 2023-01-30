const Course = require('../models/courses.model');
const User = require('../models/user.model');

const getUser = async(req, res) => {
    const { userId } = req.params;
    console.log(`UserId = ${userId}`);

    const user = await User.findByPk(parseInt(userId), {
        attributes: [ 'id', 'firstName', 'lastName', 'email' ]
    });

    if (user == null) {
        res.status(404).end();
    } else {
        res.status(200).json(user);
    }
};

const createUser = async (req, res) => {
    const { firstName, lastName, password, email } = req.body;
    // Creamos instancia del modelo User representando al nuevo usuario
    const newUser = User.build({ firstName, lastName, password, email, createdOn: Date.now() });
    // Guardamos el nuevo usuario en la base de datos
    await newUser.save();

    res.status(200).json(newUser);
};


// Actualiza los datos del usuario. Esta peticion se ejecutará con PUT /users/:userId con
// los datos a actualizar en el body. Regresa 200 (OK) si es exitoso. 404 (Not found) si no encuentra el usuario.
// o 500 si hay un error
const updateUser = async (req, res) => {
    // 1. Obtener el userId del usuario a actualizar
    const { userId } = req.params;

    // 2. Obtener el usuario de la base de datos
    const user = await User.findByPk(parseInt(userId), {
        attributes: [ 'id', 'firstName', 'lastName', 'password' ]
    });

    // 3. Si user == null -> 404
    if (user == null) {
        res.status(404).end();
        return;
    }

    // 4. Obtener el body y actualizar
    const { firstName, lastName, password } = req.body;

    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;

    // 5. Guardar user en base de datos
    await user.save();

    res.status(200).end();
    
};

// POST /users/:userId/courses
const assignToCourse = async (req, res) => {
    // 1. Obtener el usuario por medio del 'userId'.
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
        include: Course
    });

    if (user == null) {
        res.status(404).end();
        return;
    }

    // 2. Obtener el curso del body
    const { courseId } = req.body;
    const course = await Course.findByPk(courseId);

    if (course == null) {
        res.status(400).json({ message: `Course '${courseId} does not exist.` });
        return;
    }

    user.addCourse(course);

    await user.save();

    user.getCourses();

    res.status(200).json(user);
}

module.exports = {
    getUser,
    createUser,
    updateUser, 
    assignToCourse
};