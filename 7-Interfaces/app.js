"use strict";
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
}
var batimovilex = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... run!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadBatman;
ciudadBatman = function ciudadGotica(ciudadanos) {
    return ciudadanos.length;
};
var Persona = (function () {
    function Persona(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.imprimirBio = function () {
        console.log("Prueba Quiz");
    };
    return Persona;
}());
//# sourceMappingURL=app.js.map