//nested array

console.log("11)flat()");
   
let arr = [1,2,3,[4,5]];   
let flatArray = arr.flat(1);
console.log(flatArray); //[1,2,3,4,5]

console.log("*********************************************************************");

let array = [1,2,3,[4,5,[6,7]]];
let flat = array.flat(1);
console.log(flat);   //flat() - upto 1 level
                     //flat(infity) - upto its containing level
                     // flat(depth) -  upto depth level  flaten
 
    console.log("************************************");
    
const arrNew =[ 1,[2,[3,[4,[5]]]]];
console.log("flat()",arrNew.flat());
console.log("flat(infinity)",arrNew.flat(Infinity));
console.log("flat(depth)",arrNew.flat(2));

console.log("*************************************************");

const arr1 =[1,2,,,5,6]  // to remove empty slots

console.log("flat",arr1.flat());

console.log("*****************************************");
