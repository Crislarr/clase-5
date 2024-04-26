//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $segundosNodeList = document.querySelectorAll(".segundo");

const $minutosNodeList = document.querySelectorAll(".minuto");

const $horasNodeList = document.querySelectorAll(".hora");

const $calcularDuracionBoton = document.querySelector("#calcular-duracion-total");

$calcularDuracionBoton.onclick = function () {
  const segundosTotales = sumarValores($segundosNodeList);
  const minutosTotales = sumarValores($minutosNodeList);
  const horasTotales = sumarValores($horasNodeList);

  tiempoTotal = calcularTiempoTotal(horasTotales, minutosTotales, segundosTotales);

  const $resultado = document.querySelector("#duracion-total-videos");

  $resultado.innerText = `La duración total de los videos es ${tiempoTotal}.`;

  $calcularDuracionBoton.disabled = true;
};

function sumarValores(NodeList) {
  let suma = 0;

  for (let i = 0; i < NodeList.length; i++) {
    suma += Number(NodeList[i].innerText);
  }
  return suma;
}

function calcularTiempoTotal(horas, minutos, segundos) {
  segundosFinal = segundos % 60;

  minutosFinal = (minutos % 60) + Math.floor(segundos / 60);

  horasFinal = horas + Math.floor((minutos + Math.floor(segundos / 60)) / 60);

  return `${horasFinal} horas, ${minutosFinal} minutos, ${segundosFinal} segundos`;
}
