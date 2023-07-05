import { find, create, findOneAndUpdate } from '../models/gif.model';

const getAllGifs = async (req, res) => {
  try {
    const allGifs = await find()

    res.status(200).send({ status: 200, allGifs: allGifs })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const saveGif = async (req, res) => {
  const { gifName } = req.params

  if (!gifName) {
    return res.status(404).send({ status: 404 })
  }
  try {
    const name = gifName;
    const createdGif = await create({ name })

    res.status(201).send({ data: createdGif })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

const putGifImage = async (req, res) => {
  const { gifId } = req.params
  const { imageUrl } = req.body

  const gifStored = await findOneAndUpdate(
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

export default {
  getAllGifs,
  saveGif,
  putGifImage
}