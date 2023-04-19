import {Component, ElementRef, OnInit} from '@angular/core';
import {useRef} from "react";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  ani() {
    var element = document.getElementById('img');
    if (element !== null) {
      element.className = 'classname';
    }
  }

  palmAnimation() {
    var element = document.getElementById('sprite');
    if (element !== null) {
      element.className = 'sprite-image';
    }
  }

  cornAnimation() {
    var element = document.getElementById('sprite');
    if (element !== null) {
      element.className = 'sprite-image'
    }
  }

  constructor() {}
}








