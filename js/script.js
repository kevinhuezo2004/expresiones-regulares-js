// Ejemplo práctico de expresiones regulares en JavaScript.
// Cada validador usa la sintaxis literal /patron/flags y el método .test()

const validadores = {
  correo: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    ok: "Correo válido.",
    error: "Formato de correo no válido (debe contener @ y un dominio)."
  },
  telefono: {
    regex: /^\d{4}-\d{4}$/,
    ok: "Teléfono válido.",
    error: "Usa el formato ####-#### (ej: 7123-4567)."
  },
  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    ok: "Contraseña segura.",
    error: "Debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo."
  },
  fecha: {
    regex: /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    ok: "Fecha con formato válido.",
    error: "Usa el formato dd/mm/aaaa (ej: 22/09/2026)."
  },
  url: {
    regex: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-./?%&=]*)?$/,
    ok: "URL válida.",
    error: "Escribe una URL válida (ej: https://www.ejemplo.com)."
  }
};

function validarCampo(id) {
  const input = document.getElementById(id);
  const mensaje = document.querySelector(`.mensaje[data-for="${id}"]`);
  const config = validadores[id];
  if (!input || !config) return;

  const valor = input.value.trim();

  if (valor === "") {
    input.classList.remove("valido", "invalido");
    mensaje.textContent = "";
    mensaje.className = "mensaje";
    return;
  }

  const esValido = config.regex.test(valor);

  input.classList.toggle("valido", esValido);
  input.classList.toggle("invalido", !esValido);
  mensaje.textContent = esValido ? config.ok : config.error;
  mensaje.className = "mensaje " + (esValido ? "ok" : "error");
}

Object.keys(validadores).forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", () => validarCampo(id));
  }
});

document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  Object.keys(validadores).forEach(validarCampo);
});

// ---- Probador de expresiones regulares en vivo ----

function escapeHTML(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function actualizarLive() {
  const patronInput = document.getElementById("patronLive");
  const flagsInput = document.getElementById("flagsLive");
  const textoInput = document.getElementById("textoLive");
  const salida = document.getElementById("resultadoLive");

  const patron = patronInput.value;
  const flags = flagsInput.value;
  const texto = textoInput.value;

  let regex;
  try {
    regex = new RegExp(patron, flags);
  } catch (err) {
    salida.textContent = "Expresión regular no válida: " + err.message;
    return;
  }

  if (!flags.includes("g")) {
    // Para resaltar todas las coincidencias en la vista usamos una copia con "g"
    try {
      regex = new RegExp(patron, flags + "g");
    } catch (err) {
      salida.textContent = "Expresión regular no válida: " + err.message;
      return;
    }
  }

  const resaltado = escapeHTML(texto).replace(
    new RegExp(regex.source, regex.flags),
    (match) => `<mark>${escapeHTML(match)}</mark>`
  );

  salida.innerHTML = resaltado || "(sin texto)";
}

["patronLive", "flagsLive", "textoLive"].forEach((id) => {
  document.getElementById(id).addEventListener("input", actualizarLive);
});

document.addEventListener("DOMContentLoaded", actualizarLive);
