const db = require('../database/connection');

exports.getAll = async () => {
    const [rows] = await db.execute('SELECT * FROM tasks');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM tasks WHERE id = ?', [id]);
    return rows[0];
};

exports.create = async (data) => {
    const { title, status, category } = data;
    const [result] = await db.execute(
        'INSERT INTO tasks (title, status, category) VALUES (?, ?, ?)',
        [title, status || 'pendente', category || 'geral']
    );
    return { id: result.insertId, title, status, category };
};

exports.update = async (id, data) => {
    const { title, status, category } = data;
    const [result] = await db.execute(
        'UPDATE tasks SET title = ?, status = ?, category = ? WHERE id = ?',
        [title, status, category, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, title, status, category };
};

exports.partialUpdate = async (id, data) => {
    const fields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(data), id];
    const [result] = await db.execute(
        `UPDATE tasks SET ${fields} WHERE id = ?`,
        values
    );
    if (result.affectedRows === 0) return null;
    return { id, ...data };
};

exports.delete = async (id) => {
    const [result] = await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
    if (result.affectedRows === 0) return null;
    return { id };
};