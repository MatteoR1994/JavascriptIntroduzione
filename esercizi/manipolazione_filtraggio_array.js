// // ESERCIZIO 1 (scrivere anche la versione alternativa dei filtri e map a cquella scelta)


// let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];

// let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];


// /// Teniamo i numeri divisibili per 3; /// FILTER
// let filteredArray1 = 0;


// /// Teniamo le stringhe che sono più lunghe di 6 caratteri; /// FILTER
// let filteredArray2 = 0;


// /// Tutti i numeri dovranno essere ridotti del 10% /// MAP
// let mappedArray1


// /// Tutte le stringhe dovranno essere Maiuscole /// MAP
// let mappedArray2


// /// Tutti i numeri andranno trasformati in positivi e andranno eliminati i numeri maggiori di 100 /// MAP + FILTER
// let modifiedArray1


// /// Tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera 'r' /// MAP + FILTER
// let modifiedArray2


// /// Quello che viene viene fuori dalla reduce di questo array è la stringa "La casa ha preso fuoco"
// let testArray3 = ["la", "vergogna", "casa", "dannazione", "ha", "pippo", "preso", "secchio", "fuoco"];


// function phrase(previous, current, index) {
//     if (index % 2 === 0) {
//         if (previous !== undefined) {
//             previous = previous + " " + current;
//         } else {
//             previous = "";
//             previous = previous + " " + current;
//         }
//     }
//     return previous
// }

// /*

// GIRO 1:
//     - previous = undefined // Perché non c'è l'elemento iniziale
//     - current = testArray3[0]
//     - index = 0
//     -- index % 2 === 0 ? SI
//         -- previous != undefined ?
//             - NO: previous = ""; poi diventa stringa vuota + " " + current;

// GIRO 2:
//     - previous = "" + testArray3[0] + " "
//     - current = testArray3[1]
//     - index = 1
//     -- index % 2 === 0 ? NO - vado avanti nel ciclo

// GIRO 3:
//     - previous = "" + testArray3[0] + " "
//     - current = testArray3[2]
//     - index = 2
//     -- index % 2 === 0 ? SI
//         -- previous != undefined ?
//             - SI: previous = previous + " " + current;

// GIRO 4:
//     - previous = "" + testArray3[0] + " " + testArray3[2] + " "
//     - current = testArray[3]
//     - index = 3
//     -- index % 2 === 0 ? NO - vado avanti nel ciclo

// e vado avanti così fino alla fine dell'array.

// */


// //console.log(testArray3.reduce(phrase, ""));

// console.log("Mia reduce (con funzione):", testArray3.reduce(phrase));

// // VERSIONE ANDREA: console.log(testArray3.reduce((p, c, i) => i % 2 !== 0 ? p : p + " " + c));

// // VERSIONE ANDREA (con funzione invece della lambda)

// function removeOddAndConcatenate(previous, current, index) { // Quello che torna questa funzione, al giro successivo sarà "previous".
//     // let tempString = previous;
//     // if (index % 2 !== 0) {
//     //     return tempString;
//     // } else {
//     //     tempString = tempString + " " + current;
//     //     return tempString;
//     // }

//     if (index % 2 !== 0) {
//         return previous;
//     } else {
//         return previous + " " + current;
//     }
// }

// console.log("Reduce di Andrea (con funzione):", testArray3.reduce(removeOddAndConcatenate));

// /*********************************************************************************************************/

// let numeri = [1, 2, 3, 4];

// function sumArray(previous, current) {
//     previous = previous + current;
//     return previous;
// }

// console.log(numeri.reduce(sumArray, 0));

// /*********************************************************************************************************/

// let arrays = [[1, 2, 3], [4, 5], [6]];

// function flatten(previous, current) {
//     previous = previous.concat(current);
//     return previous;
// }

// console.log(arrays.reduce(flatten, []));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];

let array1 = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"]

// esercizio 1 - Il massimo in assoluto

console.log(array.reduce(() => Math.max(...array)));

/****/

//esercizio 2 - Minore dei negativi

console.log(array.filter((element) => element < 0).reduce(() => Math.min(...array)));

/****/

//esercizio 3 - Somma dei pari

function somma(previous, current) {
    if (current % 2 === 0) {
        return previous + current;
    }else{
        return previous;
    }
}

console.log(array.reduce(somma));

console.log(array.reduce((p, c) => c % 2 === 0 ? p + c : p));

/****/

console.log("Array stringhe originale\n", array1);

/****/

// Esercizio 4 - Array contenente tutte le vocali dell'array (con ripetizioni)
function checkIfStringContainsAVowel3(string) {
    // let vowels = ["a", "e", "i", "o", "u"];
    // return !vowels.some((v) => string.includes(v));
    return ["a", "e", "i", "o", "u"].some((v) => string.includes(v));
}

function arrayOfVowels(string){
    let arrayFromString = [...string];
    let vowelsArray = arrayFromString.filter(checkIfStringContainsAVowel3)
    return vowelsArray;
}

function allVowelsInArray(previous, current) {
    previous = previous.concat(arrayOfVowels(current))
    return previous;
}

console.log("4) Array contenente tutte le vocali dell'array originale, con ripetizioni (con REDUCE funzione)\n", array1.reduce(allVowelsInArray, []));
console.log("4) Array contenente tutte le vocali dell'array originale, con ripetizioni (con REDUCE lambda)\n", array1.reduce((p, c) => [...p, ...arrayOfVowels(c)], []));

/****/

// Esercizio 5 - Stringa contenente tutte le consonanti dell'array (senza ripetizioni)
function checkIfStringNotContainsAVowel3(string) {
    // let vowels = ["a", "e", "i", "o", "u"];
    // return !vowels.some((v) => string.includes(v));
    return !["a", "e", "i", "o", "u"].some((v) => string.includes(v));
}

function arrayOfConsonants(string){
    let arrayFromString = [...string];
    let vowelsArray = arrayFromString.filter(checkIfStringNotContainsAVowel3)
    return vowelsArray;
}

function allConsonantsInArray(previous, current) {
    let arrayOfCon = arrayOfConsonants(current);
    let setOfConsonats = new Set(arrayOfCon);
    let stringOfCon = [...setOfConsonats].join("");
    previous += stringOfCon;
    return previous;
}

console.log("5) Stringa contenente tutte le cons. dell'array originale, senza ripetizioni (con REDUCE funzione)\n", array1.reduce(allConsonantsInArray, []));
console.log("5) Stringa contenente tutte le cons. dell'array originale, senza ripetizioni (con REDUCE lambda)\n", array1.reduce((p, c) =>
 [...p, ...new Set(arrayOfConsonants(c))].join("") , []));

/****/

// Esercizio 6 - map => cambiare maiuscole in minuscole e viceversa

// Con MAP
console.log("6) Cambiare maiuscole in minuscole e viceversa (con MAP lambda)\n", array1.map((element) => element[0].toLowerCase() + element.substring(1).toUpperCase()));

// Con REDUCE
function invertUpperLower(previous, current) {
    previous.push(current[0].toLowerCase() + current.substring(1).toUpperCase());
    return previous;
}

console.log("6) Cambiare maiuscole in minuscole e viceversa (con REDUCE funzione)\n", array1.reduce(invertUpperLower, []));
console.log("6) Cambiare maiuscole in minuscole e viceversa (con REDUCE lambda)\n", array1.reduce((p, c) => [...p, c[0].toLowerCase() + c.substring(1).toUpperCase()], []));

/****/

// Esercizio 7 - filter => tenere solo le parole che contengono r

// Con FILTER
console.log("7) Parole che contengono 'r' (con FILTER lambda)\n", array1.filter((element) => element.includes("r")));

// Con REDUCE
function stringContainR(previous, current) {
    if (current.includes("r")) {
        previous.push(current);
    }
    return previous;
}

console.log("7) Parole che contengono 'r' (con REDUCE funzione)\n", array1.reduce(stringContainR, []));
console.log("7) Parole che contengono 'r' (con REDUCE lambda)\n", array1.reduce((p, c) => c.includes("r") ? [...p, c] : p, []));

////////////////////////////////

// let stringCheck ="pippo";

// function checkIftringContainsAVowel(string) {
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
        
//         if (char === "a") {
//             return true;
//         }
//         if (char === "e") {
//             return true;
//         }
//         if (char === "i") {
//             return true;
//         }
//         if (char === "o") {
//             return true;
//         }
//         if (char === "u") {
//             return true;
//         }
//     }
//     return false;
// }


// // array.some()

// // array.every()


// function checkIftringContainsAVowel3(string) {
//     // let vowels = ["a", "e", "i", "o", "u"];
//     // return vowels.some((v) => string.includes(v));
//     return ["a", "e", "i", "o", "u"].some((v) => string.includes(v));
    
// }

// console.log("controllo",checkIftringContainsAVowel3(stringCheck));


// ///////////////////////////////////////////////

// function arrayOfVowels(string) {
//     let arrayFromString = [...string];
//     let vowelsArray = arrayFromString.filter(checkIftringContainsAVowel);
//     return vowelsArray;
// }


// console.log("Controllo stringa", arrayOfVowels(stringCheck));


// function buildArray(previous, current) {
//     previous.push(...arrayOfVowels(current));
//     return previous;
// }

// console.log(array1.reduce(buildArray, []));


// // let arrayOfCon = arrayOfConsonants(string);

// // let setOfConsonants = new Set(arrayOfCon);

// // let stringOfCon = [...setOfConsonants].join("");

// // console.log(setOfConsonants);



// function checkIftringNONContainsAVowel3(string) {
//     // let vowels = ["a", "e", "i", "o", "u"];
//     // return vowels.some((v) => string.includes(v));
//     return ["a", "e", "i", "o", "u"].some((v) => string.includes(v));
    
// }

// function arrayOfConsonants(string){
//     let arrayFromString = [...string];
//     let vowelsArray = arrayFromString.filter(checkIftringNONContainsAVowel3)
//     return vowelsArray;
// }


// function buildArray1(previous, current) {
//     previous.push(...arrayOfConsonants(current));
//     return previous;
// }

// console.log(array1.reduce(buildArray1, []));


// let arrayOfCon = arrayOfConsonants(array1);

// let setOfConsonats = new Set(arrayOfCon);

// let stringOfCon = [...setOfConsonats].join("");

// console.log(stringOfCon);

// console.log(array1.reduce(buildArray1, []));
// console.log([...new Set(arrayOfConsonants(array1))].join(""))

// //////////////////////////////////////////////////////


// array1.forEach((e) => console.log(e));

// console.log(array.sort());

// console.log(array1.sort());


// let student1 = {name: "Pippo", age: 12, gender: "M"}

// let student2 = {name: "Pluto", age: 18, gender: "M"}

// let student3 = {name: "Topolina", age: 13, gender: "F"}

// let student4 = {name: "Paperina", age: 18, gender: "F"}

// let students = [student1, student2, student3, student4];

// console.log(students.sort());

// console.log(students.sort(compareStudents));

// function compareStudents(st1, st2) {
//     if (st1.age > st2.age) {
//         return 1;
//     }
//     if (st1.age < st2.age) {
//         return -1;
//     }
//     if (st1.age === st2.age) {
//         return 0;
//     }
// }


// // function compareStudents2(st1, st2) {
// //     return st1.name.localeCompare(st2.name);
// // }
// // console.log(students.sort(compareStudents2()));



// let athlete1 = {name: "giovanni", surname: "landi", position: 2}
// let athlete2 = {name: "lorena", surname: "landi", position: 2}
// let athlete3 = {name: "pippo", surname: "barbigli", position: 1}
// let athlete4 = {name: "simona", surname: "perri", position: 3}
// let athlete5 = {name: "elmo", surname: "recalcati", position: 3}



// let athletes = [athlete1, athlete2, athlete3, athlete4, athlete5];


// function comopareByPosition(A1, A2) {
//     if (A1.position > A2.position) {
//         return 1;
//     }
//     if (A1.position < A2.position) {
//         return -1;
//     }
//     if (A1.position = A2.position) {
//         return 0;
//     }

// }


// //console.log("posizione",athletes.sort(comopareByPosition));



// function compareBySurname(a1, a2) {
//     return a1.surname.localeCompare(a2.surname);
// }

// //console.log("surname",athletes.sort(compareBySurname));


// function compareByPositionPlus(A1, A2) {
//     if (A1.position > A2.position) {
//         return 1;
//     }
//     if (A1.position < A2.position) {
//         return -1;
//     }
//     if (A1.position = A2.position) {
//         return A1.surname.localeCompare(A2.surname);

        
//     }
//     else if (A1.surname = A2.surname) {
//         return A1.name.localeCompare(A2.name);
//     }
// }

// console.log("plus",athletes.sort(compareByPositionPlus));