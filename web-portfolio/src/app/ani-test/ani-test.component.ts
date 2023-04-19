import { Component } from '@angular/core';

@Component({
  selector: 'app-ani-test',
  templateUrl: './ani-test.component.html',
  styleUrls: ['./ani-test.component.scss']
})
export class AniTestComponent {
  ani() {
    // @ts-ignore
    document.getElementById('img').className = 'grow';
  }
}

