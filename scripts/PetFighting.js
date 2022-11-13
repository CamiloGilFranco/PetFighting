function iniciarJuego() {
  let botonSeleccionarMascota = document.getElementById(
    "boton-seleccionar-mascota"
  );

  botonSeleccionarMascota.addEventListener("click", seleccionarMascota);
}

function seleccionarMascota() {
  let inputDraco = document.getElementById("Draco");
  let inputMolly = document.getElementById("Molly");
  let inputViole = document.getElementById("Viole");
  let inputRex = document.getElementById("Rex");
  let inputTron = document.getElementById("Tron");
  let inputMota = document.getElementById("Mota");
  let nombreMascotaJugador = document.getElementById("nombre_mascota_jugador");
  let nombreMascotaEnemigo = document.getElementById("nombre_mascota_enemigo");
  let vidasJugador = document.getElementById("vidas_jugador");
  let vidasEnemigo = document.getElementById("vidas_enemigo");

  if (inputDraco.checked) {
    nombreMascotaJugador.innerHTML = "Draco";
  } else if (inputMolly.checked) {
    nombreMascotaJugador.innerHTML = "Molly";
  } else if (inputViole.checked) {
    nombreMascotaJugador.innerHTML = "Viole";
  } else if (inputRex.checked) {
    nombreMascotaJugador.innerHTML = "Rex";
  } else if (inputTron.checked) {
    nombreMascotaJugador.innerHTML = "Tron";
  } else if (inputMota.checked) {
    nombreMascotaJugador.innerHTML = "Mota";
  } else {
    alert("No haz seleccionado una mascota");
  }
}

window.addEventListener("load", iniciarJuego);
