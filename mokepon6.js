//MANIPULACIÓN DEL DOM(Document Object Model)
let ataqueJugador = 0
let ataqueEnemigo = 0

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
   
}

function seleccionarMascotaJugador() {
    let inputHipododoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipododoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge " 
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo "
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya "
    } else {
        alert("Elije una mascota")  
    }

    seleccionarMascotaEnemigo() 
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego )