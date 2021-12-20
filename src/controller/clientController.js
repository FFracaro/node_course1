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
                clients: clients
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
        .then(() => console.log('INSERTED CLIENT'))        
    },
    async update(req, res)
    {
        await Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("UPDATED CLIENT."))
    },
    async delete(req, res)
    {
        await Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log('DELETED CLIENT.'))
        .catch((err) => {
            console.log(err)
        })
    }
} 