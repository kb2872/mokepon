const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonTierra = document.getElementById("boton-tierra")
sectionReiniciar.style.display = "none"
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipododoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesdelJugador = document.getElementById("ataques-del-jugador")
const ataquesdelEnemigo = document.getElementById("ataques-del-enemigo")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
 
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/mokepons_mokepon_hipodoge_attack.png", 5)

let capipepo = new Mokepon("Capipepo", "./assets/mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon("Ratigueya", "./assets/mokepons_mokepon_ratigueya_attack.png", 5)

function iniciarJuego() {    
    sectionSeleccionarAtaque.style.display = "none"    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    
    botonFuego.addEventListener("click", ataqueFuego)     
    botonAgua.addEventListener("click", ataqueAgua)    
    botonTierra.addEventListener("click", ataqueTierra)    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {    
    sectionSeleccionarMascota.style.display = "none"    
    sectionSeleccionarAtaque.style.display = "flex"
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
    const mascotaAleatorio = aleatorio(1, 3)
        if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo() {
    const ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else {
        ataqueEnemigo = "Tierra"
    }

    combate() 
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate")
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function  revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento; Perdiste :(")
    } 

}


function crearMensaje(resultado) {
    const nuevoAtaquedelJugador = document.createElement("p")
    const nuevoAtaquedelEnemigo = document.createElement("p")
    sectionMensajes.innerHTML = resultado
    nuevoAtaquedelJugador.innerHTML = ataqueJugador
    nuevoAtaquedelEnemigo.innerHTML = ataqueEnemigo    
    ataquesdelJugador.appendChild(nuevoAtaquedelJugador)
    ataquesdelEnemigo.appendChild(nuevoAtaquedelEnemigo)
} 


function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true   
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = "block"
} 

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego )