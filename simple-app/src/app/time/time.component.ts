import { Component, OnInit, Output } from '@angular/core';

import { ClockService } from '../shared';

@Component({
  selector: 'sap-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  timeNow: Date;

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.clockService
      .getClock()
      .subscribe((time) => this.timeNow = time);
  }

}
