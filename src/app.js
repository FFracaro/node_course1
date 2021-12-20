const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes/home')
const client = require('./routes/client')
const supplier = require('./routes/supplier')
const req = require('express/lib/request')
const app = express()
const port = 3000

// PUG vai abstrair o html - ver home.pug
// npm install pug --save
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// rota para uma pasta estática
app.use('/assets', express.static(__dirname + '/assets'))
//http://localhost:3000/assets/css/style.css

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

require('./model/index')

// Rotas 
app.use('/', router);
app.use('/client', client);
app.use('/supplier', supplier)

// Template literal, não utiizar aspas simples porém acento
app.listen(port, () => console.log(`App listening to http://localhost:${port}`))