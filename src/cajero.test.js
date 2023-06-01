import cajero from "./cajero.js";

describe("Cajero", () => {
  it("Ingrasar un monto de venta deberia devolver su valor", () => {
    expect(cajero(3)).toEqual(3);
  });
  it("Si no se ingresa un monto de venta devuelve un mensaje: Ingrese el monto", () => {
    expect(cajero("")).toBe("Ingrese un monto")
  })
});