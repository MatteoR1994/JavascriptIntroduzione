// 1° modo per scrivere una funzione

/*function divideByTwo(myNumber) {
    let result = myNumber / 2;
    return result;
} // Funzione pura: prende in input un dato, lo modifica e lo ritorna.

console.log(divideByTwo(8));*/

/*********************************************************************************/

// 2° modo per scrivere una funzione (creata come una variabile) - Funzione anonima, non ha nome. Viene dato alla variabile.

/*let capitalize = function (myString) { // Rendere tutta maiuscola la stringa in input
    return myString.toUpperCase();
}

console.log(capitalize("ciao"));*/

/*********************************************************************************/

// 3° modo per scrivere una funzione

// let multiplyByTwo = (myNumber) => myNumber * 2; // Espressione lambda, usata di solito quando si hanno funzioni di una sola riga. Ma è possibile usarla anche con più linee. Es:
/*
let multiplyByTwo = (myNumber) => {
    let result = myNumber * 2;
    return result;
}
*/

// console.log(multiplyByTwo(34));

// TUTTI E 3 I MODI PER SCRIVERE FUNZIONI, IN JAVASCRIPT, SONO EQUIVALENTI. DI SOLITO E' PIU' USATO IL 1°.

/*********************************************************************************/

// Posso assegnare a una variabile funzione (tipo 'multiplyByTwo') un'altra funzione (tipo 'capitalize'). Es: multiplyByTwo = capitalize

// Le funzioni definiscono uno scope (la parte dentro le { }). Le variabili dentro le { } non sono visibili dal codice esterno. Le variabili fuori le { } possono
// essere viste dentro le { }.

/*let pippo = 8; // Questo pippo vive nel global scope, il codice esterno alla funzione.

function scriviPippo() {
    let pippo = "pippo"; // Questo pippo vive nel local scope, il codice interno alla funzione.
    console.log(pippo);
}

scriviPippo(); // Scrive quello locale

console.log(pippo); */// Scrive quello globale

// I due pippo non entrano in conflitto, come farebbero se fossero entrambi nel global scope.

// Gli scoper figli, se non trovano nel proprio codice una variabile possono andara a cercarla dentro a quello del genitore. Altrimenti si pianta.

// Posso scrivere funzioni dentro ad altre funzioni. Es:

/*function multiplyBy4(firstNumber) {

    function multiplyBy2(secondNumber) {
        return secondNumber * 2;
    }

    let result = multiplyBy2(firstNumber) * 2;

    return result;
}

console.log(multiplyBy4(4));*/

/*********************************************************************************/

// Ricorsione - Es: Sequenza di Fibonacci

/*function fibonacci(number) {
    if (number === 0) {
        return 0; // Il return blocca la funzione, come se fosse un break;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10));*/

/*********************************************************************************/

/*function somma(primoNumero, secondoNumero) {
    return primoNumero + secondoNumero;
}

let risultato = somma();

console.log(risultato);*/

/****/

/*function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;
    } else {
        return primoNumero - secondoNumero;
    }
}

console.log(minus(20, 5));

console.log(minus(20));*/

/****/

/*function multiplyBy(primoNumero, secondoNumero = 2) {
    return primoNumero * secondoNumero;
}*/

//console.log(multiplyBy(6, 3)); // Se metto anche il secondo numero, verrà considerato quello.

//console.log(multiplyBy(6)); // Se non metto il secondo numero, verrà utilizzato quello di default (in questo caso 2).

/****/

/*let variable = -4;

let myFunction;

if (variable >= 0) {
    let multiplier = 2;
    myFunction = function (numero) {
        return numero * multiplier;
    }
} else {
    let multiplier = 3;
    myFunction = function (numero) {
        return numero * multiplier;
    }
}

let risultato2 = myFunction(4);

console.log(risultato2);*/

// Le funzioni fanno closur = le variabili istanziate in scope non più attivi (dentro un if, per esempio) utilizzate da una funzione vengono mantenute in vita dalla funzione stessa. Vedi sopra.

/*********************************************************************************/

// Le funzioni possono ritornare delle altre funzioni (funzioni di ordine superiore)

/*function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore;
}

let moltiplicaPer2 = multiplyByNumber(2);

let moltiplicaPer3 = multiplyByNumber(3);

let moltiplicaPer4 = multiplyByNumber(4);

console.log(moltiplicaPer2(5));

console.log(moltiplicaPer3(5));

console.log(moltiplicaPer4(5));*/

/*********************************************************************************/

// Le funzioni possono prendere in pasto altre funzioni

/*function applicaFunzioneSuNumero(mioNumero, funzioneDaApplicare) {
    return funzioneDaApplicare(mioNumero);
}

function dividiPer2(numero) {
    return numero / 2;
}

function dividiPer3(numero) {
    return numero / 3;
}

let res1 = applicaFunzioneSuNumero(8, dividiPer2);

let res2 = applicaFunzioneSuNumero(8, dividiPer3);

console.log(res1);

console.log(res2);*/

/*********************************************************************************/

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

// ESERCIZI PER CASA

// Fare una funzione non ricorsiva che scrive i primi 100 numeri della successione di fibonacci

// Funzione fibonacci non ricorsiva. Data una posizione, mi dia il valore di fibonacci corrispondente (vedi quella fatta in classe)

// Funzione che dato un numero mi individui la sua posizione nella successione di fibonacci. Se il numero non è nella successione, dia undefined

// Implementare con ricorsione la funzione fattoriale:
//      - 0! = 1
//      - 1! = 1
//      - n! = n * (n - 1)

function fibonacciNonRicorsiva() {
    let i = 0;
    let psx = 0;
    let pdx = 1;
    let str = "0, 1, ";
    while(i <= 98) {
        
    }
}