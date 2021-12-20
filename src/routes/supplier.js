let express = require('express')
let router = express.Router()
let find = require('./../controller/find')
let create = require('./../controller/create')
let remove = require('./../controller/remove')
let update = require('./../controller/update')

router.get('/', find)

router.get('/new', (req, res) => {
    res.render('supplier_new')
})

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)

module.exports = router;