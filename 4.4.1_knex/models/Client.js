const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createClient = (client) => {
    return database('cliente')
    .insert(client);
};

const getClients = () => {
    return database.select('*').from('cliente');
}

module.exports = {
    createClient,
    getClients
}
