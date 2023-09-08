const express = require('express');

const router = express.Router();

const {
    addUser
} = require('../controllers/UserController');

//Agregar un usuario nuevo
router.post('/', addUser);

module.exports = router;