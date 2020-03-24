/**
 * ARROW FUNCTION - FUNCIONES FLECHA
 * 
 * 1 - Sintaxis mas corta
 * 2 - 'this' no se vincula
 */

 //Funcion tradicional
 function sumar_1(a,b) {
     //En esta funcion se crea un nuevo contexto (this)
     return a + b;
 }
let sumar_2 = (a,b) => {
    return a + b;

}

let sumar_3 = (a,b) => a + b;

 let resultado1 = sumar_1(10,20);
 let resultado2 = sumar_2(10,20);
 let resultado3 = sumar_3(10,20);

 console.log("Opcion tradicional ", resultado1);
 console.log("Opcion funcion flecha ", resultado2);
 console.log("Opcion funcion flecha reducida ", resultado3);

 // -----------------------------------EJEMPLO RETO ------------------

 let a = [1,2,3,4,5,6,7];
 let b = [2,5,8,9,10];
//Hallar valores en comun 

 let resultado_profesor = (a,b) => a.filter(value => b.indexOf(value) > -1).sort();
 let resultado_optimizado1 = a.filter(x => b.includes(x));
 let intersection2 = (a,b) =>{result2 = a.filter(e => {if(b.includes(e)){return e}}); return result2} 

 console.log(resultado_profesor(a,b));




 