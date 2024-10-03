function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const total = arrayOfNums.reduce((acc, curr) => acc + curr, 0);
  return total
}

module.exports = agregarNumeros;
