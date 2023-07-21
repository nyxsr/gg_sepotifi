let playlist = []

function find() {
    return playlist
}

function findById(id) {
    let filtered = playlist.filter(v => v.id === parseInt(id))
    return filtered
}

function create(title,artist,album) {
    playlist.push({
        id:playlist.length + 1,
        title:title,
        artist:artist,
        album:album,
        countPlayed:0
    })
    return playlist
}

function play(id) {
    let filtered = playlist.filter(v => v.id === parseInt(id))
    filtered[0].countPlayed += 1

    return filtered
}

function popular() {
    let filtered = playlist.filter(v => v.countPlayed >= 5)
    let sorted = filtered.sort((a,b)=>{
        return b.countPlayed - a.countPlayed
    })

    return sorted
}

module.exports = {playlist, find, findById, popular, create, play}