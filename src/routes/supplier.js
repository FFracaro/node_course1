let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('supplier_list');
})

router.get('/new', (req, res) => {
    res.render('supplier_new')
})

module.exports = router;