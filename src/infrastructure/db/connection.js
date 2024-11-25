const mysql = require('mysql2/promise');

(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost', // Cambia esto si es necesario
    user: 'root',
    password: 'rootpassword',
    database: 'backend_cloud',
  });

  const [rows] = await connection.query('SHOW TABLES');
  console.log(rows);
  connection.end();
})();

