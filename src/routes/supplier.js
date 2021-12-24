let express = require('express')
let router = express.Router()
let supplierController = require('./../controller/supplierController')
let supplierValidator = require('./../validation/supplierValidation')

router.get('/', supplierController.findAllSuppliers)

router.get('/new', (req, res) => {
    res.render('supplier_new')
})

router.get('/edit/:id', supplierValidator.validateId, supplierController.findSupplierByID)

router.post('/', supplierValidator.validateSupplier, supplierController.createSupplier)

router.put('/:id', supplierValidator.validateSupplier, supplierController.updateSupplier)

router.delete('/:id', supplierValidator.validateId, supplierController.deleteSupplier)

module.exports = router;