// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },
  // playFirst method
    // pass the first song to the set song method
    // reset the current song
    // play the current song

  initialize: function(){
  }

});