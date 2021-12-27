const Seq = require('sequelize');
const Sequelize = require('./../model/index')
let Address = require('./../model/address')(Sequelize, Seq.DataTypes)
let Cliente = require('./../model/client')(Sequelize, Seq.DataTypes)

Address.hasOne(Cliente);
Cliente.belongsTo(Address);

let clientDao = {
    findAllClients: findAllClients,
    deleteClient: deleteClient,
    updateClient: updateClient,
    createClient: createClient,
    findClientByID: findClientByID
}

function findAllClients()
{
    return Cliente.findAll({
        include: {
            model: Address,
            required: true
        }
    })
}

async function deleteClient(clientId, addressId) {
    await Sequelize.transaction(async (t) => {
        const cl = await Cliente.destroy({where: { id : clientId }}, { transaction: t })
        const ad = await Address.destroy({where: { id: addressId }}, { transaction: t })

        return cl + ad;
    })
}

async function updateClient(bodyUpdated, clientId, addressId) {
    await Sequelize.transaction(async (t) => {

        const cl = await Cliente.update({
            cliente: bodyUpdated.cliente,
            cpf: bodyUpdated.cpf,
            email: bodyUpdated.email,
            telefonefixo: bodyUpdated.telefonefixo,
            telefonemovel: bodyUpdated.telefonemovel,
        }, { where: { id: clientId } }, { transaction: t });

        const ad = await Address.update({
            cep: bodyUpdated.cep,
            complemento: bodyUpdated.complemento
        }, { where: { id: addressId} }, { transaction: t });

        return cl + ad;
    
    });    
}

async function createClient(newBody) {
 
        await Sequelize.transaction(async (t) => {

            const ad = await Address.create({
                cep: newBody.cep,
                complemento: newBody.complemento
            }, { transaction: t });

            const cl = await Cliente.create({
                cliente: newBody.cliente,
                cpf: newBody.cpf,
                email: newBody.email,
                telefonefixo: newBody.telefonefixo,
                telefonemovel: newBody.telefonemovel,
                addressId: ad.id 
            }, { transaction: t })

            return ad + cl;
        
        });        
}

function findClientByID(id)
{
    return Cliente.findOne({
        where: {id: id},
        include: {
            model: Address,
            required: true
        }
    })
}

module.exports = clientDao;