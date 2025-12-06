"use strict";

// ==============================
//  MALLA CURRICULAR INTERACTIVA
//  Carrera de salud
// ==============================

// --------- 1. Definición de semestres y ramos ---------

const semestres = [
  {
    nombre: "Semestre 1",
    ramos: [
      { id: "destrezas-i", nombre: "Destrezas I" },
      { id: "biocel", nombre: "Biocel" },
      { id: "anato-i", nombre: "Anato I" },
      { id: "fisica-i", nombre: "Física I" },
      { id: "quimica-i", nombre: "Química I" },
      { id: "histo-i", nombre: "Histo I" },
      { id: "ingles-i", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Semestre 2",
    ramos: [
      { id: "destrezas-ii", nombre: "Destrezas II" },
      { id: "anato-ii", nombre: "Anato II" },
      { id: "histo-ii", nombre: "Histo II" },
      { id: "fisica-ii", nombre: "Física II" },
      { id: "quimica-ii", nombre: "Química II" },
      { id: "ingles-ii", nombre: "Inglés II" },
      { id: "cfg-1", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 3",
    ramos: [
      { id: "simu-i", nombre: "Simu I" },
      { id: "pato", nombre: "Pato" },
      { id: "fisiobioq-i", nombre: "Fisiobioq I" },
      { id: "antropo-i", nombre: "Antropo I" },
      { id: "promo-i", nombre: "Promo I" },
      { id: "ingles-iii", nombre: "Inglés III" },
      { id: "cfg-2", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 4",
    ramos: [
      { id: "simu-ii", nombre: "Simu II" },
      { id: "semio", nombre: "Semio" },
      { id: "fisiobioq-ii", nombre: "Fisiobioq II" },
      { id: "antropo-ii", nombre: "Antropo II" },
      { id: "promo-ii", nombre: "Promo II" },
      { id: "ingles-vi", nombre: "Inglés VI" },
      { id: "cfg-3", nombre: "CFG" }
    ]
  },
  {
    nombre: "Semestre 5",
    ramos: [
      { id: "adulto-i", nombre: "Adulto I" },
      { id: "nino-i", nombre: "Niño I" },
      { id: "am-i", nombre: "AM I" },
      { id: "fundamentos-i", nombre: "Fundamentos I" },
      { id: "intervencion-i", nombre: "Intervención I" },
      { id: "gestion", nombre: "Gestión" }
    ]
  },
  {
    nombre: "Semestre 6",
    ramos: [
      { id: "adulto-ii", nombre: "Adulto II" },
      { id: "nino-ii", nombre: "Niño II" },
      { id: "am-ii", nombre: "AM II" },
      { id: "fundamentos-ii", nombre: "Fundamentos II" },
      { id: "farmaco", nombre: "Fármaco" },
      { id: "intervencion-ii", nombre: "Intervención II" }
    ]
  },
  {
    nombre: "Semestre 7",
    ramos: [
      { id: "adulto-iii-a", nombre: "Adulto III A" },
      { id: "nino-iii-a", nombre: "Niño III A" },
      { id: "am-iii-a", nombre: "AM III A" },
      { id: "mantencion-i", nombre: "Mantención I" },
      { id: "urgencias-i", nombre: "Urgencias I" },
      {
        id: "proy-investigacion-i",
        nombre: "Proyecto de investigación I"
      }
    ]
  },
  {
    nombre: "Semestre 8",
    ramos: [
      {
        id: "proy-investigacion-ii",
        nombre: "Proyecto de investigación II"
      },
      { id: "mantencion-ii", nombre: "Mantención II" },
      { id: "urgencias-ii", nombre: "Urgencias II" },
      { id: "adulto-iii-b", nombre: "Adulto III B" },
      { id: "nino-iii-b", nombre: "Niño III B" },
      { id: "am-iii-b", nombre: "AM III B" }
    ]
  },
  {
    nombre: "Semestre 9",
    ramos: [
      { id: "adulto-iv-a", nombre: "Adulto IV A" },
      { id: "nino-iv-a", nombre: "Niño IV A" },
      { id: "am-iv-a", nombre: "AM IV A" },
      {
        id: "proy-investigacion-iii",
        nombre: "Proyecto de investigación III"
      },
      {
        id: "clinica-integral-i",
        nombre: "Clínica integral I"
      },
      { id: "mantencion-iii", nombre: "Mantención III" },
      {
        id: "urgencias-multidisciplinarias-9",
        nombre: "Urgencias multidisciplinarias"
      },
      { id: "urgencias-medicas-9", nombre: "Urgencias médicas" }
    ]
  },
  {
    nombre: "Semestre 10",
    ramos: [
      {
        id: "proy-investigacion-iv",
        nombre: "Proyecto de investigación IV"
      },
      {
        id: "clinica-integral-ii",
        nombre: "Clínica integral II"
      },
      { id: "mantencion-iv", nombre: "Mantención IV" },
      {
        id: "urgencias-multidisciplinarias-10",
        nombre: "Urgencias multidisciplinarias"
      },
      { id: "urgencias-medicas-10", nombre: "Urgencias médicas" },
      { id: "adulto-iv-b", nombre: "Adulto IV B" },
      { id: "nino-iv-b", nombre: "Niño IV B" },
      { id: "am-iv-b", nombre: "AM IV B" }
    ]
  },
  {
    nombre: "Semestre 11",
    ramos: [{ id: "internado", nombre: "Internado" }]
  },
  {
    nombre: "Semestre 12",
    ramos: [{ id: "tesis-grado", nombre: "Tesis de grado" }]
  }
];

// Total de ramos (para progreso global)
const TOTAL_RAMOS = semestres.reduce(
  (acc, s) => acc + s.ramos.length,
  0
);

// Grupos por tipo de urgencia (multi-sede: 9 y 10)
const URGENCIAS_TIPOS = {
  "urgencias-multidisciplinarias": [
    "urgencias-multidisciplinarias-9",
    "urgencias-multidisciplinarias-10"
  ],
  "urgencias-medicas": [
    "urgencias-medicas-9",
    "urgencias-medicas-10"
  ]
};

function tipoUrgencia(id) {
  if (id.startsWith("urgencias-multidisciplinarias")) {
    return "urgencias-multidisciplinarias";
  }
  if (id.startsWith("urgencias-medicas")) {
    return "urgencias-medicas";
  }
  return null;
}

function esUrgencia(id) {
  return tipoUrgencia(id) !== null;
}

// --------- 2. Requisitos por ramo ---------

// Si un ramo no aparece aquí => sin requisitos
const requisitos = {
  // Semestre 2
  "destrezas-ii": ["destrezas-i"],
  "anato-ii": ["biocel", "histo-i", "anato-i"],
  "histo-ii": ["biocel", "histo-i", "anato-i"],
  "fisica-ii": ["fisica-i"],
  "quimica-ii": ["quimica-i"],
  "ingles-ii": ["ingles-i"],

  // Semestre 3
  "simu-i": ["destrezas-ii", "quimica-ii"],
  "pato": ["fisica-ii", "histo-ii", "anato-ii"],
  "fisiobioq-i": ["fisica-ii", "anato-ii", "histo-ii"],
  "ingles-iii": ["ingles-ii"],

  // Semestre 4
  "simu-ii": ["simu-i"],
  "semio": ["pato", "fisiobioq-i"],
  "fisiobioq-ii": ["pato", "fisiobioq-i"],
  "antropo-ii": ["antropo-i"],
  "promo-ii": ["promo-i", "antropo-i"],
  "ingles-vi": ["ingles-iii"],

  // Semestre 5
  "adulto-i": ["simu-ii", "semio"],
  "nino-i": ["simu-ii", "semio"],
  "am-i": ["simu-ii", "semio"],
  "fundamentos-i": ["fisiobioq-ii"],
  "intervencion-i": ["antropo-ii", "promo-ii"],
  "gestion": ["promo-ii"],

  // Semestre 6
  "adulto-ii": ["adulto-i", "am-i"],
  "nino-ii": ["nino-i"],
  "am-ii": ["am-i", "adulto-i"],
  "fundamentos-ii": ["fundamentos-i"],
  "farmaco": ["fundamentos-i"],
  "intervencion-ii": ["intervencion-i"],

  // Semestre 7
  "adulto-iii-a": ["adulto-ii", "am-ii", "fundamentos-ii"],
  "nino-iii-a": ["nino-ii"],
  "am-iii-a": ["am-ii", "adulto-ii", "fundamentos-ii"],
  "proy-investigacion-i": [],
  "mantencion-i": ["intervencion-ii"],
  "urgencias-i": [
    "nino-ii",
    "adulto-ii",
    "am-ii",
    "fundamentos-ii",
    "farmaco"
  ],

  // Semestre 8
  "proy-investigacion-ii": ["proy-investigacion-i"],
  "mantencion-ii": ["mantencion-i"],
  "urgencias-ii": ["urgencias-i"],
  "adulto-iii-b": ["adulto-iii-a"],
  "nino-iii-b": ["nino-iii-a"],
  "am-iii-b": ["am-iii-a"],

  // Semestre 9
  "adulto-iv-a": ["adulto-iii-b", "am-iii-b"],
  "nino-iv-a": ["nino-iii-b"],
  "am-iv-a": ["am-iii-b", "adulto-iii-b"],
  "proy-investigacion-iii": ["proy-investigacion-ii"],
  "clinica-integral-i": [
    "urgencias-ii",
    "nino-iii-b",
    "am-iii-b",
    "adulto-iii-b"
  ],
  "mantencion-iii": ["mantencion-ii", "adulto-iii-b", "am-iii-b"],
  "urgencias-multidisciplinarias-9": ["urgencias-ii"],
  "urgencias-medicas-9": ["urgencias-ii"],

  // Semestre 10
  "proy-investigacion-iv": ["proy-investigacion-iii"],
  "clinica-integral-ii": ["clinica-integral-i"],
  "mantencion-iv": ["mantencion-iii"],
  "urgencias-multidisciplinarias-10": ["urgencias-ii"],
  "urgencias-medicas-10": ["urgencias-ii"],
  "adulto-iv-b": ["adulto-iv-a"],
  "nino-iv-b": ["nino-iv-a"],
  "am-iv-b": ["am-iv-a"],

  // Semestre 11 y 12
  "internado": [
    "urgencias-multidisciplinarias", // tipo (al menos una en 9 o 10)
    "urgencias-medicas",             // tipo (al menos una en 9 o 10)
    "nino-iv-b",
    "adulto-iv-b",
    "am-iv-b",
    "mantencion-iv",
    "clinica-integral-ii",
    "proy-investigacion-iv"
  ],
  "tesis-grado": [
    "urgencias-multidisciplinarias",
    "urgencias-medicas",
    "nino-iv-b",
    "adulto-iv-b",
    "am-iv-b",
    "mantencion-iv",
    "clinica-integral-ii",
    "proy-investigacion-iv"
  ]
};

// --------- 3. Estado en memoria ---------

let aprobados = new Set();
let mapaRamos = {};
let mensajeTimeoutId = null;
const STORAGE_KEY = "malla-salud-aprobados-v2";

// ==============================
//  INICIALIZACIÓN
// ==============================

document.addEventListener("DOMContentLoaded", function () {
  const contenedorMalla = document.getElementById("malla");
  if (!contenedorMalla) return;

  // Mapa id -> nombre
  semestres.forEach(function (semestre) {
    semestre.ramos.forEach(function (ramo) {
      mapaRamos[ramo.id] = ramo.nombre;
    });
  });

  // Nombres para requisitos "virtuales" de tipo urgencia
  mapaRamos["urgencias-multidisciplinarias"] =
    "Urgencias multidisciplinarias (9 o 10)";
  mapaRamos["urgencias-medicas"] =
    "Urgencias médicas (9 o 10)";

  // Cargar estado guardado
  cargarEstadoDesdeStorage();

  // Renderizar malla
  semestres.forEach(function (semestre, indiceSemestre) {
    const columna = document.createElement("section");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.className = "semestre__titulo";
    titulo.textContent = semestre.nombre;
    columna.appendChild(titulo);

    // Progreso por semestre
    const contProgresoSem = document.createElement("div");
    contProgresoSem.className = "semestre__progreso";
    contProgresoSem.innerHTML = `
      <div class="semestre__progreso-bar">
        <div class="semestre__progreso-fill"></div>
      </div>
      <span class="semestre__progreso-texto">
        0 / ${semestre.ramos.length} aprobados (0%)
      </span>
    `;
    columna.appendChild(contProgresoSem);

    const contRamos = document.createElement("div");
    contRamos.className = "semestre__ramos";

    semestre.ramos.forEach(function (ramo) {
      const item = document.createElement("div");
      item.className = "ramo";
      item.dataset.id = ramo.id;
      item.dataset.semestre = String(indiceSemestre + 1);
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");

      // Tooltip con requisitos
      const reqs = requisitos[ramo.id] || [];
      if (reqs.length > 0) {
        const nombresReq = reqs.map(function (idReq) {
          return mapaRamos[idReq] || idReq;
        });
        item.title = "Requisitos: " + nombresReq.join(", ");
      } else {
        item.title = "Sin requisitos";
      }

      const spanNombre = document.createElement("span");
      spanNombre.className = "ramo__nombre";
      spanNombre.textContent = ramo.nombre;
      item.appendChild(spanNombre);

      // Estado inicial
      if (aprobados.has(ramo.id)) {
        item.classList.add("aprobado");
        item.setAttribute("aria-pressed", "true");
      } else {
        item.setAttribute("aria-pressed", "false");
      }

      // Eventos
      item.addEventListener("click", manejarClickRamo);
      item.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          manejarClickRamo.call(item, evento);
        }
      });

      contRamos.appendChild(item);
    });

    columna.appendChild(contRamos);
    contenedorMalla.appendChild(columna);
  });

  actualizarBloqueos();
  actualizarProgreso();
});

// ==============================
//  LÓGICA PRINCIPAL
// ==============================

function manejarClickRamo() {
  const idRamo = this.dataset.id;
  const semestre = this.dataset.semestre;
  const yaAprobado = aprobados.has(idRamo);

  // Si ya estaba aprobado, desmarcar (toggle)
  if (yaAprobado) {
    aprobados.delete(idRamo);
    this.classList.remove("aprobado");
    this.setAttribute("aria-pressed", "false");
    guardarEstadoEnStorage();
    actualizarBloqueos();
    actualizarProgreso();
    return;
  }

  // Regla especial de urgencias:
  // - En semestre 9 y 10 solo se puede aprobar UNA urgencia por semestre.
  if (esUrgencia(idRamo) && (semestre === "9" || semestre === "10")) {
    const urgenciasMismoSem = document.querySelectorAll(
      '.ramo[data-semestre="' + semestre + '"]'
    );
    const otraUrgenciaAprobada = Array.from(urgenciasMismoSem).some(function (node) {
      const idOtro = node.dataset.id;
      return (
        idOtro !== idRamo &&
        esUrgencia(idOtro) &&
        aprobados.has(idOtro)
      );
    });

    if (otraUrgenciaAprobada) {
      mostrarMensaje(
        "En el semestre " +
          semestre +
          " solo puedes aprobar una asignatura de urgencias."
      );
      return;
    }
  }

  // Verificación de requisitos
  const faltantes = obtenerRequisitosFaltantes(idRamo);
  if (faltantes.length > 0) {
    const nombresFaltantes = faltantes.map(function (id) {
      return mapaRamos[id] || id;
    });
    const nombreRamo = mapaRamos[idRamo] || idRamo;

    mostrarMensaje(
      'No puedes aprobar "' +
        nombreRamo +
        '" porque te faltan: ' +
        nombresFaltantes.join(", ") +
        "."
    );
    return;
  }

  // Requisitos OK -> aprobar
  aprobados.add(idRamo);
  this.classList.add("aprobado");
  this.setAttribute("aria-pressed", "true");

  guardarEstadoEnStorage();
  actualizarBloqueos();
  actualizarProgreso();
}

/**
 * Devuelve lista de IDs de requisitos que faltan para un ramo.
 * Maneja también los requisitos "virtuales" de tipo urgencia
 * (al menos una urgencia de ese tipo en 9 o 10).
 */
function obtenerRequisitosFaltantes(idRamo) {
  const reqs = requisitos[idRamo] || [];
  const faltantes = [];

  reqs.forEach(function (idReq) {
    // Requisito por tipo de urgencia (multidisciplinarias / médicas)
    if (URGENCIAS_TIPOS[idReq]) {
      const lista = URGENCIAS_TIPOS[idReq];
      const algunoAprobado = lista.some(function (idReal) {
        return aprobados.has(idReal);
      });
      if (!algunoAprobado) {
        faltantes.push(idReq);
      }
    } else {
      if (!aprobados.has(idReq)) {
        faltantes.push(idReq);
      }
    }
  });

  return faltantes;
}

/**
 * Actualiza visualmente qué ramos están bloqueados.
 */
function actualizarBloqueos() {
  const elementosRamos = document.querySelectorAll(".ramo");

  elementosRamos.forEach(function (elem) {
    const idRamo = elem.dataset.id;
    const semestre = elem.dataset.semestre;

    // Si ya está aprobado, nunca se bloquea (permite desmarcar)
    if (aprobados.has(idRamo)) {
      elem.classList.remove("bloqueado");
      return;
    }

    // Requisitos generales
    const faltantes = obtenerRequisitosFaltantes(idRamo);
    if (faltantes.length > 0) {
      elem.classList.add("bloqueado");
      return;
    }

    // Reglas especiales de urgencias en semestres 9 y 10
    if (esUrgencia(idRamo) && (semestre === "9" || semestre === "10")) {
      // 1) Solo una urgencia por semestre
      const urgenciasMismoSem = document.querySelectorAll(
        '.ramo[data-semestre="' + semestre + '"]'
      );
      const otraEnSemAprobada = Array.from(urgenciasMismoSem).some(function (node) {
        const idOtro = node.dataset.id;
        return (
          idOtro !== idRamo &&
          esUrgencia(idOtro) &&
          aprobados.has(idOtro)
        );
      });

      if (otraEnSemAprobada) {
        elem.classList.add("bloqueado");
        return;
      }

      // 2) No repetir la misma urgencia en el otro semestre
      const tipo = tipoUrgencia(idRamo);
      if (tipo && URGENCIAS_TIPOS[tipo]) {
        const hermanos = URGENCIAS_TIPOS[tipo];
        const mismaEnOtroSem = hermanos.some(function (idAlt) {
          return idAlt !== idRamo && aprobados.has(idAlt);
        });
        if (mismaEnOtroSem) {
          elem.classList.add("bloqueado");
          return;
        }
      }
    }

    // Si pasa todo, queda disponible
    elem.classList.remove("bloqueado");
  });
}

/**
 * Actualiza progreso global y por semestre.
 */
function actualizarProgreso() {
  // Progreso global
  const aprobadosTotales = aprobados.size;
  const porcentajeTotal =
    TOTAL_RAMOS === 0
      ? 0
      : Math.round((aprobadosTotales / TOTAL_RAMOS) * 100);

  const barraGlobal = document.getElementById("progreso-global-barra");
  const textoPct = document.getElementById("progreso-global-texto");
  const detalle = document.getElementById("progreso-global-detalle");

  if (barraGlobal) barraGlobal.style.width = porcentajeTotal + "%";
  if (textoPct) textoPct.textContent = porcentajeTotal + "%";
  if (detalle) {
    detalle.textContent =
      aprobadosTotales + " de " + TOTAL_RAMOS + " ramos aprobados";
  }

  // Progreso por semestre
  const tarjetas = document.querySelectorAll(".semestre");
  tarjetas.forEach(function (tarjeta) {
    const ramos = tarjeta.querySelectorAll(".ramo");
    const totalEnSem = ramos.length;
    let aprobadosEnSem = 0;

    ramos.forEach(function (r) {
      if (aprobados.has(r.dataset.id)) aprobadosEnSem++;
    });

    const pct =
      totalEnSem === 0
        ? 0
        : Math.round((aprobadosEnSem / totalEnSem) * 100);

    const barra = tarjeta.querySelector(".semestre__progreso-fill");
    const texto = tarjeta.querySelector(".semestre__progreso-texto");

    if (barra) barra.style.width = pct + "%";
    if (texto) {
      texto.textContent =
        aprobadosEnSem +
        " / " +
        totalEnSem +
        " aprobados (" +
        pct +
        "%)";
    }
  });
}

/**
 * Mensaje flotante (toast).
 */
function mostrarMensaje(texto) {
  const contMensaje = document.getElementById("mensaje");
  if (!contMensaje) return;

  contMensaje.textContent = texto;
  contMensaje.classList.add("mensaje--visible");

  if (mensajeTimeoutId !== null) {
    clearTimeout(mensajeTimeoutId);
  }

  mensajeTimeoutId = setTimeout(function () {
    contMensaje.classList.remove("mensaje--visible");
    mensajeTimeoutId = null;
  }, 4500);
}

/**
 * Carga estado desde localStorage.
 */
function cargarEstadoDesdeStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      aprobados = new Set();
      return;
    }
    const arregloIds = JSON.parse(data);
    if (Array.isArray(arregloIds)) {
      aprobados = new Set(arregloIds);
    } else {
      aprobados = new Set();
    }
  } catch (err) {
    console.error("Error al leer localStorage:", err);
    aprobados = new Set();
  }
}

/**
 * Guarda estado en localStorage.
 */
function guardarEstadoEnStorage() {
  try {
    const arreglo = Array.from(aprobados);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arreglo));
  } catch (err) {
    console.error("Error al guardar en localStorage:", err);
  }
}
