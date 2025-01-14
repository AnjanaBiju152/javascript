console.log("let , const , var ");


// var 
// ******************************

var x = 45; //global scope
//hosting possible
//variable re declaration and updation is possible

function printNum() {
    var m = 40 //function scope
    //outside fun not able to access
    x = 50// updation possible
    var x = 60 // re declaration possible
}
console.log(m); //error beacuse m has only fuction scope ,(inside fn only)

// ********************************************************************

// let


let num1 = 20; //global scope
function printNumberNew() {
    if (num1 === 20) {
        let x = 50;
        var m = 10;
        //let x=40 not possible
        //re declaration inside same block  not possible
        x = 20;//updation possible
    }
    else {
        let x = 90; //re declaration is possible outside/other block
    }
    console.log(x);//error ,beacuse x has only scope inside if block
    console.log(m);// possible, m has function scope ,so we can access
    //any where inside  printNumberNew() function
    //hoisting is also not possible

}
// **********************************************************************
// const

const m =45;
//1) block scope
//2) updation and redeclaration not possible
//3) assign the value at the time of declaration


