// Función del Botón A: Saludar
function saludar() {
    alert("¡Hola! Soy Reda EL Qourchi, alumno de Desarrollo Web en Entornos Cliente.");
    console.log("[LOG] El usuario ha pulsado el botón 'Saludar'. Alerta mostrada correctamente.");
}

// Función del Botón B: Simular un error (solo visible en la consola F12)
function simularError() {
    console.error("[ERROR] Fallo crítico simulado en la aplicación de pruebas bancarias.");
}

// Función del Botón C: Identificar el navegador del usuario mediante userAgent
function queNavegadorSoy() {
    let agente = navigator.userAgent;
    alert("UserAgent detectado: \n" + agente);
    console.warn("[WARN] Información de cliente obtenida mediante navigator.userAgent: " + agente);
}
function Adios() {
    alert("¡Hola! Soy Reda EL Qourchi, alumno de Desarrollo Web en Entornos Cliente.");
    console.log("[LOG] El usuario ha pulsado el botón 'Saludar'. Alerta mostrada correctamente.");
}