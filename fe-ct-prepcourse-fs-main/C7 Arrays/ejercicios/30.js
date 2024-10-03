function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = new Set();
  for (let i = 0; i < numeros.length; i++) {
    if (elementosVistos.has(numeros[i])) {
      return numeros[i]; 
    }
    elementosVistos.add(numeros[i]);
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;