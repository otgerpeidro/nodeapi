"use strict";

const mongoose = require('mongoose');
const conn = mongoose.connection;

conn.on('error', err => {
  console.log('Error de conexion', err);
  process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB');
});

mongoose.connect('mongodb://localhost/cursonode');



// no necesito exportar nada, ya que mongose se guarda la conexion internamente