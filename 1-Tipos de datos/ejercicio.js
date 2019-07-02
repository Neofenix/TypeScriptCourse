"use strict";
let batman = "Bruce";
let superman = "Clark";
let existetwo = false;
let parejaHeroes = [batman, superman];
let villano = ["Lex Lutor", 5, true];
let aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
var fuerzaSuperHeroes;
(function (fuerzaSuperHeroes) {
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
    fuerzaSuperHeroes[fuerzaSuperHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(fuerzaSuperHeroes || (fuerzaSuperHeroes = {}));
;
let fuerzaFlash = fuerzaSuperHeroes.fuerzaFlash;
let fuerzaSuperman = fuerzaSuperHeroes.fuerzaSuperman;
let fuerzaBatman = fuerzaSuperHeroes.fuerzaBatman;
let fuerzaAcuaman = fuerzaSuperHeroes.fuerzaAcuaman;
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
let poder = "100";
let largoDelPoder = poder.length;
console.log(largoDelPoder);
//# sourceMappingURL=ejercicio.js.map