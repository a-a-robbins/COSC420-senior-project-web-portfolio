import { Component } from '@angular/core';

@Component({
  selector: 'app-ani-test',
  templateUrl: './ani-test.component.html',
  styleUrls: ['./ani-test.component.scss']
})
export class AniTestComponent {
  ani() {
    document.getElementById('img').className = 'grow';
  }

  myMove1() {
    let id: any = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }

  myMove2() {
    let id: any = null;
    const elem = document.getElementById("animate");
    let pos = 175;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }
}

