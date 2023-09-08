const User = require('../models/User');

const createUser = async (user) => {
    return await User.create(user);
};

module.exports = {
    createUser
}