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
confirm("acepta si queres cookies")