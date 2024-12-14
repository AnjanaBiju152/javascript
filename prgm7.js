console.log("example of switch");
console.log(".....................");

var day = "";
var today = new Date().getDay();
console.log(today);


switch (today) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    default:
        break;
}
console.log("today is", day);
console.log("......................................");

var userInput = "apple";

switch (userInput) {
    case "apple":
        console.log(`${userInput} is a fruit`);
        break;
    case "cabbage":
        console.log(`${userInput} is a vegetable`);
        break;
    default:
        console.log(`${userInput} is a vegetable nor fruit`);
        break;
}
