const Seq = require('sequelize')
const Sequelize = require('./../model/index')
let Address = require('./../model/address')(Sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(Sequelize, Seq.DataTypes)

Address.hasOne(Supplier)
Supplier.belongsTo(Address)

let supplierDao = {
    findAllSuppliers: findAllSuppliers,
    deleteSupplier: deleteSupplier,
    updateSupplier: updateSupplier,
    createSupplier: createSupplier,
    findSupplierByID: findSupplierByID
}

function findAllSuppliers()
{
    return Supplier.findAll({
        include: {
            model: Address,
            required: true
        }
    })
}

async function deleteSupplier(supplierId, addressId) {
    await Sequelize.transaction(async (t) => {
        const cl = await Supplier.destroy({where: { id : supplierId }}, { transaction: t })
        const ad = await Address.destroy({where: { id: addressId }}, { transaction: t })

        return cl + ad;
    })
}

async function updateSupplier(bodyUpdated, clientId, addressId) {

    await Sequelize.transaction(async (t) => {

        const su = await Supplier.update({
            nomefantasia: bodyUpdated.nomefantasia,
            cnpj: bodyUpdated.cnpj,
            email: bodyUpdated.email,
            telefonefixo: bodyUpdated.telefonefixo,
            telefonemovel: bodyUpdated.telefonemovel,
        }, { where: { id: clientId } }, { transaction: t });

        const ad = await Address.update({
            cep: bodyUpdated.cep,
            complemento: bodyUpdated.complemento
        }, { where: { id: addressId } }, { transaction: t });

        return su + ad;
    
    }); 
}

async function createSupplier(newBody) {

    await Sequelize.transaction(async (t) => {

        const ad = await Address.create({
            cep: newBody.cep,
            complemento: newBody.complemento
        }, { transaction: t });

        const su = await Supplier.create({
            nomefantasia: newBody.nomefantasia,
            cnpj: newBody.cnpj,
            email: newBody.email,
            telefonefixo: newBody.telefonefixo,
            telefonemovel: newBody.telefonemovel,
            addressId: ad.id 
        }, { transaction: t })

        return ad + su;
    
    }); 
}

function findSupplierByID(id)
{
    return Supplier.findOne({
        where: {id: id},
        include: {
            model: Address,
            required: true
        }
    })
}

module.exports = supplierDao;