function cajero(monto) {
    if (monto === "" || monto === " "){
        return "Ingrese un monto"
    }
    return monto;
}

export default cajero;
