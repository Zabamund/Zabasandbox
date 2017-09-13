import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Photo } from './';

@Injectable()
export class PhotoService {

  url = 'http://my-json-server.typicode.com/Zabamund/Zabasandbox/photos';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private httpClient: HttpClient
  ) { }

  add(photo: Photo): Observable<Photo> {
    return this.httpClient
      .post<Photo>(this.url, photo,
      { headers: this.headers });
  }

  getAll(): Observable<Array<Photo>> {
    return this.httpClient
      .get<Array<Photo>>(this.url);
  }

  getById(id: number): Observable<Photo> {
    const getUrl = this.url + '/' + id;
    return this.httpClient
      .get<Photo>(getUrl);
  }

  update(photo: Photo): Observable<Photo> {
    const putUrl = this.url + '/' + photo.id;
    return this.httpClient
      .put<Photo>(putUrl, photo,
      { headers: this.headers });
  }

  deleteById(photo: Photo): Observable<Photo> {
    const deleteUrl = this.url + '/' + photo.id;
    return this.httpClient
      .delete<Photo>(deleteUrl,
      { headers: this.headers });
  }

}
