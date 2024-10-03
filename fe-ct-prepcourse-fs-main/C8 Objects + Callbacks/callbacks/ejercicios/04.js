function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let sum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);
   cb(sum);
}

module.exports = sumarArray;
