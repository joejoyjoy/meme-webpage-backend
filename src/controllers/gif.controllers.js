const GifModel = require('../models/gif.model')

const getAllGifs = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://meme-gifs-page.netlify.app');

  try {
    const allGifs = await GifModel.find()

    res.status(200).send({ status: 200, allGifs: allGifs })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const saveGif = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://meme-gifs-page.netlify.app');

  const { gifName } = req.params

  if (!gifName) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const name = gifName;
    const createdGif = await GifModel.create({ name })

    res.status(201).send({ data: createdGif })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const putGifImage = async (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://meme-gifs-page.netlify.app');

  const { gifId } = req.params
  const { imageUrl } = req.body

  const gifStored = await GifModel.findOneAndUpdate(
    { _id: gifId },
    {
      imageUrl: imageUrl,
    },
    { returnOriginal: false }
  ).lean().exec()
  if (!gifStored) {
    return res.status(400).send({ status: 400 })
  }

  return res.status(200).send({ status: 200, data: gifStored })
}

module.exports = {
  getAllGifs,
  saveGif,
  putGifImage
}