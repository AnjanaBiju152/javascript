var todaysDate = new Date()
console.log("today date is ",todaysDate);
// new Date() is a inbuilt method in js to obtain current date 
console.log(".......................................");

// else if ladder 
console.log("example of else if ladder");
var today = new Date().getDay()
console.log(today);

if(today===0){
    console.log("today is sunday"); 
}

else if(today===1){
    console.log("today is monday");
    
}
else if(today===2){
    console.log("today is tuesday");
    
}
else if(today===3){
    console.log("today is wednesday");
    
}
else if(today===4){
    console.log("today is thursday");
    
}
else if(today===5){
    console.log("today is friday");
    
}
 else{
    console.log("today is saturday");
    
 }
 
console.log(".........................................");
console.log("example of else if ladder");
var age =2;
if (age<=3){
    console.log("Baby");
    
}

else if(age<=8){
    console.log("kid");
    
}

else if(age<=14){
    console.log("infant");
    
}
else if(age<=18){
    console.log("minor");
    
}
else{
    console.log("senior");
    
}
console.log("......................................");


