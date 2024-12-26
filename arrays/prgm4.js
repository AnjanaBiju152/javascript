// different method used to  access item in an array
console.log("2)looping through each item in array");

//find cube of each number in an array

var arr = [2, 5, 7, 9]
for (let item of arr) {
    console.log(item ** 3);

}
console.log("**************************************************************");

//find lowest amount from the given array

let amount = [1200, 300, 400, 4600, 70, 45678]
let lowestAmount = amount[0];
for (var item of amount) {
    if (item <= lowestAmount) {
        lowestAmount = item;
    }
}
console.log("Lowest Amount", lowestAmount);


//find highest amount in array

var arr = [2000, 300, 40000, 400]

var highestAmount = arr[0]
for (var item of arr) {
    if (item >= highestAmount) {
        highestAmount = item;
    }
}
console.log("highest amount", highestAmount);
