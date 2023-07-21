const express = require('express')
const Router = express.Router()

const Controller = require('../controllers/playlist')

Router.get('/',Controller.getAllPlaylist)
Router.get('/popular',Controller.getMostPopular)
Router.put('/:id',Controller.play)
Router.post('/',Controller.addToPlaylist)

module.exports = Router