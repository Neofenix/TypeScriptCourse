"use strict";
var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        else {
            return true;
        }
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
//# sourceMappingURL=fechas.js.map