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
    const timeString = "" + this.timeNow.getHours() + this.timeNow.getMinutes();
    let timeInteger = parseInt(timeString);
    if (timeString === undefined) {
      this.greeting = 'oh no! timeNow is undefined!'
    } else if (timeInteger < 1145) {
      this.greeting = 'and good morning.';
    } else if (timeInteger >= 1145 && timeInteger <= 1300) {
      this.greeting = 'it\'s lunchtime, bon appétit!'
    } else if (timeInteger > 1300 && timeInteger <= 1700) {
      this.greeting = 'and good afternoon.'
    } else if (timeInteger > 1700) {
      this.greeting = 'and good evening.'
    } else {
      this.greeting = 'how are you today?'
    }
  }
}
