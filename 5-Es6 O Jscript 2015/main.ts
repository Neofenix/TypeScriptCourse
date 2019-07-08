//------USO DE let y var------

///--El uso de var permite hacer cosas como estas:

var nombretwo = "Tony"

if (true){
    var nombretwo = "Bruce"
}


///Impime Bruce, con let imprimiria tony
console.log(nombretwo)

//--Si tengo esto:

//var nombretwo = "Tony"
if (true){
    var nombretwo = "Bruce"
}

//Imprime undefined
console.log(nombretwo)


///Con let no puedo hacer redifiniciones de variables en el mismo escope:

//let nombrethree = "a"
//let nombrethree = "b"

//En diferente escope si es permitido:

let nombrefour = "Tony"
if (true){
    let nombrefour = "Bruce"

    if (true){
        let nombrefour = "Ricardo"
    }
}

//Imprime undefined
console.log(nombrefour)


//--------CONSTANTES-----
//Dato que no puede mutar una vez definido
//Por convencion van en mayuscula

const OPCIONES:string = "Activo";
//OPCIONES = "Desactivado"; ->No se puede, ya que es de solo lectura


if(true){
    const OPCIONES:string = "Desactivado";  //Se puede porque esta en otro scope o ambito
}

//Crea un nuevo ambito por cada scope
for( const I of [1,2,3,4,5]){
    console.log(I)
}



//Constantes como objetos

const OPCIONES_TWO = {
    estado:true,
    audio:10,
    ultima:"main"
};

OPCIONES_TWO.estado = false;

OPCIONES_TWO.audio = 1;

console.log(OPCIONES_TWO)



//-----------Templates literales---------------

let nombre1:string = "Bruce";
let nombre2:string = 'Ricardo'

function getNombre():string {
    return `${nombre1}  ${nombre2}`
}

let mensaje2:string =  `1 Esta es una linea normal
2. Hola ${nombre1}
3. Robin es :  ${nombre2}
4. Los nombre son ${getNombre()}
5. ${5 + 7}
`;

console.log(mensaje2)



//-------------Funcion flecha--------------

function sumarr(a:number,b:number){
    return a + b
}

//Sinonimo de la funcion

let sumarflecha = (a:number,b:number) => a+b

//Cuerpo de la funcion con mas cosas

let sumarflechatwo = (a:number,b:number) =>{
    a=a;
    b=b
    return a+b
}

function darOrden_hulk(orden:string){
    return `Hulk ${orden}`;
}

console.log(darOrden_hulk("smash!!"))




//Funcion flecha

let darOrden_hulk_two =(orden:string) =>  `Hulk ${orden}`

console.log(darOrden_hulk_two("smash!!"))

//Ventaja de usar flechas

let capitan_america = {
    nombre:"Hulk",
    darOrden_hulk:function(){

        //Crea un contexto de una funcion dentro de otra funcion, devuelve undefined smash!! debido que se pierde el puntero del this, Se cambia a function de flecha para que no mute y no cambie el this
        // setTimeout(function(){
        //     console.log(this.nombre + " smash!!");
        // },1000)

        //Funcion flecha sin parametro y sin {} ya que solo hace una instruccion
        setTimeout(()=>  console.log(this.nombre + " smash!!"),1000)
    }
};

capitan_america.darOrden_hulk()

//-----------Destructuracion de Objetos---------------

let avengerss = {
    nick: "Samuel",
    iron: "Robert",
    vision: "Paul"
};

//Tradicional
//let nick = avengers.nick

//Destructuracion

let {nick,iron,vision} =avengerss

console.log(nick)

//-----------Destructuracion de Arreglos---------------

let avengersss = ["A","B","C","D"];

let [ , ,avenger3] = avengersss;

let [ ,avenger2 ] = avengersss;

console.log(avenger3)


//----ciclo-For of

let thor = {
    nombre: "Thor",
    arma: "machete"
}

let teemo = {
    nombre: "Teemo",
    arma: "Hongo"
}

let personajes = [thor,teemo];


// for(let i in personajes){

// }

// for(let i=0; i <= personajes.length -1; i++){
//     let personaje = personajes[i]
//     console.log(personaje.nombre,personaje.arma)
// }

for (let personaje of personajes){
    console.log(personaje.nombre,personaje.arma)
}



//Clases

class Avengerr{
    nombre: string;
    poder: string;
    constructor(nombre:string, poder:string){
        this.nombre = nombre;
        this.poder = poder;
    }
};

let hulk = new Avengerr("Juanito","Alimaña");
console.log(hulk);

class AvengerVolador extends Avengerr{
    vuela:boolean;
    constructor(nombre:string,poder:string){
        super(nombre,poder);
        this.vuela=true;
    }

}

let falcon = new AvengerVolador("Falcon","Volar");
console.log(falcon)


