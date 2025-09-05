// // console.log("hola mundo")

// // condicionales

// // const edad = parseInt(prompt("Ingrese su edad")); 
// // todo dato que le pidamos al usuario con un prompt, nos lo va a devolver con un string
// // por eso es importante que al momento de pedir un numeroRandom, lo pidamos con el parseInt para evitar problemas, como ocurre con el Number, ya que si el usuario coloca un numero pero con letras o alguna tecla especial, el codigo solo nos toma el numero ingresado, exceptuando el texto
// // const numeroRandom = Number(prompt("ingrese numero random"))

// // console.log(edad);
// // console.log(numeroRandom);

// // const edad = Number(prompt("Ingrese su edad"));  //devuelve Nan si falla, si mandan texto

// // if(isNaN(edad)){
// //     alert("esto no es un número, sólo ingresa números por favor")
// // } else{
// //         if (edad == 18){
// //             alert("puede pasar, tiene la edad justa");
// //         } else if(edad > 18){
// //             alert("podes pasar máquina");
// //         } else {
// //             alert("no podes pasar");
// //         }
// // }


// // simulandop pass y usuario registrado
// // const usuario = "admin";
// // const pass = "admin1234";

// // // le pedimos credenciales
// // const usuarioIngresado = prompt("ingrese su nombre de usuario");
// // const passIngresada = promt("ingrese su password");

// // // evaluando
// // if(usuarioIngresado === usuario && passIngresada === pass){
// //     alert("bienvenido/a");
// // } else{
// //     alert("lo siento, no podes ingresar");
// // }

// // con el && ambas condiciones tienen que ser verdaderas
// // OR: UNA PUEDE SER VERDADERA

// // for(variable, condición, contador){      //EL BUCLE REPITE CODIGO, MIENTRAS LA CONDICION SEA VERDADERA, EL BUBLE SIGUE REPITIENDO EL CODIG o que esta dentro de las llaves
// // el ++ es un operador que suma 1 a la variable que nosotros le estemos indicando
// // }

// // for(let i = 0; i < 5; i++){
// //     alert("hola")
// // }

// const opcion = prompt("ingrese la opcion deseada 1) mostrar / comprar productos, 2) ver carrito, 3) programar en vivo")

// switch(opcion){
//     case "1":
//         alert("mostrando productos");
//         break;
//     case "2":
//         alert("mostrando carrito");
//         break;
//     case "3":
//         alert("programando envío");
//         break;
//     default:
//         alert("no entiendo lo que me decís");
//         break;
// }


// let Numero = Number (prompt("ingresa un numero"));
// // bucle "MIENTRAS" mientras la condicion sea verdadera
// while(isNaN(Numero)){  //necesito que SEA un numero, si no lo es, vuelvo a pedir el DATO
//     Numero = Number(prompt("ingresa un numero"));
// }


// //-----------------------------------------------------------------------

// // EJERCISIO - PEDIR UN NUMERO AL USUARIO E INFORMAR SI ES PAR O IMPAR

// // PEDIR UN NUMERO
// // VALIDARLO
// // EVALUAR SI ES PAR O IMPAR  - N % 2 = 0;
// // IF (N % 2 = 0) { alert ("es par")} else {alert("es impar")}

// const numerito = Number(prompt("ingrese un numero, evaluare si es par"));

// if(numerito % 2 === 0){
//     alert("el numero es par");
// } else {
//     alert("el numero es impar");
// }

//Funciones:

//Declaramos:

// function saludar() {
//     // cuerpo de la funcion
//     console.log("Hola, desde mi funcion");
// }

// // invocar

// saludar();

//parametros - es lo que se coloca dentro de los parentesis para realizar un codigo mas personalizado por cada repeticion

// function saludar(nombre, edad) {
//     // cuerpo de la funcion
//     console.log("Hola " + nombre);
//     console.log("tu edad es " + edad);
// }

// //invocar

// saludar("Samuel", 37);

// scope

// scope GLOBAL - se declara por fuera de cualquier función y puede ser accesible desde cualquier parte de nuestro código

// let color = "rojo";

// function cambiarColor() {
//     color = "Azul";
// }

// cambiarColor();
// console.log(color);


// scope LOCAL : Se declaran DENTRO de las funciones

// let color = "rojo";

// function cambiarColor() {
//     color = "Azul";
//     let local = "esto es una variable local";
// }

// cambiarColor();
// console.log(color);

// FUNCIONES FLECHA

// forma normal
// const sumarFlecha = (a, b) => {
//     return a + b
// }

// console.log(sumarFlecha(15,5))


// forma mas resumida
// const sumarFlecha = (a, b) => a + b

// console.log(sumarFlecha(30,5))

// forma màs resumida todavia
// cuando se trabaja con un unico parametro, se pueden quitar los parentesis
// const sumarFlecha = a => a + 10;

// console.log(sumarFlecha(30))


// FUNCION TRADICIONAL

// function sumar (a, b) {
//     return a + b;
// }

// console.log(sumar(10,5));

