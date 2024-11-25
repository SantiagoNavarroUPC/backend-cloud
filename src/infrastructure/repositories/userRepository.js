const db = require('../db/mysql');

class UserRepository {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async save(user) {
    const { name, lastname, email, phone, type } = user;
    const [result] = await db.query(
      'INSERT INTO users (name, lastname, email, phone, type) VALUES (?, ?, ?, ?, ?)',
      [name, lastname, email, phone, type]
    );
    return { id: result.insertId, ...user };
  }

  async update(id, user) {
    const { name, lastname, email, phone, type } = user;
    await db.query(
      'UPDATE users SET name = ?, lastname = ?, email = ?, phone = ?, type = ? WHERE id = ?',
      [name, lastname, email, phone, type, id]
    );
    return { id, ...user };
  }

  async delete(id) {
    await db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = new UserRepository();
