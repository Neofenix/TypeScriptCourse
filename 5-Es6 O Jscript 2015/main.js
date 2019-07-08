"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nombretwo = "Tony";
if (true) {
    var nombretwo = "Bruce";
}
console.log(nombretwo);
if (true) {
    var nombretwo = "Bruce";
}
console.log(nombretwo);
var nombrefour = "Tony";
if (true) {
    var nombrefour_1 = "Bruce";
    if (true) {
        var nombrefour_2 = "Ricardo";
    }
}
console.log(nombrefour);
var OPCIONES = "Activo";
if (true) {
    var OPCIONES_1 = "Desactivado";
}
for (var _i = 0, _a = [1, 2, 3, 4, 5]; _i < _a.length; _i++) {
    var I = _a[_i];
    console.log(I);
}
var OPCIONES_TWO = {
    estado: true,
    audio: 10,
    ultima: "main"
};
OPCIONES_TWO.estado = false;
OPCIONES_TWO.audio = 1;
console.log(OPCIONES_TWO);
var nombre1 = "Bruce";
var nombre2 = 'Ricardo';
function getNombre() {
    return nombre1 + "  " + nombre2;
}
var mensaje2 = "1 Esta es una linea normal\n2. Hola " + nombre1 + "\n3. Robin es :  " + nombre2 + "\n4. Los nombre son " + getNombre() + "\n5. " + (5 + 7) + "\n";
console.log(mensaje2);
function sumarr(a, b) {
    return a + b;
}
var sumarflecha = function (a, b) { return a + b; };
var sumarflechatwo = function (a, b) {
    a = a;
    b = b;
    return a + b;
};
function darOrden_hulk(orden) {
    return "Hulk " + orden;
}
console.log(darOrden_hulk("smash!!"));
var darOrden_hulk_two = function (orden) { return "Hulk " + orden; };
console.log(darOrden_hulk_two("smash!!"));
var capitan_america = {
    nombre: "Hulk",
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1000);
    }
};
capitan_america.darOrden_hulk();
var avengerss = {
    nick: "Samuel",
    iron: "Robert",
    vision: "Paul"
};
var nick = avengerss.nick, iron = avengerss.iron, vision = avengerss.vision;
console.log(nick);
var avengersss = ["A", "B", "C", "D"];
var avenger3 = avengersss[2];
var avenger2 = avengersss[1];
console.log(avenger3);
var thor = {
    nombre: "Thor",
    arma: "machete"
};
var teemo = {
    nombre: "Teemo",
    arma: "Hongo"
};
var personajes = [thor, teemo];
for (var _b = 0, personajes_1 = personajes; _b < personajes_1.length; _b++) {
    var personaje = personajes_1[_b];
    console.log(personaje.nombre, personaje.arma);
}
var Avengerr = (function () {
    function Avengerr(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return Avengerr;
}());
;
var hulk = new Avengerr("Juanito", "Alimaña");
console.log(hulk);
var AvengerVolador = (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avengerr));
var falcon = new AvengerVolador("Falcon", "Volar");
console.log(falcon);
//# sourceMappingURL=main.js.map