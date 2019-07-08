//Clases
//Constructor: Es una funcion que es ejecutada cuando se crea una nueva instancia del objeto e iniciala variables o ejecutar algun tipo de codigo antes de que nuestra clase
//pueda ser utilizada en otro lado
//This: Haace referencia a las clase
//Propiedades publicas, privadas y protegidas
//Por defecto en typescript las propiedades son publicas
//Publico: Puede ser accesado a lo largo de lo largo del programa, Protected: Solo puedo cambiar dentro de la clase original o sus clases hijas, private: solo puede ser cambiada dentro de la clase
//Por fuera de la clase solo los atributos publicos



class Avenger {
    public nombre:string = "Sin nombre";
    protected equipo:string;
    private nombreReal:string;

    private PuedePelear:boolean = false;
    private peleasGanadas:number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
       this.nombre = nombre;
       this.equipo = equipo;
       this.nombreReal = nombreReal;
    }

    public bio():void{
        let mensaje:string = `los héroes son: ${this.nombre}, ${this.nombreReal},${this.equipo}`
        console.log(mensaje)
    }

    //Solo accesible en public bio() o constructor
    private cambiarEquipo(nuevoEquipo:string):boolean{

        if(nuevoEquipo == this.equipo){
            return false;
        }else{
            return true;
        }
    }

    //Este metodo puede acceder el metodo privado
    public cambiarEquipoPublico(nuevoEquipo:string):boolean{
        //this: refencia de la clase si no busca en el metodo 
        return this.cambiarEquipo(nuevoEquipo);
    }

}

let antman:Avenger  = new Avenger("Antman","Cap","Scoot Lang");
console.log(antman)
antman.bio();
console.log(antman.cambiarEquipoPublico("Cap"))

//No se puede por ser protected
//antman.equipo = "Iron"


//Herencia

class AvengerTwo{

    constructor(public nombre:string, private nombreReal:string){
        console.log("Constructor AvengerTwo llamado")
     }

    //Lo hereda al hijo o lo puedo acceder
    //  public getNombre():string{
    //      return this.nombre
    //  }

     protected getNombreTwo():string{
        console.log("Get nombre protegido")
        return this.nombre
    }


}


let ciclope:AvengerTwo = new AvengerTwo("Ciclope","Scott");

console.log(ciclope)


class Xmen extends AvengerTwo{

    //Super, llamar metodos o propiedades del padre
    constructor(a:string,b:string){
        console.log("Constructor Xmen llamado")
        super(a,b)
    }


    //Acceder desde afuera a un metodo protejido de la clase padre
    public getNombreTwo():string{
        console.log("Get nombre publico")
        return super.getNombreTwo();
    }
    
}


//Va a tomar el constructor de la clase padre
let ciclopetwo:Xmen = new Xmen("Ciclope","Scott");
console.log(ciclopetwo.getNombreTwo())


//----GET Y SET------

class TortugasNinjas{
    private _nombre:string;

    constructor(nombre:string){
        this._nombre =nombre;
    }

    get nombre():string{
        console.log("Paso por el get nombre()")
        if(this._nombre){
            return this._nombre;
        }else{
            return "No tiene ningun nombre la tortuga";
        }
    }

    set nombre(nombre:string){
        if(nombre.length < 3){
            console.error("El nombre debe tener al menos tres caracteres") //Muestra error pero continua
            //throw new Error("Esto no debe pasar") //Frena toda la ejecucion del codigo que sigue
            return;
        }
        console.log("Se llamo el set del nombre")
        this._nombre = nombre;
    }
}


let tortuga:TortugasNinjas = new TortugasNinjas("Leonardo");

//Get. implicitamente se ejecuta la funcion get para accesar la propiedad, tiene que regresar algo
console.log(tortuga.nombre);

//Set. implicitamente se ejecuta la funcion set para establecer la propiedad, tiene que recibir algo
tortuga.nombre = "Li"

//Get
console.log(tortuga.nombre);


//----METODOS Y PROPIEDADES ESTATICOS

class TortugasNinjasDos{
    static nombre:string = "Juancito"

    constructor(){

    }

    //Metodo estatico -> Se puede llamar si instanciar la clase
    static crearTortuga(){
        console.log("Se creo usando un metodo estatico")
        return new TortugasNinjasDos();
    }
}

//Llamar la funcion de la clase sin inicializarla (sin el new)
console.log(TortugasNinjasDos.crearTortuga())


//Clases abtractas
//No puedo crear instancias, sirve para crear un molde que heredara otra clase


abstract class Mutantes{

    constructor(public nombre:string, public nombreReal:String){

    }

}

class Tortugitas extends Mutantes{

}

let leonardo = new Tortugitas("Leo","Leonardo")

console.log(leonardo)


//Constructores privados
//La idea es solamente crear una unica instancia de la clase


class Apocal{
    static instancia:Apocal;

    private constructor(public nombre:string){

    }
    static llamarApocalipsis(){
        if(! Apocal.instancia){
            Apocal.instancia = new Apocal("Soy Apocal, el UNICO");
        }
        return Apocal.instancia;
    }

}

//No se puede
//let apocalipsisFalso = new Apocal("Soy apocalipsis")

let real = console.log(Apocal.llamarApocalipsis())