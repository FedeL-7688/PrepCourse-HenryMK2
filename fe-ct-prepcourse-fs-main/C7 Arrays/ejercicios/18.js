function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
   
  let sumFor = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
      sumFor += resultadosTest[i];
  }
return averageFor = sumFor / resultadosTest.length;

}

module.exports = promedioResultadosTest;
