//* Ejercicio 9 - Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por ¡consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes().
const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
//! solucion 9
// Creamos un array vacío para almacenar las categorías únicas
const categories = []

// Iteramos sobre cada película usando un bucle for...of
for (const movie of movies) {
  // Iteramos sobre las categorías de cada película
  for (const category of movie.categories) {
    // Verificamos si la categoría ya está presente en el array categories
    if (!categories.includes(category)) {
      // Si la categoría no está presente, la agregamos al array categories
      categories.push(category)
    }
  }
}

// Imprimimos el array de categorías en la consola
console.log(categories)
