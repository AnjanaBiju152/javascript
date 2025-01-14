// first ecursive alphabet
const pattern ="babcaghfccc"
// step1:convert string into a array using 

const pattenArray = pattern.split('')
console.log(pattenArray);
// ['a', 'b', 'c', 'a','g', 'h', 'f', 'c','c', 'c']
// step2: initialize empty object

let letterCount = {
}

// iterate over each element in array,tgen check if that item is present in
// key in thw obj,if present,mark if it is already exist else add it as a key
// to the object with count 1.
for(let char of pattenArray){
if(char in letterCount){
    console.log("first recursive letter is:",char);
    break;
}
else{
    letterCount[char] =1
}
}

// letterCount={
//     a:1
//      b:1
//     c:1
// }