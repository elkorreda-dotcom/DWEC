/*
  Tarea 6 · DWEC · Reda ElQourchi
  Objetos y arrays.

  APUNTES GENERALES
  - Patrón de pintado: seleccionar → vaciar → recorrer → crear → rellenar → append.
  - textContent escribe texto sin interpretar HTML (más seguro que innerHTML).
  - textContent = "" vacía el contenedor para que no se dupliquen elementos.
  - const: no se puede reasignar la variable, pero sí cambiar el contenido
    de un objeto o array.
  - let: la variable se puede reasignar.
  - Modifican el array: push, pop, shift, splice, sort.
  - No lo modifican: slice, map, filter, find, reduce, forEach, includes, indexOf, join.
*/

// Comprueba en la consola que el archivo se ha cargado.
console.log("app.js cargado");

// Convierte un array en texto: [1, 2, 3].
// join(", ") une los elementos en un string separados por ", ".
function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}

// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// OBJETO: guarda pares clave-valor.
const estudiante = {
  nombre: "Reda",
  apellidos: "ElQourchi",
  edad: 19,
  curso: "2.º DAW",
  // MÉTODO: función dentro de un objeto.
  // this = el objeto que llama al método (estudiante).
  // Uso function porque una función flecha no tiene su propio this.
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

// Muestra los datos del objeto en la página.
function verFicha() {
  const salida = document.querySelector("#salida1"); // Selecciona el contenedor.
  salida.textContent = ""; // Lo vacía para no duplicar la ficha.

  const ul = document.createElement("ul"); // Crea la lista.
  ul.classList.add("list-group", "mb-3"); // Clases de Bootstrap.

  // Array con las claves que quiero mostrar.
  const claves = ["nombre", "apellidos", "edad", "curso"];

  // forEach recorre el array; no devuelve nada.
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    // Corchetes porque la clave está dentro de una variable.
    // estudiante.clave buscaría una propiedad llamada "clave".
    li.textContent = clave + ": " + estudiante[clave];
    ul.append(li); // Mete el li dentro del ul.
  });

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse(); // Llama al método.

  salida.append(ul, p); // append admite varios elementos a la vez.
  console.log("Objeto estudiante:", estudiante);
}

// Modifica una propiedad. Funciona con const porque no reasigno
// la variable, solo cambio el contenido del objeto.
function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  console.log("Feliz cumpleaños. Ahora tiene: " + estudiante.edad);
  verFicha(); // Vuelve a pintar con el dato nuevo.
}

// delete elimina una propiedad del objeto.
// OJO: después sale "curso: undefined" porque verFicha sigue pidiendo esa clave.
function quitarCurso() {
  delete estudiante.curso;
  console.log("Curso eliminado del objeto.");
  verFicha();
}

// ============================================================
// Ejercicio 2 · Colores
// ============================================================

// Array de strings. Es const, pero push/pop/shift pueden cambiar su contenido.
const colores = ["rojo", "verde", "azul"];

// Pinta la lista de colores y el total.
function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = ""; // Vacía para no duplicar.

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  // length = número de elementos del array.
  document.querySelector("#totalColores").textContent = colores.length;
}

// Escribe un mensaje en el aviso y lo muestra.
// d-none es una clase de Bootstrap que oculta el elemento.
function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none"); // Quitar d-none = mostrar.
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim(); // value lee el input; trim quita espacios de los extremos.

  // Validación: si está vacío, avisa y sale de la función con return.
  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color); // push añade al FINAL.
  casilla.value = ""; // Limpia la casilla.
  document.querySelector("#aviso2").classList.add("d-none"); // Oculta el aviso.
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  // Comprueba que queden elementos.
  if (colores.length === 0) {
    avisar2("La lista ya está vacía.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.pop(); // pop quita el ÚLTIMO y lo devuelve.
  console.log("Ha salido el color:", sacado);
  mostrarColores();
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("La lista ya está vacía.");
    return;
  }
  document.querySelector("#aviso2").classList.add("d-none");
  const sacado = colores.shift(); // shift quita el PRIMERO y lo devuelve.
  console.log("Ha salido el color:", sacado);
  mostrarColores();
}

mostrarColores(); // Pinta la lista al cargar la página.

// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// ARRAY DE OBJETOS: cada posición es un producto.
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Recibe la lista por parámetro: la misma función sirve para
// mostrar todos, los ordenados, los filtrados o el buscado.
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = ""; // Vacía la tabla.

  lista.forEach(function (producto) {
    const fila = document.createElement("tr"); // Fila.

    const nombre = document.createElement("td"); // Celda.
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end"); // Alinea a la derecha (Bootstrap).
    // toFixed(2) deja 2 decimales y devuelve un STRING.
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
  // sort MODIFICA el array, por eso ordeno una copia.
  // [...productos] es una copia superficial (spread).
  const copia = [...productos];
  // Resultado negativo: a va antes que b → de menor a mayor.
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Ordenados de más barato a más caro.";
  console.log("Catálogo ordenado por precio.");
}

function filtrarCaros() {
  // filter devuelve un array NUEVO con TODOS los que cumplen.
  // Aquí salen 3: teclado, monitor y auriculares.
  const caros = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(caros);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Hay " + caros.length + " productos que cuestan más de 50 €.";
  console.log("Filtrando productos de más de 50 euros.");
}

function buscarProducto() {
  // toLowerCase: la búsqueda no distingue mayúsculas.
  const input = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (input === "") {
    mensaje.textContent = "Escribe un producto para buscar.";
    return;
  }

  // find devuelve el PRIMERO que cumple, o undefined si no hay ninguno.
  // El includes de aquí es de string: comprueba si el texto contiene lo buscado.
  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(input);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningún producto con ese nombre.";
    pintarProductos([]); // Array vacío: la tabla queda sin filas.
  } else {
    mensaje.textContent = "Producto encontrado.";
    pintarProductos([encontrado]); // Lo meto en un array porque la función espera una lista.
  }
}

mostrarProductos(); // Pinta el catálogo al cargar la página.

// ============================================================
// Ejercicio 4 · Notas
// ============================================================

// Objeto con un array dentro y dos métodos.
const alumno = {
  nombre: "Reda ElQourchi",
  notas: [],
  // Valida y guarda. Devuelve true si la nota es válida y false si no.
  anadirNota: function (nota) {
    // Number.isNaN detecta valores que no son número (NaN).
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    // Evita dividir entre 0 si no hay notas.
    if (this.notas.length === 0) {
      return 0;
    }
    // reduce acumula un único valor. El 0 es el valor inicial.
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
    // Verde si aprueba, rojo si suspende.
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

// Función global: lee la casilla y enseña el resultado.
// No choca con alumno.anadirNota porque esa es un método del objeto.
function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  // Hace falta porque Number("") da 0 y se guardaría un 0 falso.
  if (casilla.value.trim() === "") {
    error.textContent = "La casilla está vacía.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(casilla.value); // Convierte a número; Number("abc") da NaN.
  const resultado = alumno.anadirNota(nota); // Devuelve true o false.

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
  alumno.notas = []; // Asigna un array vacío a la propiedad.
  mostrarNotas();
  console.log("Todas las notas borradas.");
}

mostrarNotas(); // Pinta el estado inicial.

// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

// map, filter y reduce NO modifican este array.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mostrarArrayOriginal = true es un PARÁMETRO POR DEFECTO:
// vale true si no se pasa ese argumento.
function pintarSalida5(texto, mostrarArrayOriginal = true) {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  const lineaTexto = document.createElement("div");
  lineaTexto.textContent = texto;
  salida.append(lineaTexto);

  // Enseña el array original para demostrar que no ha cambiado.
  if (mostrarArrayOriginal) {
    const lineaArray = document.createElement("div");
    lineaArray.classList.add("text-body-secondary", "mt-2");
    lineaArray.textContent = "Array original (numeros): " + comoTexto(numeros);
    salida.append(lineaArray);
  }
}

function verDobles() {
  // map TRANSFORMA cada elemento y devuelve un array de igual longitud.
  // Resultado: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  const dobles = numeros.map(function (num) {
    return num * 2;
  });
  pintarSalida5("map() devuelve: " + comoTexto(dobles));
  console.log("Dobles:", dobles);
}

function verPares() {
  // filter SELECCIONA. % es el resto: si al dividir entre 2 da 0, es par.
  // Resultado: [2, 4, 6, 8, 10]
  const pares = numeros.filter(function (num) {
    return num % 2 === 0;
  });
  pintarSalida5("filter() devuelve: " + comoTexto(pares));
  console.log("Pares:", pares);
}

function verSuma() {
  // reduce ACUMULA en un único valor, empezando en 0.
  // Resultado: 55
  const suma = numeros.reduce(function (acumulador, actual) {
    return acumulador + actual;
  }, 0);
  pintarSalida5("reduce() devuelve: " + suma);
  console.log("Suma total:", suma);
}

// Tres pasos: el resultado de cada uno es la entrada del siguiente.
// Uso variables intermedias para poder enseñar cada paso.
// En una línea sería: numeros.filter(...).map(...).reduce(...)
function verCadena() {
  // Paso 1: [2, 4, 6, 8, 10]
  const pares = numeros.filter(function (num) {
    return num % 2 === 0;
  });

  // Paso 2: [4, 8, 12, 16, 20]
  const dobles = pares.map(function (num) {
    return num * 2;
  });

  // Paso 3: 60
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

// Posiciones: 0 Granada, 1 Sevilla, 2 Málaga, 3 Córdoba,
//             4 Jaén, 5 Almería, 6 Cádiz, 7 Huelva
const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
// let porque restaurarCiudades le asigna un array nuevo.
// La copia con spread mantiene intacto ciudadesOriginal.
let ciudades = [...ciudadesOriginal];

function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  // forEach también puede recibir la posición como segundo parámetro.
  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-secondary", "me-1", "mb-1");
    badge.textContent = posicion + " · " + ciudad;
    contenedor.append(badge);
  });
}

function verSlice() {
  // slice COPIA de la posición 2 a la 5, sin incluir la 5.
  // Devuelve Málaga, Córdoba, Jaén. NO modifica el original.
  const trozo = ciudades.slice(2, 5);
  const salida = document.querySelector("#salida6");
  salida.textContent = "slice(2, 5) devuelve " + comoTexto(trozo) + ". El array original sigue teniendo " + ciudades.length + " ciudades.";
  console.log("Slice ejecutado. Array:", ciudades);
}

function hacerSplice() {
  const salida = document.querySelector("#salida6");

  // Debe existir al menos la posición 2 para poder borrar desde ahí.
  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades. Pulsa 'Restaurar' para volver a llenar la lista.";
    return;
  }

  // splice CORTA: desde la posición 2, borra 2 elementos.
  // Devuelve los borrados y SÍ modifica el original.
  const eliminadas = ciudades.splice(2, 2);
  salida.textContent = "splice(2, 2) devuelve " + comoTexto(eliminadas) + ". Quedan " + ciudades.length + " ciudades en el array.";
  mostrarCiudades();
  console.log("Splice ejecutado. Ahora quedan:", ciudades);
}

function restaurarCiudades() {
  // Reasigna la variable con una copia nueva (por eso ciudades es let).
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

  // includes devuelve true o false. indexOf devuelve la posición o -1.
  // OJO: distinguen mayúsculas y tildes ("granada" no encuentra "Granada").
  const estaIncluida = ciudades.includes(input);
  const indice = ciudades.indexOf(input);

  salida.textContent = "includes(\"" + input + "\") devuelve " + estaIncluida + ". indexOf(\"" + input + "\") devuelve " + indice + ".";
  console.log("Buscando '" + input + "' -> incluye:", estaIncluida, ", índice:", indice);
}

mostrarCiudades(); // Pinta las ciudades al cargar la página.
