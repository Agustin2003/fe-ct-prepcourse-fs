function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    return 0; // Si 'a' es mayor que 'b', no hay números entre ellos
  }

  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto *= i; // producto = producto * i
  }

  return Math.abs(producto);
}

module.exports = productoEntreNúmeros;