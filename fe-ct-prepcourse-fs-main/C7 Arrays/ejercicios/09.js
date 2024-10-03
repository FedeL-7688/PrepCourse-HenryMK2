function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
 var elemento = Math.floor(Math.random()* array.length)
 return array[elemento]
}

module.exports = obtenerElementoAleatorio;
