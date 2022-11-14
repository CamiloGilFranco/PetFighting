let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;

function iniciarJuego() {
  let secciónAtaques = document.getElementById("seleccionar-ataque");
  secciónAtaques.style.display = "none";

  let botonSeleccionarMascota = document.getElementById(
    "boton-seleccionar-mascota"
  );

  botonSeleccionarMascota.addEventListener("click", seleccionarMascota);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascota() {
  let secciónAtaques = document.getElementById("seleccionar-ataque");
  secciónAtaques.style.display = "block";

  let secciónMascotas = document.getElementById("seleccionar-mascota");
  secciónMascotas.style.display = "none";

  let inputDraco = document.getElementById("Draco");
  let inputMolly = document.getElementById("Molly");
  let inputViole = document.getElementById("Viole");
  let inputRex = document.getElementById("Rex");
  let inputTron = document.getElementById("Tron");
  let inputMota = document.getElementById("Mota");
  let nombreMascotaJugador = document.getElementById("nombre_mascota_jugador");

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
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 6);
  let nombreMascotaEnemigo = document.getElementById("nombre_mascota_enemigo");

  if (mascotaAleatoria === 1) {
    nombreMascotaEnemigo.innerHTML = "Draco";
  } else if (mascotaAleatoria === 2) {
    nombreMascotaEnemigo.innerHTML = "Molly";
  } else if (mascotaAleatoria === 3) {
    nombreMascotaEnemigo.innerHTML = "Viole";
  } else if (mascotaAleatoria === 4) {
    nombreMascotaEnemigo.innerHTML = "Rex";
  } else if (mascotaAleatoria === 5) {
    nombreMascotaEnemigo.innerHTML = "Tron";
  } else if (mascotaAleatoria === 6) {
    nombreMascotaEnemigo.innerHTML = "Mota";
  }
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "Agua";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio === 3) {
    ataqueEnemigo = "Tierra";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas_jugador");
  let spanVidasEnemigo = document.getElementById("vidas_enemigo");

  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATASTE 😐");
  } else if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    crearMensaje("GANASTE 😎");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    crearMensaje("GANASTE 😎");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua") {
    crearMensaje("GANASTE 😎");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 😞");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo === 0) {
    crearMensajeFinal("🎉🎉 HAZ GANADO EL DUELO 🎉🎉");
  } else if (vidasJugador === 0) {
    crearMensajeFinal("😭😭 HAZ PERDIDO EL DUELO 😭😭");
  }
}

function crearMensajeFinal(resultadoFinal) {
  let secciónMensajes = document.getElementById("mensajes");

  let párrafo = document.createElement("p");
  párrafo.innerHTML = resultadoFinal;
  secciónMensajes.appendChild(párrafo);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
}

function crearMensaje(resultado) {
  let secciónMensajes = document.getElementById("mensajes");

  let párrafo = document.createElement("p");
  párrafo.innerHTML = `Haz atacado con ${ataqueJugador}, tu enemigo ataco con ${ataqueEnemigo}, ${resultado}`;
  secciónMensajes.appendChild(párrafo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciarJuego() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
