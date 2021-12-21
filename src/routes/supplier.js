let express = require('express')
let router = express.Router()
let supplierController = require('./../controller/supplierController')

router.get('/', supplierController.list)

router.get('/new', (req, res) => {
    res.render('supplier_new')
})

router.get('/edit/:id', supplierController.edit)

router.post('/', supplierController.create)

router.put('/:id', supplierController.update)

router.delete('/:id', supplierController.delete)

module.exports = router;