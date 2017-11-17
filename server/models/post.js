var mongoose = require('mongoose')

var schema = new Schema({
  title: {type: string, required: true},
  description: {type: string, required: true},
  created: {type: num, defualt: Date.now()}
//   votes: {type: num, default: 0},
//   health: {type: num, default: 100}
})

module.exports = mongoose.model('Post', schema)