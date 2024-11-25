const mysql = require('mysql2/promise');
require('dotenv').config();

const connectWithRetry = async () => {
  let retries = 5; // Número de intentos
  while (retries) {
    try {
      const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306,
      });
      console.log('Conexión a la base de datos establecida.');
      return pool;
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error.message);
      retries -= 1;
      console.log(`Reintentando... (${retries} intentos restantes)`);
      await new Promise((res) => setTimeout(res, 5000)); // Esperar 5 segundos
    }
  }
  throw new Error('No se pudo conectar a la base de datos.');
};

const pool = connectWithRetry();

module.exports = pool;

