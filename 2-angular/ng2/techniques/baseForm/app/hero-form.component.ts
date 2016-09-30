import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  //typically inject data service to get/save real data
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  /* submit */
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('form submitted');
  }

  //__ temp sol - refresh form state (add *ngIf="active" to the <form>) - adds removes from DOM
  active = true;

  newHero() {
    this.model = new Hero(42, '', '');
    //__ temp sol - refresh form state
    this.active = false;
    setTimeout(() => this.active = true, 0);
    //__
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

