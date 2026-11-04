# Tarea 6 · Objetos y arrays

**Alumno:** Reda ElQourchi  
**Curso:** DWEC 2.º DAW 2026/2027

## 1. Evidencias de funcionamiento (Capturas)

* **Captura 1 (`captura1.png`)**: Estado inicial de la página con el nombre visible en la navbar y footer.
* **Captura 2 (`captura2.png`)**: Ficha del estudiante tras cumplir años y lista de colores tras añadir y quitar elementos.
* **Captura 3 (`captura3.png`)**: Catálogo de productos ordenado por precio de menor a mayor.
* **Captura 4 (`captura4.png`)**: Notas del alumno mostradas en badges según la calificación y media calculada.
* **Captura 5 (`captura5.png`)**: Resultado de las tres operaciones encadenadas (suma 60) sin alterar el array original.
* **Captura 6 (`captura6.png`)**: Estado de las ciudades tras aplicar `splice(2, 2)` y resultado de la búsqueda de una ciudad.

## 2. Reflexión sobre mutabilidad, objetos y arrays

* **`slice` vs `splice`:** `splice()` es un método mutable que elimina elementos alterando el array original directamente. Por el contrario, `slice()` es inmutable: extrae un trozo y devuelve un array nuevo sin modificar la lista inicial.
* **Copia en `sort()`:** `sort()` ordena modificando el propio array sobre el que se ejecuta. Se utiliza `[...productos]` para crear un clon y ordenar sobre él, conservando intacto el catálogo original.
* **Borrado de propiedad con `delete`:** Al ejecutar `delete estudiante.curso`, la propiedad desaparece del objeto. Acceder después a `estudiante["curso"]` devuelve `undefined`.
* **Resumen de métodos:**
  * **Mutan el array original:** `push()`, `pop()`, `shift()`, `splice()`, `sort()`.
  * **Devuelven uno nuevo (inmutables):** `slice()`, `map()`, `filter()`, `reduce()`.

## 3. Fuentes consultadas

* [MDN Web Docs - Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Bootstrap 5.3 Documentation](https://getbootstrap.com/)

## 4. Uso de Inteligencia Artificial

* **Herramienta:** Gemini.
* **Para qué se ha usado:** Consultas puntuales sobre la sintaxis de manipulación del DOM (`createElement` / `append`) y aclaración de dudas sobre conceptos teóricos de JavaScript.
* **Trabajo posterior:** Verificación del código en local, realización manual de las 6 capturas en el navegador y revisión final de la entrega.