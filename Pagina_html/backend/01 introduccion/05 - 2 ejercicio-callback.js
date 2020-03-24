let getUsuario = (id,callback) => {
    
    if(id === 123){
        let usuario = {
            nombre: 'Celeste',
            apellido: 'Acevedo',
            correo: 'celestesukkie@gmail.com',
            id:'123'
        };
        setTimeout(() => {callback(null,usuario)}, 2000);
    }else{
        callback("El usuario no existe",null);
    }
};

getUsuario(123, (error,respuesta)=> {
    if(error){
        console.log(error);
        return;
    }
    console.log("Consulta del usuario");
    console.log(respuesta);
});