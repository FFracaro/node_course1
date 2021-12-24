const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)

let clientDao = {
    findAllClients: findAllClients,
    deleteClient: deleteClient,
    updateClient: updateClient,
    createClient: createClient,
    findClientByID: findClientByID
}

function findAllClients()
{
    return Cliente.findAll()
}

function deleteClient(id) {
    return Cliente.destroy({
        where: {id:id}
    })
}

function updateClient(bodyUpdated, id) {
    return Cliente.update(bodyUpdated, {
        where: {id:id}
    })
}

function createClient(newBody) {
    return Cliente.create(newBody)
}

function findClientByID(id)
{
    return Cliente.findByPk(id)
}

module.exports = clientDao;