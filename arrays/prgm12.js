//string methods

console.log("1)toUpperCase() ");

let firstName = 'anjana';
console.log(firstName.toUpperCase());
console.log("*******************************************");

console.log("2)toLowerCase() ");

let lastName = 'Biju';
console.log(lastName.toLowerCase());
console.log("***************************************************");

console.log("3)trim() ");

let sample = "            anjana               ";
console.log(sample.trim());

console.log("***************************************************");

console.log("4)trimEnd() ");

let sample1 = " anjana      ";
console.log(sample1.trim());

console.log("***************************************************");

console.log("5)trimStart() ");

let sample2 = "            anjana";
console.log(sample2.trim());

console.log("***************************************************");

console.log("6)startWith() ");

let sample3 = "anjana";
console.log(sample3.startsWith('h'));

console.log("***************************************************");

console.log("7)endWith() ");

let sample4 = " anjana";
console.log(sample4.endsWith('a'));

console.log("***************************************************");

console.log("8)includes() ");

let sample5 = " anjana";
console.log(sample5.includes('j'));

console.log("***************************************************");

console.log("9)charAt() ");

let sample6 = "anj ana";
console.log(sample6.charAt(4));

console.log("***************************************************");

console.log("10)concat() ");

let str1 = "anjana";
let str2 = "biju"
let result = str1.concat(str2);
console.log(result);
