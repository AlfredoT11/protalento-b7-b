const express = require('express');

const router = express.Router();
const { ClientController } = require('../controllers');
// crear
router.post('/', ClientController.createClient);

// leer
router.get('/', (req, res) => res.send({ message: "Se leen todos"}));
router.get('/:id', (req, res) => res.send({ message: "Se leen uno"}))

// actualizar
router.put('/:id', (req, res) => res.send({ message: "Se sustituyó"}));

router.patch('/:id', (req, res) => res.send({ message: "Se modificó una o más propiedades"}));

// delete
router.delete('/:id', (req, res) => res.send({ message: "Se borró"}));



module.exports = router;