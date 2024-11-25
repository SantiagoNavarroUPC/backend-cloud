const db = require('./mysql'); // Asegúrate de la ruta correcta

(async () => {
  try {
    const connection = await db.getConnection();
    console.log('Conexión exitosa a la base de datos MySQL');
    connection.release(); // Liberar la conexión al pool
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
})();
