import { Component } from '@angular/core';
import {useRef} from "react";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}

// const canvas = document.getElementById("canvas");
// const context = canvas.getContext("2d");
// const width = canvas.width = 320;
// const height = canvas.height = 480;
//
// canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

// other video
//var canvas = useRef(document.querySelector('canvas'));
// var canvas = useRef<HTMLCanvasElement>(document.querySelector('canvas'));
// console.log("canvas = " + canvas);
// if(canvas.current !== null) {
//   var context = useRef<CanvasRenderingContext2D>(canvas.current.getContext('2d'));
//   console.log("context = " + context);
//
//
//     canvas.current.width = window.innerWidth;
//     canvas.current.height = window.innerHeight;
//
//     var images: any[] = [];
//     images.length = 8;
//
//     for(var i = 0; i < images.length; i++) {
//       images[i] = new Image();
//       images[i].src = "../../assets/images/sprites/walk(" + i.toString() + ").png";
//     }
//
//     var j = 1;
//     setInterval(function() {
//       j++;
//       if( j >=8 ) {
//         j = 1;
//       }
//       if(context.current !== null) {
//         context.current.drawImage(images[i], 100, 100, 100, 100);
//       }
//     }, 100)
//
// }



