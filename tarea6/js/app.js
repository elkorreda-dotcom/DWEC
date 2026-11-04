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
  edad: 19,
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
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Catálogo completo: " + productos.length + " productos.";
  console.log("Mostrando todos los productos.");
}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Ordenados de más barato a más caro.";
  console.log("Catálogo ordenado por precio.");
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Hay " + caros.length + " productos que cuestan más de 50 €.";
  console.log("Filtrando productos de más de 50 euros.");
}

function buscarProducto() {
  const input = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (input === "") {
    mensaje.textContent = "Escribe un producto para buscar.";
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(input);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningún producto con ese nombre.";
    pintarProductos([]);
  } else {
    mensaje.textContent = "Producto encontrado.";
    pintarProductos([encontrado]);
  }
}

mostrarProductos();

// ============================================================
// Ejercicio 4 · Notas
// ============================================================
const alumno = {
  nombre: "Reda ElQourchi",
  notas: [],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acumulador, actual) {
      return acumulador + actual;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.textContent = nota;
    badge.classList.add("badge", "me-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    contenedor.append(badge);
  });

  const textoMedia = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    textoMedia.textContent = "Todavía no hay notas.";
  } else {
    textoMedia.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  if (casilla.value.trim() === "") {
    error.textContent = "La casilla está vacía.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(casilla.value);
  const resultado = alumno.anadirNota(nota);

  if (resultado === false) {
    error.textContent = "La nota debe ser un número válido entre 0 y 10.";
    error.classList.remove("d-none");
  } else {
    error.classList.add("d-none");
    casilla.value = "";
    mostrarNotas();
    console.log("Nota añadida. Lista de notas:", comoTexto(alumno.notas));
  }
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  console.log("Todas las notas borradas.");
}

mostrarNotas();

// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pintarSalida5(texto, mostrarArrayOriginal = true) {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const lineaTexto = document.createElement("div");
  lineaTexto.textContent = texto;
  salida.append(lineaTexto);

  if (mostrarArrayOriginal) {
    const lineaArray = document.createElement("div");
    lineaArray.classList.add("text-body-secondary", "mt-2");
    lineaArray.textContent = "Array original (numeros): " + comoTexto(numeros);
    salida.append(lineaArray);
  }
}

function verDobles() {
  const dobles = numeros.map(function (num) {
    return num * 2;
  });
  pintarSalida5("map() devuelve: " + comoTexto(dobles));
  console.log("Dobles:", dobles);
}

function verPares() {
  const pares = numeros.filter(function (num) {
    return num % 2 === 0;
  });
  pintarSalida5("filter() devuelve: " + comoTexto(pares));
  console.log("Pares:", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (acumulador, actual) {
    return acumulador + actual;
  }, 0);
  pintarSalida5("reduce() devuelve: " + suma);
  console.log("Suma total:", suma);
}

function verCadena() {
  const pares = numeros.filter(function (num) {
    return num % 2 === 0;
  });
  
  const dobles = pares.map(function (num) {
    return num * 2;
  });
  
  const suma = dobles.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const p1 = document.createElement("div");
  p1.textContent = "1. filter: " + comoTexto(pares);
  
  const p2 = document.createElement("div");
  p2.textContent = "2. map: " + comoTexto(dobles);
  
  const p3 = document.createElement("div");
  p3.textContent = "3. reduce: " + suma;

  salida.append(p1, p2, p3);
  console.log("Resultado de las operaciones en cadena:", suma);
}

// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================
const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });
}

function verSlice() {
  const trozo = ciudades.slice(2, 5);
  const salida = document.querySelector("#salida6");
  salida.textContent = "slice(2, 5) devuelve " + comoTexto(trozo) + ". El array original sigue teniendo " + ciudades.length + " ciudades.";
  console.log("Slice ejecutado. Array:", ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades. Pulsa 'Restaurar' para volver a llenar la lista.";
    return;
  }

  const eliminadas = ciudades.splice(2, 2);
  salida.textContent = "splice(2, 2) devuelve " + comoTexto(eliminadas) + ". Quedan " + ciudades.length + " ciudades en el array.";
  mostrarCiudades();
  console.log("Splice ejecutado. Ahora quedan:", ciudades);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  document.querySelector("#salida6").textContent = "Ciudades restauradas con éxito.";
  console.log("Ciudades restauradas a su estado original.");
}

function buscarCiudad() {
  const input = document.querySelector("#buscarCiudad").value.trim();
  const salida = document.querySelector("#salida6");

  if (input === "") {
    salida.textContent = "Escribe una ciudad para buscar.";
    return;
  }

  const estaIncluida = ciudades.includes(input);
  const indice = ciudades.indexOf(input);

  salida.textContent = "includes(\"" + input + "\") devuelve " + estaIncluida + ". indexOf(\"" + input + "\") devuelve " + indice + ".";
  console.log("Buscando '" + input + "' -> incluye:", estaIncluida, ", índice:", indice);
}

mostrarCiudades();