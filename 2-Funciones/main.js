"use strict";
var superheroe = "Flash";
function imprime_heroe() {
    return superheroe;
}
var activar_batisenal = function () {
    return "Batisenal activada.";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
function nombreCompleto(nombre, apellido) {
    return nombre + apellido;
}
var nombre = nombreCompleto("clark", "kent");
console.log(nombre);
function nombreCompletoDos(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombredos = nombreCompletoDos("Barry", "Allen");
console.log(nombredos);
function nombreCompletoTres(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
var nombretres = nombreCompletoTres("clark", "kent", true);
console.log(nombretres);
function nombreCompletoCuatro(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var nombrecuatro = nombreCompletoCuatro("clark", "kent", "zapata", "arango");
console.log(nombrecuatro);
function suma(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
var miFuncion;
miFuncion = 10;
miFuncion = suma;
console.log(miFuncion(5, 5));
miFuncion = saludar;
console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();
//# sourceMappingURL=main.js.map