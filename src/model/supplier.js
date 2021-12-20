const sequelize = require('./index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('supplier', {
        nomefantasia: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        email: DataTypes.STRING,
        telefonefixo: DataTypes.STRING,
        telefonemovel: DataTypes.STRING
    }, {
        timesstamps: false
    })
}