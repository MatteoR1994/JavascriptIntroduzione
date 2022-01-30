// ESERCIZIO 1 (scrivere anche la versione alternativa dei filtri e map a cquella scelta)


let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];

let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];


/// Teniamo i numeri divisibili per 3; /// FILTER
let filteredArray1 = 0;  


/// Teniamo le stringhe che sono più lunghe di 6 caratteri; /// FILTER
let filteredArray2 = 0;  


/// Tutti i numeri dovranno essere ridotti del 10% /// MAP
let mappedArray1


/// Tutte le stringhe dovranno essere Maiuscole /// MAP
let mappedArray2


/// Tutti i numeri andranno trasformati in positivi e andranno eliminati i numeri maggiori di 100 /// MAP + FILTER
let modifiedArray1


/// Tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera 'r' /// MAP + FILTER
let modifiedArray2


/// Quello che viene viene fuori dalla reduce di questo array è la stringa "La casa ha preso fuoco"
let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];


function phrase(previous, current, index) {
    if (index % 2 === 0) {
        if (previous !== undefined) {
            previous = previous + " " + current;
        } else {
            previous = "";
            previous = previous + " " + current;
        }
    }
    return previous
}

/*

GIRO 1:
    - previous = undefined // Perché non c'è l'elemento iniziale
    - current = testArray3[0]
    - index = 0
    -- index % 2 === 0 ? SI
        -- previous != undefined ?
            - NO: previous = ""; poi diventa stringa vuota + " " + current;

GIRO 2:
    - previous = "" + testArray3[0] + " "
    - current = testArray3[1]
    - index = 1
    -- index % 2 === 0 ? NO - vado avanti nel ciclo

GIRO 3:
    - previous = "" + testArray3[0] + " "
    - current = testArray3[2]
    - index = 2
    -- index % 2 === 0 ? SI
        -- previous != undefined ?
            - SI: previous = previous + " " + current;

GIRO 4:
    - previous = "" + testArray3[0] + " " + testArray3[2] + " "
    - current = testArray[3]
    - index = 3
    -- index % 2 === 0 ? NO - vado avanti nel ciclo

e vado avanti così fino alla fine dell'array.

*/


//console.log(testArray3.reduce(phrase, ""));

console.log(testArray3.reduce(phrase));

//console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));

//console.log(testArray3.reduce((p,c,i) => i%2===0 ? p + " " + c : p));

/*********************************************************************************************************/

let numeri = [1, 2, 3, 4];

function sumArray(previous, current) {
    previous = previous + current;
    return previous;
}

console.log(numeri.reduce(sumArray, 0));

/*********************************************************************************************************/

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(previous, current) {
    previous = previous.concat(current);
    return previous;
}

console.log(arrays.reduce(flatten, []));