var mongoose = require('mongoose')
//var connectionString = "mongodb://localhost:27017/testdb"
var connectionString = "mongodb://bobsburgers:burgersnow*@den1.mongo1.gear.host:27001/bobsburgers"
var connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})