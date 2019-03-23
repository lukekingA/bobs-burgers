let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'CommentM'

let schema = new Schema({
  comment: {
    type: String,
    required: true

  }
})

module.exports = mongoose.model(schemaName, schema)