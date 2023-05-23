const GifModel = require('../models/gif.model')

const saveGif = async (req, res) => {
  try {
    const createdGif = await GifModel.create({ taskTitle, taskDate, taskDesc, taskState })
    const gif = await gifModel.findById(gifID)

    gif.gifs.push(createdGif._id)
    await gif.save()

    res.status(201).send({ data: createdGif })

  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const getGifs = async (req, res) => {
  try {
    const gif = await gifModel.findById('gifID')

    res.status(200).send({ data: gif.gifs })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = {
  saveGif,
  getGifs
}