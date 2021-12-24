let express = require('express')
let router = express.Router()
let clientController = require('./../controller/clientController')
let clientValidator = require('./../validation/clientValidation')

router.get('/', clientController.findAllClients)

router.get('/new', (req, res) => {
    res.render('client_new')
})

router.get('/edit/:id', clientValidator.validateId, clientController.findClientByID)

router.post('/', clientValidator.validateClient, clientController.createClient)

router.put('/:id', clientValidator.validateClient, clientController.updateClient)

router.delete('/:id', clientValidator.validateId, clientController.deleteClient)

module.exports = router;