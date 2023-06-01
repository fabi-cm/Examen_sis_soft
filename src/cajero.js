class Cajero {
  constructor() {
    this.monto_venta = 0;
    this.efectivo = 0;
  }
  getMonto() {
    return this.monto_venta;
  }
  getEfectivo() {
    return this.efectivo;
  }
  agregarMonto(monto) {
    if (monto !== "") {
      this.monto_venta = monto;
      return true;
    } else {
      return false;
    }
  }
  agregarEfectivo(efectivo){
    if (efectivo !== "") {
      this.efectivo = efectivo;
      return true;
    } else {
      return false;
    }
  }
}

export default Cajero;
