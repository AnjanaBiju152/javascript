//array methods

//slice and splice

console.log("slice()");

const array = [1,2,3,4,5,6,7,8,9,10];  //[4,5,6,7,8,9]
const res= array.slice(3,9);
console.log(res);  
//************************************************************** */
const res1 = array.slice(2,7);
console.log(res1);            //[3,4,5,6,7]

//******************************************************* */
const fruits =['apple','orange','banana','kiwi']
const res2 = fruits.slice(2,4)
console.log(res2);
console.log(fruits.slice(-1));

//**************************************************************

console.log("**********************************************************");
console.log("splice()");
const fruit =['apple','orange','banana','kiwi'];
fruit.splice(2,1);
console.log(fruit);
//**************************************************

const fruits1 =['apple','orange','banana','kiwi']
fruits1.splice(2,2,'jackfruit','watermelon');
console.log(fruits1);
