const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  content: {
    type: String,
  },
})

module.exports = mongoose.model('blogs', BlogSchema)
