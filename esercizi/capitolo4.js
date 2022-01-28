// 1) The sum of a range

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);      
    }
    return array;
}

function rangeWithStep(start, end, step = 1) {
    let array = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            array.push(i);      
        }
    } else {
        for (let i = start; i <= end; i += step) {
            array.push(i);      
        }
    }
    return array;
}

// VERSIONE ANDREA
/*function rangeStep(max, min = 0, step = 1) {
    let array = [];

    let start = step > 0 ? min : max;

    let end;

    if(step > 0) {
        end = max;
    } else {
        end = min;
    }

    for (let i = start; i <= end; i++) {
        array.push(i);      
    }
    return array;
}*/

function sum(numbers) {
    let resultSum = 0;
    for (const element of numbers) {
        resultSum += element;
    }
    return resultSum;
}

let psx = 1;
let pdx = 10;
let s = -2;

//let generatedNumbers = range(psx, pdx);
let generatedNumbers = rangeWithStep(psx, pdx);
//let generatedNumbers = rangeStep(25, 2, 2);
//let generatedNumbers = rangeWithStep(psx, pdx, s);

console.log("Numeri generati: " + generatedNumbers);

console.log("La loro somma: " + sum(generatedNumbers));

/*********************************************************************************************************/

// 2) Reversing an array

// - reverseArray
function reverseArray(myArray) {
    let reversedArray = [];
    /*for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        reversedArray.unshift(element);
    }*/
    /*for (let i = (myArray.length - 1); i >= 0; i--) {
        const element = myArray[i];
        reversedArray.push(element);
    }*/
    for (const element of myArray) {
        reversedArray.unshift(element);
    }
    return reversedArray;
}

// - reverseArrayInPlace
function reverseArrayInPlace(myArray2) {
    //let dimension = myArray2.length;
    let rArray = reverseArray(myArray2);
    for (let i = 0; i < rArray.length; i++) {
        myArray2[i] = rArray[i];        
    }
    /*for (let i = 0; i < (dimension / 2); i++) {
        let temp = myArray2[i];
        myArray2[i] = myArray2[dimension-1-i];
        myArray2[dimension-1-i] = temp;
    }*/
    //return myArray2;
}

/****/

let arrayToReverse = [1, 2, 3, 4, 5];

let revArray = reverseArray(arrayToReverse);

console.log("Array origine: " + arrayToReverse);

console.log("Array inverso (copia): " + revArray);

//arrayToReverse = reverseArrayInPlace(arrayToReverse);

reverseArrayInPlace(arrayToReverse);

console.log("Array inverso (origine): " + arrayToReverse);

console.log("Array origine (dopo inversione): " + arrayToReverse);