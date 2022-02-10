
const servicos = require('../model/servico.json');

const indexController = {
    index:(req,res) =>{ 
        
        // res.render('index');
        res.render('index',{listaServico:servicos});
    }
}


module.exports = indexController;