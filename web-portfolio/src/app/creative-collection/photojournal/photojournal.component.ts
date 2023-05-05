import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from "../../modal/modal.component";

@Component({
  selector: 'app-photojournal',
  templateUrl: './photojournal.component.html',
  styleUrls: ['./photojournal.component.scss']
})
export class PhotojournalComponent {

  badlandsInfo() {
    const elem = document.getElementById("badlands-more");
    const moab = document.getElementById("moab-more");
    const sanDiego = document.getElementById("san-diego-more");
    const sequim = document.getElementById("sequim-more");

    if(moab && moab.style.display == "block") {
      moab.style.display = "none";
    }

    if(sequim && sequim.style.display == "block") {
      sequim.style.display = "none";
    }

    if(sanDiego && sanDiego.style.display == "block") {
      sanDiego.style.display = "none";
    }

    if (elem) {
      if (elem.style.display == "none") {
        elem.style.display = "block";
      }
      else {
        elem.style.display = "block";
      }
    }
  }

  moabInfo() {
    const elem = document.getElementById("moab-more");
    const badlands = document.getElementById("badlands-more");
    const sanDiego = document.getElementById("san-diego-more");
    const sequim = document.getElementById("sequim-more");

    if(badlands && badlands.style.display == "block") {
      badlands.style.display = "none";
    }

    if(sequim && sequim.style.display == "block") {
      sequim.style.display = "none";
    }

    if(sanDiego && sanDiego.style.display == "block") {
      sanDiego.style.display = "none";
    }

    if (elem) {
      if (elem.style.display == "none") {
        elem.style.display = "block";
      }
      else {
        elem.style.display = "block";
      }
    }
  }
  sanDiegoInfo() {
    const elem = document.getElementById("san-diego-more");
    const badlands = document.getElementById("badlands-more");
    const moab = document.getElementById("moab-diego-more");
    const sequim = document.getElementById("sequim-more");

    if(badlands && badlands.style.display == "block") {
      badlands.style.display = "none";
    }

    if(moab && moab.style.display == "block") {
      moab.style.display = "none";
    }

    if(sequim && sequim.style.display == "block") {
      sequim.style.display = "none";
    }

    if (elem) {
      if (elem.style.display == "none") {
        elem.style.display = "block";
      }
      else {
        elem.style.display = "block";
      }
    }
  }

  sequimInfo() {
    const elem = document.getElementById("sequim-more");
    const badlands = document.getElementById("badlands-more");
    const moab = document.getElementById("moab-diego-more");
    const sanDiego = document.getElementById("san-diego-more");

    if(badlands && badlands.style.display == "block") {
      badlands.style.display = "none";
    }

    if(moab && moab.style.display == "block") {
      moab.style.display = "none";
    }

    if(sanDiego && sanDiego.style.display == "block") {
      sanDiego.style.display = "none";
    }

    if (elem) {
      if (elem.style.display == "none") {
        elem.style.display = "block";
      }
      else {
        elem.style.display = "block";
      }
    }

  }

}
