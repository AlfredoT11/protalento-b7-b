const express = require('express');
const { SaleController } = require('../controllers')

const router = express.Router();

// crear
router.post('/', SaleController.createSale);

// leer
router.get('/', (req, res) => res.send({ message: "Se leen todos"}));
router.get('/:id', SaleController.getDetailedSale);

// actualizar
router.put('/:id', (req, res) => res.send({ message: "Se sustituyó"}));

router.patch('/:id', (req, res) => res.send({ message: "Se modificó una o más propiedades"}));

// delete
router.delete('/:id', (req, res) => res.send({ message: "Se borró"}));



module.exports = router;