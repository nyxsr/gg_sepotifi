const express = require('express')
const Router = express.Router()

const Controller = require('../controllers/playlist')

Router.get('/',Controller.getAllPlaylist)
Router.get('/popular',Controller.getMostPopular)
Router.put('/play/:id',Controller.play)
Router.put('/:id',Controller.updateOne)
Router.post('/',Controller.addToPlaylist)
Router.delete('/',Controller.deleteOne)

module.exports = Router