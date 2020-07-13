const pets = [
  {
    type: 'dog',
    name: 'bolinha',
    age: 15,
    weight: 30
  },
  {
    type: 'cat',
    name: 'mingal',
    age: 6,
    weight: 2
  },
  {
    type: 'dog',
    name: 'rex',
    age: 4,
    weight: 5
  },
  {
    type: 'cat',
    name: 'marrom',
    age: 2,
    weight: 1
  },
  {
    type: 'fish',
    name: 'gulp',
    age: 1,
    weight: 0.01
  },
  {
    type: 'horse',
    name: 'pé de pano',
    age: 1,
    weight: 0.01
  }
]

/**
 * Map
 * Retornar um novo array com a mesma quantidade de elementos
 * que o array inicial
 */

// const mapPetNames = pets.map((pet) => {
//   return pet.name
// })

// console.log(mapPetNames)

/**
 * Foreach
 * Não retorna um novo array com a mesma quantidade de elementos
 */

const forEachPetNames = []

pets.forEach((pet) => {
  forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)

// console.log(pets)
