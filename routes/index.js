var express = require('express'); // Importando o express
var router = express.Router();  

const petsController = require('../controller/petsController'); // Importa o controller
const servicoController = require('../controller/serviceController'); // Importa o controller



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Aula 03-02-2022' });
});

// router.get('/servico', function(req, res) {
//   res.send(petsController.listaPets());
// });

router.get('/servico', servicoController.listaServicos);
router.get('/pet', petsController.listaPets);




module.exports = router;
