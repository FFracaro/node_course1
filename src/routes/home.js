let express = require('express')
let router = express.Router()


// Middlewares podem ser utilizados para autenticação
// verificar os dados do usuário antes de prosseguir
// salvar dados em logs/ler-escrever em arquivos
// consultas em bancos de dados
// entre outros
router.use((req, res, next) => {
    req.attr = 'atributo de request'
    console.log('Middleware executado com sucesso.')
    next()
})

router.get('/', (req, res) => {
    //res.send('Hello.')
    //res.render('home')  // caminho para home está descrito em app.js
    
    res.render('home', {
        message : "Hello"
    })
})

router.get('/hello', (req, res) => {res.send('Aloha ' + req.attr)})

router.get('/request/:name', (req, res) => {
    console.log(req.params.name)
    res.send(req.params.name)
})

// Requisição no Postman, criando as keys no body com a opção x-www-form-urlenconded
router.post('/body', (req, res) => {
    res.json(req.body)
})

// pode-se modificar o status da resposta
// status http 
// 201 significa que algo foi criado/persistido
router.get('/response', (req, res) => {
    //res.status(400).send('Bad request'),

/*     res.status(200).json({
        name: "Aloha",
        lastname: "Ahore"
    }) */

/*     // carregando arquivo da view
    res.render('index', {
        title: 'Page title'
    }) */

})

module.exports = router;
