const express = require('express');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const courseController = require('./controllers/course.controller');
const initModels = require('./models/init.models');
const videoController = require('./controllers/video.controller');
const app = express();
const PORT = 8000;

initModels();

app.use(express.json()); // Permite recibir application/json en el request body

app.get('/users/:userId', userController.getUser);
app.post('/users', userController.createUser);
app.put('/users/:userId', userController.updateUser);
app.post('/users/:userId/courses', userController.assignToCourse);

app.post('/categories', categoryController.createCategory);
app.delete('/categories/:categoryId', categoryController.deleteCategory);

app.post('/courses', courseController.createCourse);
app.get('/courses', courseController.getCourses);
app.put('/courses/:courseId', courseController.updateCourse);

app.post('/courses/:courseId/videos', videoController.createVideo);
app.delete('/courses/:courseId/videos/:videoId', videoController.deleteVideo);

app.listen(PORT, () => {
    console.log(`Server up and running. Listening on port ${PORT}.`);
});