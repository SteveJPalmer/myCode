import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <p>My favourite hero is: {{myHero}}</p>
             <h1>basicForm component</h1>
             <hero-form></hero-form>
            `
})
export class AppComponent {
  ///model properties
  title = 'Tour of Heroes';
  myHero = 'Steve';
}
