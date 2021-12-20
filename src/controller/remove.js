const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Cliente = require('./../model/client')(sequelize, Seq.DataTypes)
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = (req, res) => {
    Cliente
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

module.exports = (req, res) => {
    Supplier
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => console.log('DELETED SUPPLIER.'))
        .catch((err) => {
            console.log(err)
        })
}