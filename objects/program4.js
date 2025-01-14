// calculator
// -----------------------

const calculator = {
    add:function(a,b){
        return a+b;
    },
    multiply:function(a,b){
        return a*b;
    }
}
console.log(calculator.add(1,2));
console.log(calculator.multiply(1,2));

console.log("--------------------------");

// 1)display car name and manufacture
     // car name is innova and manufacture is toyota
// 2)check "model" key is present or not,if present print model
// 3)add variant (manual/automatic) to the car
// 4)add color key with values black,white,silver
let car={
    name:"Innova",
    model:"SUV",
    manufacture:"toyota",
    price:270000
}


// 1)display car name and manufacture
     // car name is innova and manufacture is toyota
console.log("---------------------------------------------");
console.log(`car name is ${car.name} and manufacture is ${car.manufacture}`);

// 2)check "model" key is present or not,if present print model
console.log("---------------------------------------------");
if('model' in car){
    console.log("model is present",car.model);
    
}
else{
    console.log("model is not present");
    
}

// 3)add variant (manual/automatic) to the car
console.log("----------------------------------");

car_varient="automatic"
console.log(car);

// 4)add color key with values black,white,silver
console.log("----------------------------------");
car.color=['black','white','yellow']
console.log(car);


// Get all keys in an object array
// -------------------------
const allkeys = Object.keys(car)
console.log(allkeys);

// nested obj
// -----------------------
const student={
    name:"ann",
    address:{
        housename:"olivialine",
        pin:670511
    }
}
console.log(student);
console.log(student.address.pin);

