function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado  = "piedra"
    } else if(jugada == 2) {
        resultado ="papel"
    } else if(jugada == 3){
        resultado = "tijera"
    } else {
        resultado = "MAL ELEJIDO"
    }
    return resultado      
}
// 1 es piedra, 2 es papel,  3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0


while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elije: 1 es para piedra, 2 es para papel, 3 es para tijera")
    //alert("Elejiste " + jugador)

    alert("PC elije: " + eleccion(pc))
    alert("tu elijes: " + eleccion(jugador))
    
    // COMBATE

    if (pc == jugador) {
        alert("EMPATE")
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc ==1) || (jugador == 3 && pc == 2)) {
        triunfos++
        alert("GANASTE")
    } else {
        perdidas++
        alert("PERDISTE")
    }

}

alert("Ganaste " + triunfos + " veces.Perdiste " + perdidas + " veces. ")
