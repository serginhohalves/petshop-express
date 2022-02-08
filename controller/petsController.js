
let modelPet = require('../model/pets.json'); // Importa o model


const petsController = {    
    
    listaPets:(req, res) => {
        res.send(modelPet);
    }

}


module.exports = petsController;

