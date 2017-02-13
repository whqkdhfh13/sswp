function smootherArray(anArray, howmany) { // smootherArray(Array, howmany) - howmany : it will runs 'howmany' times;
    var num;
    if (howmany > 1) {
        num = howmany;
    } else {
        num = 1;
    }
    println(num);
    for (var j = 0; j < num; j++) {
        println(anArray);
        var maxLoop = 2 * anArray.length;
        for (var i = 0; i < maxLoop - 2; i+=2) {
            var ave = (anArray[i] + anArray[i + 1]) / 2;
            anArray.splice(i + 1, 0, ave);
        }
        println(anArray);
    }
}
