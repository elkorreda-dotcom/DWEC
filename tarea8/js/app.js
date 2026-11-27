/*
  Tarea 8 · DWEC · Reda EL Qourchi
  Formulario de inscripción: validación con JavaScript, eventos de los campos y resumen con FormData.
  · Los errores se escriben debajo de cada campo con mostrarError(); nada de alert().
  · Flechas en los callbacks: dentro de ellos uso e.target o la constante form, nunca this.
*/

console.log("app.js cargado");

const form = document.querySelector("#inscripcion");


// ============================================================
// Mostrar y quitar los errores junto al campo
// Cada campo está en un <div class="mb-3"> con su <div class="invalid-feedback">
// ============================================================

function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");                         // borde rojo de Bootstrap
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = mensaje;
  aviso.classList.add("d-block");                            // visible también en los radio
}

function quitarError(campo) {
  // En los radio el error es de todo el grupo: se lo quito a todos los del mismo name
  if (campo.type === "radio") {
    form.querySelectorAll(`[name="${campo.name}"]`).forEach((radio) => radio.classList.remove("is-invalid"));
  } else {
    campo.classList.remove("is-invalid");
  }
  const aviso = campo.closest(".mb-3").querySelector(".invalid-feedback");
  aviso.textContent = "";
  aviso.classList.remove("d-block");
}


// ============================================================
// Ejercicio 4 · El mensaje de cada error
// ============================================================

// El texto de cada campo obligatorio cuando está vacío. La clave es el name (o el id, si no tiene name)
const OBLIGATORIOS = {
  nombre: "Escribe tu nombre y apellidos.",
  email: "Escribe tu correo electrónico.",
  email2: "Repite tu correo electrónico.",
  nacimiento: "Indica tu fecha de nacimiento.",
  modalidad: "Elige una modalidad.",
  taller: "Elige un taller para la tarde.",
  condiciones: "Tienes que aceptar las condiciones para inscribirte."
};

function mensajeDe(campo) {
  const v = campo.validity;
  if (v.valueMissing) {
    return OBLIGATORIOS[campo.name || campo.id];
  }
  if (v.typeMismatch) {
    return "Escribe un correo válido, por ejemplo nombre@correo.es.";
  }
  if (v.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres.`;
  }
  if (v.patternMismatch || v.rangeUnderflow || v.rangeOverflow) {
    return campo.title;
  }
  if (v.customError) {
    return campo.validationMessage;                          // el de setCustomValidity
  }
  return "Revisa este campo.";
}


// ============================================================
// Ejercicio 5 · Los dos correos tienen que coincidir
// ============================================================

const email = document.querySelector("#email");
const email2 = document.querySelector("#email2");

function comprobarCorreos() {
  if (email2.value !== "" && email2.value !== email.value) {
    email2.setCustomValidity("Los dos correos no coinciden.");
    console.log("Los correos no coinciden");
  } else {
    email2.setCustomValidity("");
    // Si ya coinciden, quito el error aunque lo haya arreglado escribiendo en el primero
    if (email2.checkValidity()) {
      quitarError(email2);
    }
  }
}

email.addEventListener("input", () => comprobarCorreos());
email2.addEventListener("input", () => comprobarCorreos());


// ============================================================
// Ejercicio 4 · La validación al enviar
// ============================================================

form.addEventListener("submit", (e) => {
  e.preventDefault();                                        // no se envía todavía
  console.log("Submit: empiezo a validar");

  comprobarCorreos();

  const campos = e.target.querySelectorAll("input, select, textarea");
  let primero = null;                                        // el primer campo que falla

  campos.forEach((campo) => {
    if (campo.checkValidity()) {
      quitarError(campo);
    } else {
      mostrarError(campo, mensajeDe(campo));
      console.log("Error en", campo.name || campo.id, "→", mensajeDe(campo));
      if (primero === null) {
        primero = campo;
      }
    }
  });

  if (primero !== null) {
    primero.focus();
    console.log("Hay errores: no se envía");
    return;
  }

  console.log("Todo correcto: envío el formulario");
  e.target.submit();
});


// ============================================================
// Ejercicio 5 · Eventos de los campos
// ============================================================

// Contador de la textarea
const comentarios = document.querySelector("#comentarios");
const contador = document.querySelector("#contador");

comentarios.addEventListener("input", () => {
  contador.textContent = comentarios.value.length;
  console.log("Caracteres:", comentarios.value.length);
});

// Nivel de JavaScript en su <output>
const nivel = document.querySelector("#nivel");
const valorNivel = document.querySelector("#valorNivel");

nivel.addEventListener("input", () => {
  valorNivel.textContent = nivel.value;
  console.log("Nivel:", nivel.value);
});

// El error desaparece en cuanto el campo se corrige
form.querySelectorAll("input, select, textarea").forEach((campo) => {
  campo.addEventListener("input", () => {
    if (campo.checkValidity()) {
      quitarError(campo);
    }
  });
});

// Al borrar: quito los errores y vuelvo a poner el contador y el nivel
form.addEventListener("reset", () => {
  console.log("Reset del formulario");
  email2.setCustomValidity("");
  form.querySelectorAll("input, select, textarea").forEach((campo) => quitarError(campo));
  contador.textContent = 0;
  valorNivel.textContent = 5;
  document.querySelector("#resumen").textContent = "";
  document.querySelector("#avisoResumen").textContent = "";
});


// ============================================================
// Ejercicio 6 · Resumen con FormData
// ============================================================

const verResumen = document.querySelector("#verResumen");
const resumen = document.querySelector("#resumen");
const avisoResumen = document.querySelector("#avisoResumen");

verResumen.addEventListener("click", () => {
  const datos = new FormData(form);
  resumen.textContent = "";                                  // vacío la lista anterior
  let total = 0;

  for (const [campo, valor] of datos) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between gap-3";

    const nombreCampo = document.createElement("strong");
    nombreCampo.textContent = campo;

    const valorCampo = document.createElement("span");
    valorCampo.className = "text-end";
    valorCampo.textContent = valor === "" ? "(vacío)" : valor;

    li.append(nombreCampo, valorCampo);
    resumen.append(li);
    total++;
  }

  avisoResumen.textContent = `${total} datos. «Repite el correo» no sale porque no tiene name, ` +
    "y el taller y las condiciones solo salen si están marcados.";
  console.log("Resumen con", total, "datos");
});