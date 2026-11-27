/*
  Tarea 8 · DWEC · Reda EL Qourchi
  recibido.html: lee lo que ha llegado por GET y lo pinta en la tabla.
  En una web real esto lo haría el servidor; aquí lo hacemos en el navegador para verlo.
*/

console.log("recibido.js cargado");

// location.search es la parte de la URL desde el ?, por ejemplo "?nombre=Luc%C3%ADa&taller=html"
console.log("Ha llegado:", location.search);

// URLSearchParams la separa en pares nombre → valor y decodifica las tildes y los espacios
const parametros = new URLSearchParams(location.search);
console.log("nombre =", parametros.get("nombre"));

const consulta = document.querySelector("#consulta");
const tbody = document.querySelector("#datos");
const aviso = document.querySelector("#aviso");

// 1. La consulta tal cual llega, o «(nada)» si no hay
consulta.textContent = location.search || "(nada)";

// 2. Una fila por cada par campo → valor
let total = 0;
for (const [campo, valor] of parametros) {
  const fila = document.createElement("tr");

  const celdaCampo = document.createElement("th");
  celdaCampo.textContent = campo;          // textContent: son datos de fuera, nunca innerHTML

  const celdaValor = document.createElement("td");
  celdaValor.textContent = valor === "" ? "(vacío)" : valor;

  fila.append(celdaCampo, celdaValor);
  tbody.append(fila);
  total++;
  console.log("Fila añadida:", campo, "=", valor);
}

// 3. Si no ha llegado nada, enseño el aviso
if (total === 0) {
  aviso.classList.remove("d-none");
  console.log("No ha llegado ningún dato");
} else {
  console.log("Datos recibidos:", total);
}
