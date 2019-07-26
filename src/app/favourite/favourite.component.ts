import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  recordStat = 'record';
  songName = "testing"
  playIcon = "play"

  songs = ['song1.mp3', 'song2.mp3'];
  songsTitle = ['title1', 'title2'];
  song = new Audio()
  currentSong = 0;

  constructor() { }

  ngOnInit() {
    console.dir(this.song);
    this.song.src = '../../assets/images/mp3s/1.mp3';
    this.song.preload = 'none';

    console.dir(this.song);
  }

  startRecord() {
    if(this.recordStat == 'record') {
      this.recordStat = "stop";
    } else {
      this.recordStat = 'record';
    }
  }

  playSong() {
    if(this.playIcon == 'play'){
      this.playIcon = 'pause';
      this.song.play();
    } else {
      this.playIcon = 'play';
      this.song.pause();
    }
  }
}