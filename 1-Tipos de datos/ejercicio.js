"use strict";
var batman = "Bruce";
var superman = "Clark";
var existetwo = false;
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var fuerzaSuperHeroes;
(function (fuerzaSuperHeroes) {
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(fuerzaSuperHeroes || (fuerzaSuperHeroes = {}));
;
var fuerzaFlash = fuerzaSuperHeroes.fuerzaFlash;
var fuerzaSuperman = fuerzaSuperHeroes.fuerzaSuperman;
var fuerzaBatman = fuerzaSuperHeroes.fuerzaBatman;
var fuerzaAcuaman = fuerzaSuperHeroes.fuerzaAcuaman;
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
//# sourceMappingURL=ejercicio.js.map