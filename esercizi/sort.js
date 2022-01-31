// let student1 = {name: "Pippo", age: 12, gender: "M"}

// let student2 = {name: "Pluto", age: 18, gender: "M"}

// let student3 = {name: "Topolina", age: 13, gender: "F"}

// let student4 = {name: "Paperina", age: 18, gender: "F"}

// let students = [student1, student2, student3, student4];

// console.log(students.sort());

// console.log(students.sort(compareStudents));

// function compareStudents(st1, st2) {
//     if (st1.age > st2.age) {
//         return 1;
//     }
//     if (st1.age < st2.age) {
//         return -1;
//     }
//     if (st1.age === st2.age) {
//         return 0;
//     }
// }

// function compareStudents2(st1, st2) {
//     return st1.name.localeCompare(st2.name);
// }
// console.log(students.sort(compareStudents2()));

/////////////////////////////////////////////////////////////////////////////////////////

let athlete1 = {name: "giovanni", surname: "landi", position: 2};
//let athlete6 = {name: "teodoro", surname: "oblandi", position: 3};
let athlete6 = {name: "teodoro", surname: "perri", position: 3};
let athlete2 = {name: "lorena", surname: "landi", position: 2};
//let athlete3 = {name: "pippo", surname: "barbigli", position: 1};
let athlete3 = {name: "pippo", surname: "barbigli", position: 4};
let athlete4 = {name: "simona", surname: "perri", position: 3};
let athlete5 = {name: "elmo", surname: "recalcati", position: 3};

let athletes = [athlete1, athlete6, athlete2, athlete3, athlete4, athlete5];

console.log("Array originale:\n", athletes);

let athletePosition = [...athletes];
let athleteSurname = [...athletes];
let athletePositionPlus = [...athletes];

/****/

function comopareByPosition(a1, a2) {
    return a1.position - a2.position;
}

console.log("Ordinato per posizione:\n", athletePosition.sort(comopareByPosition));

/****/

function compareBySurname(a1, a2) {
    return a1.surname.localeCompare(a2.surname);
}

console.log("Ordinato per cognome:\n", athleteSurname.sort(compareBySurname));

/****/

function compareByPositionPlus(a1, a2) {
    if (a1.position > a2.position) {
        return 1;
    }

    if (a1.position < a2.position) {
        return -1;
    }

    if (a1.position = a2.position) {
        if (a1.surname === a2.surname) {
            return a1.name.localeCompare(a2.name);
        } else {
            return a1.surname.localeCompare(a2.surname);
        }        
    }
}

console.log("Ordinatoper posizione, poi eventualmente per cognome e infine, event., per nome:\n", athletePositionPlus.sort(compareByPositionPlus));