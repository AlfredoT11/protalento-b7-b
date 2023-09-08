const Task = require('../models/Task');

const findAllTasks = async () => {
    return await Task.find();
};

const createTask = async (task) => {
    return await Task.create(task);
};

const searchTasks = async (params) => {
    return await Task.find(params);
}

module.exports = {
    findAllTasks,
    createTask,
    searchTasks
};