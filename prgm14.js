// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (i = 1; i <= 5; i++) {
    var str = "";
    for (j = 1; j <= i; j++) {
        str = str + j + ' '
    }
    console.log(str);

}