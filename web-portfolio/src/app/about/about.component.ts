import {Component} from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import {ModalComponent} from "../modal/modal.component";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {


  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }
  palmAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    const palmMessage = document.getElementById("palm-message");
    const mountainMessage = document.getElementById("mountain-message");
      if(mountainMessage && mountainMessage.style.display == "block") {
        mountainMessage.style.display = "none";
      }
    const cornMessage = document.getElementById("corn-message");
    if(cornMessage && cornMessage.style.display == "block") {
      cornMessage.style.display = "none";
    }
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);

    function frame() {
      var self = this;

      if (posTop != 75 && posLeft != 2) {
        posTop++;
        posLeft--;
        elem.style.top = posTop + "%";
        elem.style.left = posLeft + "%";
        // self.openModal();
      } else if (posLeft == 2 && posTop != 75) {
        posTop++;
        elem.style.top = posTop + "%";
        // self.openModal();
      } else if (posTop == 75 && posLeft != 2) {
        posLeft--;
        elem.style.left = posLeft + "%";
        // self.openModal();
      } else {
        clearInterval(id);
        if(palmMessage) {
          palmMessage.style.display = "block";
        }
      }
    }
  }

  mountainAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    const mountainMessage = document.getElementById("mountain-message");
    const palmMessage = document.getElementById("palm-message");
      if(palmMessage && palmMessage.style.display == "block") {
        palmMessage.style.display = "none";
      }
    const cornMessage = document.getElementById("corn-message");
    if(cornMessage && cornMessage.style.display == "block") {
      cornMessage.style.display = "none";
    }
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);


    function frame() {
      if (posTop != 0 && posLeft != 7) {
        posTop--;
        posLeft--;
        elem.style.top = posTop + "%";
        elem.style.left = posLeft + "%";
      } else if (posLeft == 7 && posTop != 0) {
        posTop--;
        elem.style.top = posTop + "%";
      } else if (posTop == 0 && posLeft != 7) {
        posLeft--;
        elem.style.left = posLeft + "%";
      } else {
        clearInterval(id);
        if(mountainMessage) {
          mountainMessage.style.display = "block";
        }
      }
    }
  }

  cornAnimation() {
    let id: any = null;
    const elem = document.getElementById("sprite");
    const cornMessage = document.getElementById("corn-message");
    const palmMessage = document.getElementById("palm-message");
    if(palmMessage && palmMessage.style.display == "block") {
      palmMessage.style.display = "none";
    }
    const mountainMessage = document.getElementById("mountain-message");
    if(mountainMessage && mountainMessage.style.display == "block") {
      mountainMessage.style.display = "none";
    }
    let posTop = 50;
    let posLeft = 50;
    clearInterval(id);
    id = setInterval(frame, 50);

    function frame() {
      if (posTop != 35 && posLeft != 82) {
        posTop--;
        posLeft++;
        elem.style.top = posTop + "%";
        elem.style.left = posLeft + "%";
      } else if (posLeft == 82 && posTop != 35) {
        posTop--;
        elem.style.top = posTop + "%";
      } else if (posTop == 35 && posLeft != 82) {
        posLeft++;
        elem.style.left = posLeft + "%";
      } else {
        clearInterval(id);
        if(cornMessage) {
          cornMessage.style.display = "block";
        }
      }
    }
  }
}








