let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Entree'

let schema = new Schema({
  orderId: {
    type: ObjectId,
    ref: 'Order',
    required: true
  },
  comments: {
    type: String
  },
  mealType: {
    type: ObjectId,
    ref:
  }
})

module.exports = mongoose.model(schemaName, schema)