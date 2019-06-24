import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  
  document.querySelector('#get-music-button').textContent = 'Get Music'
  // document.querySelector('#songs').textContent = itunesService.Songs
  let displaySongs = document.querySelector('#songs')
  let template = ''
  let songs = itunesService.Songs
  songs.forEach(song => {
    template += song.Template
  })
  displaySongs.innerHTML = template;
  
  console.log(itunesService.Songs)

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber("songs",drawSongs)
      drawSongs()

  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'Loading...'
    itunesService.getMusicByArtist(artist)
  }

  //TODO: add a play method that takes in a SongURL and calls play 
}


export default ItunesController