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

  constructor() {}
}








