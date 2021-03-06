import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HeaderModule } from './header';
import { PhotoModule } from './photo';

import { PhotoService, TimeService } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    PhotoModule,
    HttpClientModule
  ],
  providers: [
    PhotoService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
