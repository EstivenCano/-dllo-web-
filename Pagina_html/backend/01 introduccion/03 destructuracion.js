/**
 * 
 * Destructuracion
 * Funciones dentro de un JSON
 */

 let estudiante = {

    nombre: "Juanito",
    apellido: "Perez",
    edad: 15,
    informacion(){
        return `Nombre completo: ${this.nombre} ${this.apellido}`
    }
 };

 //------------------------Opcion 1 - Tradicional----------------

 let nombre1 = estudiante.nombre
 let apellido1 = estudiante.apellido

 console.log('Opcion 1');
 console.log(nombre1,apellido1);

 //--------------------------Opcion 2 - Destructuracion -----------

 let {nombre,apellido} = estudiante;

 console.log('Opcion 2');
 console.log(nombre,apellido);


//---------------------------- Opcion 3 destructuracion - guardar con otro nombre --------

let {nombre : nombre3, apellido: apellido3} = estudiante;

console.log('Opcion 3');
console.log(nombre3,apellido3);


//-----------------------------Opcion 4 funcion -------------------------------------------

let info1 = estudiante.informacion();
console.log(info1);







 
 