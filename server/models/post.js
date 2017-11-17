var mongoose = require('mongoose')

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, defualt: Date.now() },
})

module.exports = mongoose.model('Post', schema)