"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var VillanoDecorado = (function () {
    function VillanoDecorado(nombre) {
        this.nombre = nombre;
    }
    VillanoDecorado = __decorate([
        consola
    ], VillanoDecorado);
    return VillanoDecorado;
}());
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return function () { };
    }
}
var VillanoDecoradoFactory = (function () {
    function VillanoDecoradoFactory(nombre) {
        this.nombre = nombre;
    }
    VillanoDecoradoFactory = __decorate([
        imprimirConsola(true)
    ], VillanoDecoradoFactory);
    return VillanoDecoradoFactory;
}());
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + "es dominar al mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
var VillanoPlan = (function () {
    function VillanoPlan(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    VillanoPlan = __decorate([
        imprimible,
        planVillano
    ], VillanoPlan);
    return VillanoPlan;
}());
var lex = new VillanoPlan("Lex Luthor", "SuperMente");
lex.imprimirPlan();
lex.imprimir();
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var VillaMetodo = (function () {
    function VillaMetodo(nombre) {
        this.nombre = nombre;
    }
    VillaMetodo.prototype.plan = function () {
        console.log("Dominar el mundo");
    };
    __decorate([
        editableProp(false)
    ], VillaMetodo.prototype, "nombre", void 0);
    __decorate([
        editable(true)
    ], VillaMetodo.prototype, "plan", null);
    return VillaMetodo;
}());
var luthor = new VillaMetodo("Lex metodos");
luthor.plan();
luthor.plan = function () {
    console.log("Es vender carne");
};
luthor.plan();
var luthor2 = new VillaMetodo("Lex parametros");
console.log(luthor2);
var Villano3 = (function () {
    function Villano3(nombre) {
        this.nombre = nombre;
    }
    Villano3.prototype.imprimir = function (plan, mensaje) {
        if (plan) {
            console.log("El plan es:");
        }
        else {
            console.log(mensaje);
        }
    };
    return Villano3;
}());
//# sourceMappingURL=main.js.map