//* Ejercicio 10 - Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
//! solucion 10
// Inicializamos el contador y la suma del volumen
let totalVolume = 0
let count = 0
for (const user of users) {
  // Iteramos sobre los sonidos favoritos de cada usuario con un bucle for...in
  for (const sound in user.favoritesSounds) {
    // Sumamos el volumen de cada sonido al total
    totalVolume += user.favoritesSounds[sound].volume
    // Incrementamos el contador en 1
    count++
  }
}

// Calculamos la media del volumen dividiendo la suma total por el número de sonidos
const mediaVolume = totalVolume / count
console.log(mediaVolume)
