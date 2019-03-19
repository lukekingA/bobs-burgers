let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Order'


let schema = new Schema({
  price: {
    type: Number,
    required: true
  },
  employeeId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  entrees: [{
    type: ObjectId,
    ref: 'OrderId'
  }],
  drinks: [{
    type: ObjectId,
    ref: 'OrderId'
  }],
  sides: [{
    type: ObjectId,
    ref: "OrderId"
  }]
}, {
  timestamps: true
})

//CASCADE ON DELETE



module.exports = mongoose.model(schemaName, schema)