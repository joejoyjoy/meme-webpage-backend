const { Schema, model } = require('mongoose')

const GifSchema = new Schema({
  name: {
    type: String,
    required: [true, "The title is required"]
  },
  imageUrl: String,
},
  {
    timestamps: true
  }
)

const GifModel = model('Gif', GifSchema)

module.exports = GifModel