import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spine',
  templateUrl: './spine.component.html',
  styleUrls: ['./spine.css']
})
export class SpineComponent {

  id: any = 0;
  boneName: string = "";

  constructor() {

  }
  highlight(e) {

    console.log(e)

    if (e.type == "mouseenter") {
      this.id = e.target.id;
      this.boneName = e.target.id;
    }
    else if (e.type == "mouseleave") {
      this.id = 0;
      this.boneName = "";
    }
  }
}
