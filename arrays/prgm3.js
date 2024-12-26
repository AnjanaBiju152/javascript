// different method used to  access item in an array
console.log("2)looping through index");

//find even numbers and odd numbers from given array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var oddArray = [];
var evenArray = [];
for (let i in arr) {
    if (arr[i] % 2 == 0) {
        evenArray.push(arr[i])
    }
    else {
        oddArray.push(arr[i])
    }
}

console.log("Even number");
console.log(evenArray);

console.log("Odd number");
console.log(oddArray);

console.log("***************************************************************");


