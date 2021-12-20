// modulo que não devem ir para produção:
// npm install <modulo> --save-dev
// para produção
// npm install <modulo> --save

// remover pacote
// npm uninstall <modulo>

//NODE PURO
/* const http = require('http');
const handle = require('./handle');
const hello = require('console-log-hello-world');

let server = http.createServer(handle);

server.listen(3000, () => {console.log('Servidor online na porta 3000.');}); */

//---------------------------------------------------------------------------------------
// npm install nodemon --save-dev - automatiza o servidor, dá autorefresh quanto algo é modificado
// adicionar em scripts no package.json "start": "nodemon ./src/app.js --delay 1"
// cuidado caso o arquivo estiver em outro diretório
// npm start para iniciar o servidor e o refresher

// Usando express
// body parser para trabalhar com requisições post com json entre outros

const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes/home')
const client = require('./routes/client')
const req = require('express/lib/request')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))


// request. response e callback
// se tudo estiver correto no middleware
// prosegue para o callback
// tem de ser executado antes da rota
/* app.use((req, res, next) => {
    console.log('Middleware executado com sucesso.')
    next()
})

app.get('/middleware', (req, res) => {
    res.send('Not middleware.')
})
 */

// forçando middleware a gerar um erro
app.get('/mid', (req, res, next) => {
    next(new Error('Erro'))
})

// Rotas
app.use('/', router);
app.use('/client', client);

// rotas de erro

app.use((err, req, res, next) => {
    console.log(err.stack)

    res.status(500).json({
        message : "Algo deu errado."
    })
})


// Template literal, não utiizar aspas simples porém acento
app.listen(port, () => console.log(`App listening to http://localhost:${port}`))