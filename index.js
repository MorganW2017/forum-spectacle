var express = require('express')
var server = express()
var bp = require('body-parser')
var sessions = require('./auth/sessions')
var dbConnect = require('./config/mlab/mlab-config')
var port = 9001
//ROUTE VARIABLES
var userRoutes = require('./auth/auth')
//MIDDLEWARE
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(sessions)

//REGISTER ROUTES
server.use(userRoutes)

server.listen(port, () => {console.log('Serving on port: ', port)})