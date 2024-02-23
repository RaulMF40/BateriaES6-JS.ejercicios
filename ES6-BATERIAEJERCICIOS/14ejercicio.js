//* Ejercicio 14 - Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()
//!solucin 14
const rollDice = (diceFaces) => {
  // Generamos un número aleatorio entre 1 y el número de caras del dado
  const resultRamdom = Math.floor(Math.random() * diceFaces) + 1
  // Retornamos el resultado de la tirada
  return resultRamdom
}

// Ejemplo de uso de la función rollDice
const diceFaces = 6
const result = rollDice(diceFaces)
console.log(`He lanzado un dado de ${diceFaces} caras y obtuve un ${result}.`)
