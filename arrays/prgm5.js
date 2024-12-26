//Searching Algorithms

console.log("Linear Search");

const myArray = [1, 3, 2, 6, 67, 34, 81, 2];
const target = 67;
function linearSearch(arr, myTarget) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === myTarget) {
            return i;
        }
    }
    return -1;
}

const resultIndex = linearSearch(myArray, target);

if (resultIndex === -1) {
    console.log("Item not found");

}
else {
    console.log(`Item found at index ${resultIndex}`);

}


