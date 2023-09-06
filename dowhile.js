// il ciclo DO/WHILE è una variazione sul tema rispetto al ciclo WHILE
// la condizione per la ripetizione delle istruzioni NON si trova all'inizio, ma alla FINE!
// questo comporta che si entrerà SEMPRE nel ciclo almeno una volta...!

let count = 25

do {
  console.log('count è minore di 10, infatti vale', count)
  // in un ciclo while bisogna SEMPRE ricordarsi di inserire un qualcosa per fare in modo
  // che la condizione verificata prima o poi torni false
  count = count + 1 // count += 1 oppure count++
} while (count < 10)

console.log('FINE DEL CICLO DO-WHILE, VALORE:', count)

// se con il solo ciclo WHILE non sarei MAI entrato nel blocco, visto che la condizione era in TESTA,
// ora con il ciclo DO-WHILE si entra la prima volta a prescindere! la condizione in questo caso
// serve a verificare se sia il caso di RIPETERE il blocco
