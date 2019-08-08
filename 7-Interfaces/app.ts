// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Autolin{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void
}

function conducirBatimovil( auto:Autolin ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovilex:Autolin = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villanil{
  reir:boolean;
  comer?:boolean;
  llorar?:boolean;
}

let guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Villanil ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface ciudad{
  (ciudadanos:string[]):number;  
}

let ciudadBatman:ciudad

ciudadBatman = function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Sujeto{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void
}

class Persona implements Sujeto{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(){
    console.log("Prueba Quiz");
}

  constructor(nombre:string, edad:number, sexo:string,  estadoCivil:string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }
}
