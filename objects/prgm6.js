// find first recursive alphabet(first repeating alphabet)

const pattern = "abvggkjhoigu";

// 1) convert string into a array
const patternArray = pattern.split('');
console.log(patternArray);

//2) initiallizing empty object ( for string count of object)

let letterCount = {

}

//3) iterate over each element in an array , then check if that item is present as
//key in the object we created ,if present ,mark it is already exists else add it
// as akey to object with count 1

for(
    let char of patternArray){
        if(char in letterCount){
            console.log("first recursive letter is :",char);
            break;
        }
        else{
            letterCount[char] = 1
        }
    }
 
    //letterCount{
    //a:1,
   // b:1,
   // v:1,
   // g:2
//}