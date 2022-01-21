// Cap. 2 - "Looping a triangle"
// MIA SOLUZIONE
/*let stringa = "#";
for (let i = 0; i < 7; i++) {
    console.log(stringa);
    stringa += "#"
}*/

//MIA SOLUZIONE ALTERNATIVA
/*let stringa = "#";
for (let a = "#"; a !== "########"; a+="#") {
    console.log(a);
}*/

/*********************************************************************************************************/

// Cap. 2 - "FizzBuzz"
/*for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}*/

/*********************************************************************************************************/

// Cap. 2 - "Chessboard"
let str = "";
let size = 8;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        (i + j) % 2 === 0 ? str += " " : str += "#";
    }    
    str += "\n";
}

console.log(str);