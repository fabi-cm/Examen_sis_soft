import Cajero from "./cajero";
import sumar from "./sumador"
// Cajero
const cajero = new Cajero() 
// Monto
const form_cajero = document.getElementById("cajero-form")
const monto = document.getElementById("monto-venta")
const cajero_div = document.getElementById("resultado-cajero-div")

// Efectivo
const efectivo = document.getElementById("efectivo")

// Cajero
form_cajero.addEventListener("submit", (event) => {
  event.preventDefault();
  if (cajero.agregarMonto(monto.value) & cajero.agregarEfectivo(efectivo.value)){
    cajero_div.innerHTML = "<p> Resultado:" + sumar(cajero.getMonto() + cajero.getEfectivo()) + "</p>";
  }else{
    cajero_div.innerHTML = "<p>" + "Ingrese el monto y el efectivo" + "</p>";
  }

  form_cajero.reset()
})