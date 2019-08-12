//No importa que ya exista un namespace con el mismo nombre
//Se puede incluir en el index.html pero no es tan viable
var Validaciones;
(function (Validaciones) {
    //Que funciones son las unicas que pueden ser vistas por fuera, se utiliza export
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
var Validaciones;
(function (Validaciones) {
    //Que funciones son las unicas que pueden ser vistas por fuera, se utiliza export
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
//Namespaces
//Tomar toda nuestra logica y segmentarla en pequeños archivos que tenga una forma mas estructurada para trabajar: 
//folder con las interfaces, folder con clases, folder con la logica, folder con las funciones
//se hace un tsc --outFile build/app.js validaciones/fechas validaciones/textos para incluir los namespaces y el main en un solo archivo, despues hago un build/main.js en el index.html
//**Creando un Namespace */
if (Validaciones.validarTexto("Alle")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
var Hoy = new Date();
console.log(Validaciones.validarFecha(Hoy));
