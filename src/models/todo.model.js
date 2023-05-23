const { Schema, model } = require('mongoose')

const GifSchema = new Schema({
  taskTitle: {
    type: String,
    required: [true, "The title is required"]
  },
  taskDate: {
    type: String,
  },
  taskDesc: {
    type: String,
    required: [true, "The description is required"]
  },
  taskState: {
    type: Boolean
  }
})

const GifModel = model('Gif', GifSchema)

module.exports = GifModel