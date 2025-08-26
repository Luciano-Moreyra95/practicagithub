const mensaje = document.getElementById("mensaje");
const boton = getElementById("cambiarDescuento");

let descuentoInicial;

//una cierta logica que puede modificar el descuentoInicial

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado
mensaje.textContent = `El descuento es del ${descuentoActual}%`

boton.addEventlistener("click", () => {
    let descuentoIngresado = prompt("Ingrese el descuento en porcentaje..")

    descuentoIngresado = Number(descuentoIngresado)

    descuentoActual = descuentoIngresado ?? descuentoPredeterminado

    mensaje.textContent = `El descuento es del ${descuentoActual}%`
})