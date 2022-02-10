var express = require('express'); // Importando o express
var router = express.Router();  

const petsController = require('../controller/petsController'); // Importa o controller
const servicoController = require('../controller/serviceController'); // Importa o controller
const usuarioController = require('../controller/usuarioController'); // Importa o controller
const contatoController = require('../controller/contatoController'); // Importa o controller
const cadastroController = require('../controller/cadastroController'); // Importa o controller
const errorController = require('../controller/errorController'); // Importa o controller
const indexController = require('../controller/indexController'); // Importa o controller
const loginController = require('../controller/loginController'); // Importa o controller
const sobreController = require('../controller/sobreController'); // Importa o
const { append } = require('express/lib/response');












//
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Aula 03-02-2022' });
});

// router.get('/servico', function(req, res) {
//   res.send(petsController.listaPets());
// });

router.get('/servico', servicoController.listaServicos);
router.get('/pet', petsController.listaPets);
router.get('/cadastro', usuarioController.cadastro);
router.get('/contato',contatoController.contato);
router.get('/cadastro',cadastroController.cadastro);
router.get('/error',errorController.error);
router.get('/index',indexController.index);
router.get('/login',loginController.login);
router.get('/sobre',sobreController.sobre);


module.exports = router;





