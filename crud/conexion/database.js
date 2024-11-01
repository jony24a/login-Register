const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Usuario de MySQL
    password: '', // Contraseña de MySQL
    database: 'turistas' // Nombre de la base de datos creada en phpMyAdmin
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
});

// Rutas y lógica de la API aquí...

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
