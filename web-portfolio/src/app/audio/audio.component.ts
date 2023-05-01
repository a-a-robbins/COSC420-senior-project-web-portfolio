import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {

  audioToggle() {
    let audioPlayer = <HTMLVideoElement> document.getElementById("audio");

    function playAudio() {
      audioPlayer.play();
    }

    function pauseAudio() {
      audioPlayer.pause();
    }
  }

}
