
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker";
let venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

let [spiderman2099 , ,] = versiones;
let spiderman2099 = versiones;

let [,spidergirl , ] = versiones;
let spidergirl = versiones[1];

let [, ,ultimate ] = versiones;
let ultimate = versiones[2];

// Destructuracion de objetos?
var villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

let {venom,carnage,sandman} =villanos

var venom = villanos.venom;
var carnage = villanos.carnage;
var sandman = villanos.sandman;

// Ciclo for Of?
for(var i=0; i<= versiones.length - 1; i++){
  var spider = versiones[i];
  console.log(spider);
}

for (let version of versiones){
    console.log(version)
}

