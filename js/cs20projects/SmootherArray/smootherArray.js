function smootherArray(anArray, howmany, printresult) { // smootherArray(Array, howmany) - howmany : it will runs 'howmany' times;
    var num;
    if (howmany > 1) {
        num = howmany;
    } else {
        num = 1;
    }
    var swt;
    println(printresult);
    if (printresult != undefined) {swt = 1;}
    if (printresult == 0) {swt = 0;}
    for (var j = 0; j < num; j++) {
        if (swt === 1) {
            println(anArray);
        }
        var maxLoop = 2 * anArray.length;
        for (var i = 0; i < maxLoop - 2; i+=2) {
            var ave = (anArray[i] + anArray[i + 1]) / 2;
            anArray.splice(i + 1, 0, ave);
        }
        if (swt === 1) {
            println(anArray);
        }
     }
}
