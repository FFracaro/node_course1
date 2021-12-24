const {DB} = require('./../config')
const Seq = require('sequelize')

const Sequelize = new Seq(
    DB, {
        operatorAliases: Seq.Op
    })

Sequelize
    .authenticate()
    .then(() => console.log("Sequelize Ok."))
    .catch(() => console.log("Error sequelize."))

Sequelize.sync()

module.exports = Sequelize
