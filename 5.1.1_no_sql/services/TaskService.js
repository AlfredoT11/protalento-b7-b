const Task = require('../models/Task');

const findAllTasks = async () => {
    return await Task.find();
};

const createTask = async (task) => {
    return await Task.create(task);
};

module.exports = {
    findAllTasks,
    createTask,
};