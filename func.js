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

