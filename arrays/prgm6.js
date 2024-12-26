console.log("linear search in string array");

let fruits = ['apple', 'orange', 'banana', 'guva', 'mango'];
let target = 'mango';

function findFruit(arr, myTarget) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === myTarget) {
            return i;
        }
    }
    return -1;
}

const result = findFruit(fruits, target);

if (result === -1) {
    console.log("Item not found");

}
else {
    console.log(`${target} found at index ${result}`);

}



