import { Component, OnInit } from '@angular/core';

import { PhotoService, Photo } from '../../shared';

@Component({
  selector: 'pgy-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos: Photo[] = [];
  clickedPhoto: Photo;
  photoToEdit: Photo;
  showNewForm = false;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService
      .getAll()
      .subscribe((photos) => this.photos = photos);
  }

}
