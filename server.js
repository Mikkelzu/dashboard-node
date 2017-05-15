const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

let app = express()
var server = app.listen(9292)

//const http = require('http').Server(server)
const io = require('socket.io').listen(server)

module.exports = io;

app.use(bodyParser.urlencoded( {
	extended: true
}))

app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

const index = require('./routes/index')

const routes = [index]

app.use('/', routes)

console.log('Server is runing at port 9292')