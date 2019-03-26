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
  }
})

let entree = new Schema({
  mealId: {
    type: ObjectId,
    ref: 'Meal',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  //components: [component]
})


module.exports = mongoose.model(schemaName, entree)