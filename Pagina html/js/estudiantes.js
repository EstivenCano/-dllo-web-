console.log("------------------------------- CRUD ESTUDIANTES ------------------------");

let estudiantes = []

function obtenerValores() {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let carrera = document.getElementById("carrera").value
    let correo = document.getElementById("correo").value
    console.log("Mi id: ", id, "Nombre: ", nombre, "Apellido: ", apellido,
        "Edad: ", edad, "Carrera: ", carrera, "Correo: ", correo);

    //Primera forma
    let miEstudiante = {}
    miEstudiante.id = id
    miEstudiante.nombre = nombre

    console.log(miEstudiante);

    //Segunda forma
    let miEstudiante2 = { id, nombre, apellido, edad, correo, carrera }
    console.log(miEstudiante2);
    return miEstudiante2

}


function crearEstudiante() {
    let estudiante = obtenerValores()
    estudiantes.push(estudiante)
    console.log(estudiantes);
    
}