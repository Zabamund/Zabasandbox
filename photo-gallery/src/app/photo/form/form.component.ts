import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

  constructor(
    private photoService: PhotoService
  ) { }

  close() {
    this.onClose.emit(true);
  }

}
