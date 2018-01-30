"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent() {
        //model properties
        this.title = 'Steves extended Tour of Heroes';
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.myHero = this.heroes[0];
        //models using objs
        this.heroes2 = [
            new hero_1.Hero(1, 'Windstorm-Obj'),
            new hero_1.Hero(13, 'Bombasto-Obj'),
            new hero_1.Hero(15, 'Magneta-Obj'),
            new hero_1.Hero(20, 'Tornado-Obj')
        ];
        this.myHero2 = this.heroes2[0];
    }
    //TrackBy function
    AppComponent.prototype.trackByHeroes = function (index, hero) { return hero.id; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n             <p>My Fav Hero is {{myHero}} (uses interpolation)</p>\n             \n             <p *ngIf=\"heroes2.length > 1\">There are {{heroes2.length}} heroes! (uses ngIf)</p>\n            \n             <h2>Heroes: array of string (uses ngFor)</h2>\n             <ul>\n               <li *ngFor=\"let hero of heroes\">\n                 {{ hero }}\n               </li>\n             </ul> \n             <div>Debug Heroes (pipe/filer | JSON): {{heroes | json}}</div>\n             <h2>Heroes: array of Hero objs (uses ngFor)</h2>\n             <ul>\n               <li *ngFor=\"let hero2 of heroes2\">\n                 {{ hero2.name }}\n               </li>\n             </ul> \n             <div>Debug Heroes2 (pipe/filer | JSON): {{heroes2 | json}}</div>\n             <h2>Heroes: write out index</h2>\n             <div *ngFor=\"let hero of heroes; let i=index\">index(+1): {{i + 1}}  - {{hero}}</div>\n            \n             <h2>Heroes: TrackBy Function</h2>\n             <div *ngFor=\"let hero of heroes2; trackBy:trackByHeroes\">({{hero.id}}) {{hero.name}}</div>\n           \n       \n             <h2>Heroes: add to array (plus example of comp input binding)</h2> \n             <little-tour [myDataHero]=\"myHero\" [myDataString]=\"'Passed this in..'\"></little-tour>\n             "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map