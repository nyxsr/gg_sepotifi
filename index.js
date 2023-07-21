const express = require('express')

const app = express()

app.use(express.json())

require('dotenv').config()

const playlistRouter = require('./routes/playlist')

app.use('/playlist',playlistRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server berjalan pada ${process.env.PORT}`)
})