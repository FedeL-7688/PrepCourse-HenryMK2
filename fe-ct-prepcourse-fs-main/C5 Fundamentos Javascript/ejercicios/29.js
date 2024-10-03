function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Tu código:

  if (typeof alto != "number" || typeof ancho != "number")
    return alert("put a number");

  return alto * ancho;

}

module.exports = obtenerAreaRectangulo;
