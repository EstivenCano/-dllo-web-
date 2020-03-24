let estudiantes = [
    {id:1, nombre:"Juan", materia: 1},
    {id:2, nombre:"Pedro"},
    {id:3, nombre:"Celeste", materia: 1},
    {id:4, nombre:"Estiven", materia: 2},
    {id:5, nombre:"Sandra"}
];

let materias = [
    {id:1 , nombre: "BD"},
    {id:1 , nombre: "WEB"}
];
/**
 * Consultar un usuario y retornarlo en el callback,
 * En el callback de la consulta del usuario llamar la consulta de la materia a la que pertenece
 */

 let getUsuario = (id, callback) => {
     let usuario = {};
     callback(null,usuario);
     callback("El usuario no existe", null);
 };

 let getMateria = (id, callback) => {
    let materia = {};
    callback(null,materia);
    callback("El usuario no materias", null);
};
