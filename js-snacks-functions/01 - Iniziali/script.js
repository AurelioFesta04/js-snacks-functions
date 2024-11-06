/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 * Description placeholder
 *
 * @param {Array} names
 * @returns {Array}
 */
function firstchar(names) {

    firstCharacter = []

    for (let i = 0; i < names.length; i++) {
        firstCharacter.push(names[i][0]);
    }
    return firstCharacter;
}

// Invoca la funzione qui e stampa il risultato in console
firstchar(names)

console.log(firstCharacter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]