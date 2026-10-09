# Práctica 2: Navegadores y primera página interactiva

## Descripción del proyecto
Este trabajo corresponde a la segunda práctica de la asignatura de Desarrollo Web en Entornos Cliente (DWEC). El objetivo principal es comprender el funcionamiento de los navegadores web y sus motores de renderizado y JavaScript mediante la construcción de un sitio web estático e interactivo de dos páginas (`index.html` e `interaccion.html`), maquetado con Bootstrap y controlado mediante scripts externos.

---

## Evidencias (Capturas de pantalla)
A continuación se muestran las capturas almacenadas en la carpeta `capturas/`, realizadas desde el equipo de trabajo:

* **Captura 1:** `captura-index-pc.png`  
  *Página principal (`index.html`) visualizada en un ordenador de escritorio, mostrando la barra de navegación superior con el nombre y apellidos del alumno visibles.*

* **Captura 2:** `captura-movil.png`  
  *Página de interacción (`interaccion.html`) probada en modo dispositivo (F12 → barra de herramientas de dispositivos), simulando la correcta adaptación visual en un teléfono móvil.*

* **Captura 3:** `captura-consola.png`  
  *Consola del navegador (Herramientas de desarrollo) reflejando las trazas de ejecución (`console.log`, `console.warn` y `console.error`) generadas al pulsar cada uno de los tres boto.*

* **Captura 4:** `captura-alert.png`  
  *Ventana emergente (`alert()`) obtenida al pulsar el botón de identificación, mostrando la cadena completa del `navigator.userAgent` en dos navegadores con motores distin.*

* **Captura 5:** `captura-vscode.png`  
  *Entorno de Visual Studio Code mostrando la estructura completa de carpetas de `tema02` y la extensión Live Server activa en ejecución.*

---

## Quién hace qué: Análisis funcional
Tomando como referencia el botón **«Saludar»**, el reparto de responsabilidades entre las capas del desarrollo web es el siguiente:
* **HTML**: Se encarga de la estructura semántica de la página web, definiendo el elemento interactivo mediante la etiqueta `<button>` y asociando el evento de pulsación con el atributo `onclick="saludar()"`.
* **Bootstrap (CSS)**: Aporta el diseño visual y la adaptabilidad del componente. Proporciona clases predefinidas como `btn`, `btn-outline-primary` y contenedores flexibles que garantizan una interfaz limpia sin necesidad de escribir hojas de estilos propias complejas[cite: 6].
* **JavaScript**: Gestiona la lógica de comportamiento del lado del cliente. Al hacer clic, ejecuta la función externa alojada en `app.js`, la cual invoca el método nativo `alert()` para mostrar el mensaje personalizado en pantalla y registra una traza informativa en la consola mediante `console.log()`[cite: 4].

---

## Análisis comparativo de `navigator.userAgent`
Al comparar las cadenas de texto obtenidas a través de `navigator.userAgent` en navegadores como Google Chrome (basado en Blink) y Mozilla Firefox (basado en Gecko), se aprecian anomalías históricas interesantes[cite: 4, 5]. 

En navegadores actuales basados en Chromium (como Chrome o Edge), la cadena incluye explícitamente palabras como `Mozilla/5.0`, `AppleWebKit` y `Safari`. Esto ocurre por motivos estrictamente de compatibilidad hacia atrás en la historia de la web: en los inicios, muchos servidores y páginas web bloqueaban o servían versiones inferiores a cualquier navegador que no se identificara a sí mismo como Netscape/Mozilla o WebKit. Para evitar quedarse fuera de compatibilidad con sitios antiguos, los navegadores modernos heredaron por defecto estas subcadenas en su identificador oficial.

---

## Fuentes consultadas
* Documentación oficial de MDN Web Docs sobre propiedades del navegador y objetos globales: [https://developer.mozilla.org](https://developer.mozilla.org)
* Repositorio oficial y materiales de la asignatura de DWEC (Profesor: Diego Rodero Pulido): [https://github.com/DRodero/DWEC_2627](https://github.com/DRodero/DWEC
* Plataforma de compatibilidad web Can I Use: [https://caniuse.com](https://caniuse.com)

## Uso de Inteligencia Artificial
* **Herramienta utilizada**: Asistente de inteligencia artificial para la consulta de sintaxis de componentes Bootstrap y revisión estructural del código.
* **Proceso posterior**: Todo el código generado fue probado, depurado y adaptado de forma manual en el entorno local mediante Live Server, redactando de manera propia los textos de análisis y reflexión exigidos en la rúbrica[cite: 8].