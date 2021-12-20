const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = (req, res) => {
    Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log("UPDATED CLIENT."))
}

module.exports = (req, res) => {
    Supplier
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log('UPDATED SUPPLIER.'))
}