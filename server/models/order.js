let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Order'


let schema = new Schema({
  price: {
    type: Number,
    required: true
  },
  managerId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  employeeId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  meals: [{
    type: ObjectId,
    ref: 'OrderId'
  }]
}, {
  timestamps: true
})

//CASCADE ON DELETE



module.exports = mongoose.model(schemaName, schema)