function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
 
    if (numeros.length === 0) {
      return null;
    }
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
    let sumaEsperada = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;
    let sumaActual = numeros.reduce((acc, num) => acc + num, 0);
    let numeroFaltante = sumaEsperada - sumaActual;
    return numeroFaltante === 0 ? null : numeroFaltante;
  
}

module.exports = encontrarNumeroFaltante;