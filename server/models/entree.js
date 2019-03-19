let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Entree'

let component = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

let entree = new Schema({
  orderId: {
    type: ObjectId,
    ref: 'Order',
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
  comment: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  components: [component]
})


module.exports = mongoose.model(schemaName, schema)