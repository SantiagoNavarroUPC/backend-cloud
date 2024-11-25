const db = require('../db/mysql');

class ProductRepository {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  async save(product) {
    const { name, description, price, category_id, state } = product;
    console.log('Datos recibidos para guardar el producto:', product);
  
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, category_id, state) VALUES (?, ?, ?, ?, ?)',
      [name, description || null, price, category_id, state]
    );
    console.log('Producto creado con ID:', result.insertId);
  
    return { id: result.insertId, ...product };
  }
  

  async update(id, product) {
    const { name, description, price, category_id, state } = product;
    await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, state = ? WHERE id = ?',
      [name, description, price, category_id, state, id]
    );
    return { id, ...product };
  }

  async delete(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  }
}

module.exports = new ProductRepository();
