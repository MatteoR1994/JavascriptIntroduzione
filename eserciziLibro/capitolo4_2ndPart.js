// 3) A list

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};        
    }
    return list;
}

// VERSIONE ANDREA
/*function arrayToList(array) {
    let firstNode = null;
    for (let i = array.length - 1; i >= 0; i--) {
        // let rest;
        // if (firstNode === null) {
        //     rest = null;
        // } else {
        //     rest = firstNode;
        // }
        // let node = {value: array[i], rest: firstNode};
        // firstNode = node;
        firstNode = prepend(array[i], firstNode);     
    }
    return firstNode;
}*/

let arrayBecomeList = [10, 20, 30];
console.log(arrayToList(arrayBecomeList));

/****/

function listToArray(list) {
    let array = [];
    let node = list;
    while (true) {
        array.push(node.value);
        if (node.rest !== null) {
            node = node.rest;
        } else {
            break;
        }
    }
    return array;
}

// VERSIONE ANDREA
/*function linkedListToArray(listNode) {
    let node = listNode;
    let array = [];
    while (node !== null) {
        array.push(node.value);
        node = node.rest;
    }
    return array;
}*/

let listBecomeArray = {value: 10, rest: {value: 20, rest: null}};
console.log(listToArray(listBecomeArray));

/****/

function prepend(number, list) {
    return {value: number, rest: list};
}

let resultList = prepend(10, null);

let resultList2 = prepend(225, resultList);

console.log(resultList);

console.log(resultList2);

/****/

function nth(list, position) {
    if (list === null) {
        return ;
    }
    let node = list;
    let number;
    let iterator = 0;
    while (node !== null) {
        if (iterator === position) {
            number = node.value;
            break;
        } else {
            iterator++;
            node = node.rest;
        }
    }
    return number;
}

let wantedPosition = 4;

let arrayForList = [2, 6, 24, 39, 102, 4];

let listForSearch = arrayToList(arrayForList);

console.log(`Number at position ${wantedPosition}: ` + nth(listForSearch, wantedPosition));

/*********************************************************************************************************/

// 4) Deep comparison

