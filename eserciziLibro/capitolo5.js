let array = [100, 101, 9, 1000, 12, -3];

function filterGreatherOf100(passedArray) {
    let resultArray = [];
    for (const element of passedArray) {
        if (element <= 100) {
            resultArray.push(element);
        }
    }
    return resultArray;
}

function filter(funzioneControllo) {
    let result = [];
    for (const element of array) {
        if (funzioneControllo(element)) {
            result.push(element);
        }
    }
    return result;
}

function greatherOf30(number) {
    if (number > 30) {
        return true;
    } else {
        return false;
    }
}

console.log(filterGreatherOf100(array));

console.log(filter(greatherOf30));