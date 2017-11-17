var mongoose = require('mongoose')

var schema = new Schema({
  body: {type: string, required: true},
  votes: {type: num, default: 0},
  health: {type: num, default: 100},
  created: {type: num, defualt: Date.now()}  
})

module.exports = mongoose.model('Comment', schema)