// var , let , const



// var


// function example1() {
//     var x=20;
//     console.log(x);

// }
// example1()
// console.log(x);
console.log("..................................................................");

function testVarScope() {
    if (true) {
        var y = 10;
        console.log(y);

    }
    console.log(y);

} testVarScope();

console.log(".............................................................");

// let


function letsBlockScope() {
    if (true) {
        let z = 29;
        console.log(z);

    }
} letsBlockScope();
console.log("................................................................");


// const

function constBlockScope() {
    if (true) {
        const num = 29;
    }
    if (false) {
        const num = 20;

    }
}
constBlockScope();
console.log("................................................................");