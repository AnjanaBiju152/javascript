// different method used to  access item in an array
console.log("1)for loop");


var names = ['anju', 'ammu'];
var arrLength = names.length;
console.log(arrLength);

for (var i = 0; i < arrLength; i++) {
    console.log([i]);
}
console.log("*********************************************************");

// to find square of each number in an Array 

var nums = [1, 2, 3, 4, 5, 6,];
for (var i = 0; i < nums.length; i++) {
    console.log([i] ** 2);
}

console.log("*******************************************************");
//  to get output of an array

var nums = [1, 2, 3, 4, 5, 6,];
var result = [];
for (var i = 0; i < nums.length; i++) {
    result.push(nums[i] ** 2)
}
console.log(result);

console.log("******************************************************************");

//  print as an array ,all even numbers in an array

var res = [1, 2, 3, 4, 5, 6, 7, 8];
var result = [];
for (i = 0; i < res.length; i++) {
    if (res[i] % 2 === 0) {
        result.push(res[i])
    }

}
console.log(result);


