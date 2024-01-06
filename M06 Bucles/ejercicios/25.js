function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  string = string.toLowerCase().replace(/ /g, '');
  
  const longitud = string.length;
  
  for (let i = 0; i < longitud / 2; i++) {
    if (string[i] !== string[longitud - 1 - i]) {
      return false;
    }
  }
  
  return true;
  /* Esta función esPalindromo convierte el string a minúsculas y elimina los espacios usando .toLowerCase() y .replace(/ /g, ''). Luego, compara los caracteres desde ambos extremos utilizando un bucle for que se ejecuta hasta la mitad de la longitud del string. Si encuentra algún carácter que no coincide, devuelve false. Si recorre todo el string sin encontrar diferencias, devuelve true, indicando que el string es un palíndromo.*/
}

module.exports = esPalindromo;
