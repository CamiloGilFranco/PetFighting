const secciónAtaques = document.getElementById("seleccionar-ataque");
const botonSeleccionarMascota = document.getElementById(
  "boton-seleccionar-mascota"
);

const botonReiniciar = document.getElementById("boton-reiniciar");

const secciónMascotas = document.getElementById("seleccionar-mascota");
const nombreMascotaJugador = document.getElementById("nombre_mascota_jugador");

const nombreMascotaEnemigo = document.getElementById("nombre_mascota_enemigo");

const spanVidasJugador = document.getElementById("vidas_jugador");
const spanVidasEnemigo = document.getElementById("vidas_enemigo");

const secciónMensajes = document.getElementById("resultado");
const ataqueDeJugador = document.getElementById("ataque-jugador");
const ataqueDeEnemigo = document.getElementById("ataque-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let jugadorId = null;
let pets = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opciónPet;
let inputDraco;
let inputMolly;
let inputViole;
let inputRex;
let inputTron;
let inputMota;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesPet;
let botonAgua;
let botonFuego;
let botonTierra;
let botones = [];
let ataquesPetEnemigo;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasEnemigo = 3;
let vidasJugador = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaFondo = new Image();
mapaFondo.src = "./assets/map.png";
let alturaEsperada;
let anchoDelMapa = window.innerWidth - 20;
const anchoMáximoMapa = 350;

if (anchoDelMapa > anchoMáximoMapa) {
  anchoDelMapa = anchoMáximoMapa - 20;
}

alturaEsperada = (anchoDelMapa * 600) / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaEsperada;

class Pet {
  constructor(nombre, foto, fotoC, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.fotoC = fotoC;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 30;
    this.alto = 30;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoC;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarPet() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

let Draco = new Pet("Draco", "./assets/dracoF.png", "./assets/dracoC.png", 5);
let Molly = new Pet("Molly", "./assets/mollyF.png", "./assets/mollyC.png", 5);
let Viole = new Pet("Viole", "./assets/violeF.png", "./assets/violeC.png", 5);
let Rex = new Pet("Rex", "./assets/rexF.png", "./assets/rexC.png", 5);
let Tron = new Pet("Tron", "./assets/tronF.png", "./assets/tronC.png", 5);
let Mota = new Pet("Mota", "./assets/motaF.png", "./assets/motaC.png", 5);

let DracoEnemigo = new Pet(
  "Draco",
  "./assets/dracoF.png",
  "./assets/dracoC.png",
  5
);
let MollyEnemigo = new Pet(
  "Molly",
  "./assets/mollyF.png",
  "./assets/mollyC.png",
  5
);
let VioleEnemigo = new Pet(
  "Viole",
  "./assets/violeF.png",
  "./assets/violeC.png",
  5
);
let RexEnemigo = new Pet("Rex", "./assets/rexF.png", "./assets/rexC.png", 5);
let TronEnemigo = new Pet(
  "Tron",
  "./assets/tronF.png",
  "./assets/tronC.png",
  5
);
let MotaEnemigo = new Pet(
  "Mota",
  "./assets/motaF.png",
  "./assets/motaC.png",
  5
);

Draco.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" }
);
DracoEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" }
);

Molly.ataques.push(
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" }
);
MollyEnemigo.ataques.push(
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" }
);

Viole.ataques.push(
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
VioleEnemigo.ataques.push(
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);

Rex.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "💦", id: "boton-agua" }
);
RexEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "💦", id: "boton-agua" }
);

Tron.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" }
);
TronEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" }
);

Mota.ataques.push(
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
MotaEnemigo.ataques.push(
  { nombre: "💦", id: "boton-agua" },
  { nombre: "💦", id: "boton-agua" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🌿", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);

pets.push(Draco, Molly, Viole, Rex, Tron, Mota);

function iniciarJuego() {
  secciónAtaques.style.display = "none";
  sectionVerMapa.style.display = "none";

  pets.forEach((pet) => {
    opciónPet = `
    <input type="radio" name="mascota" id=${pet.nombre}>
    <label for=${pet.nombre} class="tarjeta-de-petFighting">
      <p>${pet.nombre}</p>
      <img src=${pet.foto} alt="">
    </label>
    `;
    contenedorTarjetas.innerHTML += opciónPet;
  });

  inputDraco = document.getElementById("Draco");
  inputMolly = document.getElementById("Molly");
  inputViole = document.getElementById("Viole");
  inputRex = document.getElementById("Rex");
  inputTron = document.getElementById("Tron");
  inputMota = document.getElementById("Mota");

  botonSeleccionarMascota.addEventListener("click", seleccionarMascota);
  botonReiniciar.addEventListener("click", reiniciarJuego);

  unirseAlJuego();
}

function unirseAlJuego() {
  fetch("http://localHost:8080/unirse").then(function (res) {
    if (res.ok) {
      res.text().then(function (respuesta) {
        console.log(respuesta);
        jugadorId = respuesta;
      });
    }
  });
}

function seleccionarMascota() {
  secciónMascotas.style.display = "none";

  if (inputDraco.checked) {
    nombreMascotaJugador.innerHTML = inputDraco.id;
    mascotaJugador = inputDraco.id;
  } else if (inputMolly.checked) {
    nombreMascotaJugador.innerHTML = inputMolly.id;
    mascotaJugador = inputMolly.id;
  } else if (inputViole.checked) {
    nombreMascotaJugador.innerHTML = inputViole.id;
    mascotaJugador = inputViole.id;
  } else if (inputRex.checked) {
    nombreMascotaJugador.innerHTML = inputRex.id;
    mascotaJugador = inputRex.id;
  } else if (inputTron.checked) {
    nombreMascotaJugador.innerHTML = inputTron.id;
    mascotaJugador = inputTron.id;
  } else if (inputMota.checked) {
    nombreMascotaJugador.innerHTML = inputMota.id;
    mascotaJugador = inputMota.id;
  } else {
    alert("No haz seleccionado una mascota");
  }

  seleccionarPet(mascotaJugador);

  extraerAtaques(mascotaJugador);

  sectionVerMapa.style.display = "flex";
  iniciarMapa();
}

function seleccionarPet(mascotaJugador) {
  fetch(`http://localhost:8080/pet/${jugadorId}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pet: mascotaJugador }),
  });
}

function extraerAtaques(mascotaJugador) {
  let ataques;

  for (let i = 0; i < pets.length; i++) {
    if (mascotaJugador === pets[i].nombre) {
      ataques = pets[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesPet = `
    <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
    `;

    contenedorAtaques.innerHTML += ataquesPet;
  });
  botonAgua = document.getElementById("boton-agua");
  botonFuego = document.getElementById("boton-fuego");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("🔥");
        boton.style.background = "#000000";
        boton.disabled = true;
      } else if (e.target.textContent === "💦") {
        ataqueJugador.push("💦");
        boton.style.background = "#000000";
        boton.disabled = true;
      } else {
        ataqueJugador.push("🌿");
        boton.style.background = "#000000";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo(enemigo) {
  nombreMascotaEnemigo.innerHTML = enemigo.nombre;
  ataquesPetEnemigo = enemigo.ataques;
  secuenciaAtaque();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesPetEnemigo.length - 1);

  if (ataqueAleatorio === 0 || ataqueAleatorio === 1) {
    ataqueEnemigo.push("💦");
  } else if (ataqueAleatorio === 2 || ataqueAleatorio === 3) {
    ataqueEnemigo.push("🔥");
  } else if (ataqueAleatorio === 4) {
    ataqueEnemigo.push("🌿");
  }

  iniciarPelea();
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATASTE 😐");
    } else if (ataqueJugador[i] === "🔥" && ataqueEnemigo[i] === "🌿") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] === "💦" && ataqueEnemigo[i] === "🔥") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[i] === "🌿" && ataqueEnemigo[i] === "💦") {
      indexAmbosOponentes(i, i);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(i, i);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("😶😶EL DUELO TERMINO EN EMPATE😶😶");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("🎉🎉 HAZ GANADO EL DUELO 🎉🎉");
  } else if (victoriasJugador < victoriasEnemigo) {
    crearMensajeFinal("😭😭 HAZ PERDIDO EL DUELO 😭😭");
  }
}

function crearMensaje(resultado) {
  /*   let notificación = document.createElement("p"); */
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  secciónMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

  /*   /*   secciónMensajes.appendChild(notificación);*/
  ataqueDeJugador.appendChild(nuevoAtaqueJugador);
  ataqueDeEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  /*  let párrafo = document.createElement("p"); */
  secciónMensajes.innerHTML = resultadoFinal;
  /* secciónMensajes.appendChild(párrafo); */
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarPersonaje() {
  mascotaJugadorObjeto.x += mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y += mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height);
  lienzo.drawImage(mapaFondo, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjeto.pintarPet();

  enviarPosición(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);

  DracoEnemigo.pintarPet();
  MollyEnemigo.pintarPet();
  VioleEnemigo.pintarPet();
  RexEnemigo.pintarPet();
  TronEnemigo.pintarPet();
  MotaEnemigo.pintarPet();

  if (
    mascotaJugadorObjeto.velocidadX !== 0 ||
    mascotaJugadorObjeto.velocidadY !== 0
  ) {
    revisarColisión(DracoEnemigo);
    revisarColisión(MollyEnemigo);
    revisarColisión(VioleEnemigo);
    revisarColisión(RexEnemigo);
    revisarColisión(TronEnemigo);
    revisarColisión(MotaEnemigo);
  }
}

function enviarPosición(x, y) {
  fetch(`http://localhost:8080/pet/${jugadorId}/posicion`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ x, y }),
  });
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 2;
}

function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -2;
}

function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -2;
}

function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 2;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  intervalo = setInterval(pintarPersonaje, 50);

  window.addEventListener("keydown", sePresionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota() {
  for (let i = 0; i < pets.length; i++) {
    if (mascotaJugador === pets[i].nombre) {
      return pets[i];
    }
  }
}

function revisarColisión(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > izquierdaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  clearInterval(intervalo);
  secciónAtaques.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
}
window.addEventListener("load", iniciarJuego);
