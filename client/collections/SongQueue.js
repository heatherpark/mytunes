// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
    var firstSong = this.at(0);
    firstSong.play();
  },

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);
  }

});