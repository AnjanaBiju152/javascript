// reverse a number using while loop

// 748 = 847 
//  num=748
// 1) num /10
// reverseNum=0
// reminder = 8;
// reverseNum = (reverseNum*10)+reminder
// 0+8 = reverseNum

// 2) reminder=4
//    value=7

// 3) reminder =7
// value = 0
// reverseNum = (84*10)+7 =847



console.log("reverse a number using while loop");
var reverseNum = 0;
var num = 567;

while(num>0){
    var reminder = num%10; // 7 6 5
    reverseNum = (reverseNum * 10) + reminder ; // 7   76   765
    num = Math.floor(num/10)  // 56   5
}
console.log(reverseNum);
