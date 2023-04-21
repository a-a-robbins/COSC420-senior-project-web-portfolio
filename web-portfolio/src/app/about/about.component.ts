import {Component, ElementRef, OnInit} from '@angular/core';
import {useRef} from "react";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  bezierCurve() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.moveTo(33.76049625, 56.51376); // start point
    ctx.quadraticCurveTo(
      117.53628, 247.02303,  // control point 1
      742.75229, 221.65138   // end point
    );
  }

  palmAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
        if(posTop != 75 && posLeft != 2) {
          posTop++;
          posLeft--;
          elem.style.top = posTop + "%";
          elem.style.left = posLeft + "%";
        } else if(posLeft == 2 && posTop != 75) {
          posTop++;
          elem.style.top = posTop + "%";
        } else if(posTop == 75 && posLeft != 2) {
          posLeft--;
          elem.style.left = posLeft + "%";
        }else {
          clearInterval(id);
        }
      }
    }

  mountainAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if(posTop != 0 && posLeft != 7) {
        posTop--;
        posLeft--;
        elem.style.top = posTop + "%";
        elem.style.left = posLeft + "%";
      } else if(posLeft == 7 && posTop != 0) {
        posTop--;
        elem.style.top = posTop + "%";
      } else if(posTop == 0 && posLeft != 7) {
        posLeft--;
        elem.style.left = posLeft + "%";
      }else {
        clearInterval(id);
      }
    }
  }

  cornAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
      if(posTop != 35 && posLeft != 82) {
        posTop--;
        posLeft++;
        elem.style.top = posTop + "%";
        elem.style.left = posLeft + "%";
      } else if(posLeft == 82 && posTop != 35) {
        posTop--;
        elem.style.top = posTop + "%";
      } else if(posTop == 35 && posLeft != 82) {
        posLeft++;
        elem.style.left = posLeft + "%";
      }else {
        clearInterval(id);
      }
    }
  }
  constructor() {}
}








