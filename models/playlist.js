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

function update(id,newValue) {
    let filtered = playlist.filter(v => v.id === parseInt(id))
    const {title,artist,album} = newValue
    filtered[0].title = title ? title : filtered[0].title
    filtered[0].album = album ? album : filtered[0].album
    filtered[0].artist = artist ? artist : filtered[0].artist

    return filtered
}

function deleteOne(id) {
    playlist = playlist.filter(v => v.id !== id)
    return playlist
}

module.exports = {playlist, find, update, deleteOne, findById, popular, create, play}