import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PhotoService, Photo } from '../../shared';

import { trashcan, pencil } from 'octicons';

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

  public trashcanIcon: SafeHtml;
  public pencilIcon: SafeHtml;

  constructor(
    private photoService: PhotoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.trashcanIcon = this.sanitizer.bypassSecurityTrustHtml(trashcan.toSVG());
    this.pencilIcon = this.sanitizer.bypassSecurityTrustHtml(pencil.toSVG());
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService
      .getAll()
      .subscribe((photos) => this.photos = photos);
  }

  deletePhoto(photo: Photo) {
    this.photoService
      .deleteById(photo)
      .subscribe(result => this.loadPhotos());
  }

  deleteAll() {
    for (let i = 0; i < this.photos.length; i++) {
      this.deletePhoto(this.photos[i]);
    }
  }

}
