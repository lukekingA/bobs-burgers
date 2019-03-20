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
  // orderId: {
  //   type: ObjectId,
  //   ref: 'Order',                will be _id created in each instance
  //   required: true
  // },
  price: {
    type: Number,
    required: true
  },
<<<<<<< HEAD
  // managerId: {
  //   type: ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  // employeeId: {
  //   type: ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  comment: {
    type: String
=======
  managerId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  employeeId: {
    type: ObjectId,
    ref: 'User',
    required: true
>>>>>>> 35b568913bba8b2d754b9b1bbda403a1860d520b
  },
  name: {
    type: String,
    required: true
  },
  //components: [component]
})


module.exports = mongoose.model(schemaName, entree)