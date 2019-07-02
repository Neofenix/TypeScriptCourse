//Objeto definido

let flash = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};


//Nombre de las propiedades importan EJ:nombre,edad,poderes
flash = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar"]
}


//Objto de tipo especifico {}, el orden no importa


let flashtwo:{nombre:string,edad:number,poderes:string[]} = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"]
};


//Metodos dentro de objetos


let flashthree:{nombre:string,edad:number,poderes:string[], getNombre:()=>string} = {
    nombre: "Flash",
    edad: 24,
    poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
    getNombre(){
        return this.nombre;        
    }
};

flashthree.getNombre()

//Refactor - metodo dentro de objetos
//que pasa si los poderes  se cambia a cualquiero tipo, tendria que cambiarlo en todas las definiciones de los objetos


let flashfour:{nombre:string,edad:number,poderes:string[], getNombre:()=>string} = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar","Super Velocidad"],
    getNombre(){
        return this.nombre;        
    }
};

//Tipos personalizados
//Palabra reservada type (Tipo de dato). let es un variable
//Se puede tener un archivo con los tipos de datos

type Heroe = {
    nombre:string,
    edad: number,
    poderes: any[],
    getNombre:()=>string
};

let flashfive:Heroe = {
    nombre: "Clark",
    edad: 500,
    poderes: ["Poder volar","Super Velocidad",23],
    getNombre(){
        return this.nombre;        
    }
};


//Multiples tipos permitidos

type HeroeTwo = {
    nombre:string,
    edad: number,
    poderes: any[],
    getNombre:()=>string
};

let loquesea:string | number | HeroeTwo;
loquesea = "Juan"
loquesea = 10
loquesea = {
    nombre: "Flash",
    edad: 56,
    poderes: [],
    getNombre(){
        return "Juan";
    }
};


///Revisar el tipo de un objeto o variable

//let cosa:any = {};

//Funcion
let cosa:any = function(){
    return null
};

console.log(typeof cosa)

if(typeof cosa === "number"){
    console.log("Cosa, es un numero")
}else{
        console.log("Este codigo no es un numero")
}










