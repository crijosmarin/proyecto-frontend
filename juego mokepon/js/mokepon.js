function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    if (inputHipodoge.checked) {
        alert("Haz seleccionado a Hipodoge 🐋");
      } 
      else if (inputCapipepo.checked) {
        alert("Haz seleccionado a Capipepo 🐦");
      } 
      else if (inputRatigueya.checked) {
        alert("Haz seleccionado a Ratigueya 🐭");
      }
      else {
        alert("Ninguna mascota seleccionada")
      }
}

window.addEventListener('load', iniciarJuego)
