const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the server"})
});

app.listen(PORT, () => {
    console.log(`Server up and running. Listening on port ${PORT}.`);
});