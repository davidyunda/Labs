let animals = ['lion', 'tiger', 'cheetah']

console.log(animals[0])
console.log(animals[2])
console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'        //replace
console.log(animals)

animals.push('elephant')   // end of the array
console.log(animals)

let lastAnimal = animals.pop()
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer')     //begining of the array
console.log(animals)

let firstAnimal = animals.shift()
console.log(firstAnimal)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('walrus'))

if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach(function(animal)  {
    console.log(animal.toUpperCase())
})

animals.forEach(function(animal) {
    console.log(animal.length)
})

animal.push('alligator')

let animalNameLength = []
animals.forEach(function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})
console.log(animalNameLength)