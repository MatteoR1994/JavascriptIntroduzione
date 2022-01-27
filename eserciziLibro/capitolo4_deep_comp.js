// 4) Deep comparison

function deepEqual(elementOne, elementTwo) {
    if ((elementOne !== null) && (elementTwo !== null)) {
        if ((typeof elementOne === "object") && (typeof elementTwo === "object")) {
            let elementOneKeys = Object.keys(elementOne);
            let elementTwoKeys = Object.keys(elementTwo);
            //console.log(elementOneKeys.length, elementTwoKeys.length);
            if (elementOneKeys.length === elementTwoKeys.length) {
                for (const key in elementOne) {
                    //console.log(elementOne[key], elementTwo[key]);
                    if (!elementTwoKeys.includes(key) || !deepEqual(elementOne[key], elementTwo[key])) {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        } else {
            if ((typeof elementOne === typeof elementTwo) && (elementOne === elementTwo)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

// let obj1 = {here: {is: "an"}, object: 3};
// let obj2 = {here: {is: "an"}, object: 3};

// let obj1 = {value: 10, rest: {value: 20, rest: null}};
// let obj2 = {value: 10, rest: {value: 20, rest: null}};

// let obj1 = 12;
// let obj2 = 12;

// let obj1 = null;
// let obj2 = {value: 10, rest: {value: 20, rest: null}};

let obj1 = {value: 12, rest: {value: 20, rest: null}};
let obj2 = {value: 12, rest: {value: 20, rest: null}};

console.log(deepEqual(obj1, obj2));