const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)

module.exports = {
    async list(req, res)
    {
        await Cliente
        .findAll()
        .then((clients) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clients,
                msg: req.query.msg
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },
    async create(req, res)
    {
        await Cliente
        .create(req.body)
        .then(() => res.redirect('/client?msg=1'))
        .catch((err) => res.redirect('/client?msg=2'))        
    },
    async update(req, res)
    {
        await Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=3'))
        .catch((err) => res.redirect('/client?msg=4'))  
    },
    async delete(req, res)
    {
        await Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/client?msg=5'))
        .catch((err) => res.redirect('/client?msg=6'))  
    },
    async edit(req, res)
    {
        await Cliente
        .findByPk(req.params.id)
        .then((client) => {
            return res.render('client_edit', {
                client: client
            })
        })
    }
} 