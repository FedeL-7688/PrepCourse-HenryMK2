function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if ((booleano1 == true) & (booleano2 == true)) {return true};
  if ((booleano1 == false) || (booleano2 == false)){return false};
}

module.exports = esVerdaderoYFalso;
