//**Modulos */
//Crear un programa que solo tiene un import de javascript, lo demas se encarga javascript y un modulo de importador
//para que cuando quiere utilizar una instancia de una clase y va a traer la clase, eso hace que solo se 
//carguen los archivos necesarios


//Solo quiero importar el numero de pi de numeros.ts
//import {PI} from "./validaciones/numeros"

import numeros from "./validaciones/numeros" //LLamado apunta la funcion restarNumeros de numeros.ts que tiene el default

//Todos las propieades listadas que tenga la palabra export
import * as textos from "./validaciones/textos"

console.log(numeros(10,5 ));

console.log(textos.obtenerError(10));



