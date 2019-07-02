"use strict";
let esSuperman = true;
let esBatman;
let esAcuaman = true;
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
let avengers = 3;
let villanos;
villanos = 0;
let otros = 2;
if (avengers > villanos) {
    console.log("Estamos Salvados!");
}
else {
    console.log("Estamos muertos!");
}
otros = 123;
otros = 123.12;
let batmantwo = "Batman";
let linternaVerde = "Linterna Verde";
let volcanNegro = "Volcán Negro";
console.log(batmantwo);
console.log(linternaVerde);
console.log(volcanNegro);
let concatenar = "Los héroes: " + batmantwo + "," + linternaVerde + "," + volcanNegro;
console.log(concatenar);
let concatenartwo = `los héroes son: ${batmantwo}, ${linternaVerde},${volcanNegro}`;
console.log(concatenartwo);
let venga;
let existe;
let derrotas;
venga = "Dr. Strange";
console.log(venga.charAt(0));
venga = 150.5555;
console.log(venga.toFixed(2));
venga = true;
console.log(venga);
console.log(existe);
console.log(derrotas);
let arr = [1, 2, 3, 4];
let villa = ["Omega rojo", "Dormammu", "Duende Verde"];
console.log(villa[0].charAt(0));
let heroe = ["Dr. Strange", 100, true];
heroe.push(true);
console.log(heroe);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
console.log(Volumen[10]);
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
let mensaje = llamar_batman();
let cualquierValor = "Cualquier cosa";
let largoDelString = cualquierValor.length;
console.log(largoDelString);
let nada = undefined;
let ironman;
ironman = "Tony";
//# sourceMappingURL=main.js.map