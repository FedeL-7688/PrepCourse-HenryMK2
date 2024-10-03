function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMayor = 0;

  // Iteramos sobre el array para encontrar el índice del número más grande
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      // Si encontramos un número mayor, actualizamos el índiceMayor
      indiceMayor = i;
    }
  }

  // Devolvemos el índice del número más grande
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
