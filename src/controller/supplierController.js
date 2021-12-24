const supplierDao = require('./../dao/supplierDAO')

let supplierController = {
    findAllSuppliers: findAllSuppliers,
    deleteSupplier: deleteSupplier,
    updateSupplier: updateSupplier,
    createSupplier: createSupplier,
    findSupplierByID: findSupplierByID
}

function findAllSuppliers(req, res)
{
    supplierDao.findAllSuppliers().then((suppliers) => {
        return res.render('supplier_list', {
            title: "Lista de Fornecedores",
            suppliers: suppliers,
            msg: req.query.msg
        })
    })
}

function deleteSupplier(req, res) {
    supplierDao.deleteSupplier(req.params.id)
        .then(() => res.redirect('/supplier?msg=5'))
        .catch((err) => res.redirect('/supplier?msg=6'))
}

function updateSupplier(req, res) {
    supplierDao.updateSupplier(req.body, req.params.id)
        .then(() => res.redirect('/supplier?msg=3'))
        .catch((err) => res.redirect('/supplier?msg=4')) 
}

function createSupplier(req, res)
{
    supplierDao.createSupplier(req.body)
        .then(() => res.redirect('/supplier?msg=1'))
        .catch((err) => res.redirect('/supplier?msg=2')) 
}

function findSupplierByID(req, res) {
    supplierDao.findSupplierByID(req.params.id)
    .then((supplier) => {
        return res.render('supplier_edit', {
            supplier: supplier
        })
    })
}

module.exports = supplierController;