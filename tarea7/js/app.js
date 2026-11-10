/*
  Tarea 7 · DWEC · REDA EL QOURCHI
  Funciones, flechas y clases.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  const baseConDescuento = base - base * (descuento / 100);
  const precioFinal = baseConDescuento + baseConDescuento * (iva / 100);
  return precioFinal;
}

function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseInput = document.querySelector("#base").value.trim();
  const ivaInput = document.querySelector("#iva").value;
  const descuentoInput = document.querySelector("#descuento").value.trim();
  const errorElement = document.querySelector("#error1");

  const base = Number(baseInput);

  if (baseInput === "" || Number.isNaN(base) || base < 0) {
    errorElement.textContent = "Introduce un precio base válido (mayor o igual a 0).";
    errorElement.classList.remove("d-none");
    return;
  }

  const iva = Number(ivaInput);
  let descuentoVal = 0;
  let precioFinal;

  if (descuentoInput === "") {
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuentoVal = Number(descuentoInput);
    if (Number.isNaN(descuentoVal) || descuentoVal < 0 || descuentoVal > 100) {
      errorElement.textContent = "El descuento debe estar entre 0 y 100 %.";
      errorElement.classList.remove("d-none");
      return;
    }
    precioFinal = calcularPrecio(base, iva, descuentoVal);
  }

  errorElement.classList.add("d-none");

  const desglose = [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuentoVal} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ];

  pintarLista("#salida1", desglose);
  console.log("Ejercicio 1: Precio final →", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);
  const mensajeElement = document.querySelector("#mensaje2");

  if (antigua === undefined) {
    mensajeElement.textContent = "No se ha encontrado ninguna película anterior a 1990.";
    pintarLista("#salida2", []);
  } else {
    mensajeElement.textContent = "Película anterior a 1990 encontrada.";
    pintarLista("#salida2", [comoTexto(antigua)]);
  }

  console.log("Ejercicio 2: find →", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  return resultado;
}

function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

// Dos alumnos iniciales de partida
const alumnoInicial1 = new Alumno("Lucía Martín", "2.º DAW");
alumnoInicial1.anadirNota(8);
alumnoInicial1.anadirNota(9);

const alumnoInicial2 = new AlumnoFCT("Carlos Gómez", "2.º DAW", "TecnoSur");
alumnoInicial2.anadirNota(7);
alumnoInicial2.anadirNota(8.5);

alumnos.push(alumnoInicial1, alumnoInicial2);


function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombreInput = document.querySelector("#nombre5").value.trim();
  const cursoInput = document.querySelector("#curso5").value.trim();
  const empresaInput = document.querySelector("#empresa5").value.trim();
  const notasInput = document.querySelector("#notas5").value.trim();
  const errorElement = document.querySelector("#error5");

  if (nombreInput === "") {
    errorElement.textContent = "El nombre del alumno no puede estar vacío.";
    errorElement.classList.remove("d-none");
    return;
  }

  let nuevoAlumno;
  if (empresaInput === "") {
    nuevoAlumno = new Alumno(nombreInput, cursoInput);
  } else {
    nuevoAlumno = new AlumnoFCT(nombreInput, cursoInput, empresaInput);
  }

  if (notasInput !== "") {
    const partes = notasInput.split(",").map((t) => t.trim()).filter((t) => t !== "");
    const notasNumeros = partes.map(Number);

    const algunaInvalida = notasNumeros.some(
      (nota) => Number.isNaN(nota) || nota < 0 || nota > 10
    );

    if (partes.length === 0 || algunaInvalida) {
      errorElement.textContent = "Las notas deben ser números válidos entre 0 y 10 separados por comas.";
      errorElement.classList.remove("d-none");
      return;
    }

    notasNumeros.forEach((nota) => nuevoAlumno.anadirNota(nota));
  }

  errorElement.classList.add("d-none");
  alumnos.push(nuevoAlumno);

  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";

  pintarAlumnos();
  console.log("Ejercicio 5: Alumno creado →", nuevoAlumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaDestino = new Date(fecha);
  fechaDestino.setHours(0, 0, 0, 0);

  const msPorDia = 1000 * 60 * 60 * 24;
  const diferenciaMs = fechaDestino - hoy;

  return Math.round(diferenciaMs / msPorDia);
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const dias = diasHasta(fecha);
  const fechaFormateada = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${fechaFormateada}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy… (${fechaFormateada}).`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días (${fechaFormateada}).`;
  }

  console.log("Ejercicio 6a: Días hasta →", dias);
}

function iniciales(nombreCompleto) {
  return nombreCompleto
    .trim()
    .split(" ")
    .filter((palabra) => palabra !== "")
    .map((palabra) => palabra.charAt(0).toUpperCase())
    .join("");
}

function crearUsuario(nombreCompleto) {
  const inis = iniciales(nombreCompleto).toLowerCase();
  const tresCifras = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `${inis}${tresCifras}`;
}

function mostrarIniciales() {
  const nombreCompleto = document.querySelector("#nombre6").value;
  const salida = document.querySelector("#salida6b");

  if (nombreCompleto.trim() === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }

  const inis = iniciales(nombreCompleto);
  const usuario = crearUsuario(nombreCompleto);

  salida.textContent = `Iniciales: ${inis} · usuario: ${usuario}`;
  console.log("Ejercicio 6b: Iniciales y usuario →", { inis, usuario });
}