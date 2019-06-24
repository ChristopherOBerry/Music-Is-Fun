import Song from "../../models/Song.js";


let _state = {
  songs: []
}

let _subscribers = {
  songs: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//DO NOT MODIFY
class ItunesService {
  get Songs() {
    return _state.songs
  }

  getMusicByArtist(artist) {
    // TODO: look at the itunes api to see how to add in the song filter to the url
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        // TODO Filter out videos look at the song.kind property before mapping to the song
        // res.results.filter(s => s.kind == "song").map()
        let results = res.results.map(s => new Song(s))
        setState('songs', results)
      })
      .catch(err => console.log(err))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
}



export default ItunesService