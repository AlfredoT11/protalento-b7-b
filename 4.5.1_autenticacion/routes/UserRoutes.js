const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_super_cool';

// Creación de un token que nos permita posteriormente acceder a los recursos que requieren autorización
router.post('/auth', (request, response) => {
    /*
    {
	    "nombre": "Pepito",
	    "password": "gatitos59"
    }
    */
    const { nombre, password} = request.body;

    if(nombre === 'Pepito' && password === 'gatitos59') {
        // crear un jwt = token
        const token = jwt.sign({nombre}, SECRET_KEY, { expiresIn: '3m'});

        return response.send(token);
    }
    return response.status(401).send('Not authorized');
});

module.exports = router;