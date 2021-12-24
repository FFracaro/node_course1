const { check } = require('express-validator');
const expressValidator = require('express-validator')

exports.validateSupplier = [
    check('nomefantasia').exists( { checkFalsy : true } ).isAlpha(),
    check('cnpj').exists( { checkFalsy : true } ).isNumeric().isLength( { min : 14, max : 14 } ),
    check('email').exists( { checkFalsy : true } ).normalizeEmail().isEmail(),
    check('telefonefixo').exists( { checkFalsy : true } ).isNumeric().isLength( { min: 8, max: 15} ),
    check('telefonemovel').exists( { checkFalsy : true } ).isNumeric().isLength( { min: 8, max: 15} ),
    (req, res, next) => {
        const errors = expressValidator.validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        else next()
    }
];

exports.validateId = [
    check('id').exists( { checkFalsy : true } ).isNumeric(),
    (req, res, next) => {
        const erros = expressValidator.validationResult(req)
        if(!erros.isEmpty()){
            return res.status(422).json({ erros: erros.array( )})
        }
        else next()
    }
];