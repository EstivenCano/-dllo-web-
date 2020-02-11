
//console

/**
 * Comentario en bloque
 */

console.log("Hola mundo")
console.info("Info")
console.error("Error")
console.warn("Alerta")

let nombre = "Celeste"
const edad = 50
var color = "blanco"
let apellido = "Marin"
let altura
let nombre_completo = nombre + ' ' + apellido
let nombre_completo2 = `${nombre} ${apellido}`
console.log("Nombre completo: " + nombre_completo2)
if(edad > 49){
    let nombre = "Otro nombre"
    //console.log("Dentro de if" , nombre);
    var color = "otro color"
    console.log("Dentro de if",nombre,color);

}
if(altura == undefined){
    console.log("Primera validacion")
}
altura = false
if(altura){
    console.log("Segunda validacion")
}else{
    console.log("Segunda validacion", altura);
}
console.log(nombre,color)

//== valor
//=== valor y tipo