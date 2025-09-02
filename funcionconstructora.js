// function Persona(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;

//     this.saludar = function(){
//         console.log(`Hola me llamo ${this.nombre} y tengo ${this. edad}`);
//     }
// }

// let persona1 = new Persona("Juan", 31);

// console.log(persona1.nombre);
// console.log(persona1.edad);

// persona1.saludar();

// const saludo = document.getElementById("saludo");
// const botonGuardar = document.getElementById("botonGuardar");
// const botonEliminar = document.getElementById("botonEliminar");


// botonGuardar.addEventListener("click", () => {
//     const nombre = prompt("Ingrese nombre:");
//     if (nombre) {
//         localStorage.setItem("nombreUsuario", nombre)
//         saludo.textContent = `Hola ${nombre}!`
//     }
// });

// botonEliminar.addEventListener("click", () => {
//         localStorage.removeItem("nombreUsuario")
//         saludo.textContent = `Hola!`
// });

// const nombreGuardado = localStorage.getItem("nombreUsuario")
// if(nombreGuardado){
//     saludo.textContent = `Hola ${nombreGuardado}!`
// }

// let nombre = "Raul";
// let edad = 40;

// localStorage.setItem("nombreDeLaPersona", nombre);
// localStorage.setItem("edadDeLaPersona", edad);

// let nombreRecuperado = localStorage.getItem("nombreDeLaPersona");

// console.log(nombreRecuperado);

// let edadRecuperada = parseInt(localStorage.getItem("edadDeLaPersona"));

// console.log(edadRecuperada);

// let usuario = {
//     nombre: "Ruben",
//     edad: 34
// }

// console.log(usuario);

// let usuarioJSON = JSON.stringify(usuario);
// console.log(usuarioJSON);

// localStorage.setItem('usuario',usuarioJSON);

// let usuarioRecuperado = localStorage.getItem("usuario");
// console.log(usuarioRecuperado);

// let usuarioObjeto = JSON.parse(usuarioRecuperado);

// console.log(usuarioObjeto);

