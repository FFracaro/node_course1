const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clients) => {
            console.log(clients)
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = (req, res) => {
    Supplier
        .findAll()
        .then((suppliers) => {
            console.log(suppliers)
        })
        .catch((err) => {
            console.log(err)
        })
}