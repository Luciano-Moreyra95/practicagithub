let altura = prompt("Ingrese su altura, ejemplo: 1.80(mts)");
let peso = prompt("ingrese su peso, por ejemplo: 80 (kg)");

function calcularIMC() {
    let imc = peso / (altura*altura);
    imc = imc.toFixed(2);
    if(imc<=18.5){
        alert("su imc es ${imc}, actualmente esta debajo del peso normal");
    } else if (imc >18.5 && imc<24.9){
        alert("su imc es ${imc}, su peso es normal");
    } else if (imc >25 && imc<29.9){
        alert("su imc es ${imc}, actualmente usted tiene sobrepeso");
    } else if (imc<30){
        alert("su imc es ${imc}, usted tiene sobrepeso, empiece a hacer ejercisio y deje los postres");
    }
}

if (altura === null || peso === null){
    alert("operacion candelada por el usuario");
} else {
    altura = Number(altura);
    peso= Number(peso);
    if(isNaN(altura) || isNaN(peso) || altura<=0 || peso<=0) {
        alert("valores incorrectos intente nuevamente")
    } else{
        calcularIMC()
    }
}