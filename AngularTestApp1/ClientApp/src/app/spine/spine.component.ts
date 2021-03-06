import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-spine',
  templateUrl: './spine.component.html',
  styleUrls: ['./spine.css']
})
export class SpineComponent {

  id: any = 0;
  boneName: string = "";
  anatomyData;

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
      this.anatomyData = data;
    });
  }

  highlight(e) {

    console.log(e)

    if (e.type == "mouseenter") {
      this.id = e.target.id;
      this.boneName = this.anatomyData[e.target.id].name;
    }
    else if (e.type == "mouseleave") {
      this.id = 0;
      this.boneName = "";
    }
  }
}
