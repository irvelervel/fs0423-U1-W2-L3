// CICLI, introduzione
// un ciclo nello sviluppo software rappresenta una struttura in grado di ripetere l'esecuzione di una porzione di codice
// un numero definito o indefinito di volte, fino al raggiungimento di un risultato.

// CICLO WHILE
// il ciclo while è una struttura in grado di ri-eseguire una porzione di codice un numero INDEFINITO di volte.
// potenzialmente, un ciclo while è in grado di andare avanti all'infinito! e questa è una delle sue più pericolose
// caratteristiche

let count = 5

while (count < 10) {
  console.log('count è minore di 10, infatti vale', count)
  // in un ciclo while bisogna SEMPRE ricordarsi di inserire un qualcosa per fare in modo
  // che la condizione verificata prima o poi torni false
  count = count + 1 // count += 1 oppure count++
}

console.log('finito il while! il valore finale di count ora è', count)

// ATTENZIONE: se la condizione specificata NON diventerà mai false, non si uscirà mai dal ciclo! --> LOOP INFINITO

// altro esempio in cui non sappiamo quante volte entreremo nel while
let random = 0

while (random < 5) {
  let increment = Math.random() // genera un numero pseudo-casuale randomico da 0.0000000001 a 0.999999999 (più o meno!)
  console.log('increment questo giro è', increment)
  random = random + increment // random += increment
}

console.log('FINITO! ora random è', random)

// come funziona Math.random() ? genera un numero """casuale""" tra 0 e 1
let myRandom = Math.random()
console.log(myRandom)
console.log('ora lo moltiplico per 10:', myRandom * 10)

// se volessimo un numero tra 1 e 10:
// 1) se faccio Math.random() ottengo un numero da 0 a 1
// 2) se questo numero lo moltiplico per 10, ottengo un numero che va da 1 a 9,999999
// 3) arrotondo questo numero al più vicino intero PER ECCESSO --> da 1 a 10

// es. randomo 0.2574 -> 2.574 -> 3
// es. randomo 0.0134 -> 0.134 -> 1
// es. randomo 0.9421 -> 9.421 -> 10

console.log(Math.ceil(Math.random() * 10)) // un numero che sarà sempre compreso tra 1 e 10
// Math.ceil() arrotonda per eccesso, Math.floor() arrotonda per difetto
