function average(ave) {
    var hf=0,Ave;
    for(var i=0; i< ave.length; i++) {
        hf += ave[i];
    }
    Ave = hf / ave.length;
    println(hf / ave.length);
    return Ave;
}
