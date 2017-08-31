import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';

import { ClockService } from '../shared';

@Component({
  selector: 'sap-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  timeNow: Date;
  greeting = 'default text...';

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.getTimeNow();
  }

  getTimeNow() {
    this.clockService
      .getClock()
      .subscribe((time) => this.timeNow = time);
  }

}
