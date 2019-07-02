"use strict";
let flash = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
flash = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar"]
};
let flashtwo = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
let flashthree = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre() {
        return this.nombre;
    }
};
flashthree.getNombre();
let flashfour = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar", "Super Velocidad"],
    getNombre() {
        return this.nombre;
    }
};
let flashfive = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar", "Super Velocidad", 23],
    getNombre() {
        return this.nombre;
    }
};
let loquesea;
loquesea = "Juan";
loquesea = 10;
loquesea = {
    nombre: "Flash",
    edad: 56,
    poderes: [],
    getNombre() {
        return "Juan";
    }
};
let cosa = function () {
    return null;
};
console.log(typeof cosa);
if (typeof cosa === "number") {
    console.log("Cosa, es un numero");
}
else {
    console.log("Este codigo no es un numero");
}
//# sourceMappingURL=main.js.map