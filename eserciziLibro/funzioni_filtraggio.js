let array = [100, 101, 9, 1000, 12, -3];

function filterGreatherOf100(passedArray) {
    let resultArray = [];
    for (const element of passedArray) {
        if (element <= 100) {
            resultArray.push(element);
        }
    }
    return resultArray;
}

function filter(arrayToFilter, filterFunction) { // Questa è la funzione più generica possibile di filtraggio
    let result = [];
    for (const element of arrayToFilter) {
        if (filterFunction(element)) {
            result.push(element);
        }
    }
    return result;
}

// function greatherOf30(number) { // Versione più verbosa possibile
//     if (number > 30) {
//         return true;
//     } else {
//         return false;
//     }
// }

function greatherOf30(number) { // Versione più elegante possibile
    return (number > 30);
}

console.log("Array originale", array);

console.log("Array or. senza i maggiori di 100", filterGreatherOf100(array));

console.log("Array or. senza i minori di 30", filter(array, greatherOf30));