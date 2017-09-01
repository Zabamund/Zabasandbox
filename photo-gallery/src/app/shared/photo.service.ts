import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Photo } from '../photo';

@Injectable()
export class PhotoService {

  url = 'http://localhost:3000/photos';
  private headers = new HttpHeaders ({ 'Content-Type': 'application/json' });

  constructor(
    private httpClient: HttpClient
  ) { }

  add(photo: Photo): Observable<Photo> {
    return this.httpClient
      .post(this.url, photo,
      { headers: this.headers })
      .map((response: Response) => response.json());
  }

  getAll(): Observable<Photo[]> {
    return this.httpClient
      .get(this.url + '?_sort=id&_order=desc')
      .map((response: Response) => response.json());
  }

  getById(id: number): Observable<Photo> {
    const getUrl = this.url + '/' + id;
    return this.httpClient
      .get(getUrl)
      .map((response: Response) => response.json());
  }

}
