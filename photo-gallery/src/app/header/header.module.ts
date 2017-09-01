import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { GreetingComponent } from './greeting/greeting.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleComponent,
    GreetingComponent,
    TimeComponent
  ],
  exports: [
    TitleComponent,
    GreetingComponent,
    TimeComponent
  ]
})
export class HeaderModule { }
