

let firstArray = [1, true, "pippo"];

console.log(firstArray);

let secondArray = ["pippo", "pluto", "paperino"];               //LIFO Last In First Out

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    console.log(element);
}

for (const element of secondArray) {
    console.log(element);
}

secondArray.push("topolino");                                   //Inserisce "topolino" in fondo all'array

let ultimoElemento = secondArray.pop();                         //Rimuove "topolino" dal fondo dell'array ma lo salva in una variabile

console.log(secondArray);
console.log(ultimoElemento);

let primoElemento = secondArray.shift();                        //Rimuove "pippo" dalla cima dell'array ma lo salva in una variabile

console.log(primoElemento);

secondArray.unshift("paperone");                                 //Inserisce "paperone" in cima all'array

console.log(secondArray[1]);                                     //Stampa l'elemento 1 dell'array

secondArray[1] = "paperina";                                     //Rimpiazza l'elemento 1 dell'array con "paperina"

let thirdArray= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let subArray = thirdArray.slice(2, 5);                           //Copia gli elementi dal numero 2 al 4 (il 5 viene escluso) dell'array e li inserisce in un nuovo array
let subArray2 = thirdArray.splice(2, 3);                         //Rimuove 3 elementi dal numero 2 dell'array e li inserisce in un nuovo array
thirdArray.splice(2, 3, 12, 13, 14);                             //Sovrascrive 3 elementi dal numero 2 dell'array con "12", "13", "14"



let numeroPiuGrande = Math.max(5, 10, 2);
console.log(numeroPiuGrande);
let numeroPiuGrandeDellArray = Math.max(...thirdArray);          //... = spread operator 
console.log("numero più grande dell'array", numeroPiuGrandeDellArray);

function stringaPiuLunga(...stringhe) {
    let str = "";
    for (let i = 0; i < stringhe.length; i++) {
        const element = stringhe[i];
        if (str.length < element.length) {
            str = element;
        }
    }
    return str;
}
console.log(stringaPiuLunga("pippo", "topolino", "pluto"));

//Funzione max
function max(...numbers) {
    let maxNumber = -Infinity;
    // let maxNumber = numbers[0];                          //alternativa
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (maxNumber < element) {
            maxNumber = element;
        }
    }
    return maxNumber;
}
console.log("Funzione max:",max(100, 12, 3, 1001));

//Funzione min
function min(...numbers) {
    let minNumber = Infinity;
    // let maxNumber = numbers[0];                          //alternativa
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (minNumber > element) {
            minNumber = element;
        }
    }
    return minNumber;
}
console.log("Funzione min:",min(100, 12, 3, 1001));


//Funzione che prende come paramentro un numero positivo e restituisce un array con i numeri da 0 a N
function range(num) {
    let arr = [];
    for (let i = num; i >= 0; i--) {
        arr.unshift(i);
    }
    return arr;
}
console.log(range(5));

//Funzione che prende come paramentro un array di stringhe e mi restituisce un array di stringhe con le iniziali
function startingChar(stringArray) {
    let init = [];
    for (const element of stringArray) {
        if (element !== "") {
            init.push(element[0]);
        }
    }
    return init;
}
let strings = ["Cosenza", "Genova", "Alessandria", ""]
console.log(startingChar(strings));
