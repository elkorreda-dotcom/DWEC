// Funciones de ayuda para la manipulación básica del DOM en la Tarea 4

function leerNumero(id) {
    let valor = document.getElementById(id).value.trim();
    if (valor === "") {
        return NaN; // Devuelve NaN si la casilla está vacía
    }
    return Number(valor);
}

function mostrar(texto, color = "success") {
    let salida = document.getElementById("salida");
    // Muestra el texto en un aviso de Bootstrap borrando lo anterior
    salida.innerHTML = `<div class="alert alert-${color} mb-0" role="alert">${texto}</div>`;
} 

function anadirLinea(texto) {
    let salida = document.getElementById("salida");
    // Añade una línea sin borrar lo que ya hay
    salida.innerHTML += `<div>${texto}</div>`;
}

function anadirBadge(texto, color = "primary") {
    let salida = document.getElementById("salida");
    // Añade un badge de Bootstrap sin borrar lo anterior
    salida.innerHTML += `<span class="badge bg-${color} me-1 mb-1">${texto}</span> `;
}

function limpiarSalida() {
    let salida = document.getElementById("salida");
    salida.innerHTML = ""; // Vacía por completo la zona de resultado
}