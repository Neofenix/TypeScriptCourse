//Ejercicio

// Funciones Básicas
function sumar( a:number, b:number ):number{
    return a + b;
  }
  
  let contar = function( heroes:string[] ):number{
    return heroes.length;
  }
  let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parametros por defecto
  function llamarBatman( llamar:boolean = true ):void{
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  function unirheroes( ...personas:string[] ):string{
    return personas.join(", ");
  }
  
  
  // Tipo funcion
  function noHaceNada(a:number, b:string, c: boolean, d:any[] ){
  }
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco : (x:number,y:string,z:boolean,w:any[])=> void;

  noHaceNadaTampoco = noHaceNada;
  