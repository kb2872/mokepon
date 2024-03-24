
//MANIPULACIÓN DEL DOM(Document Object Model)

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
}

window.addEventListener("load", iniciarJuego )