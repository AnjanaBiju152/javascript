//different array methods



console.log("6)reverse()");


let ar = [1, 2, 3, 4, 5, 6];
console.log(ar.reverse());

console.log("***********************************************************");

console.log("7)reduce()");

//find sum of elements in an array

const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10]
const result = numbers.reduce((acc, element) => {
    return acc + element;
}, 0);
//0+1=1
//1+2=3
//3+3=6
console.log(result);

console.log("************************************************");
//find maximum mark from this array using reduce

const marks = [67, 43, 72, 69, 53, 44, 18];
const maximumMark = marks.reduce((accumulator, currentValue) => {
    return Math.max(accumulator, currentValue)
}, 0)

console.log(maximumMark);

console.log("******************************************************************");

//find minimum value from above array

const mark = [30, 40, 28, 46, 70, 100];
const minimumMark = mark.reduce((accu, current) => {
    return Math.min(accu, current)
});
console.log(minimumMark);

console.log("*******************************************************");

console.log("8)find()");
//find first even number from the  given array using find ()

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNumber = num1.find((item => item % 2 === 0));
console.log(firstEvenNumber);

console.log("*************************************************");

console.log("9)includes()");
// the given array contain john

var names = ['mary', 'john', 'james', 'vimal', 'vishnu'];
const isFound = names.includes('johns')

console.log(isFound);

console.log("***************************************************");

console.log("10)some()");

// atleast one even number in the array

const num2 = [1, 5, 9, 46, 27, 2, 99]
const hasEvenNumber = num2.some((item) => item % 2 == 0);
console.log(hasEvenNumber);

console.log("***************************************************");


console.log("10)join()");

let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.join('-'));


//check whether the string is palindrome or not

var str = "malayalam";
result3 = str.split();
console.log(result3);

let revArray = result3.reverse();
console.log(revArray);

const result1 = revArray.join();
console.log(result1);


if (str === result1) {
    console.log("palindrome");

}
else {
    console.log("not palindrome");

}