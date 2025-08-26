const mensaje = document.getElementById("mensaje");

let descuentoInicial;

//una cierta logica que puede modificar el descuentoInicial

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado
mensaje.textContent = `El descuento es del ${descuentoActual}%`