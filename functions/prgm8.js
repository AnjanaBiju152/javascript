
// Timer functions in js
console.log("setInterval");
console.log();

setInterval(function(){
    console.log("hi")
},2000);


console.log("............................................................");

console.log("setTimeout");

setTimeout(function(){
    console.log("how are you")
},4000);


console.log("...........................................................");
// clearInterval  (not important)

var intervalId = setInterval(function() {
    console.log("this message print every seconds");
    
},1000)

setTimeout(function() {
    clearInterval( intervalId)
},5000);