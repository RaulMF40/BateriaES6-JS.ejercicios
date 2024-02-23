//*Ejercicio 4 - Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
//!solucion 4.1
const names = users.map((user) => user.name)
console.log(names)

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const usersTwo = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
//!solucion 4.2
const modNames2 = usersTwo.map((user) => {
  if (user.name.startsWith('A')) {
    return 'Anacleto'
  } else {
    return user.name
  }
})

console.log(modNames2)

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
//!solucion 4.3
const visitCity = cities.map((city) => {
  if (city.isVisited === true) {
    return (city.name += '(Visited)')
  } else {
    return city.name
  }
})
console.log(visitCity)
