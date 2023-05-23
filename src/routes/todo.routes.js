const gifRouter = require('express').Router()
const { 
  saveGif, 
  getGifs
} = require('../controllers/gif.controllers')

 gifRouter
  .post('/create-gif', saveGif)
  .get('/get-gifs', getGifs)

module.exports = gifRouter