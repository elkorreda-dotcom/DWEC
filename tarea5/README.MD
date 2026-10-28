# Tarea 5: Manipular el DOM - DWEC

- **Alumno:** [Reda EL Qourchi]
- **Curso:** 2º DAW - Desarrollo Web en Entornos Cliente

---

## 1. Capturas de pantalla de los ejercicios

1. **Página recién cargada:**
   ![Página inicial](capturas/captura1.png)
   *Vista inicial de la aplicación con los datos del alumno cargados en la barra de navegación y el pie.*

2. **Ejercicios 1 y 2 aplicados:**
   ![Ejercicios 1 y 2](capturas/captura2.png)
   *Modificación de párrafos mediante selectores y creación/eliminación dinámica de nodos.*

3. **Párrafo resaltado con el ratón:**
   ![Resaltado ratón](capturas/captura3.png)
   *Efecto `mouseenter` activo aplicando la clase de Bootstrap para el fondo gris.*

4. **Prueba con innerHTML:**
   ![Prueba innerHTML](capturas/captura4.png)
   *Resultado al inyectar etiquetas HTML como `<b>hola</b>` utilizando `innerHTML`.*

5. **Lista de tareas:**
   ![Lista de tareas](capturas/captura5.png)
   *Gestor de tareas interactivo con adición, contador actualizado y selección de elementos.*

6. **Datos de la ventana (BOM) en modo móvil:**
   ![Datos BOM móvil](capturas/captura6.png)
   *Consulta de resolución, URL, idioma y punto de corte responsivo simulando un dispositivo móvil.*

---

## 2. Reflexión: textContent vs innerHTML

La principal diferencia radica en cómo interpretan el valor asignado:
- **`textContent`** trata todo el contenido estrictamente como **texto plano**. Si escribes etiquetas HTML (como `<b>hola</b>`), las muestra literalmente en la pantalla escapando los caracteres especiales.
- **`innerHTML`** analiza la cadena de texto como **código HTML**, interpretando e inyectando los elementos en el árbol del DOM.

**¿Por qué nunca se debe meter en `innerHTML` lo que escribe el usuario?**
Porque introduce una grave vulnerabilidad de seguridad conocida como **XSS (Cross-Site Scripting)**. Si un usuario introduce código malicioso en un input (por ejemplo, `<script>código malicioso</script>` o etiquetas con scripts incrustados en atributos `onerror`), `innerHTML` lo ejecutaría en el navegador de la víctima, pudiendo robar sesiones o manipular la página. Usando `textContent`, nos aseguramos de que cualquier entrada del usuario sea inocua al ser tratada siempre como texto.

---

## 3. Fuentes consultadas
- [MDN Web Docs: Manipulación del DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)
- [MDN Web Docs: Element: classList](https://developer.mozilla.org/es/docs/Web/API/Element/classList)
- Documentación oficial de Bootstrap 5 para clases de utilidad y componentes.

---

## 4. Uso de IA
- **Herramienta utilizada:** Asistente de IA.
- **Propósito:** Resolución de dudas puntuales sobre la sintaxis de los selectores avanzados de `querySelectorAll` combinados con estados de formularios (`:checked`).
- **Validación posterior:** El código generado fue revisado, adaptado a los requisitos estrictos de la práctica (uso exclusivo de `const`/`let`, sin estilos inline y con logs en consola) y probado directamente en el entorno de desarrollo.