const express = require('express');
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



module.exports = {
    getUser,
    createUser
};