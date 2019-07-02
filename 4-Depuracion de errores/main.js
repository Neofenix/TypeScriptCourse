"use strict";
let edad = 30;
let heroee = "Juan";
console.log(heroee);
let edadd = 30;
let mensajee = imprimir("Juancito", 30);
console.log(mensajee);
function imprimir(heroe, edad) {
    heroe = heroe.toLowerCase();
    edad = edad + 10;
    return heroe + " " + edad;
}
let heroes = ["Batman", "Superman", "Robin"];
for (let heroe of heroes) {
    console.log(heroe);
}
heroes.push("Iron man");
//# sourceMappingURL=main.js.map