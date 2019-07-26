import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { nextTick } from 'q';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  ch = "";
  recordStat = 'record';
  audios: any[]; 
  playIcon = "play";
  audio = new Audio();
  audioDisplay = "";
  currentAudio = 0;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((result) => {
      if(result.has('num')) {
        this.ch = result.get('num');
      }
    })
    this.audio.autoplay = true;
  }

  playAudioList(listName: string) {
    this.http.post('http://localhost:1025/main/get', {category: listName}).subscribe((responseData) => {
      this.audios = responseData["data"];
      this.currentAudio = 0;
    })
    console.log(this.audios);
    var source = "../../assets/audio/" + this.audios[this.currentAudio].filename;
    this.audio.src = source;
    this.audioDisplay = this.audios[this.currentAudio].audioname;
    this.playAudio();
  }

  startRecord() {
    if(this.recordStat == 'record') {
      this.recordStat = "stop";
    } else {
      this.recordStat = 'record';
    }
  }

  playAudio() {
    if(this.playIcon == 'play'){
      this.playIcon = 'pause';
      var x = this;
      this.audio.play();
      this.audio.onended = function() {
        x.next();
      }
    } else {
      this.playIcon = 'play';
      this.audio.pause();
    }
  }

  prev() {
    this.audio.pause();
    this.currentAudio = this.currentAudio - 1;
    if(this.currentAudio == -1)
      this.currentAudio = this.audios.length - 1;
    this.audioDisplay = this.audios[this.currentAudio].audioname;
    var source = "../../assets/audio/" + this.audios[this.currentAudio].filename;
    this.audio.src = source;
    this.audio.play();
  }

  next() {
    console.log('in next')
    this.audio.pause();
    this.currentAudio = this.currentAudio + 1;
    if(this.currentAudio == this.audios.length)
      this.currentAudio = 0;
    this.audioDisplay = this.audios[this.currentAudio].audioname;
    var source = "../../assets/audio/" + this.audios[this.currentAudio].filename;
    console.log(source)
    this.audio.src = source;
    this.audio.play();
  }
  home() {
    this.audio.pause();
    this.router.navigate([''])
  }
}