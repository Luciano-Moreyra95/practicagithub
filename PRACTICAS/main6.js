const USER = "admin"
const PASS = "12345"

let total = 0
let productos = ""


login ("arcortoon", "123pass");
login ("davidgamerxX", "aguante C++");


// logica de login
function login(usuario, contraseña) { //hay que respetar el orden
    if (usuario === USER && contraseña === PASS) {
        return true
    } else {
        return false
    }
}

// //logica de inicio de sesion
// function inicioSesionWhile() {
//     let bandera = true
//     while(bandera) {
//         let usuario = prompt("dame tu nombre de usuario")
//         let contraseña = prompt("dame tu contraseña")

//         let intento = login(usuario, contraseña)

//         if (intento) {
//             bandera = false
//         }
//     }
// } 

// inicioSesion()
//definiendo variables que voy a poder utilizar dentro de la funcion que estoy programando, son una representaciond e los valores que yo les voy a pasar con el (ej) login

//ESTO PERMITE, POR EJEMPLO, REUTILIZAR EL LOGIN CON DISTINTOS DATOS QUE PASE EL USUARIO

// function inicioSesionFor() {
//     let bandera = true
    
// for (let i = 0; i < 3; i++) {

//     let usuario = prompt("dame tu nombre de usuario")
//         let contraseña = prompt("dame tu contraseña")

//         let intento = login(usuario, contraseña)

//         if (intento) {
//             break
//         }
    
// }
// }

inicioSesionFor()

function inicioSesionFor() {
    let intento = false
    
for (let i = 0; i < 3; i++) {

    let usuario = prompt("dame tu nombre de usuario")
        let contraseña = prompt("dame tu contraseña")

        intento = login(usuario, contraseña)

        if (intento) {
            break
        }
        if(!intento){
            alert("no pudiste entrar, ahi va la policia")
        }
        return intento
    
}
}

if(inicioSesionFor()){
    menu()
}

function mostrarProducto(){
    let productos = "nuestros productos son: \ 1_ agua $1 \ 2_ te $2 \ 3_ mate $10 \ 4_ cafe $5"
    alert(productos)
}

function comprar(id){
    switch(id) {
        case 1:
            total += 1
            productos += "agua\n"
            alert("usted sumo un agua a su carrito")
            break
            case 2:
                total += 2
                productos += "te\n"
                alert("usted sumo un te a su carrito")
                break
                case 3:
                    total += 10
                    productos += "mate\n"
                    alert("mate")
                    break
                    case 4: total += 5
                    productos += "cafe\n"
                    alert("usted sumo un cafe a su carrito")
                        break
                        default:
                            alert("no tenemos ese producto")
                            break
    }

}

function mostrarCarrito(){
if(total == 0) {
    alert("usted no tienen nada en el carrito")
} else{
    alert("Los productos que usted compro son: \n " + productos + "su total es de " + total)
}
}

function menu(){
    let bandera = true

    while(bandera){
        let opciones = Number(prompt("Bienvenido a perrito con chaucha, usted puede hacer lo siguiente: nº1 - ver productos| nº2 - comprar con ID | nº3 - terminar compra"));

        switch (opciones){
            case 1:
                mostrarProducto()
                break
            case 2
                let idProducto = Number(prompt("que producto queres comprar?"))
                comprar (idProducto)
                break
            case 3
                mostrarCarrito()
                break
            default 
                break
        }
    }

    bandera = confirm ("usted quiere seguir comprando?")
}

let entroEnElMenu = inicioSesionFor()

mostrarProducto() 

//reisar bien el codigo despues en caso de necesitarlo. estoy perdiendo mucho  tiempo con esto sabiendo que no es lo que vamos a utilizar finalmente, faltando los arrays principalmente