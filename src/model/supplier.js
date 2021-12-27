module.exports = (sequelize, DataTypes) => {
    return sequelize.define('supplier', {
        nomefantasia: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len: {
                    args: [5, 100],
                    msg: "Campo deve ter entre 5 e 100 caracteres"
                }
            }
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len: {
                    args: [14, 14],
                    msg: "Campo deve ter 14 caracteres"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len: {
                    args: [4, 100],
                    msg: "Campo deve ter entre 4 e 100 caracteres"
                }
            }
        },
        telefonefixo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len:{
                    args: [6, 15],
                    msg: "Campo deve ter entre 6 e 15 números"
                }
            }
        },
        telefonemovel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Campo não pode ser vazio"
                },
                len:{
                    args: [6, 15],
                    msg: "Campo deve ter entre 6 e 15 números"
                }
            }            
        }
    }, {
        timesstamps: false
    })
}