import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
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
    this.checkTime();
  }

  checkTime(): Date {
    this.clockService.getClock()
      .subscribe((time) => this.timeNow = time);
    setTimeout(() => {
      this.setGreeting();
    }, 1000);
    return this.timeNow;
  }

  setGreeting() {
    if (this.timeNow === undefined) {
      this.greeting = 'oh no! Time has stopped!'
    } else if (this.timeNow.getHours() < 12) {
      this.greeting = 'good morning to you.'
    } else if (this.timeNow.getHours() > 12) {
      this.greeting = 'a very good afternoon to you.'
    } else if (this.timeNow.getHours() === 12) {
      this.greeting = 'it\'s lunchtime, bon appétit!'
    }
  }

}
