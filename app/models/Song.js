export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template(){
        /** TODO revove the extra div row and opt for css spacing
        * Remove the audio tag from here and opt for a sinlge audio element
        * add an onclick that passes in the this.preview to the itunes controller play method
        */
    return `
    <div class="row">
        <div class="col-12" style="height: 2vh;"></div>
    </div>
    <div class="row">
        <div class="col-12 border border-white-50 rounded p-4 ">
            <img src="${this.albumArt}" alt="Album Art"><h4 class="text-right">Price: ${this.price}</h4>
            <h4>Song: ${this.title}</h4>
            <h4>Artist: ${this.artist}</h4>
            <h4>Album: ${this.collection}</h4>
            <audio controls>
                <source src="${this.preview}">
                Your browser does not support the audio tag.
            </audio>
        </div>
    </div>
      
        `

    }
}