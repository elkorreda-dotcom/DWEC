// Constante definida para los bucles según los requisitos de la tarea
const MAXIMO_REPETICIONES = 20;

// ==========================================
// EJERCICIO 1: CALCULADORA
// ==========================================

function sumar() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Frecuencia o números vacíos", "danger");
        return;
    }
    
    let resultado = num1 + num2;
    mostrar(`${num1} + ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - Suma: ${num1} + ${num2} = ${resultado}`);
}

function restar() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números", "danger");
        return;
    }
    
    let resultado = num1 - num2;
    mostrar(`${num1} - ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - Resta: ${num1} - ${num2} = ${resultado}`);
}

function multiplicar() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números", "danger");
        return;
    }
    
    let resultado = num1 * num2;
    mostrar(`${num1} * ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - Multiplicación: ${num1} * ${num2} = ${resultado}`);
}

function dividir() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números", "danger");
        return;
    }
    
    if (num2 === 0) {
        mostrar("Error: No se puede dividir entre 0", "danger");
        console.log("Ejercicio 1 - Error: División entre 0");
        return;
    }
    
    let resultado = num1 / num2;
    mostrar(`${num1} / ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - División: ${num1} / ${num2} = ${resultado}`);
}

function potencia() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números", "danger");
        return;
    }
    
    let resultado = num1 ** num2;
    mostrar(`${num1} ** ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - Potencia: ${num1} ** ${num2} = ${resultado}`);
}

function modulo() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números", "danger");
        return;
    }
    
    if (num2 === 0) {
        mostrar("Error: El módulo entre 0 no está permitido", "danger");
        console.log("Ejercicio 1 - Error: Módulo entre 0");
        return;
    }
    
    let resultado = num1 % num2;
    mostrar(`${num1} % ${num2} = ${resultado}`);
    console.log(`Ejercicio 1 - Módulo: ${num1} % ${num2} = ${resultado}`);
}


// ==========================================
// EJERCICIO 2: COMPARACIONES
// ==========================================

function cualEsMayor() {
    let num1 = leerNumero("numero1");
    let num2 = leerNumero("numero2");
    
    if (isNaN(num1) || isNaN(num2)) {
        mostrar("Error: Introduce ambos números para comparar", "danger");
        return;
    }
    
    if (num1 > num2) {
        mostrar(`El número 1 (${num1}) es mayor que el número 2 (${num2})`, "info");
    } else if (num1 < num2) {
        mostrar(`El número 2 (${num2}) es mayor que el número 1 (${num1})`, "info");
    } else {
        mostrar(`Ambos números son iguales (${num1})`, "info");
    }
    console.log(`Ejercicio 2 - Comparación: num1 = ${num1}, num2 = ${num2}`);
}

function parImpar() {
    let num1 = leerNumero("numero1");
    
    if (isNaN(num1)) {
        mostrar("Error: Introduce el número 1", "danger");
        return;
    }
    
    if (num1 % 1 !== 0) {
        mostrar("Aviso: El número tiene decimales, no es ni par ni impar", "warning");
        console.log("Ejercicio 2 - Par/Impar: El número tiene decimales");
        return;
    }
    
    let resultadoParImpar = (num1 % 2 === 0) ? "par" : "impar";
    mostrar(`El número ${num1} es ${resultadoParImpar}`, "success");
    console.log(`Ejercicio 2 - Par/Impar: ${num1} es ${resultadoParImpar}`);
}


// ==========================================
// EJERCICIO 3: BUCLES CON TEXTO
// ==========================================

function validarBucle(num) {
    if (isNaN(num) || num % 1 !== 0 || num > MAXIMO_REPETICIONES) {
        mostrar(`Error: Introduce un número entero válido y menor o igual a ${MAXIMO_REPETICIONES}`, "danger");
        return false;
    }
    return true;
}

function bucleForTexto() {
    let limite = leerNumero("numero1");
    if (!validarBucle(limite)) return;
    
    limpiarSalida();
    let contador = 0;
    
    for (let i = 1; i <= limite; i++) {
        anadirLinea(`for repetición ${i} de ${limite}`);
        contador++;
    }
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`Total: ${textoTotal}`);
    console.log(`Ejercicio 3 - Bucle for completado: ${contador} vueltas`);
}

function bucleWhileTexto() {
    let limite = leerNumero("numero1");
    if (!validarBucle(limite)) return;
    
    limpiarSalida();
    let contador = 0;
    let i = 1;
    
    while (i <= limite) {
        anadirLinea(`while repetición ${i} de ${limite}`);
        contador++;
        i++;
    }
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`Total: ${textoTotal}`);
    console.log(`Ejercicio 3 - Bucle while completado: ${contador} vueltas`);
}

function bucleDoWhileTexto() {
    let limite = leerNumero("numero1");
    
    // Validación especial permitiendo 0 o negativos para do...while (se ejecutan al menos 1 vez)
    if (isNaN(limite) || limite % 1 !== 0 || limite > MAXIMO_REPETICIONES) {
        mostrar(`Error: Introduce un número entero válido y menor o igual a ${MAXIMO_REPETICIONES}`, "danger");
        return;
    }
    
    limpiarSalida();
    let contador = 0;
    let i = 1;
    
    do {
        anadirLinea(`do...while repetición ${i} de ${limite}`);
        contador++;
        i++;
    } while (i <= limite);
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`Total: ${textoTotal}`);
    console.log(`Ejercicio 3 - Bucle do...while completado: ${contador} vueltas`);
}


// ==========================================
// EJERCICIO 4: BUCLES CON BADGES
// ==========================================

function bucleForBadges() {
    let limite = leerNumero("numero1");
    if (!validarBucle(limite)) return;
    
    limpiarSalida();
    let contador = 0;
    
    for (let i = 1; i <= limite; i++) {
        let colorBadge = (i % 2 === 0) ? "success" : "primary";
        anadirBadge(`for ${i}`, colorBadge);
        contador++;
    }
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`<br>Total: ${textoTotal}`);
    console.log(`Ejercicio 4 - Bucle for con badges completado: ${contador} vueltas`);
}

function bucleWhileBadges() {
    let limite = leerNumero("numero1");
    if (!validarBucle(limite)) return;
    
    limpiarSalida();
    let contador = 0;
    let i = 1;
    
    while (i <= limite) {
        let colorBadge = (i % 2 === 0) ? "success" : "primary";
        anadirBadge(`while ${i}`, colorBadge);
        contador++;
        i++;
    }
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`<br>Total: ${textoTotal}`);
    console.log(`Ejercicio 4 - Bucle while con badges completado: ${contador} vueltas`);
}

function bucleDoWhileBadges() {
    let limite = leerNumero("numero1");
    
    if (isNaN(limite) || limite % 1 !== 0 || limite > MAXIMO_REPETICIONES) {
        mostrar(`Error: Introduce un número entero válido y menor o igual a ${MAXIMO_REPETICIONES}`, "danger");
        return;
    }
    
    limpiarSalida();
    let contador = 0;
    let i = 1;
    
    do {
        let colorBadge = (i % 2 === 0) ? "success" : "primary";
        anadirBadge(`do...while ${i}`, colorBadge);
        contador++;
        i++;
    } while (i <= limite);
    
    let textoTotal = (contador === 1) ? "1 repetición" : `${contador} repeticiones`;
    anadirLinea(`<br>Total: ${textoTotal}`);
    console.log(`Ejercicio 4 - Bucle do...while con badges completado: ${contador} vueltas`);
}