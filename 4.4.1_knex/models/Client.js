const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createClient = (client) => {
    return database('cliente')
    .insert(client);
};

const getClients = () => {
    return database.select('*').from('cliente');
}

const getOneClient = (id) => {
    return database.select('*').from('cliente').where('dni', id);
}

module.exports = {
    createClient,
    getClients,
    getOneClient
}
