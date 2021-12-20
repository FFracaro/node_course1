const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = (req, res) => {
    Cliente
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

    Supplier
        .findAll()
        .then((suppliers) => {
            console.log('IM NOT OK')
        })
        .catch((err) => {
            console.log(err)
        })
} 

/*
module.exports = (req, res) => {
    Supplier
        .findAll()
        .then((suppliers) => {
            console.log('IM NOT OK')
        })
        .catch((err) => {
            console.log(err)
        })
}*/