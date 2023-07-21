const { find, create, findById, play, popular } = require("../models/playlist")
const withSuccess = require("../utils/response/withSuccess")

module.exports = {
    getAllPlaylist: (req,res) =>{
        const get = find()
        withSuccess(res,200,'Data ditemukan',get)
    },
    addToPlaylist: (req,res)=>{
        const {title,artist,album} = req.body
        const createData = create(title,artist,album)
        withSuccess(res,201,'Telah ditambahkan ke Playlist!',createData)
    },
    play:(req,res) =>{
        const { id } = req.params
        const playThis = play(id)

        withSuccess(res,200,'Data Ditemukan',playThis)
    },
    getMostPopular:(req,res)=>{
        const mostPopular = popular()

        withSuccess(res,200,'Data ditemukan',mostPopular)
    }
}

//CommonJS
//ES6 JS

