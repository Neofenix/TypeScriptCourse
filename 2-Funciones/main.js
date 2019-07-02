"use strict";
let superheroe = "Flash";
function imprime_heroe() {
    return superheroe;
}
let activar_batisenal = function () {
    return "Batisenal activada.";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
function nombreCompleto(nombre, apellido) {
    return nombre + apellido;
}
let nombre = nombreCompleto("clark", "kent");
console.log(nombre);
function nombreCompletoDos(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
let nombredos = nombreCompletoDos("Barry", "Allen");
console.log(nombredos);
function nombreCompletoTres(nombre, apellido, capitalizado = false) {
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
let nombretres = nombreCompletoTres("clark", "kent", true);
console.log(nombretres);
function nombreCompletoCuatro(nombre, ...losDemasParametros) {
    return nombre + " " + losDemasParametros.join(" ");
}
let nombrecuatro = nombreCompletoCuatro("clark", "kent", "zapata", "arango");
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
let miFuncion;
miFuncion = 10;
miFuncion = suma;
console.log(miFuncion(5, 5));
miFuncion = saludar;
console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();
//# sourceMappingURL=main.js.map