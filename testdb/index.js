

var mongoose = require('mongoose')
var connectionString = "mongodb://localhost:27017/testdb"
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err => {
    console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
    console.log('Connected to Database')
})