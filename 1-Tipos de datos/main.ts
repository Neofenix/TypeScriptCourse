//Tipos primitivos y compuestos (objetos,clases y funciones)

//Booleanos

let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman = true;  //No recomendado

if(esSuperman){
    console.log("Estamos salvados")
}else{
    console.log("Oooops ohh")
}

esSuperman = convertirClark()

if(esSuperman){
    console.log("Estamos salvados")
}else{
    console.log("Oooops ohh")
}

function convertirClark(){
    return false;
}

//Numericos

let avengers:number =3;
let villanos:number;  //undefined
villanos = 0;
let otros = 2;


if( avengers > villanos ) {
    console.log("Estamos Salvados!");
 }else {
    console.log("Estamos muertos!");
 }

 otros = 123;
 otros = 123.12

 //Strings

let batmantwo:string = "Batman";
let linternaVerde:string = "Linterna Verde";
let volcanNegro:string = "Volcán Negro"

console.log(batmantwo)
console.log(linternaVerde)
console.log(volcanNegro)

let concatenar:string = "Los héroes: " + batmantwo + "," + linternaVerde + "," + volcanNegro

console.log(concatenar)

//templates literales

let concatenartwo:string = `los héroes son: ${batmantwo}, ${linternaVerde},${volcanNegro}`

console.log(concatenartwo)


//Tipo Any
//Los que no estan declaradas son de tipo Any por defecto con valores undefined

let venga;
let existe;
let derrotas;

venga = "Dr. Strange";
console.log(venga.charAt(0))

venga = 150.5555;
console.log(venga.toFixed(2))

venga= true;
console.log(venga)

console.log(existe)
console.log(derrotas)


//Arreglos

let arr:number[] = [1,2,3,4]

let villa:string[] = ["Omega rojo","Dormammu","Duende Verde"]

console.log(villa[0].charAt(0))

//Tuplas

let heroe:[string,number,boolean] = ["Dr. Strange",100,true];

heroe.push(true);  //Se puede (?)

console.log(heroe)


//Enumeraciones

//Imprime 0 }, 1 y 2 por defecto para min,medio  y max

enum Volumen{
    min = 1,
    medio,
    max = 10
}

//Imprime 2, valor por defecto
let audio:number = Volumen.medio;
console.log(audio)

console.log(Volumen)

console.log(Volumen[10])


//Void-Vacio -Ningun tipo. asociado al retorno de una funcion

function llamar_batman():void{
    console.log("Mostrar la batiseñal")
}

let mensaje = llamar_batman();


//Never -Valor que nunca puede suceder

/*function error(mensaje: string | undefined):never{
    throw new Error(mensaje);
}*/

//error("Error critico")

//Aserciones de tipo

let cualquierValor:any = "Cualquier cosa";

let largoDelString:number = (<string>cualquierValor).length;

console.log(largoDelString);

//Null y undefined

let nada:undefined = undefined;

let ironman:string;

ironman = "Tony";

//ronman = undefined; error
