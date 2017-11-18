var mongoose = require('mongoose')
var connectionString = 'mongodb://test:falselogic7@ds259855.mlab.com:59855/primary-db'
var connection = mongoose.connection

mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: { socketOptions: {
        keepAlive: 300000, connectionTimeoutMS: 30000
    }}
})
connection.on('error', console.error.bind(console, 'Connection Error: '))
connection.once('open', () => {
    console.log('Connected to DB')
})