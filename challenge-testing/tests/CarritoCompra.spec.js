const { CarritoCompra } = require('../index');

describe('La clase CarritoCompra', () => {
  it('Debe tener definido un constructor', () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe('function');
  });

  it('Debe tener definido el método obtenerProductos', () => {
    expect(typeof CarritoCompra.prototype.obtenerProductos).toBe('function');
  });

  it('Debe devolver el arreglo de productos con el método obtenerProductos', () => {
    const carrito = new CarritoCompra();

    expect(Array.isArray(carrito.obtenerProductos())).toBe(true);
  });

  it('Debe tener definido el método agregarProducto', () => {
    expect(typeof CarritoCompra.prototype.agregarProducto).toBe('function');
  });

  it('Debe agregar un producto al carrito con el método agregarProducto', () => {
    const carrito = new CarritoCompra();

    carrito.agregarProducto({
      nombre: 'ProductoA',
      cantidad: 5,
      precio: 10
    });
    expect(carrito.obtenerProductos().length).toBe(1);

    carrito.agregarProducto({
      nombre: 'ProductoB',
      cantidad: 2,
      precio: 30
    });
    expect(carrito.obtenerProductos().length).toBe(2);

    carrito.agregarProducto({
      nombre: 'ProductoC',
      cantidad: 4,
      precio: 20
    });
    expect(carrito.obtenerProductos().length).toBe(3);
  });

  it('Debe tener definido el método calcularTotal', () => {
    expect(typeof CarritoCompra.prototype.calcularTotal).toBe('function');
  });

  it('Debe calcular el total de la compra con el método calcularTotal', () => {
    const carrito = new CarritoCompra();
    expect(carrito.calcularTotal()).toBe(0);

    carrito.agregarProducto({
      nombre: 'ProductoA',
      cantidad: 5,
      precio: 10
    });
    expect(carrito.calcularTotal()).toBe(50);
    
    carrito.agregarProducto({
      nombre: 'ProductoB',
      cantidad: 2,
      precio: 30
    });
    expect(carrito.calcularTotal()).toBe(110);
    
    carrito.agregarProducto({
      nombre: 'ProductoC',
      cantidad: 4,
      precio: 20
    });
    expect(carrito.calcularTotal()).toBe(190);
  });

  it('Debe tener definido el método aplicarDescuento', () => {
    expect(typeof CarritoCompra.prototype.aplicarDescuento).toBe('function');
  });
  
  it('Debe aplicar un descuento al total de la compra con el método aplicarDescuento', () => {
    const carrito = new CarritoCompra();
  
    carrito.agregarProducto({
      nombre: 'ProductoA',
      cantidad: 5,
      precio: 10
    });
    carrito.agregarProducto({
      nombre: 'ProductoB',
      cantidad: 2,
      precio: 30
    });
    carrito.agregarProducto({
      nombre: 'ProductoC',
      cantidad: 4,
      precio: 20
    });
    
    expect(carrito.aplicarDescuento(50)).toBe(95);
    expect(carrito.aplicarDescuento(80)).toBe(152);
    expect(carrito.aplicarDescuento(90)).toBe(171);
  });
});