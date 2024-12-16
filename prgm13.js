// find whether a number is prime number or not
// prime number = number is only divisible by 1 and only that number
// 2,3,5,7,11,13


var count = 0;
var num = 4;
for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}
if (count === 2) {
    console.log("the given number is prime number");

}
else {
    console.log("the given number is not prime number");

}