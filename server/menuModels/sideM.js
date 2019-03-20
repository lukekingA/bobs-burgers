let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'SideM'

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  // size is either -1,0,1
  size: {
    type: Number,
    required: true,
    default: 0
  },
  cost: {
    type: Number,
    required: true
  },

})

module.exports = mongoose.model(schemaName, schema)