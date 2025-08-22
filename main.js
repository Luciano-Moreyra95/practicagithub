console.log("el script está funcionando correctamente");
const titulo= document.getElementById("titulo");
titulo.textContent = "texto modificado";

let edad1 = 20;
let edad2 = "tres";
let edad3= 22.2;

console.log(edad1);
console.log(edad2);
console.log(true);
console.log(edad3);


console.log(typeof true);

console.log(0.1 + 0.2);

// edad2 = Number(edad2) + 10;   
// de esta manera se especifica que un string es un numero


// para comentar se utiliza CTRL + K (soltamos k) + C_ Para lo contrario CTRL + K (soltamos k) + U 

// edad2 = parseInt(edad2) + 2;
// con Esto, si el numero estaba con Coma, sòlo lo tomara en entero

// edad2 = parseFloat(edad2) + 2;

// let edad2 = "tres";  si este està asì y yo lo quiero transformar en numero me aparece en la consola NAN

// NAN ES IGUAL A NOT AND NUMBER - ES UN NÙMERO SI LE TIRO UN TYPEOF NUMBER a la variable declarada como "tres"

// NAN representa a un numero no numero

// console.log(isNaN(Number(edad2))); CON ESTE CODIGO, ME DEVOLVERA UN TRUE SI EL RESULTADO ES NaN, SINO FALSE


console.log(isNaN(Number(edad2)));


// las constantes son valores fijos que no se pueden modificar
// se utilizan para URLS o para constantes matematicas.
// el verdadero proposito de las constantes es que no venga otro desarrollador y quenos quiera modificar los valores
const edad10 = 45

console.log(edad10)

// las alertas son nuestro mètodo de contacto con el usuario
alert("HOLA SOY UNA ALERTA")

// con el confirm podemos darle a elegir al usuario entre confirmar o rechazar una peticion

// de esta forma podemos encuestar al usuario y que nos devuelva una respuesta en la consola
let cookies = confirm("acepta si queres cookies")

console.log(cookies)


let comoSePortoElGato = confirm("el gato se porto mal")

console.log(comoSePortoElGato)

// let nombre = prompt("tu nombre")

// console.log(nombre)
// si a esto le pongo directamente aceptar sin haber escrito Nada, me tira un string
// pero si le pongo directamente cancelar sin haber escrito Nada, me tira un null

// si le tiro un type of y cancelo me tira object

let nombre = prompt("tu nombre")
console.log(nombre)


// si no definimos la variable, la consola nos tira que no esta definido (UNDEFINED)
let direccion

console.log(direccion)

// Demo Operadores:
let edad = 17
let dinero = false

if(edad >= 18 || dinero) {
    console.log("Podes ingresar al bar")
} else {
    console.log("No podes ingresar")
}

//AND (&&) = Se tienen que cumplir ambas condiciones para que el resultado sea TRUE

// OR (||) = Se tiene que cumplir aunque sea una de las condiciones para que sea TRUE


//CICLOS

// ACTIVIDAD: Tenes que saludar 5 veces con la frase hola mundo


// Ciclos por repeticion

// FOR
for(let i = 0; i < 5; i++) {
    console.log("Hola Mundo");
}

for(let i = 0; i < 10; i++) {
    console.log("Claro que siii maquina")
}


// Ciclos condicionales (REPETIR BLOQUE DE CODIGO SIEMPRE QUE LA CONDICION SEA VERDADERA)

const password = "1234";

let passwordingresado = prompt("ingrese la contraseña")

while(passwordingresado != password){
    passwordingresado = prompt("ingrese su contraseña")
}

const contraseña = "tupapa";

let contraseñaingresada = prompt("ingresala contra papurri")

while(contraseñaingresada != contraseña){
    contraseñaingresada = prompt("incorrecta papu, devuelta la contra")
}


