let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'DrinkM'

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  },
})

module.exports = mongoose.model(schemaName, schema)