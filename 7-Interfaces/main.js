"use strict";
function enviarMision(xmen) {
    console.log("Enviando a:" + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
function enviarMisionTwo(xmen) {
    console.log("Enviando a:" + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel:" + xmen.nombre);
}
var wolverineTwo = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMisionTwo(wolverineTwo);
enviarCuartel(wolverineTwo);
var wolverineTHree = {
    nombre: "Wolverine",
};
function enviarMisionFour(xmen) {
    console.log("Enviando a:" + xmen.nombre);
    xmen.regenerar("Logan");
}
;
var wolverineFour = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMisionFour(wolverineFour);
var Soporte = (function () {
    function Soporte(poder, esBueno, nombre) {
        this.nombre = nombre;
        this.poder = poder;
        this.esBueno = esBueno;
    }
    Soporte.prototype.informacion = function (nombre) {
        console.log("Hola soy " + nombre + " Tengo el poder de: " + this.poder);
    };
    return Soporte;
}());
var nautilus = new Soporte("Carga de las profundidades", true, "Nautilus");
nautilus.informacion(nautilus.nombre);
var restar;
restar = function (a, b) {
    return a - b;
};
var multiplicar;
multiplicar = function (a, b) {
    return a * b;
};
//# sourceMappingURL=main.js.map