"use strict";
//Booleanos
var esSuperman = true;
var esBatman;
var esAcuaman = true; //No recomendado
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Oooops ohh");
}
esSuperman = convertirClark();
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("Oooops ohh");
}
function convertirClark() {
    return false;
}
//Numericos
var avengers = 3;
var villanos; //undefined
villanos = 0;
var otros = 2;
if (avengers > villanos) {
    console.log("Estamos Salvados!");
}
else {
    console.log("Estamos muertos!");
}
otros = 123;
otros = 123.12;
//Strings
var batman = "Batman";
var linternaVerde = "Linterna Verde";
var volcanNegro = "Volcán Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los héroes: " + batman + "," + linternaVerde + "," + volcanNegro;
console.log(concatenar);
//templates literales
var concatenartwo = "los h\u00E9roes son: " + batman + ", " + linternaVerde + "," + volcanNegro;
console.log(concatenartwo);
//Tipo Any
var venga;
var existe;
var derrotas;
venga = "Dr. Strange";
console.log(venga.charAt(0));
