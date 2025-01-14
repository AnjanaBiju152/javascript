// Array Destructuring
// --------------------------------------------

const nums= [1,2,3,4]
let [a,b,c,d] = nums;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("---------------------------------");
let[num1,num2]=nums;
console.log(num1);
console.log(num2);


// object destructuring
// ----------------------------------------
console.log("-------------------------------------");

let obj = {
    name:'sean',
    age:23
}
let {name}=obj
console.log("Object Destructuring Example");
console.log(name);
let{age}=obj;
console.log(age);
