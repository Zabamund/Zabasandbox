import { Component, OnInit } from '@angular/core';

import { TimeService } from '../../shared';

@Component({
  selector: 'pgy-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  timeNow: Date;

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService
      .getClock()
      .subscribe((time) => this.timeNow = time);
  }

}
