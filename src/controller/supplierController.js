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

async function deleteSupplier(req, res) {
    let supplier = await supplierDao.findSupplierByID(req.params.id)

    supplierDao.deleteSupplier(req.params.id, supplier.addressId)
        .then(() => res.redirect('/supplier?msg=5'))
        .catch((err) => res.redirect('/supplier?msg=6'))
}

async function updateSupplier(req, res) {
    let supplier = await supplierDao.findSupplierByID(req.params.id)

    supplierDao.updateSupplier(req.body, req.params.id, supplier.addressId)
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