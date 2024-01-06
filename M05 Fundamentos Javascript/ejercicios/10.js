function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  const fechaObjeto = new Date(fecha);
  
  if (Object.prototype.toString.call(fechaObjeto) === "[object Date]" && !isNaN(fechaObjeto)) {
    return true;
  } else {
    return false;
  }
}

module.exports = esFechaValida;