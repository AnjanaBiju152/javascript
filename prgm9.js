// factorial of a number using while loop 
// 5 :1*2*3*4*5
// 3: 1*2*3


var i = 1;
var n = 5;
var result = 1;
while (i <= n) {
    result = result * i;
    i++;
}
console.log(`factorial of a number${n} is ${result}`);


// find sum of number upto 10
// 1+2+3..+10

var i = 1;
var n = 10;
var sum = 0;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log(`sum of number up to 10 is ${sum}`);



