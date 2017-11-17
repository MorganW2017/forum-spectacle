var mongoose = require('mongoose')
var ObjectId = Schema.Types.ObjectId

var schema = new mongoose.Schema({
  body: {type: String, required: true},
  votes: {type: Number, default: 0},
  health: {type: Number, default: 100},
  alive: {type: Boolean, default: true},
  creatorId: {type: ObjectId, ref: 'User'},
  postId: {type: ObjectId, ref: 'Post'},
  created: {type: Number, defualt: Date.now()}  
})

module.exports = mongoose.model('Comment', schema)