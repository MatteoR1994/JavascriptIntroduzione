// // Primo modo per scrivere una funzione
// function isNegative(element) { // 99.5% programmatori javascript usa questa
//     return element < 0;
// }


// // Secondo modo per scrivere una funzione
// let isNegative2 = function(element) {
//     return element < 0;
// }


// // Terzo modo per scrivere una funzione
// let isNegative3 = (element) => element < 0; // elemento in input => ciò che sto ritornando


// /** Tutti e tre sono la stessa identica cosa **/

// /** Le ultime due (senza nome di variabile) si scrivono in tempo reale **/

// /** Le funzioni che passeremo al filter avranno non solo l'elemento da controllare ma anche l'indice dell'array **/


// /*********************************************************************************************************/


// // FILTER
// let myArray = [100, 101, 9, 1000, 12, -3];

// // 1° modo
// function hasEvenPosition(element, index) {
//     if (index % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(myArray.filter(hasEvenPosition));

// /****/

// // 2° modo
// console.log(myArray.filter(function(element, index) {
//     return index % 2 === 0;
// }));

// /****/

// // 3° modo
// console.log(myArray.filter((e, i) => i % 2 === 0));


// /*****************************************************************************/

// let myArray2 = [100, 101, 9, 1000, 12, -3];

// // MAP

// // Semplice
// function map(arrayToModify, alterationFunction) {
//     let tempArray = [];
//     for (const element of arrayToModify) {
//         let modifiedElement = alterationFunction(element);
//         tempArray.push(modifiedElement);
//     }
//     return tempArray;
// }

// function addOne(element) {
//     return element + 1;
// }

// // function addOneToArray(arrayToModify) {
// //     let tempArray = [];
// //     for (const element of arrayToModify) {
// //         let modifiedElement = element + 1;
// //         tempArray.push(modifiedElement);
// //     }
// //     return tempArray;
// // }

// // console.log(addOneToArray(myArray2));

// console.log("Mia map", map(myArray2, addOne));


// console.log("JS map 1", myArray2.map(addOne));
// // =
// console.log("JS map 2", myArray2.map(function(element) {
//     return element + 1;
// }));
// // =
// console.log("JS map 3", myArray.map((element) => element + 1));

// /****/

// // Con index

// let array3 = [3, 2, 5, -4, 1];

// function elementIndexProduct(element, index) {
//     return element * index;
// }

// console.log(array3.map(elementIndexProduct));
// // =
// console.log(array3.map(function(element, index) {
//     return element * index;
// }));
// // =
// console.log(array3.map((e, i) => e * i));

// /*****************************************************************************/

// /** FILTER e MAP sono concatenabili **/

// console.log(array3.map(elementIndexProduct)
//                   .filter(isNegative));


/*****************************************************************************/

// REDUCE

let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];

let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];


function sumAllArray(arrayToSum) {
    let result = 0;
    for (const element of arrayToSum) {
        result = result + element;
    }
    return result;
}

console.log(sumAllArray(testArray1));


function sum(first, second) {
    return first + second;
}

function product(previus, current, index) {
    return previus * current;
}

function sumEvenIndex(previous, current, index) {
    if (index %2 === 0) {
        return previous + current;
    } else {
        return previous;
    }
}


function reduce(arrayToAggregate, aggregationFunction, startingElement) {
    let result;
    let startingIndex;
    if (startingElement) {
        result = startingElement;
        startingIndex = 0;
    } else {
        result = arrayToAggregate[0];
        startingIndex = 1;
    }

    for (let i = startingIndex; i < arrayToAggregate.length; i++) {
        const element = arrayToAggregate[i];
        result = aggregationFunction(result, element, i);        
    }
    return result;
}

console.log(reduce(testArray1, sum));
console.log(reduce(testArray1, product));
console.log(reduce(testArray1, sum));
console.log(reduce(testArray1, sumEvenIndex));



console.log(testArray1.reduce((previous, current, index, array) => previous + current));