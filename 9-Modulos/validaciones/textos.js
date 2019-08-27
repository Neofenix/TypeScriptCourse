"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MENSAJES = [
    "El texto es muy corto",
    "El texto es muy largo"
];
function obtenerError(numError) {
    if (numError > MENSAJES.length) {
        return "El codigo de error no existe";
    }
    return MENSAJES[numError];
}
exports.obtenerError = obtenerError;
//# sourceMappingURL=textos.js.map