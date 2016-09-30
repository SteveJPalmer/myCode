"use strict";
var Hero = (function () {
    //Note: shorthand - ts compiler generates public field & assigns value, for each public constructor param when create new instance
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map