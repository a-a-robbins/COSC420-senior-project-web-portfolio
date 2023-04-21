import {Component, ElementRef, OnInit} from '@angular/core';
import {useRef} from "react";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  // palmAnimation() {
  //   let id: any = null;
  //   const elem = document.getElementById("sprite");
  //   let pos = document.getElementById("map-background").clientWidth / 2;
  //   clearInterval(id);
  //   id = setInterval(frame, 5);
  //   function frame() {
  //     if (pos == 200) {
  //       clearInterval(id);
  //     } else {
  //       pos++;
  //       elem.style.top = pos + "vh";
  //       elem.style.left = pos + "vw";
  //     }
  //   }
  // }
  //
  // mountainAnimation() {
  //
  // }
  //
  // cornAnimation() {
  //
  // }


  // ani() {
  //   var element = document.getElementById('img');
  //   if (element !== null) {
  //     element.className = 'classname';
  //   }
  // }

  palmAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    // let pos = 50;
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if(posTop != 80 && posLeft != 5) {
          posTop++;
          posLeft--;
          elem.style.top = posTop + "%";
          elem.style.left = posLeft + "%";
        } else if(posLeft == 5 && posTop != 80) {
          posTop++;
          elem.style.top = posTop + "%";
        } else if(posTop == 80 && posLeft != 5) {
          posLeft--;
          elem.style.left = posLeft + "%";
        }else {
          clearInterval(id);
          return;
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








