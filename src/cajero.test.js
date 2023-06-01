import cajero from "./cajero.js";

describe("Cajero", () => {
  it("Ingrasar un monto de venta deberia devolver su valor", () => {
    expect(cajero(3)).toEqual(3);
  });
});