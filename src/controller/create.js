const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => console.log('INSERTED CLIENT'))
}

module.exports = (req, res) => {
    Supplier
        .create(req.body)
        .then(() => console.log('INSERTED SUPPLIER'))
}