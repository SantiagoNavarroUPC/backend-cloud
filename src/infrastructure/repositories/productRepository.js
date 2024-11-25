const db = require('../db/mysql');

class ProductRepository {
  async findAll() {
    try {
      const [rows] = await db.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
      throw new Error('Error al obtener productos');
    }
  }

  async findById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
      if (rows.length === 0) {
        throw new Error('Producto no encontrado');
      }
      return rows[0];
    } catch (error) {
      console.error(`Error al buscar producto con ID ${id}:`, error.message);
      throw new Error(`Error al buscar producto con ID ${id}`);
    }
  }

  async save(product) {
    const { name, description, price, category_id, state } = product;
    try {
      console.log('Datos recibidos para guardar el producto:', product);

      const [result] = await db.query(
        'INSERT INTO products (name, description, price, category_id, state) VALUES (?, ?, ?, ?, ?)',
        [name, description || null, price, category_id, state]
      );

      console.log('Producto creado con ID:', result.insertId);

      return { id: result.insertId, ...product };
    } catch (error) {
      console.error('Error al guardar producto:', error.message);
      throw new Error('Error al guardar producto');
    }
  }

  async update(id, product) {
    const { name, description, price, category_id, state } = product;
    try {
      const [result] = await db.query(
        'UPDATE products SET name = ?, description = ?, price = ?, category_id = ?, state = ? WHERE id = ?',
        [name, description, price, category_id, state, id]
      );

      if (result.affectedRows === 0) {
        throw new Error('Producto no encontrado para actualizar');
      }

      console.log('Producto actualizado con ID:', id);
      return { id, ...product };
    } catch (error) {
      console.error(`Error al actualizar producto con ID ${id}:`, error.message);
      throw new Error(`Error al actualizar producto con ID ${id}`);
    }
  }

  async delete(id) {
    try {
      const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
      if (result.affectedRows === 0) {
        throw new Error('Producto no encontrado para eliminar');
      }

      console.log('Producto eliminado con ID:', id);
    } catch (error) {
      console.error(`Error al eliminar producto con ID ${id}:`, error.message);
      throw new Error(`Error al eliminar producto con ID ${id}`);
    }
  }
}

module.exports = new ProductRepository();

