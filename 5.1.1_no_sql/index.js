const express = require('express');

const server = express();

const PORT = 3000;

const routes = require('./routes');

server.use('/api/v1', routes);

server.listen(PORT, () => {
    console.log(`Funcionando en puerto ${PORT}`);
});