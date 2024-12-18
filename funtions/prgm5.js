// print whether a number is  even


function checkEven(num) {
    if(num%2==0){
return true;
    }
    else
    {
        return false;
    }
}
var result = checkEven(10)

if(result){
    console.log("the given number is even");
    
}
else{
    console.log("the given is odd");
    
}