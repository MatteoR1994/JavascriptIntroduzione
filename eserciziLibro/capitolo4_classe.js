let array = [1, 2, 3, true, "pippo", false, "paperino"];

function clearArray(type) {
    for (let i = 0; i < array.length; i++) {
        console.log(typeof array[i]);
        if (typeof array[i] !== type) {
            array.splice(i, 1);
        }
    }
}

let typeOf = "number";

console.log("Tipo: " + typeOf);
console.log("Array originario: ", array);

clearArray(array);

console.log("Array originario dopo pulizia: ", array);