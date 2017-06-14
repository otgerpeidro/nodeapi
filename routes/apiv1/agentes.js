"use strict";

var express = require('express');
var router = express.Router();
const Agente = requier('../../models/Agente');
// no seria necesario requerir el modulo de Agente ya que podriamos recuperar con 
// mongoose.model('Agente')

/* GET /apiv1/agentes */
router.get('/', function(req, res, next) {
    
    Agente.find().exec((err, agentes) => {
        if (err) {
            next(err); // le decimos a express que devuelva el error
            return;
        }
    res.json({ success: true, result: agentes});

    });
    
});


module.exports = router;