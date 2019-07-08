"use strict";
var flash = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
flash = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar"]
};
var flashtwo = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};
var flashthree = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
flashthree.getNombre();
var flashfour = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar", "Super Velocidad"],
    getNombre: function () {
        return this.nombre;
    }
};
var flashfive = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar", "Super Velocidad", 23],
    getNombre: function () {
        return this.nombre;
    }
};
var loquesea;
loquesea = "Juan";
loquesea = 10;
loquesea = {
    nombre: "Flash",
    edad: 56,
    poderes: [],
    getNombre: function () {
        return "Juan";
    }
};
var cosa = function () {
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