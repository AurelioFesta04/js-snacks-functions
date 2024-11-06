/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


/**
 * Description placeholder
 *
 * @param {Array} names
 * @returns {Array}
 */
function sameFirstChar(names) {

    subSameChar = [];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === "A") {
            subSameChar.push(names[i]);
        }
    }
    return subSameChar;
}


// Invoca la funzione qui e stampa il risultato in console

sameFirstChar(names)

console.log(subSameChar)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]