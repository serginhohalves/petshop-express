var express = require('express');
var router = express.Router();
let petshop = require('../model/servico.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula 03-02-2022' });
});

router.get('/servico', function(req, res, next) {
  res.send(petshop);
});


module.exports = router;
