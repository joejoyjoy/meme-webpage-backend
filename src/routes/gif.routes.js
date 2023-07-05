const gifRouter = require('express').Router()
const {
  getAllGifs,
  saveGif,
  putGifImage
} = require('../controllers/gif.controllers').default

gifRouter
  .get('/gifs', getAllGifs)
  .post('/create-gif/:gifName', saveGif)
  .put('/upload-gif/:gifId', putGifImage)

module.exports = gifRouter