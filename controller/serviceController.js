let modelServico = require('../model/servico.json'); // Importa o model


const servicoController = {

    listaServicos:(req, res) => {
        res.send(modelServico);
    }
}

module.exports = servicoController;