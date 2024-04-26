//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $numerosNodeList = document.querySelectorAll("li");
const numerosArray = convertirNodeListAArray($numerosNodeList);

mostrarResultados();

function convertirNodeListAArray(nodeList) {
  const array = [];

  for (let i = 0; i < nodeList.length; i++) {
    array.push(Number(nodeList[i].innerText));
  }
  return array;
}

function calcularMayor(array) {
  let mayor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}

function calcularMenor(array) {
  let menor = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < mayor) {
      menor = array[i];
    }
  }

  return menor;
}

function encontrarModa(array) {
  let moda;
  let frecuencia = 0;

  for (let i = 0; i < array.length; i++) {
    let counter = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        counter++;
      }
    }
    if (counter > frecuencia) {
      moda = array[i];
      frecuencia = counter;
    }
  }

  return `${moda} y se repite ${frecuencia} veces`;
}

function mostrarResultados() {
  const $mayor = document.querySelector("#mayor");
  const $menor = document.querySelector("#menor");
  const $moda = document.querySelector("#moda");

  $mayor.textContent = `El mayor número es ${calcularMayor(numerosArray)}`;
  $menor.textContent = `El menor número es ${calcularMenor(numerosArray)}`;
  $moda.textContent = `El número que más se repite es ${encontrarModa(numerosArray)}`;
}
