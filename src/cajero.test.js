import Cajero from "./cajero.js";

describe("Cajero", () => {
  it("Ingrasar un monto de venta deberia devolver su valor", () => {
    const cajero = new Cajero();
    cajero.agregarMonto(3);
    expect(cajero.getMonto()).toEqual(3);
  });
  it("Si no se ingresa un monto de venta devuelve un mensaje: Ingrese el monto", () => {
    const cajero = new Cajero();
    cajero.agregarMonto("");
    expect(cajero.getMonto()).toEqual(0);
  });

//   it("Ingrasar efectivo deberia devolver su valor", () => {
//     const cajero = new Cajero();
//     cajero.agregarEfectivo(5);
//     expect(cajero.getEfectivo()).toEqual(5);
//   });
  //   it("Si no se ingresa un monto de venta devuelve un mensaje: Ingrese el monto", () => {
  //     expect(cajero("")).toBe("Ingrese un monto")
  //   })
});
