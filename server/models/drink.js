let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Drink'

let schema = new Schema({
  orderId: {
    type: ObjectId,
    ref: 'Order',
    required: true
  },
  mealId: {
    type: ObjectId,
    ref: 'Meal',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true,
    default: 0
  },
  cost: {
    type: Number,
    required: true
  },

})

module.exports = mongoose.model(schemaName, schema)