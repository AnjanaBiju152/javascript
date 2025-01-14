const calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}
console.log(calculator.add(2, 3));
console.log(calculator.multiply(4, 6));

//********************************************************************** */

let car = {
    name : "innova",
    model: "suv",
    manufaturer: "toyota",
    price: 2700000
}

//  1) display car name and  manufacturer

console.log(`car name is ${car.name} and model is ${car.model}`);

//2) check "model" key is present or not if present print model

if ('model' in car) {
    console.log("model name is ", car.model);

}
else {
    console.log("model key is not present");

}
//3)add variant (manul/automatic) to the car

car_varient = "automatic"
console.log(car);

//4) add color keys with black ,white , silver

car.color = ['white', 'black', 'silver'];
console.log(car);

//****************************************************** */
car.type ={
    sample : "petrol",
    sample1 : "diesel"
}
console.log(car);


//get alls keys in an arry

const allkeys =  Object.keys(car)
console.log(allkeys);

