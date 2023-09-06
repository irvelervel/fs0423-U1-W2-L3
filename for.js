// CICLO FOR
// ...largamente quello più usato.
// Permette di eseguire un blocco di istruzioni un numero PREDETERMINATO di volte.

// SINTASSI
// for(
//      1) inizializzazione del contatore; es. let i = 0;
//      2) condizione da verificare per la ri-esecuzione del blocco; es. i < 10
//      3) di quanto incrementare il contatore alla fine di ogni ciclo; es. i++
//   ){
// }

for (let i = 0; i < 10; i++) {
  console.log('ciaone! i vale:', i)
}

// i++, l'incremento, si fa ALLA FINE del ciclo, non all'inizio! quindi nella prima iterazione i vale ZERO

// occhio che al di fuori del for, i non è più accessibile!
// console.log('vedo quanto vale i', i) // i non esiste qua!

// il ciclo "for" è PERFETTO per ESPLORARE GLI ARRAY!

const names = ['bianca', 'guido', 'giulia', 'stefano', 'patrick', 'salvatore'] // 6 elementi
// lunghezza: 6
// indici validi: 0, 1, 2, 3, 4, 5
// ultima posizione valida dell'array: 5 (lunghezza - 1)

console.log('la lunghezza di names è:', names.length)

// usiamo un ciclo for per esplorare l'array names:
for (let i = 0; i < names.length; i++) {
  // riseguirà questo blocco per tutti i valori validi di i: 0, 1, 2, 3, 4, 5 --> 6 volte in totale
  // i quanto vale?
  // primo ciclo --> i è 0
  // secondo ciclo --> i è 1
  // terzo ciclo --> i è 2
  // quarto ciclo --> i è 3
  // quinto ciclo --> i è 4
  // sesto ciclo --> i è 5
  console.log(i)
  console.log(names[i]) // --> names[0] al primo ciclo, names[1] al secondo ciclo, names[2] al terzo ciclo e così via!
}

// se potessimo leggere i, a questo punto varrebbe 6...
