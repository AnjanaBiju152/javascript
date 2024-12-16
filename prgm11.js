// to find whether is plaiandrom or not using while loop
// 3553 

var reverseNum = 0;
var num = 3553;
var tempNum = num;
while (num > 0) {
    var reminder = num % 10;
    reverseNum = (reverseNum * 10) + reminder;
    num = Math.floor(num / 10);

}

if (tempNum === reverseNum) {
    console.log(`${tempNum} is paliandrom`);

}
else {
    console.log(`${tempNum}is not paliandrom`)
}
