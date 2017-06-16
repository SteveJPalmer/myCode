import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'little-tour',
  inputs: ['myDataString', 'myDataHero'],
  template: `<h3>Component property binding: myDataString & myDataHero (add as inputs)</h3>
             <p>myDataString = {{myDataString}}</p>
             <p>myDataHero = {{myDataHero}}</p><br>
             
             <input #newHero (keyup.enter)="addHero(newHero.value)"
                             (blur)="addHero(newHero.value); newHero.value='' ">
             <button (click)=addHero(newHero.value)>Add</button>
             <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
            `
})
export class LittleTourComponent {
  //input binding
  myDataString: string;
  myDataHero: Hero;

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
