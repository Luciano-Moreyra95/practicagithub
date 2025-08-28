
// bucle sentinela  -----  (a esto se le llama asi porque la comparacion esta dentro de los parentesis)
// let numero = Number(prompt("pone un numero aleatorio"))


// while(numero != 5) {

// }



// bucle bandera ------ LA BANDERA ES SÍ O SÍ BOOLEANA Y ARRANCA EN TRUE- PARA LUEGO DECIR DENTRO DEL WHILE CUANDO SE VA A ROMPER
// let bandera = true

// while (bandera) {
//     let numero = Number(prompt("pone un numero aleatorio"))
//     if(numero == 5){        //CUANDO EL USUARIO COLOQUE EL NUMERO 5, EL BUCLE SE ROMPE
//         bandera = false
//     }
    
// }


// CONTADOR

// let i = 0
// while (i < 10) {
//     i++
//     console.log("hola")

// }


let bandera = true
let total = 0

let ListaDeProductos = "1 - coca cola $3  |   2 - agua $1"

while(bandera) {
    let opciones = Number(prompt("1 - ver productos |  2- comprar    |     3- ver total"))
    switch (opciones) {
        case 1:
            alert(ListaDeProductos)
            break
        case 2:
            let producto = Number(prompt("ingrese el numero del producto:"))
            if(producto == 1){
                total += 3
            } else if (producto == 2){
                total += 1
            } else {
                alert("no tenemos ese producto")
            }
            break
        case 3:
            if(total == 0){
                alert("no tenes nada en el carrito")
            } else{
                alert("tu total es de: " + total)
            }
            break
        default:
            alert("esta no es una opcion valida")
            break
    }

    bandera = confirm("quien seguir comprando?")
}