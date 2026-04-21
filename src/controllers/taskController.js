const taskService = require('../services/taskService');

exports.getAll = async (req, res) => {
    try {
        const tasks = await taskService.getAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
};

exports.getById = async (req, res) => {
    try {
        const task = await taskService.getById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefa' });
    }
};

exports.create = async (req, res) => {
    try {
        const { title, status, category } = req.body;
        if (!title) return res.status(400).json({ error: 'Título é obrigatório' });
        const task = await taskService.create({ title, status, category });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
};

exports.update = async (req, res) => {
    try {
        const { title, status, category } = req.body;
        if (!title) return res.status(400).json({ error: 'Título é obrigatório' });
        const task = await taskService.update(req.params.id, { title, status, category });
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
};

exports.partialUpdate = async (req, res) => {
    try {
        const task = await taskService.partialUpdate(req.params.id, req.body);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
};

exports.delete = async (req, res) => {
    try {
        const task = await taskService.delete(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
        res.json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
};