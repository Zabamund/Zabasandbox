import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PhotoService, Photo } from '../../shared';

@Component({
  selector: 'pgy-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  @Input()
  photo = new Photo();

  error: string;
  isSaving = false;
  saveOK = false;

  constructor(
    private photoService: PhotoService
  ) { }

  close() {
    this.onClose.emit(true);
  }

  onSubmit() {
    this.isSaving = true;
    let save: Observable<Photo>;
    if (this.photo.id > 0) {
      save = this.photoService.update(this.photo);
    } else {
      save = this.photoService.add(this.photo);
    }
    save.subscribe(
      (inputPhoto) => {
        this.photo = inputPhoto;
        this.saveOK = true;
        setTimeout(() => this.isSaving = false, 500);
        setTimeout(() => this.saveOK = false, 2000);
        this.onSave.emit(true);
      },
      (error) => {
        this.error = error;
        this.isSaving = false;
      }
    );
  }

}
