class CarritoCompra {
  constructor() {
    this._productos = [];
  }

  obtenerProductos() {
    return this._productos;
  }

  agregarProducto(producto) {
    this._productos.push(producto);
  }

  calcularTotal() {
    return this._productos.reduce((suma, { cantidad, precio }) => suma + cantidad*precio, 0);
  }

  aplicarDescuento(porcentaje) {
    return this.calcularTotal() * porcentaje / 100;
  }
}

module.exports = {
  CarritoCompra
};