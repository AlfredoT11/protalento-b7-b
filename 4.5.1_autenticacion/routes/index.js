const express = require('express');
const router = express.Router();

const UserRoutes = require('./UserRoutes');
const SongRoutes = require('./SongRoutes');


router.use('/users', UserRoutes);
router.use('/songs', SongRoutes);


module.exports = router;