const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const jugadores = [];

class Jugador {
  constructor(id) {
    this.id = id;
  }

  asignarPet(pet) {
    this.pet = pet;
  }

  actualizarPosición(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Pet {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`;

  const jugador = new Jugador(id);

  jugadores.push(jugador);

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(id);
});

app.post("/pet/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || "";
  const nombre = req.body.pet || "";
  const pet = new Pet(nombre);

  const jugadorIndex = jugadores.findIndex(
    (jugador) => jugadorId === jugador.id
  );

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarPet(pet);
  }

  console.log(jugadores);
  console.log(jugadorId);
  res.end();
});

app.post("/pet/:jugadorId/posición", (req, res) => {
  const jugadorId = req.params.jugadorId || "";
  const x = req.body.x || 0;
  const y = req.body.y || 0;

  const jugadorIndex = jugadores.findIndex(
    (jugador) => jugadorId === jugador.id
  );

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosición(x, y);
  }

  res.end();
});

app.listen(8080, () => {
  console.log("Server run");
});
