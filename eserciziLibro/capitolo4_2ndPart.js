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

function nth(list, position) { // Versione non ricorsiva
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

function nth2(listNode, index, startIndex) { // Versione ricorsiva, con variabile appoggio (passata come terzo paramentro della funzione)
    if (listNode === null) {
        return undefined;
    }
    if (startIndex === index) {
        return listNode.value;
    }
    let node = listNode.rest;
    startIndex++;
    return nth2(node, index, startIndex);
}

function nth3(listNode, index) {// Versione ricorsiva, senza variabile appoggio
    if (listNode === null) {
        return undefined;
    }
    if (index === 0) {
        return listNode.value;
    }
    return nth3(listNode.rest, index-1);
}

let wantedPosition = 4;

let arrayForList = [2, 6, 24, 39, 102, 4];

let listForSearch = arrayToList(arrayForList);

console.log(`Number at position ${wantedPosition}: ` + nth(listForSearch, wantedPosition));

//console.log(`Number at position ${wantedPosition}: ` + nth2(listForSearch, wantedPosition, 0));

//console.log(`Number at position ${wantedPosition}: ` + nth3(listForSearch, wantedPosition));

/*********************************************************************************************************/

// 4) Deep comparison

