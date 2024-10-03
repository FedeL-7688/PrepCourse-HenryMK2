function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado = 1
  for(var i = a; i<b+1;i++) {resultado *=i}
  return resultado===-0?0: resultado
}

module.exports = productoEntreNúmeros;