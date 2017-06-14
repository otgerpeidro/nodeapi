var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const segundo = (new Date()).getSeconds();
  res.render('index', { 
    title: 'Express',
    valor: '<script>alert("cuidado!")</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [
      {name: 'Smith', age:20},
      {name: 'Thomas', age:40},
      {name: 'Jones', age:32}
    ]
  });
});


//Recibiendo parametros en la ruta
router.get('/paramenruta/:id', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok recibido el id: ' + req.params.id);
});

router.get('/paramopcional/:dato?', (req, res, next) => {
  console.log('paramopcional',req.params);
  res.send('ok');
});

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('param', req.params);
  res.send('ok1');
});

//Recibiendo parametros en la query-string

router.get('/enquerystring', (req, res, next) => {
  console.log('req.query', req.query);
  res.send('ok2');
});

// Recibiendo parametros en el body (cuerpo de la peticion)

router.put('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok en el body');
});





module.exports = router;
