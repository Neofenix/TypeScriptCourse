//Namespaces
//Tomar toda nuestra logica y segmentarla en pequeños archivos que tenga una forma mas estructurada para trabajar: 
//folder con las interfaces, folder con clases, folder con la logica, folder con las funciones
//se hace un tsc --outFile build/app.js validaciones/fechas validaciones/textos para incluir los namespaces y el main en un solo archivo, despues hago un build/main.js en el index.html


//** Importar namespaces */

/// <reference path = "validaciones/textos.ts" />
/// <reference path = "validaciones/fechas.ts" />

//Aplicar: tsc --outFile public/main.js 8-Namespace\main.ts

//**Creando un Namespace */

if(Validaciones.validarTexto("Alle")){
    console.log("El texto es valido")
}else{
    console.log("El texto no es valido")
}

let Hoy2 = new Date()

console.log(
    Validaciones.validarFecha(Hoy2)
)