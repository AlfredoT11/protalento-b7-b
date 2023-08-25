const express = require('express');
const router = express.Router();


// Creación de un token que nos permita posteriormente acceder a los recursos que requieren autorización
router.post('/auth', (request, response) => {
    /*
    {
	    "nombre": "Pepito",
	    "password": "gatitos59"
    }
    */
    const body = request.body;

    // crear un jwt = token
    const token = 'token';

    response.send(token);
});

module.exports = router;