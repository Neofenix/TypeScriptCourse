namespace Validaciones{

    //Que funciones son las unicas que pueden ser vistas por fuera, se utiliza export

    export function validarTexto(texto:string):boolean{
        if(texto.length>3){
            return true;
        }
        return false;
    }
    
}