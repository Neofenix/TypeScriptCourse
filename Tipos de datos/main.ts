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

let batman:string = "Batman";
let linternaVerde:string = "Linterna Verde";
let volcanNegro:string = "Volcán Negro"

console.log(batman)
console.log(linternaVerde)
console.log(volcanNegro)

let concatenar:string = "Los héroes: " + batman + "," + linternaVerde + "," + volcanNegro

console.log(concatenar)

//templates literales

let concatenartwo:string = `los héroes son: ${batman}, ${linternaVerde},${volcanNegro}`

console.log(concatenartwo)


//Tipo Any

let venga;
let existe;
let derrotas;

venga = "Dr. Strange";
console.log(venga.charAt(0))