// let pippo = "Ciao a tutti!";

// console.log("log pippo", pippo);

// pippo = "Ciao ad alcuni!";

// console.log("log 2 di pippo", pippo);

/*********************************************************************************************************/

// let luto, paperino;

/*********************************************************************************************************/

// let operazione = 5 + 6;

// console.log("log operazione", operazione);

// if (operazione < 10) {
//     console.log("sono passato dall'if");
// } else {
//     console.log("non sono passato dall'if");
// }

/*********************************************************************************************************/

// let numero3 = 0;

// if (numero3 > 0) {
//     console.log("il numero è positivo");
// } else if (numero3 === 0) {
//     console.log("il numero è uguale a 0");
// } else {
//     console.log("il numero è negativo");
// }

/*********************************************************************************************************/

// let numero4 = 16;

// if (numero4 >= 0) {
//     console.log("maggiore o uguale di 0");
// } else if (numero4 > 10) {
//     console.log("maggiore di 10");
// } else if (numero4 > 20) {
//     console.log("maggiore di 20");
// } else {
//     console.log("minore di 0");
// }

// Se ci sono condizioni più e meno restrittive, nella costruzione dell'if bisogna partire con le condizioni più restrittive e andare a scendere fino alle più "morbide"

// if (numero4 > 20) {
//     console.log("maggiore o uguale di 0");
// } else if (numero4 > 10) {
//     console.log("maggiore di 10");
// } else if (numero4 >= 0) {
//     console.log("maggiore di 20");
// } else {
//     console.log("minore di 0");
// }

/*********************************************************************************************************/

// let numero5 = 12;

// if (numero5 % 2 === 0) {
//     console.log("divisibile per 2");
// } else if (numero5 % 3 === 0) {
//     console.log("divisibile per 3");
// }

// A volte l'else non serve, basta mettere un altro if. Come per esempio nella ricerca dei divisibili.

// if (numero5 % 2 === 0) {
//     console.log("divisibile per 2");
// }
// if (numero5 % 3 === 0) {
//     console.log("divisibile per 3");
// }

/*********************************************************************************************************/

// console.log("WHILE");
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

// console.log("do..WHILE");
// let j = 0;

// do {
//     console.log(j);
//     j = j + 1;
// } while (j < 10);

// console.log("FOR");
// for (let k = 0; k < 10; k++) {
//     console.log(k);
// }

/*********************************************************************************************************/

// k = k + 1;
// // è uguale a

// k++; // Solo quando aumenta di 1
// k+=n; // Quando si aumenta di n

// /**/

// k = k - 1;
// // è uguale a

// k--; // Solo quando diminuisce di 1
// k-=n; // Quando si diminuisce di n

/*********************************************************************************************************/

// break; Interrompe tutto il ciclo

// continue; Interrompe solo il giro corrente del ciclo, alla sua fine il ciclo va avanti con il secondo giro e così via.

/*********************************************************************************************************/

// let stringa = "#";

// for (let i = 0; i < 7; i++) {
//     console.log(stringa);
//     stringa += "#"
// }

// for (let a = "#"; a !== "########"; a+="#") {
//     console.log(a);
// }


// let i = 3;
// let k = 5;



/* CONTROLLO NUMERI DIVISIBILI PER 3 E PER 5
for (let i = 1; i < 100; i++) {
    let str = '';
    if (i % 3 === 0) {
        str += 'Fritz';
    } else if (i % 5 === 0) {
        str += 'Buzz';
    }
    console.log(str.length > 0 ? str : i);
}*/

let grid = ``;

for (let i = 0; i < 10; i++) {
    for (let j= 0; j < 10; j++){
        grid = grid + "# ";
        //console.log(`Linea ${i}, carattere ${j}`);
    }
    if(grid.length== 100){
        break;
    }else{
        grid = grid + '\n';
    }
}

console.log(grid);