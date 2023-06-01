import sumar from "./sumador";
import cajero from "./cajero";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

// Monto
const form_cajero = document.getElementById("cajero-form")
const monto = document.getElementById("monto-venta")
const cajero_div = document.getElementById("resultado-cajero-div")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

// Cajero
form_cajero.addEventListener("submit", (event) => {
  event.preventDefault();
  // const monto_valor = Number.parseInt(monto.value)

  cajero_div.innerHTML = "<p>" + cajero(monto.value) + "</p>";

  form_cajero.reset()
})