// print write a function to print up to n using for loop


function printNumbers(num) {
    for (i = 20; i <= num; i++)
        console.log(i);

}

printNumbers(40);


console.log("...................................................");

function printNumber(num) {
    var str=""
    for (i = 20; i <= num; i++){
        str= str+i+' '
    }
        console.log(str);

}

printNumber(40);
console.log("...................................................");



//  write function to find factorial of a number using return

function factorial(num) {
 result=1;
 for(i=1;i<= num;i++){
    result= result*i
    
 }
    return result;
}
console.log(factorial(5));
console.log("....................................................................");
