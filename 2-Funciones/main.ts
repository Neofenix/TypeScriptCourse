
//Funciones
let superheroe: string = "Flash"

function imprime_heroe():string {
    return superheroe
}

let activar_batisenal = function(){
    return "Batisenal activada.";
}



console.log(imprime_heroe())
console.log(activar_batisenal())


//Parametros obligatorios funciones

function nombreCompleto(nombre:string, apellido:string):string{
    return nombre +apellido;
}

let nombre = nombreCompleto("clark","kent")
console.log(nombre)



//Parametros opcionales funciones

function nombreCompletoDos(nombre:string, apellido?:string):string{

    if(apellido){
        return nombre + ' ' + apellido;
    }
    else{
        return nombre;
    }
}

let nombredos = nombreCompletoDos("Barry","Allen")
console.log(nombredos)


//Parametros por defecto


function nombreCompletoTres(nombre:string, apellido:string,capitalizado:boolean = false):string{

    if(capitalizado){
        return capitalizar(nombre)+ " " + capitalizar(apellido)
    }
    else{
        return nombre +apellido;
    }
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase()
}

let nombretres = nombreCompletoTres("clark","kent",true)
console.log(nombretres)


//Parametros REST

function nombreCompletoCuatro(nombre:string , ...losDemasParametros:string[]):string{
        return nombre + " "+ losDemasParametros.join(" ")
}

let nombrecuatro:string = nombreCompletoCuatro("clark","kent","zapata","arango")
console.log(nombrecuatro)



//Tipo Funcion

function suma(a:number,b:number):number{
    return a+b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log("El mundo esta salvado!")
}

//let miFuncion: (x:number,y:number)=> number;
//let miFuncion: (x:string)=> string;
//let miFuncion: () =>void;
let miFuncion;

miFuncion = 10;

miFuncion = suma;
console.log(miFuncion(5,5))

miFuncion = saludar;
console.log(miFuncion("Batman"))

miFuncion = salvarMundo;
miFuncion()


