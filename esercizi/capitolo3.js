// ESERCIZI CAPITOLO 3

// 1) Minimum

/*function minimum(numberOne, numberTwo) {
    /*if (numberOne < numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }*/
    /*return (numberOne < numberTwo) ? numberOne : numberTwo;
}

console.log(minimum(5, 3));*/

/****/

// 2) Recursion

/*function isEven(number) {
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }
    if (number > 0) {
        return isEven(number - 2);
    } else {
        return isEven(number + 2);
    }
    //return (number > 0) ? isEven(number - 2) : isEven(number + 2);
    //return isEven(number + ((number > 0) ? -2 : 2));
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-4));*/
// → undefined

/****/

// 3) Bean counting

/*function countBs(myString) {
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'B') {
            count++;
        }        
    }
    return count;
}

function countChar(myString, myChar, caseSensitive = false) { // Da migliorare facendo in modo che se cerco un carattere lo trovi indipendentemente dal fato che sia maiuscolo o minuscolo
    if (!caseSensitive) {
        myString = myString.toLowerCase();
        myChar = myChar.toLowerCase();
    }
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === myChar) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BaBBo"));

console.log(countChar("pippPo", "p", true));*/

/****/