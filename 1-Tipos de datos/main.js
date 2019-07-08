"use strict";
var esSuperman = true;
var esBatman;
var esAcuaman = true;
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
var avengers = 3;
var villanos;
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
var batmantwo = "Batman";
var linternaVerde = "Linterna Verde";
var volcanNegro = "Volcán Negro";
console.log(batmantwo);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los héroes: " + batmantwo + "," + linternaVerde + "," + volcanNegro;
console.log(concatenar);
var concatenartwo = "los h\u00E9roes son: " + batmantwo + ", " + linternaVerde + "," + volcanNegro;
console.log(concatenartwo);
var venga;
var existe;
var derrotas;
venga = "Dr. Strange";
console.log(venga.charAt(0));
venga = 150.5555;
console.log(venga.toFixed(2));
venga = true;
console.log(venga);
console.log(existe);
console.log(derrotas);
var arr = [1, 2, 3, 4];
var villa = ["Omega rojo", "Dormammu", "Duende Verde"];
console.log(villa[0].charAt(0));
var heroe = ["Dr. Strange", 100, true];
heroe.push(true);
console.log(heroe);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
console.log(Volumen[10]);
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
var mensaje = llamar_batman();
var cualquierValor = "Cualquier cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
var nada = undefined;
var ironman;
ironman = "Tony";
//# sourceMappingURL=main.js.map