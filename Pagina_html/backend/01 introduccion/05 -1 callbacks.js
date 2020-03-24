/**
 * 
 * FUNCION CALLBACK
 * 
 * Una funcion callback es una funcion que se puede pasar por parametros a otra funcion
 *
 */

 //---------------------------Ejemplo 1 - Funciones por separado --------------

 function imprimir(info) {
     console.log(info);
 }

 function imprimir_2(nombre,apellido) 
 {
    console.log(`El nombre es ${nombre} ${apellido}`);    
 }

 function consultarNombre(callback) {
     let nombre = "Celeste";
     let apellido = "Acevedo"
     callback(nombre,apellido);
 }

 consultarNombre(imprimir_2);

 //-------------------------Ejemplo 2 Funciones flecha -----------

 console.log();

 
 let imprimir1 = (info) => {
     console.log(info);
     
 };

 let consultarNombre1 = (callback) => {
    let nombre = "Celeste opcion 2";
    callback(nombre);
 };

 consultarNombre1(imprimir1);

 consultarNombre1(function (info) {
     console.log(info);
 });

 consultarNombre1(info => {
    console.log("Ejecucion dentro del metodo");
    console.log(info);
});

/**
 * 
 * SET TIME OUT
 *
 */

setTimeout(()=>{
    console.log("Mensaje...");
},3000);




