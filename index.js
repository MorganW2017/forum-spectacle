var express = require('express')
var server = express()
var bp = require('body-parser')
var session = require('./auth/sessions')
var dbConnect = require('./config/mlab/mlab-config')
var port = 9001

var userRoutes = require('./auth/auth')

server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(sessions)

server.listen(port, () => {console.log('Serving on port: ', port)})