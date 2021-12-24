const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

let supplierDao = {
    findAllSuppliers: findAllSuppliers,
    deleteSupplier: deleteSupplier,
    updateSupplier: updateSupplier,
    createSupplier: createSupplier,
    findSupplierByID: findSupplierByID
}

function findAllSuppliers()
{
    return Supplier.findAll()
}

function deleteSupplier(id) {
    return Supplier.destroy({
        where: {id:id}
    })
}

function updateSupplier(bodyUpdated, id) {
    return Supplier.update(bodyUpdated, {
        where: {id:id}
    })
}

function createSupplier(newBody) {
    return Supplier.create(newBody)
}

function findSupplierByID(id)
{
    return Supplier.findByPk(id)
}

module.exports = supplierDao;