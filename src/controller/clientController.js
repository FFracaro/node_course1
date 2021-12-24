const clientDao = require('./../dao/clientDAO')

let clientController = {
    findAllClients: findAllClients,
    deleteClient: deleteClient,
    updateClient: updateClient,
    createClient: createClient,
    findClientByID: findClientByID
}

function findAllClients(req, res)
{
    clientDao.findAllClients().then((clients) => {
        return res.render('client_list', {
            title: "Lista de Clientes",
            clients: clients,
            msg: req.query.msg
        })
    })
}

function deleteClient(req, res) {
    clientDao.deleteClient(req.params.id)
        .then(() => res.redirect('/client?msg=5'))
        .catch((err) => res.redirect('/client?msg=6'))
}

function updateClient(req, res) {
    clientDao.updateClient(req.body, req.params.id)
        .then(() => res.redirect('/client?msg=3'))
        .catch((err) => res.redirect('/client?msg=4')) 
}

function createClient(req, res)
{
    clientDao.createClient(req.body)
        .then(() => res.redirect('/client?msg=1'))
        .catch((err) => res.redirect('/client?msg=2')) 
}

function findClientByID(req, res) {
    clientDao.findClientByID(req.params.id)
    .then((client) => {
        return res.render('client_edit', {
            client: client
        })
    })
}

module.exports = clientController;