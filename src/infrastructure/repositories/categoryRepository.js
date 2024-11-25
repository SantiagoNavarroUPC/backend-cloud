const db = require('../db/mysql');

class CategoryRepository {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return rows[0];
  }

  async save(category) {
    const { name, description, state } = category;
    const [result] = await db.query(
      'INSERT INTO categories (name, description, state) VALUES (?, ?, ?)',
      [name, description, state]
    );
    return { id: result.insertId, ...category };
  }

  async update(id, category) {
    const { name, description, state } = category;
    await db.query(
      'UPDATE categories SET name = ?, description = ?, state = ? WHERE id = ?',
      [name, description, state, id]
    );
    return { id, ...category };
  }

  async delete(id) {
    await db.query('DELETE FROM categories WHERE id = ?', [id]);
  }
}

module.exports = new CategoryRepository();
