//---Importancia de la interfaz---

function enviarMision(xmen: {nombre:string} ){
    console.log("Enviando a:"+ xmen.nombre);
}

//Que pasa si el objeto es muy grande? el xmen: {nombre:string} seria muy grande Y si hay cambios en el objeto habria que hacerlo en todo el codigo donde se utilize

let wolverine = {
    //nombreXmen: "Wolverine => no va el nombre en el objeto para imprimirlo en el console log
    nombre: "Wolverine",
    poder: "Regeneracion"
}


enviarMision(wolverine)


//---Interfaz basica

interface XmenTwo{
    nombre:string,
    poder: string
}

function enviarMisionTwo(xmen: XmenTwo ){
    console.log("Enviando a:"+ xmen.nombre);
}


function enviarCuartel(xmen: XmenTwo ){
    console.log("Enviando al cuartel:"+ xmen.nombre);
}

//Que pasa si el objeto es muy grande? el xmen: {nombre:string} seria muy grande


//Podemos hacer wolverineTwo:any o wolverineTwo:
let wolverineTwo:XmenTwo = {
    //nombreXmen: "Wolverine => no va el nombre en el objeto para imprimirlo en el console log
    nombre: "Wolverine",
    poder: "Regeneracion"
}


enviarMisionTwo(wolverineTwo)
enviarCuartel(wolverineTwo)


///**Propiedades opcionales */

//Con signo de interrogacion para asignar una variable opcional en la interface 

interface XmenThree{
    nombre:string,
    poderTwo?: string
}

let wolverineTHree:XmenThree = {
    //nombreXmen: "Wolverine => no va el nombre en el objeto para imprimirlo en el console log
    nombre: "Wolverine",
}

///**Metodo en la interfaz */

interface XmenFour{
    nombre:string;
    poderTwo?: string;
    regenerar(nombreReal:string):void;
}

function enviarMisionFour(xmen: XmenFour ){
    console.log("Enviando a:"+ xmen.nombre);

    xmen.regenerar("Logan")
};

//Objeto
let wolverineFour = {
    
    //nombreXmen: "Wolverine => no va el nombre en el objeto para imprimirlo en el console log
    nombre: "Wolverine",
    regenerar(x:string){
        console.log("Se ha regenerado " + x);
    }
};

enviarMisionFour(wolverineFour);

//**Interfaces de clase */

interface Tanque{
    nombre:string;
    nombreReal?:string;
    informacion(nombreReal:string):void;
}

class Soporte implements Tanque{
    nombre:string;
    poder:string;
    esBueno:boolean;
    informacion(nombre:string){
        console.log("Hola soy "+ nombre + " Tengo el poder de: " +this.poder);
    }

    constructor(poder:string, esBueno:boolean, nombre:string) {
        this.nombre = nombre;
        this.poder = poder;
        this.esBueno = esBueno;
      }
}

let nautilus = new  Soporte("Carga de las profundidades",true,"Nautilus");
nautilus.informacion(nautilus.nombre)


//**Interfaces para las funciones */

//Las interfaces no existen en javascript, es un control para typescript
interface DosNumeroFunc{
    (num1:number, num2: number):number
}

let restar:DosNumeroFunc;

restar = function(a:number,b:number){
    return a - b;
}

let multiplicar:DosNumeroFunc;
multiplicar =   function(a:number,b:number){
    return a * b;
}

//Que pasa si numero 1 es de tipo string