const express = require('express');
const userController = require('./controllers/user.controller');
const Category = require('./models/category.model');
const Course = require('./models/courses.model');
const initModels = require('./models/init.models');
const app = express();
const PORT = 8000;

initModels();

app.use(express.json()); // Permite recibir application/json en el request body

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the server"})
});

app.get('/users/:userId', userController.getUser);
app.post('/users', userController.createUser);
app.put('/users/:userId', userController.updateUser);

// definir endpoints
app.get('/categories', async (req, res) => {
    // const [results, metadata] = await sequelize.query('SELECT * FROM courses."Categories" c;');
    const results = await Category.findAll({
        include: Course
    });
    res.status(200).json(results);
})

app.listen(PORT, () => {
    console.log(`Server up and running. Listening on port ${PORT}.`);
});