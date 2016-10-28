function average(ave, dcm, boolearnA) {
    var hf=0,Ave;
    for(var i=0; i< ave.length; i++) {
        hf += ave[i];
    }
    Ave = hf / ave.length;
    if (boolearnA == "on") {
        println(hf / ave.length);
    }
    return Ave.toFixed(dcm);
}
