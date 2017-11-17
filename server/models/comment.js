var mongoose = require('mongoose')

var schema = new mongoose.Schema({
  body: {type: String, required: true},
  votes: {type: Number, default: 0},
  health: {type: Number, default: 100},
  alive: {type: Boolean, default: true},
  created: {type: Number, defualt: Date.now()}  
})

module.exports = mongoose.model('Comment', schema)