const taskRepository = require('../repositories/taskRepository');

exports.getAll = async () => {
    return await taskRepository.getAll();
};

exports.getById = async (id) => {
    return await taskRepository.getById(id);
};

exports.create = async (data) => {
    return await taskRepository.create(data);
};

exports.update = async (id, data) => {
    return await taskRepository.update(id, data);
};

exports.partialUpdate = async (id, data) => {
    return await taskRepository.partialUpdate(id, data);
};

exports.delete = async (id) => {
    return await taskRepository.delete(id);
};