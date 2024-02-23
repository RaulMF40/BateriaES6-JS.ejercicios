//* Ejercicio 15 - Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:
const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
//!solucion 15
const swap = (array, index1, index2) => {
  // Intercambiamos los valores de los elementos en los índices dados
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
  // Retornamos el array modificado
  return array
}

console.log(swap(fantasticFour, 1, 3))
