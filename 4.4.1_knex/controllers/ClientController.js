const ClientModel = require('../models/Client');

const createClient = (req, res) => {
    ClientModel.createClient(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    });
};

const getAllClients = (req, res) => {
    ClientModel.getClients()
    .then((data) => {
        return res.status(200).send({ message: data })
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    });
}

const getOneClient = (req, res) => {
    ClientModel.getOneClient(req.params.id)
    .then((data) => {
        return res.status(200).send({ message: data })
    })
    .catch((error) => {
        return res.status(500).send({ message: error })
    })
}

module.exports = {
    createClient,
    getAllClients,
    getOneClient
};