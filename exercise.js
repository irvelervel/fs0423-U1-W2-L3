// ESERCIZIO

// array formato da 3 oggetti
const arrayOfAnimals = [
  {
    name: 'Fufy',
    species: 'cat',
    age: 5,
    furColor: 'white',
    numberOfLegs: 4,
    skills: ['meowing', 'asking-for-food', 'purring', 'sleeping'],
  },
  {
    name: 'Doggo',
    species: 'dog',
    age: 1,
    furColor: 'gold',
    numberOfLegs: 4,
    skills: ['barking', 'playing', 'tail-wiggling'],
  },
  {
    name: 'Poppy',
    species: 'parrot',
    age: 3,
    furColor: 'green',
    numberOfLegs: 2,
    skills: ['sound-mimicking', 'sleeping', 'flying', 'speaking'],
  },
]

// stampiamo in console tutte le specie degli animali disponibili
// vogliamo avere in console qualcosa come "cat dog parrot"

for (let i = 0; i < arrayOfAnimals.length; i++) {
  console.log(arrayOfAnimals[i].species) // arrayOfAnimals[0] al primo ciclo, arrayOfAnimals[1] al secondo ciclo, arrayOfAnimals[2] all'ultimo ciclo
}

// proviamo, per ogni animale, a prendere solamente l'ultima skill e la pushiamo dentro un NUOVO array.
const justLastSkills = [] // risultato voluto --> ['sleeping', 'growling', 'speaking']

for (let i = 0; i < arrayOfAnimals.length; i++) {
  const lastValidSkillsIndex = arrayOfAnimals[i].skills.length - 1 // numero che sarà 2 o 3
  console.log(arrayOfAnimals[i].skills[lastValidSkillsIndex]) // arrayOfAnimals[i].skills[2] oppure arrayOfAnimals[i].skills[3]
  // la riga sopra è 'sleeping', oppure 'tail-wiggling', oppure 'speaking'

  // ALTERNATIVA IN UN UNICO PASSAGGIO!
  // arrayOfAnimals[i].skills[arrayOfAnimals[i].skills.length - 1] // 'sleeping', oppure 'tail-wiggling', oppure 'speaking'

  justLastSkills.push(arrayOfAnimals[i].skills[lastValidSkillsIndex])
}

console.log(justLastSkills)

// voglio calcolare il numero totale di gambe di tutti gli animali dell'array
// vorremmo trovare 10 come totale!

let totalLegs = 0 // alla fine del primo ciclo però diventerà 4, alla fine del secondo diventerà 8, alla fine del terzo ciclo 10

for (let i = 0; i < arrayOfAnimals.length; i++) {
  totalLegs = totalLegs + arrayOfAnimals[i].numberOfLegs // addizioniamo le gambe dell'animale corrente al totale tenuto da parte
  //   totalLegs += arrayOfAnimals[i].numberOfLegs // forma abbreviata
}

console.log(totalLegs)

// voglio inserire in un nuovo array solamente gli animali con 4 zampe

const quadrupedes = []

// ciclo per l'ennesima volta arrayOfAnimals
for (let i = 0; i < arrayOfAnimals.length; i++) {
  if (arrayOfAnimals[i].numberOfLegs === 4) {
    // l'animale corrente ha 4 zampe! lo pusho dentro quadrupedes :)
    quadrupedes.push(arrayOfAnimals[i])
  }
}

console.log(quadrupedes)
