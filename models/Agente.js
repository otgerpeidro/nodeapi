"use strict";

const mongoose = require('mongoose');

// primero definimos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        index: true,
        unique: true
    }
})

// luego creamos el modelo
const Agente = mongoose.model('Agente', agenteSchema);

// Realmente no es necesario exportarlo, ya que en otros sitios 
//podriamos recuperar el modelo usando : mongoose.model('Agente') 
module.exports = Agente;

