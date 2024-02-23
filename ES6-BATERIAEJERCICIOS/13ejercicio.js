//* Ejercicio 13 - Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array. Finalmente retorna el array. De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
//Sugerencia de función: function findArrayIndex(array, text) {}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

//!solucion 13
// Función para encontrar el índice de un elemento en un array
function findArrayIndex(array, text) {
  return array.findIndex((item) => item === text)
}
// Función para eliminar un elemento de un array
function deleteItem(array, text) {
  // Obtenemos el índice del elemento a eliminar utilizando findArrayIndex
  const indexDelete = findArrayIndex(array, text)
  // Verificamos si el elemento existe en el array
  if (indexDelete !== -1) {
    // Si existe, lo eliminamos usando splice
    array.splice(indexDelete, 1)
  }
  // Retornamos el array modificado
  return array
}

// Eliminamos "Rey" del array mainCharacters
console.log(deleteItem(mainCharacters, 'Rey'))
// Intentamos eliminar "Darth Maul", que no está en el array
console.log(deleteItem(mainCharacters, 'Darth Maul'))
