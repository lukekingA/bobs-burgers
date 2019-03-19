var mongoose = require('mongoose')
var connectionString = "mongodb://bobsburgers:burgersnow*@den1.mongo1.gear.host:27001/bobsburgers" //CHANGE ME!!!!!
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})