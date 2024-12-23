// Hoisting.....

var num1 = 30;
console.log(num1);
printName();
function printName() {
    console.log("sean");

}


console.log("...................................................................");

var printNum = function () {
    console.log("i");

}

printNum()