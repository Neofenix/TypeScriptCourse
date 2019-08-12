//No importa que ya exista un namespace con el mismo nombre
//Se puede incluir en el index.html pero no es tan viable

namespace Validaciones{

    //Que funciones son las unicas que pueden ser vistas por fuera, se utiliza export

    export function validarFecha(fecha:Date):boolean{
    
        if( isNaN(fecha.valueOf())) {
            return false;
        }else{
        return true;
    } 
    }
}