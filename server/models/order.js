let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Order'


let schema = new Schema({
  price: {
    type: Number,
    default: 0,
    required: true
  },
  managerId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  employeeId: {
    type: String,
    required: true
  },
  orderIdentifer: {
    type: String,
  },

}, {
  timestamps: true
})

//CASCADE ON DELETE



module.exports = mongoose.model(schemaName, schema)