///**  Genericos */


function imprimeConsola(parametro:any){
    console.log(parametro);
}

imprimeConsola(123);
imprimeConsola(new Date());
imprimeConsola({});
imprimeConsola({});


///** Creando funciones genericas */


function regresar<T>(arg:T){
    return arg;
}
console.log(regresar(15.456789).toFixed(2)); 
console.log(regresar("Juan").charAt(0));
console.log(regresar(new Date().getTime()));


///** Funcion generica en accion */

function functionGenerica<T>(arg:T){
    return arg;
}

type Heroecillo = {
    nombre:string;
    nombreReal:string;
}

type Villan = {
    nombre:string;
    poder:string;
}

//Deadpool puede ser villano o heroe

let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wilson",
    poder: "Regeneracion"
}

console.log(functionGenerica(deadpool))

//Puedo enviar de que tipo es asi:

//console.log(functionGenerica<Villan>(deadpool))
//console.log(functionGenerica<Heroecillo>(deadpool))

///**Arreglo genericos */

let heroesuno:  Array<string> = ["Flash","Batman","Superman"];

heroesuno.push("123");

let villanitos:string[] = ["Lex Luthor","Flash"]

//heores: arrray explicito y villanitos: array generico, basicamente son lo mismo

///**Clases genericas */

//T extends number = los tipos solo pueden ser numeros o string

class Cuadrado<T extends number|string> {
    base:T;
    altura:T;

    constructor(base: T, altura: T) {
        this.base = base;
        this.altura = altura;
    }

    //+ casteo a numero
    area():number{
    return +this.base * +this.altura
}
}

let cuadrado = new Cuadrado(10, 10);

//let cuadrado = new Cuadrado<string>(true, 10); //Va a manejar los strings
//let cuadrado = new Cuadrado<numbers>(true, 10); //Va a manejar los numbers
//let cuadrado = new Cuadrado<numbers|string>(true, 10); //Va a manejar los numbers o sstrings

console.log(cuadrado.area())