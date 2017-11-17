var express = require('express')
var server = express()
var bp = require('body-parser')
var port = 9001

var userRoutes = require('./auth/auth')

server.use(bp.json())
server.use(bp.urlencoded({extended: true}))

server.listen(port, () => {console.log('Serving on port: ', port)})