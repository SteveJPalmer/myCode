import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <p>My Fav Hero is {{myHero}} (uses interpolation)</p>
             
             <p *ngIf="heroes2.length > 1">There are {{heroes2.length}} heroes! (uses ngIf)</p>
            
             <h2>Heroes: array of string (uses ngFor)</h2>
             <ul>
               <li *ngFor="let hero of heroes">
                 {{ hero }}
               </li>
             </ul> 
             <div>Debug Heroes (pipe/filer | JSON): {{heroes | json}}</div>
             <h2>Heroes: array of Hero objs (uses ngFor)</h2>
             <ul>
               <li *ngFor="let hero2 of heroes2">
                 {{ hero2.name }}
               </li>
             </ul> 
             <div>Debug Heroes2 (pipe/filer | JSON): {{heroes2 | json}}</div>
             <h2>Heroes: write out index</h2>
             <div *ngFor="let hero of heroes; let i=index">index(+1): {{i + 1}}  - {{hero}}</div>
            
             <h2>Heroes: TrackBy Function</h2>
             <div *ngFor="let hero of heroes2; trackBy:trackByHeroes">({{hero.id}}) {{hero.name}}</div>
           
       
             <h2>Heroes: add to array (plus example of comp input binding)</h2> 
             <little-tour [myDataHero]="myHero" [myDataString]="'Passed this in..'"></little-tour>
             `
})
export class AppComponent {
  //model properties
  title = 'Steves extended Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];

  //models using objs
  heroes2 = [
    new Hero(1, 'Windstorm-Obj'),
    new Hero(13, 'Bombasto-Obj'),
    new Hero(15, 'Magneta-Obj'),
    new Hero(20, 'Tornado-Obj')
  ];
  myHero2 = this.heroes2[0];

  //TrackBy function
  trackByHeroes(index: number, hero: Hero) { return hero.id; }

}
