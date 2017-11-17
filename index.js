var express = require('express')
var bp = require('body-parser')
var sessions = require('./auth/sessions')
var dbConnect = require('./config/mlab/mlab-config')

var server = express()
var port = 9001

//ROUTE VARIABLES
var userRoutes = require('./auth/auth')
var postRoutes = require('./server/routes/post-routes')
var commentRoutes = require('./server/routes/comment-routes')

//MIDDLEWARE
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))
server.use(sessions)

//REGISTER ROUTES
server.use(commentRoutes)
server.use(userRoutes)
server.use(postRoutes)

server.listen(port, () => {console.log('Serving on port: ', port)})