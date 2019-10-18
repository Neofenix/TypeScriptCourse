///** Decoradores */

//Un decorador es una funcion -> Y es un tag que se pone antes de la funcion
//Un decorador es básicamente una función que se ejecuta en la definición de la clase por decirlo así.


///** Decoradores de clase */


//Decorador de clase normal
function consola(constructor:Function){
    console.log(constructor);
}

//Lo que hace es enviar como parametro el constructor al decorador

@consola
class VillanoDecorado{

    //public nombre:string => this.nombre = nombre dentro del constructor
    //y public nombre:string antes del constructor
    constructor(public nombre:string){

    }
}

///** Decoradores de fabrica */

//Funcion comun y corriente que puede recibir parametros pero debe de regresar algo que pueda ser utilizado
//como un decorador


//Decorador Factory
function imprimirConsola(imprimir:boolean):Function{
    if(imprimir ){
        return consola;   //Retornar la funcion que sirve como decorador de clase o el que necesite, en este caso la funcion consola que sirve como decorador
    }else{
        return () => {};  //return function () {};
    }
}


@imprimirConsola(true)
class VillanoDecoradoFactory{

    //public nombre:string => this.nombre = nombre dentro del constructor
    //y public nombre:string antes del constructor
    constructor(public nombre:string){

    }
}


///**Ejemplo de un decorador */ y 
///**Decoradores anidados */

//Decorador recibe el constructor de la funcion
function planVillano(constructor:Function){

    //Un prototipo agrega la funcionalidad al prototipo del objeto, 
    //así todos los objetos de ese tipo, tienen el método agregado

    constructor.prototype.imprimirPlan = function(){
        console.log("El plan de "+ this.nombre + "es dominar al mundo!");
    }
}

function imprimible(constructor:Function){

    //Un prototipo agrega la funcionalidad al prototipo del objeto, 
    //así todos los objetos de ese tipo, tienen el método agregado

    constructor.prototype.imprimir = function(){
        console.log(this);
    }
}

@imprimible
@planVillano
class VillanoPlan{

    //public nombre:string => this.nombre = nombre dentro del constructor
    //y public nombre:string antes del constructor
    constructor(public nombre:string, public poder:string){

    }
}

let lex = new VillanoPlan("Lex Luthor", "SuperMente");
(<any>lex).imprimirPlan(); 
(<any>lex).imprimir(); 


///** Decoradores de metodos y propedades (Parece depreciado)*/

///Evitar que se pueda o no sobreescribir el metodo (Decorador de metodo)
function editable(esEditable:boolean){
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){   //Regresa una funcion
        // if(!esEditable){
        //     console.warn("No me haran cambiar de opinion")
        // }
        descriptor.writable = esEditable;
    }
}

function editableProp(esEditable:boolean){
    return function(target:any, nombrePropiedad:string):any{   //Regresa una funcion
        // if(!esEditable){
        //     console.warn("No me haran cambiar de opinion")
        // }
        let descriptor:PropertyDescriptor = {
            writable:esEditable
        }
        return descriptor;
    }
}

class VillaMetodo{

    //Decorador de propiedades
    @editableProp(false)
    public nombre:string;

    constructor(nombre:string ){
        this.nombre = nombre;

    }

    //Decorado de metodo: true si puedo editar el metodo o falso si no se puede editar
    @editable(true)
    plan(){
        console.log("Dominar el mundo");
    }
}

///Decorador de metodos 
let luthor = new VillaMetodo("Lex metodos");
luthor.plan();

luthor.plan = function(){
    console.log("Es vender carne")
}
luthor.plan();


//Decorados de parametros
let luthor2 = new VillaMetodo("Lex parametros");
console.log(luthor2);


//**Decorador de parametros */

function parametroo(target:any, metodo:string, index:number){
    console.log(target,metodo,index);
}
class Villano3 {

    constructor(public nombre:string){
    }

    imprimir(plan:boolean, @parametroo mensaje:string):void{
        if(plan){
            console.log("El plan es:" + mensaje);
        }
        else{
            console.log(mensaje);
        }
    }
}