//* Ejercicio 8

// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para encontrar el genero 'RPG' en el array .gender.
const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
//!solucion 8.1
/* PRIMERO FILTRAMOS PARA ENCONTRAR JUEGOS DE RPG */
const rpgGames = videogames.filter((game) => game.genders.includes('RPG'))
console.log(rpgGames)

/* SEGUNDO UTILIZAMOS EL FIND PARA ENCONTRAR LOS RPG TAMBIEN.*/
const rpgGame = videogames.find((game) => game.genders.includes('RPG'))
console.log(rpgGames)

/* TERCERO - TENEMOS QUE SACAR EL TOTAL PARA LUEGO SACAR LA MEDIA DE LOS PUNTAJES DE LOS JUEGOS DE RPG */
const totalScore = rpgGames.reduce(
  (accumulator, game) => accumulator + game.score,
  0
)
const averageScore = totalScore / rpgGames.length

console.log('La media de los puntajes de los RPG es:', averageScore)
