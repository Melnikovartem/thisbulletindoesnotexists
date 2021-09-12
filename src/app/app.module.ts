import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';
import { InfoOverlayComponent } from './info-overlay/info-overlay.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RandomPhotoComponent,
    InfoOverlayComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
