function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  if (letra== "a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){ /*Esto evaluación quiere decir si letra es igual a "a" o a "e" o a "i", etc */
  //console.log("Es vocal"); TE pide retornar , no hacer un console.log()
return "Es vocal"
} else{/*En cualquier otro caso devuelve dato incorrecto*/
return "Dato incorrecto"}
}


module.exports = esVocal;
