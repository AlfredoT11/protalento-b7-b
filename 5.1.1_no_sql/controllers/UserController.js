const {
    createUser
} = require('../services/UserService');

module.exports = {
    addUser: (req, res) => {
        const { name, email, password } = req.body;
        createUser({ name, email, password })
            .then((user) => {
                return res.status(201).send(user);
            })
            .catch((err) => {
                console.log('error mega importante super necesario saber que paso en el instante', err);
                return res.status(500).send('Hubo un error');
            });
    }
}
