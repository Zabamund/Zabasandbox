import { Component, Input } from '@angular/core';

import { Photo } from '../../shared';

@Component({
  selector: 'pgy-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input()
  photo: Photo;

}
