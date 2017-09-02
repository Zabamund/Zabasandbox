import { Component, OnInit } from '@angular/core';

import { TimeService } from '../../shared';

@Component({
  selector: 'pgy-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  timeNow: Date;
  greeting = 'default text...';

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.checkTime();
  }

  checkTime(): Date {
    this.timeService.getClock()
      .subscribe((time) => this.timeNow = time);
    setTimeout(() => {
      this.setGreeting();
    }, 2000);
    return this.timeNow;
  }

  addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  setGreeting() {
    const hrs = this.addZero(this.timeNow.getHours());
    const min = this.addZero(this.timeNow.getMinutes());
    const timeString = '' + hrs + min;
    const timeInt = parseInt(timeString, 10);

    if (timeString === undefined) {
      this.greeting = 'time is undefined';
    } else if (timeInt < 1145) {
      this.greeting = ' good morning to you.';
    } else if (timeInt >= 1145 && timeInt <= 1300) {
      this.greeting = ' it\'s lunchtime, bon appétit!';
    } else if (timeInt > 1300 && timeInt <= 1700) {
      this.greeting = ' good afternoon to you.';
    } else if (timeInt > 1700) {
      this.greeting = ' good evening to you.';
    } else {
      this.greeting = ' how are you today?';
    }
  }

}
