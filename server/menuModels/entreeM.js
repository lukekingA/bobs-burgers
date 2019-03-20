let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'EntreeM'

let component = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
})

let entreeM = new Schema({
  comment: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  components: [component]
})


module.exports = mongoose.model(schemaName, entreeM)