const connection = require("../knexfile")['development'];

const database = require('knex')(connection);

const createClient = (client) => {
    return database('cliente')
    .insert(client);
};

module.exports = {
    createClient,
}
