const Seq = require('sequelize')
let sequelize = require('./../model/index')
let Supplier = require('./../model/supplier')(sequelize, Seq.DataTypes)

module.exports = {
    async list(req, res)
    {
        await Supplier
        .findAll()
        .then((suppliers) => {
            return res.render('supplier_list', {
                title: "Lista de Fornecedores",
                suppliers: suppliers,
                msg: req.query.msg
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },
    async create(req, res)
    {
        await Supplier
        .create(req.body)
        .then(() => res.redirect('/supplier?msg=1'))
        .catch((err) => res.redirect('/supplier?msg=2'))       
    },
    async update(req, res)
    {
        await Supplier
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/supplier?msg=3'))
        .catch((err) => res.redirect('/supplier?msg=4')) 
    },
    async delete(req, res)
    {
        await Supplier
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/supplier?msg=5'))
        .catch((err) => res.redirect('/supplier?msg=6'))
    },
    async edit(req, res)
    {
        await Supplier
        .findByPk(req.params.id)
        .then((supplier) => {
            return res.render('supplier_edit', {
                supplier: supplier
            })
        })
    }
} 