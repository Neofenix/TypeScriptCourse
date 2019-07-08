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
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.PuedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.bio = function () {
        var mensaje = "los h\u00E9roes son: " + this.nombre + ", " + this.nombreReal + "," + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo == this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    Avenger.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scoot Lang");
console.log(antman);
antman.bio();
console.log(antman.cambiarEquipoPublico("Cap"));
var AvengerTwo = (function () {
    function AvengerTwo(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        console.log("Constructor AvengerTwo llamado");
    }
    AvengerTwo.prototype.getNombreTwo = function () {
        console.log("Get nombre protegido");
        return this.nombre;
    };
    return AvengerTwo;
}());
var ciclope = new AvengerTwo("Ciclope", "Scott");
console.log(ciclope);
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = this;
        console.log("Constructor Xmen llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Xmen.prototype.getNombreTwo = function () {
        console.log("Get nombre publico");
        return _super.prototype.getNombreTwo.call(this);
    };
    return Xmen;
}(AvengerTwo));
var ciclopetwo = new Xmen("Ciclope", "Scott");
console.log(ciclopetwo.getNombreTwo());
var TortugasNinjas = (function () {
    function TortugasNinjas(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(TortugasNinjas.prototype, "nombre", {
        get: function () {
            console.log("Paso por el get nombre()");
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene ningun nombre la tortuga";
            }
        },
        set: function (nombre) {
            if (nombre.length < 3) {
                console.error("El nombre debe tener al menos tres caracteres");
                return;
            }
            console.log("Se llamo el set del nombre");
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return TortugasNinjas;
}());
var tortuga = new TortugasNinjas("Leonardo");
console.log(tortuga.nombre);
tortuga.nombre = "Li";
console.log(tortuga.nombre);
var TortugasNinjasDos = (function () {
    function TortugasNinjasDos() {
    }
    TortugasNinjasDos.crearTortuga = function () {
        console.log("Se creo usando un metodo estatico");
        return new TortugasNinjasDos();
    };
    TortugasNinjasDos.nombre = "Juancito";
    return TortugasNinjasDos;
}());
console.log(TortugasNinjasDos.crearTortuga());
var Mutantes = (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Tortugitas = (function (_super) {
    __extends(Tortugitas, _super);
    function Tortugitas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tortugitas;
}(Mutantes));
var leonardo = new Tortugitas("Leo", "Leonardo");
console.log(leonardo);
var Apocal = (function () {
    function Apocal(nombre) {
        this.nombre = nombre;
    }
    Apocal.llamarApocalipsis = function () {
        if (!Apocal.instancia) {
            Apocal.instancia = new Apocal("Soy Apocal, el UNICO");
        }
        return Apocal.instancia;
    };
    return Apocal;
}());
var real = console.log(Apocal.llamarApocalipsis());
//# sourceMappingURL=main.js.map