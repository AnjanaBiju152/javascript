// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (i = 1; i <= 5; i++) {  // number of lines
    var str = "";
    for (j = 1; j <= i; j++) {  //number of items
        str = str + j + ' '
    }
    console.log(str);

}
console.log(".......................................................................................");

// *
// * *
// * * *
// * * * *

for (i = 1; i <= 4; i++) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + '*' + ' '

    }
    console.log(str);

}

console.log("..............................................................");

// * * * * *
// * * * * *
// * * * * *

for (i = 1; i <= 3; i++) {
    var str = "";
    for (j = 1; j <= 5; j++) {
        str = str + '*' + ' '
    }
    console.log(str);
}
console.log("..........................................................................................");


// * * * * *
// * * * *
// * * *
// * *
// *

for (i = 5; i >= 1; i--) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + '*' + ' '
    }
    console.log(str);
}
console.log("......................................................");

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// 5 5 5 5

for (i = 1; i <= 5; i++) {
    var str = "";
    for (j = 1; j <= 4; j++) {
        str = str + i + ' '
    }
    console.log(str);
}
console.log("................................................................");


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (i = 1; i <= 5; i++) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + i + ' '
    }
    console.log(str);

}

console.log("................................................................");

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *


for (i = 1; i <= 4; i++) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + "*" + ' '
    }
    console.log(str);

}
for (i = 5; i >= 1; i--) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + '*' + ' '
    }
    console.log(str);
}
console.log("......................................................");
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

for (i = 1; i <= 4; i++) {
    var str = ""
    for (j = 1; j <= 5; j++) {
        str = str + j + ' '
    }
    console.log(str);
}
console.log("................................................................");
