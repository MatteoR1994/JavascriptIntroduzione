// let point = {x: 2, y: 3};                    //dichiarazione di un oggetto

// let student = {name: "Simone", surname: "Aloia", yob: 1997, married: false};

// let student1 = {name: "Alessandro", surname: "Capogreco", yob: 2002, married: false};

// let classe = {name: "Programmatore Frontend", students: [student, student1]};

// let andrea = {name: "Andrea", surname: "Asioli", "classe di cui è docente": classe};

// console.log(andrea);
// console.log(andrea.surname);
// console.log(andrea["classe di cui è docente"]);

// let nomeStudente1 = student1.name;
// console.log(nomeStudente1);

// student1.name = "Pippo";
// console.log(student1);

// console.log(student1.titoloDiStudio);

// student1.titoloDiStudio = "Diploma di Maturità";

// console.log(student1);

// for (const key in student1) {
//     if (Object.hasOwnProperty.call(student1, key)) {
//         const element = student1[key];
//         console.log(key + ": " + element);
//     }
// }


// console.log(JSON.stringify(andrea));

// let oggettoInStringa = '{"name":"Andrea","surname":"Asioli","classe di cui è docente":{"name":"Programmatore Frontend","students":[{"name":"Simone","surname":"Aloia","yob":1997,"married":false},{"name":"Pippo","surname":"Capogreco","yob":2002,"married":false,"titoloDiStudio":"Diploma di Maturità"}]}}'

// let AndreaCopy = JSON.parse(oggettoInStringa);

// console.log(AndreaCopy);

// function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa) {
//     let per = catetoMaggiore + catetoMinore + ipotenusa;
//     let ar = (catetoMaggiore * catetoMinore) / 2;
//     return {perimetro: per, area: ar}
// }

// let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

// console.log("Il triangolo ha il perimetro di: " + dimensioniTriangolo.perimetro + " e l'area di: " + dimensioniTriangolo.area);


// let firstNumber = 5;

// function addOne() {
//     firstNumber = firstNumber + 1;
//     return firstNumber;
// }

// let secondNumber = addOne();

// console.log(firstNumber);
// console.log(secondNumber);


// Creare cloni di un oggetto:
//  - Object.assign()
//  - spread operator (...)

// let myAccount = {name: "Andrea Asioli", balance: 100};

// function addMoney(moneyToAdd, account) {
//     // -
//     //let tempAccount = {};
//     //tempAccount = Object.assign(tempAccount, account); // Clono l'oggetto di partenza, cioè prende
//     // tutte le caratteristiche di account, le copia e le assegna a tempAccount. Creando anche un'altra 
//     // reference parallela, per non modificare quella di account.
    
//     // -
//     //let tempAccount = {...account}; // E' come se togliessi le {}, quindi quello che c'è dentro ad account
//     // va dentro a tempAccount

//     // -

    
//     tempAccount.balance = tempAccount.balance + moneyToAdd;
//     return tempAccount;
// }

// let updatedAccount = addMoney(50, myAccount);

// console.log(myAccount);
// console.log(updatedAccount);


// Shallow copy di oggetti
/*let userAndrea = {name: "Andrea Asioli", age: 43};

let myAccount = {user: userAndrea, balance: 100}

console.log(myAccount);

function changeAccount(newAge, account) {
    let tempAccount = {...account};
    tempAccount.user.age = newAge;
    return tempAccount;
}

let updatedAccount = changeAccount(50, myAccount);

console.log(updatedAccount);*/


// Deep copy di oggetti (funziona con oggetti semplici, che hanno elementi base al loro interno. E' quella che si userà di più)
let userAndrea = {name: "Andrea Asioli", age: 43};

let myAccount = {user: userAndrea, balance: 100}

console.log(myAccount);

function changeAccount(newAge, account) {
    let tempAccount = JSON.parse(JSON.stringify(account));
    tempAccount.user.age = newAge;
    return tempAccount;
}

let updatedAccount = changeAccount(50, myAccount);

console.log(updatedAccount);