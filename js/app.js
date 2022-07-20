
// prova che javascript sia collegato
// console.log('prova debug')

// testo esercizio
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// NOME UTENTE
// dichiarazione variabile

let myName = prompt('Qual è il tuo nome?')

console.log('nome utente: ' + myName)



// COGNOME UTENTE
// dichiarazione variabile
let mySurname = prompt('Qual è il tuo congome?')

console.log('cognome utente: ' + mySurname)


// COLORE PREFERITO
// dichiarazione variabile
let myColor = prompt('Qual è il tuo colore preferito?')

console.log('colore preferito: ' + myColor)


// NUMERO CASUALE

let num = Math.floor(Math.random() * 100)

console.log(num)


// GENERARE PASSWORD 

// dichiarare la variable con id = password con DOCUMENT + GET e prendendo la voce che rappresenta l'Id

const passwordDomElement = document.getElementById('password')

// controllare quale valore attribuire all' Id = password con CONSOLE.DIR

console.dir(passwordDomElement)

// stampiamo del contenuto nel nostro h1 con id password ,
//  trovando il valore che rappresenta il nostro testo, nell'elenco generato da console.dir
// nel nostro caso è INNER.HTML

passwordDomElement.innerHTML = 'password generata:  ' + myName + mySurname + myColor + num

console.log(passwordDomElement.innerHTML)
