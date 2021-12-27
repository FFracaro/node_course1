module.exports = (sequelize, DataTypes) => {
    return sequelize.define('address', {
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len: {
                    args: [8, 8],
                    msg: "Campo deve ter 11 caracteres"
                }
            }
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len: {
                    args: [5, 150],
                    msg: "Campo deve ter entre 5 e 150 caracteres"
                }
            }
        }
    }, {
        timesstamps: false
    })
}