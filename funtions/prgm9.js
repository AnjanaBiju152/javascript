// callback function


function addNumbers(num1, num2, callback) {
    var result = num1 + num2;
    callback(result)
}
function cubeOfNumber(num) {
    console.log(num ** 3);

}

addNumbers(1, 2, cubeOfNumber)


console.log(".............................................................");



// callback hell

// function function1(function() {
//     function function2(function() {
//         function function3(function() {
//             function function4() {

//             }

//         })

//     })
// })
