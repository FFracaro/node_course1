let express = require('express')
let router = express.Router()
let clientController = require('./../controller/clientController')

router.get('/', clientController.list)

router.get('/new', (req, res) => {
    res.render('client_new')
})

router.get('/edit/:id', clientController.edit)

router.post('/', clientController.create)

router.put('/:id', clientController.update)

router.delete('/:id', clientController.delete)

module.exports = router;