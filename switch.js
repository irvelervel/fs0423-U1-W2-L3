// COSTRUTTO SWITCH
// uno switch non è altro che una semplificazione sintaticca di un if/else complesso.
// SUGAR COATING -> copertura di zucchero (su una cosa già vista)

// immaginiamo di dover calcolare quante ore di studio dovreste impiegare per passare un esame all'università

let firstName = 'Stefano'
let hoursOfIntenseStudy // senza valore al momento, quindi undefined

if (firstName === 'Stefano') {
  hoursOfIntenseStudy = 50
} else if (firstName === 'Carlo') {
  hoursOfIntenseStudy = 35
} else if (firstName === 'Federico') {
  hoursOfIntenseStudy = 20
} else if (firstName === 'Mario') {
  hoursOfIntenseStudy = 0
} else {
  hoursOfIntenseStudy = 40
}

// console.log(
//   "Per passare l'esame hai bisogno di " +
//     hoursOfIntenseStudy +
//     ' ore di studio.'
// )

// riscriviamo il codice precedente utilizzando il costrutto SWITCH

switch (firstName) {
  case 'Stefano':
    hoursOfIntenseStudy = 50
    break

  case 'Carlo':
    hoursOfIntenseStudy = 35
    break

  case 'Federico':
    hoursOfIntenseStudy = 20
    break

  case 'Mario':
    hoursOfIntenseStudy = 0
    break

  default:
    hoursOfIntenseStudy = 40
}

// il break serve a USCIRE FORZATAMENTE dallo switch!
// una volta raggiungo un break, usciamo dallo switch e ripartiamo da qua
console.log(
  "Per passare l'esame hai bisogno di " +
    hoursOfIntenseStudy +
    ' ore di studio.'
)

let number = 10

switch (number > 10) {
  case true:
    console.log('number è maggiore di 10!')
    break

  case false:
    console.log('number è minore o uguale a 10!')
    break

  default:
    console.log('caso di default!')
}
