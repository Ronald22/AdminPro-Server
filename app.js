// Importaciones
const express = require('express');
const mongoose = require('mongoose');

// Inicializacion de variables
const app = express();

// Conección BD
mongoose.connection.openUri('mongodb://localhost:27017/adminpro-db', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online')
})

// Rutas
app.get('/', (req, res) => {

});

// Iniciar Servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto: \x1b[32m%s\x1b[0m', '3000');
})