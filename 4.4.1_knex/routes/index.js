const express = require('express');
const router = express.Router();

const ClientRoutes = require('./ClientRoutes');
const ProductRoutes = require('./ProductRoutes');
const SaleRoutes = require('./SaleRoutes');

router.use('/clients', ClientRoutes);
router.use('/products', ProductRoutes);
router.use('/sales', SaleRoutes);


module.exports = router;