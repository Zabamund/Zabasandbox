import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { PricelistComponent } from '../pricelist/pricelist.component';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public dialog: MdDialog) { }

  openPricelist(): void {
    const dialogRef = this.dialog.open(PricelistComponent, {
      width: '35em',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed');
    });
  }

}
