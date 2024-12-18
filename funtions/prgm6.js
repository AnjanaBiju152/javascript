// function to check whether number is prime or not
function prime(num) {
    
var count = 0;
for (i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}
if(count==2){
    console.log("prime number");
    
}
else{
    console.log("not prime number");
    
}
}

prime(3)