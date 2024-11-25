const mysql = require('mysql2/promise');
require('dotenv').config();

const connectWithRetry = async () => {
  let retries = 5;
  while (retries) {
    try {
      const pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'rootpassword',
        database: process.env.DB_NAME || 'backend_cloud',
        port: process.env.DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });

      // Verifica la conexión
      await pool.query('SELECT 1');
      console.log(`Conexión a la base de datos exitosa en el host: ${process.env.DB_HOST || 'localhost'}`);
      return pool;
    } catch (err) {
      console.error('Error al conectar a la base de datos:', err.message);
      retries -= 1;
      console.log(`Reintentando conexión... Quedan ${retries} intentos`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  throw new Error('No se pudo conectar a la base de datos después de varios intentos');
};

module.exports = connectWithRetry();

