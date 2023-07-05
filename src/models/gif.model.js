import { Schema, model } from 'mongoose'

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

export default GifModel