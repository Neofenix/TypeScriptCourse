"use strict";
function imprimeConsola(parametro) {
    console.log(parametro);
}
imprimeConsola(123);
imprimeConsola(new Date());
imprimeConsola({});
imprimeConsola({});
function regresar(arg) {
    return arg;
}
console.log(regresar(15.456789).toFixed(2));
console.log(regresar("Juan").charAt(0));
console.log(regresar(new Date().getTime()));
function functionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wilson",
    poder: "Regeneracion"
};
console.log(functionGenerica(deadpool));
var heroesuno = ["Flash", "Batman", "Superman"];
heroesuno.push("123");
var villanitos = ["Lex Luthor", "Flash"];
var Cuadrado = (function () {
    function Cuadrado(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado(10, 10);
console.log(cuadrado.area());
//# sourceMappingURL=main.js.map