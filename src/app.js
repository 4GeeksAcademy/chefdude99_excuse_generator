import "bootstrap";
import "./style.css";

function excusaRandom (array) {
  let arrayRandom = Math.floor(Math.random() * array.length) 
  return array[arrayRandom] 
  }

window.onload = function () {
  let quien = ['Dalila', 'Turron', 'Akira', 'Liza'];
  let accion = ['daño', 'se orino', 'comio', 'escondio'];
  let que = ['mi carro', 'mi computadora', 'mi vida'];
  let cuando = ['luego de entrenar', 'mientras viajaba', 'durante mis horas de trabajo', 'en el almuerzo', 'mientras lloraba'];
  let quienRandom = excusaRandom(quien)
  console.log(quienRandom)
  let accionRandom = excusaRandom(accion)
  console.log(accionRandom)
  let queRandom = excusaRandom(que)
  console.log(queRandom)
  let cuandoRandom = excusaRandom(cuando)
  console.log(cuandoRandom)
  let excusa = quienRandom + " " + accionRandom + " " + queRandom + " " + cuandoRandom;
  document.getElementById("excuse").innerText = excusa; 
}; 



 



