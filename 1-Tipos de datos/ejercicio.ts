// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existetwo:boolean = false;

// Tuplas
let parejaHeroes:[string,string] = [batman,superman];
let villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerzaSuperHeroes{
  fuerzaAcuaman = 0,
  fuerzaBatman = 1,
  fuerzaFlash = 5,
  fuerzaSuperman = 100
};

let fuerzaFlash = fuerzaSuperHeroes.fuerzaFlash;
let fuerzaSuperman = fuerzaSuperHeroes.fuerzaSuperman;
let fuerzaBatman = fuerzaSuperHeroes.fuerzaBatman;
let fuerzaAcuaman = fuerzaSuperHeroes.fuerzaAcuaman;


// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100"; //or any
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
