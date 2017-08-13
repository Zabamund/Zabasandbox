import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'matap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myData: Array<any>;
  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: Http) {
    this.http.get(this.url)
      .subscribe(result => this.myData = result.json());
  }
}
