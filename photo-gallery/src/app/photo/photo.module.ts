import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryComponent,
    DetailComponent,
    FormComponent
  ],
  exports: [
    DetailComponent,
    FormComponent,
    GalleryComponent
  ]
})
export class PhotoModule { }
