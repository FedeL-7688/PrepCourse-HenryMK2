function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (var i = 0; i<array.length -1; i++){
    if(array[i]=== array[i+1]){return true}
    else return false
  }
}

module.exports = todosIguales;
