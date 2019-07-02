let edad:number = 30;
let heroee:string = "Juan"


//Nota alternativa pero compila
//heroee = edad;

console.log(heroee)


let edadd:number = 30

let mensajee = imprimir("Juancito",30)

console.log(mensajee)

//SourceMap: Para generar un archivo.ts del codigo para debugear en el navaegador chrome por ejemplo
//RemoveComments: Eliminar comentarios de un archivo compilado

/*! 
Test 
*/

function imprimir(heroe:string, edad:number):string{
    heroe = heroe.toLowerCase();
    edad = edad +10;

    return heroe + " " + edad;
}

//Excluir e incluir carpetas o archivos
//tsconfig--> "include":["app/**/*"], "exclude":["node_modules","src/"]


//Outfile
//Junta todo lo que especifiquemos en un unico archivo
//"outFIle": "nuild/app.js" -tsc en console



//Cambiar version de Javascript al momento de escribir
//Por consola:  tsc (archivo) --target esx
//Por tsconfig "target": esx

let heroes:string[] = ["Batman","Superman","Robin"]

for (let heroe of heroes){
    console.log(heroe)
}

heroes.push("Iron man")
 
//Detectar cambios en archivos de forma automatica
//tsc -w // Outfile: 