"use strict";
var edad = 30;
var heroee = "Juan";
console.log(heroee);
var edadd = 30;
var mensajee = imprimir("Juancito", 30);
console.log(mensajee);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
var heroes = ["Batman", "Superman", "Robin"];
for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
    var heroe_1 = heroes_1[_i];
    console.log(heroe_1);
}
heroes.push("Iron man");
//# sourceMappingURL=main.js.map