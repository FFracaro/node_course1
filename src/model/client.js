const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('client', {
        cliente: DataTypes.STRING,
        cpf: DataTypes.STRING,
        email: DataTypes.STRING,
        telefonefixo: DataTypes.STRING,
        telefonemovel: DataTypes.STRING
    }, {
        timesstamps: false
    })
}