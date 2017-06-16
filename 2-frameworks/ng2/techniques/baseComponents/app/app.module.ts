import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LittleTourComponent } from './little-tour.component';


@NgModule({
  imports: [ BrowserModule ],                              //aka app sub-modules
  declarations: [ AppComponent, LittleTourComponent ],     //components owned by this module
  bootstrap: [ AppComponent ],
  /* can bootstrap multiple comps (add tag to index.html instead of comp template) */
  // bootstrap: [ AppComponent, LittleTourComponent ],
})
export class AppModule { }
