/*
  Tarea 6 · DWEC · Reda ElQourchi
  Objetos y arrays.
*/

console.log("app.js cargado");

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}

// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================
const estudiante = {
  nombre: "Reda",
  apellidos: "ElQourchi",
  edad: 21,
  curso: "2.º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "mb-3");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    ul.append(li);
  });

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse();

  salida.append(ul, p);
  console.log("Objeto estudiante:", estudiante);
}

function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  console.log("Feliz cumpleaños. Ahora tiene: " + estudiante.edad);
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  console.log("Curso eliminado del objeto.");
  verFicha();
}

// ============================================================
// Ejercicio 2 · Colores
// ============================================================
const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("La lista ya está vacía.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.pop();
  console.log("Ha salido el color:", sacado);
  mostrarColores();
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("La lista ya está vacía.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.shift();
  console.log("Ha salido el color:", sacado);
  mostrarColores();
}

mostrarColores();

// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);