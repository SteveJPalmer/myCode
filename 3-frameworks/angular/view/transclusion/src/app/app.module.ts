import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CardComponent } from './card.component';

  @NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, CardComponent ],
    bootstrap:    [ AppComponent ],
    schemas:      [ NO_ERRORS_SCHEMA ]
  })

  export class AppModule { }