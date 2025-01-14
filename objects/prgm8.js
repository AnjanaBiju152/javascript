let str='abcdaafdca'
// 1.find count of each character in the string
// 2.find the maximum count and which character has the maximum count

// 1.find count of each character in the string
const  strArray=str.split('')
console.log(str);
let letterCount={}
for(let char of strArray){
    if(char in letterCount){
        
        letterCount[char]=letterCount[char]+1;
    }
    else{
        letterCount[char]=1;
    }
    }
    console.log(letterCount);
   
 // 2.find the maximum count and which character has the maximum count
 let maxCount = 0;
 let mostFrequentChar;
 for(let item in letterCount){
    if(letterCount[item]>maxCount){
        maxCount=letterCount[item];
        mostFrequentChar = item
    }
 }
 console.log("Max Count:",maxCount);
 console.log("Most Frequent Char:",mostFrequentChar);
 
 
 