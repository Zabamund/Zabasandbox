import { Component, OnInit } from '@angular/core';
import { } from '';
@Component({
  selector: 'sap-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateNow: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
