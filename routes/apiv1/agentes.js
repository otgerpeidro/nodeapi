"use strict";

var express = require('express');
var router = express.Router();
const Agente = require('../../models/Agente');
// no seria necesario requerir el modulo de Agente ya que podriamos recuperar con 
// mongoose.model('Agente')

/* GET /apiv1/agentes */
router.get('/', function(req, res, next) {
    
    const name = req.query.name;
    const age = req.query.age;

    // creo el filtro vacío
    const filter = {};

    if (name) {
        filter.name = name;
    }

    if (age) {
        filter.age = age;
    }


    Agente.list(filter, null, null, null, null, (err, agentes) => {

        if (err) {
            next(err); // le decimos a express que devuelva el error
            return;
        }
    res.json({ success: true, result: agentes});

    });
    
});

// POST /apiv1/agentes

router.post('/', (req, res,next) => {
    console.log(req.body);
    // creamos un objeto de tipo Agente
    const agente = new Agente(req.body);
    // lo guardamos en la base de datos
    agente.save((err, agenteGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ success: true, result: agenteGuardado});
    });
});



module.exports = router;