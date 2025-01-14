let str='aabcfghdbcghv'
// find the count of each character as an object
// a:2
// b:2
// c:2
// f:1
const strArray = str.split('')
console.log(strArray);
let letterCount={

}
for(let char of strArray){
if(char in letterCount){
    
    letterCount[char]=letterCount[char]+1;
}
else{
    letterCount[char]=1;
}
}
console.log(letterCount);


