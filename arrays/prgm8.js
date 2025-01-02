//different array methods

console.log("1)sort()");
//string sort
//sort elements in an array in des or aes
// ascending  order
var arr = ['apple', 'avacodo', 'watermelone', 'orange']
console.log(arr.sort());
//descending order
console.log(arr.sort((a, b) => b.localeCompare(a)));

//number sort
//one digit
var num = [1, 7, 4, 2, 9];
console.log(num.sort());

//two digit ascending and descending

var nums = [20, 40, 10, 30, 17]
console.log(nums.sort((a, b) => a - b));  //ascending
console.log(nums.sort((a, b) => b - a));  //descending

console.log("**********************************************************");


console.log("2)indexOf()");

var arr = [1, 4, 6, 3, 8];
const x = arr.indexOf(8)
console.log(x);
console.log("****************************************************8");

console.log("3)forEach()");

const array = [1, 2, 3];

array.forEach((a, i) => {
    console.log("item", a);
    console.log("index", i);


})

console.log("***************************************************");
var number = [1, 2, 3, 4, 5]                   //arr =[1,2,3,4,5]
var resultArray = []                           //res=[3,6,9,12,15]

number.forEach((item) => {

    resultArray.push(item * 3)
})

console.log(resultArray);

console.log("*****************************************************");

console.log("4)map()");

let num1 = [1, 2, 3, 4, 5]; //need to find square of each number and return as array
const result = num1.map((item) => item ** 2);
console.log("result_array=", result);
console.log("array=", num1);

console.log("****************************************************************");
//names =[john,shone,rose] convert every element in an array to upper case

let names = ['john', 'shone', 'rose'];

let upperCase = names.map((item) => item.toUpperCase());
console.log(upperCase);


console.log("*****************************************************************");
console.log("5)filter()");

//filter out only even numbers from the given array

var num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result_num = num2.filter((item) => item % 2 === 0)
console.log(num2);
console.log(result_num);
console.log("***********************************************");

//filter out name start with j
const name1 = ['john', 'shone', 'rose', 'james'];
let startWithJ = name1.filter((item) => item.startsWith('j'));
console.log(startWithJ);
console.log("****************************************************");


