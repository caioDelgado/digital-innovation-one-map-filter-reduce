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
  }
]

/**
 * Reduce
 * Percorrer todo o array, e reduzi-lo a algo, objeto, item, array
 */
// const petObject = pets.reduce((petObject, pet) => {
//   petObject.ageSum += pet.age

//   petObject.weightSum += pet.weight

//   return petObject
// }, { ageSum: 0, weightSum: 0 })

const dogObject = pets.reduce((dogObject, pet) => {
  if (pet.type !== 'dog') return dogObject

  dogObject.ageSum += pet.age

  dogObject.weightSum += pet.weight

  return dogObject
}, { ageSum: 0, weightSum: 0 })

console.log('DogObject: ', dogObject)
