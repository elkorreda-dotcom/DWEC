// Ejercicio 1: Variables y typeof
function ejercicio1() {
    // 1. Declaración de al menos 6 variables de distintos tipos
    const edad = 25;                  // number
    const nombre = "Ana";             // string
    const esEstudiante = true;        // boolean
    const coche = null;               // null
    let telefono;                     // undefined
    const poblacionMundial = 8000000000n; // bigint

    // 2. Uso de let para una variable que cambia después
    let horasEstudio = 5;
    horasEstudio += 3; // Modificamos el valor de let

    // 3. Mostrar en la consola el valor y el typeof de cada una
    console.log("--- Ejercicio 1: Variables y typeof ---");
    console.log("edad:", edad, "| typeof:", typeof edad);
    console.log("nombre:", nombre, "| typeof:", typeof nombre);
    console.log("esEstudiante:", esEstudiante, "| typeof:", typeof esEstudiante);
    console.log("coche:", coche, "| typeof:", typeof coche);
    console.log("telefono:", telefono, "| typeof:", typeof telefono);
    console.log("poblacionMundial:", poblacionMundial, "| typeof:", typeof poblacionMundial);
    console.log("horasEstudio (actualizada):", horasEstudio, "| typeof:", typeof horasEstudio);
}

// Ejercicio 2: Conversiones explícitas
function ejercicio2() {
    console.log("--- Ejercicio 2: Conversiones explícitas ---");
    
    // 8 conversiones obligatorias/requeridas
    console.log("String(123):", String(123), "| typeof:", typeof String(123));
    console.log("Number('123'):", Number("123"), "| typeof:", typeof Number("123"));
    console.log("Number('12abc'):", Number("12abc"), "| typeof:", typeof Number("12abc")); // Da NaN
    console.log("Number(''):", Number(""), "| typeof:", typeof Number(""));
    console.log("Number(true):", Number(true), "| typeof:", typeof Number(true));
    console.log("Boolean(0):", Boolean(0), "| typeof:", typeof Boolean(0));
    console.log("Boolean('texto'):", Boolean("texto"), "| typeof:", typeof Boolean("texto"));
    console.log("Boolean(''):", Boolean(""), "| typeof:", typeof Boolean(""));
}

// Ejercicio 3: Coerción y comparaciones
function ejercicio3() {
    console.log("--- Ejercicio 3: Coerción y comparaciones ---");

    // 1. Expresiones que mezclen tipos (al menos 6)
    console.log('"5" + 2:', "5" + 2);     // Coerción a cadena ("52")
    console.log('"5" - 2:', "5" - 2);     // Coerción a número (3)
    console.log('"5" * "2":', "5" * "2"); // Coerción a número (10)
    console.log('true + 1:', true + 1);   // true pasa a 1 (2)
    console.log('null + 5:', null + 5);   // null pasa a 0 (5)
    console.log('undefined + 1:', undefined + 1); // Da NaN

    // 2. Comparaciones con == y ===
    console.log("5 == '5':", 5 == '5');       // true (compara valor convirtiendo)
    console.log("5 === '5':", 5 === '5');     // false (compara valor y tipo)
    console.log("0 == false:", 0 == false);   // true
    console.log("0 === false:", 0 === false); // false
    console.log("null == undefined:", null == undefined);   // true
    console.log("null === undefined:", null === undefined); // false
}

// Ejercicio 4: Tu ficha con plantillas de cadena
function ejercicio4() {
    // 1. Datos con const y let
    const nombre = "Carlos Pérez";
    const ciclo = "Desarrollo de Aplicaciones Web";
    const curso = "2026/2027";
    const aficion = "Programación y videojuegos";
    let horasEstudiadas = 12;
    horasEstudiadas += 4; // Modificamos con +=

    // 2. Plantilla de cadena (backticks y ${})
    const mensajePlantilla = `Ficha de Alumno:
Nombre: ${nombre}
Ciclo: ${ciclo}
Curso: ${curso}
Afición: ${aficion}
Horas estudiadas esta semana: ${horasEstudiadas}`;

    alert(mensajePlantilla);
    console.log("--- Mensaje con plantilla de cadena ---");
    console.log(mensajePlantilla);

    // 3. Mismo mensaje concatenando con +
    const mensajeConcatenado = "Ficha de Alumno:\nNombre: " + nombre + 
        "\nCiclo: " + ciclo + "\nCurso: " + curso + 
        "\nAfición: " + aficion + "\nHoras estudiadas esta semana: " + horasEstudiadas;

    console.log("--- Mensaje concatenado con + ---");
    console.log(mensajeConcatenado);

    // 4. Comparación estricta entre ambos mensajes
    console.log("¿Son estrictamente iguales (===)?", mensajePlantilla === mensajeConcatenado);
}s