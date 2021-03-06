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
var LittleTourComponent = (function () {
    function LittleTourComponent() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
    LittleTourComponent.prototype.addHero = function (newHero) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    };
    LittleTourComponent = __decorate([
        core_1.Component({
            selector: 'little-tour',
            inputs: ['myDataString', 'myDataHero'],
            template: "<h3>Component property binding: myDataString & myDataHero (add as inputs)</h3>\n             <p>myDataString = {{myDataString}}</p>\n             <p>myDataHero = {{myDataHero}}</p><br>\n             \n             <input #newHero (keyup.enter)=\"addHero(newHero.value)\"\n                             (blur)=\"addHero(newHero.value); newHero.value='' \">\n             <button (click)=addHero(newHero.value)>Add</button>\n             <ul><li *ngFor=\"let hero of heroes\">{{hero}}</li></ul>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], LittleTourComponent);
    return LittleTourComponent;
}());
exports.LittleTourComponent = LittleTourComponent;
//# sourceMappingURL=little-tour.component.js.map