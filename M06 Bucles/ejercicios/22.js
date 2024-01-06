function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let dias = 0;
  
  do {
    if (mes < 1 || mes > 12) {
      return 0;
    }
    
    const diasPorMes = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31
    };
    
    dias = diasPorMes[mes];
  } while (dias === 0);

  return dias;
}

module.exports = diasEnMes;
