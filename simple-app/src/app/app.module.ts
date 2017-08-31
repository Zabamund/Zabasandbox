import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TitleComponent } from './title';
import { DateComponent } from './date';
import { TimeComponent } from './time';

import { ClockService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DateComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClockService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
