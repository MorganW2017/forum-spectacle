var mongoose = require('mongoose')

var schema = new Schema({
  title: {type: string, required: true},
  description: {type: string, required: true},
  created: {type: num, defualt: Date.now()},
  comments: [{ type: ObjectId, ref: 'Comment' }],
})

module.exports = mongoose.model('Post', schema)