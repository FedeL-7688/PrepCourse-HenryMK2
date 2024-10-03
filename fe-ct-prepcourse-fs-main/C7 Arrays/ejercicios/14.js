function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var resultado = array.reduce((acum,el)=> {
   if (el>10){return acum + 1;

   } return acum;

  },0);
  return resultado
}


module.exports = contarElementosMayoresA10;
