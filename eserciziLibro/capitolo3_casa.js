// ESERCIZI PER CASA - Capitolo 3

// 1) Fare una funzione non ricorsiva che scrive i primi 100 numeri della successione di fibonacci

// 2) Funzione fibonacci non ricorsiva. Data una posizione, mi dia il valore di fibonacci corrispondente (vedi quella fatta in classe)

// 3) Funzione che dato un numero mi individui la sua posizione nella successione di fibonacci. Se il numero non è nella successione, dia undefined

// 4) Implementare con ricorsione la funzione fattoriale:
//      - 0! = 1
//      - 1! = 1
//      - n! = n * (n - 1)

// 1) FUNZIONA.
/*function fibonacciNonRicorsiva() {
    let psx = 0;
    let pdx = 1;
    let str = "";
    for (let i = 0; i < 101; i++) {
        str += `Pos. ${i + 1} - ${psx}\n`;
        let sum = psx + pdx;
        psx = pdx;
        pdx = sum;
    }
    return str;
}

console.log(fibonacciNonRicorsiva());

function fibonacciNonRicorsiva(maxPosition = 200) { // Fibonacci che si ferma alla posizione voluta (maxPosition)
    let psx = 0;
    let pdx = 1;
    let str = "";
    for (let i = 0; i <= maxPosition; i++) {
        str += `Pos. ${i + 1} - ${psx}\n`;
        let sum = psx + pdx;
        psx = pdx;
        pdx = sum;
    }
    return str;
}

console.log(fibonacciNonRicorsiva());*/

/**/

// 2) FUNZIONA.

/*function fibonacciNonRicorsivaLimite(position) {
    let psx = 0;
    let pdx = 1;
    let number;
    for (let i = 0; i <= position; i++) {
        number = psx;
        let sum = psx + pdx;
        psx = pdx;
        pdx = sum;
    }
    return number;
}

let customPosition = 100;

console.log(`Numero di Fibonacci alla posizione ${customPosition}: ${fibonacciNonRicorsivaLimite(customPosition)}`);*/

/**/

// 3) FUNZIONA.
/*function trovaPosizioneInFibonacci(target) {
    let psx = 0;
    let pdx = 1;
    let i = 0;
    while (psx < target) {
        let sum = psx + pdx;
        psx = pdx;
        pdx = sum;
        i++;
    }
    if (psx === target) {
        return i;
    } else {
        return ; // Uguale a scrivere return undefined;
    }
}

let numeroDaTrovare = 10946;

let result = trovaPosizioneInFibonacci(numeroDaTrovare);

if (result === undefined) {
    console.log(`${numeroDaTrovare} non fa parte della sequenza di Fibonacci.`);
} else {
    console.log(`${numeroDaTrovare} dentro Fibonacci sta alla posizione: ${result}`);
}*/

/**/

// 4) FUNZIONA.
/*function fattoriale(number) {
    if (number === 0) {
        return 1;
    }
    if (number === 1) {
        return 1;
    }
    return number * fattoriale(number - 1);
}

let numero = 5;

console.log(`${numero}! = ${fattoriale(numero)}`);*/