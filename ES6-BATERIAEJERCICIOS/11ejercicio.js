//* Ejercicio 11 - Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos. Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario. Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.
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
//!solucion 11
// Creamos un objeto para almacenar el conteo de cada sonido favorito
const soundCounts = {}

// Iteramos sobre cada usuario con un bucle for...of
for (const user of users) {
  // Iteramos sobre los sonidos favoritos de cada usuario con un bucle for...in
  for (const sound in user.favoritesSounds) {
    // Verificamos si el sonido ya está en el objeto soundCounts
    if (soundCounts[sound]) {
      // Si el sonido ya está en el objeto, incrementamos su contador en 1
      soundCounts[sound]++
    } else {
      // Si el sonido no está en el objeto, inicializamos su contador en 1
      soundCounts[sound] = 1
    }
  }
}
console.log('Sonidos favoritos por los usuarios: ', soundCounts)
