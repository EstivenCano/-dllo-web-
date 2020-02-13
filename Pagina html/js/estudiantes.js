console.log("------------------------------- CRUD ESTUDIANTES ------------------------");

let estudiantes =
[ { id: "001", nombre: "Celeste", apellido: "Acevedo", edad: "22", correo:"celestesukkie@gmail.com", carrera:"Medicina Veterinaria" }]
let estudianteTemporal
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

    //let existe = false;
    //estudiantes.forEach(element => {
    //   if(estudiante.id == element.id)
    //    return true
    //});
    //if(existe){
    //}

    let existeEstudiante = estudiantes.find(x => estudiante.id === x.id)
    if(existeEstudiante){
        console.log("El estudiante ya existe");
        return;
    }
    estudiantes.push(estudiante)
    listaEstudiantes()
    console.log(estudiantes);
    
}

function eliminarEstudiante(index) {
estudiantes.splice(index,1)
listaEstudiantes()
    
}

function cargarInformacion(index) {
    let estudiante = estudiantes[index]
    console.log(estudiante)
    document.getElementById("id").value = estudiante.id
    document.getElementById("nombre").value = estudiante.nombre
    document.getElementById("apellido").value = estudiante.apellido
    document.getElementById("edad").value = estudiante.edad
    document.getElementById("carrera").value = estudiante.carrera
    document.getElementById("correo").value = estudiante.correo
    document.getElementById("btncrearEstudiante").style.display = "none"
    document.getElementById("btneditarEstudiante").style.display = "block"
    estudianteTemporal = index
}

function actualizarEstudiante() {
    let estudianteActualizado = obtenerValores()
    estudiantes.splice(estudianteTemporal,1,estudianteActualizado)
    listaEstudiantes()
    document.getElementById("id").value = ""
    document.getElementById("nombre").value =""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("carrera").value = ""
    document.getElementById("correo").value =""
    document.getElementById("btncrearEstudiante").style.display = "block"
    document.getElementById("btneditarEstudiante").style.display = "none"
}

function listaEstudiantes() {
    let lista = document.getElementById("listaEstudiantes")
    let data = ""
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data +="<tr>"
        data +=`<td>${miEstudiante.id}</td>`
        data +=`<td>${miEstudiante.nombre}</td>`
        data +=`<td>${miEstudiante.correo}</td>`
        data +=`<td>${miEstudiante.carrera}</td>`
        data += '<td><input class="btn btn-primary" type="button" onclick= "cargarInformacion(' + i + ')" value="Editar"></td>'
        data += '<td><input class="btn btn-primary" type="button" onclick= "eliminarEstudiante(' + i + ')" value="Eliminar"></td>'
        data +="</tr>"
      
    }
    lista.innerHTML = data
}

//Llamado a la funcion
listaEstudiantes()