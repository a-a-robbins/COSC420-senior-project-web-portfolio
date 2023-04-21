import {Component, ElementRef, OnInit} from '@angular/core';
import {useRef} from "react";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  // ani() {
  //   var element = document.getElementById('img');
  //   if (element !== null) {
  //     element.className = 'classname';
  //   }
  // }

  palmAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      while(posTop != 80 && posLeft != 5) {
        posTop++;
        elem.style.top = posTop + "vh";
        posLeft--;
        elem.style.left = posLeft + "vw";
      }
      if (posTop == 80 && posLeft == 5) {
        complete();
        return;
      }

      function complete() {
        clearInterval(id);
        id = null;
      }
    }
  }

  cornAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");

    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
      while(posTop != 40 && posLeft != 75) {
        posTop--;
        elem.style.top = posTop + "vh";
        posLeft++;
        elem.style.left = posLeft + "vw";
      }

      if(posTop == 40 && posLeft == 75) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(id);
      id = null;
    }
  }

  mountainAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");

    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
      while(posTop != 5 && posLeft != 10) {
        posTop--;
        elem.style.top = posTop + "vh";
        posLeft--;
        elem.style.left = posLeft + "vw";
      }

      if(posTop == 5 && posLeft == 10) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(id);
      id = null;
    }
  }
  constructor() {}
}








