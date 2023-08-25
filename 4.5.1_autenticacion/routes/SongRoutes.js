const express = require('express');
const router = express.Router();
const validateJWT = require('../utils/validate');

const songs = [
    {
        title: 'starlight',
        artist: 'Muse'
    },
    {
        title: 'La plata',
        artist: 'Diómedes Díaz'
    },
    {
        title: 'Anti-hero',
        artist: 'Taylor Swift'
    },
];

router.get('/', validateJWT ,(request, response) => {
    response.send(songs);
})

module.exports = router;