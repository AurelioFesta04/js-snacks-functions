/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.



/**
 * Description placeholder
 *
 * @param {string} word
 * @returns {number}
 */
function numVocali(word) {
    const vocali = 'aeiouAEIOU';
    let contatoreVocali = 0;
    let Ottenute = [];

    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i])) {
            contatoreVocali++;
            contatoreVocali+Ottenute.push(word[i]);
        }
    }

    console.log("Vocali ottenute:", Ottenute.join(", "));

    return contatoreVocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)