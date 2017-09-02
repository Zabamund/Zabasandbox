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

  private trashcanIcon: SafeHtml;
  private pencilIcon: SafeHtml;

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

}
