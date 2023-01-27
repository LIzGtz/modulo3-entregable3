const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = 8000;

const sequelize = new Sequelize('postgresql://postgres:ruut@localhost:5432/entregable3');

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the server"})
});

// definir endpoints
app.get('/categories', async (req, res) => {
    const [results, metadata] = await sequelize.query('SELECT * FROM courses."Categories" c;');
    
    res.status(200).json(results);
})

app.listen(PORT, () => {
    console.log(`Server up and running. Listening on port ${PORT}.`);
});