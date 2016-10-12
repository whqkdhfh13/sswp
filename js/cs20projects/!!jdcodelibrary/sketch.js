//For Script "drawDoor.js"

/*function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    //drawDoor(x, y, w, h, tColor, bColor)
    drawDoor(480, 230, 40, 60, "white", "blue");
    drawDoor(0, 500, 200, 500, "white", "red");
    drawDoor(300,400, 300, 60, "gray", "red");
}*/

//For Script

function setup() {
    noCanvas();

    var time = framesToTime(30000,60);
    println(time);
    var ave1,ave2,ave3,ave4,TotalAve;
    ave1 = average([3,7,9,5,6,6,6]);
    ave2 = average([1,23,75,-32,-68]);
    ave3 = average([1,7,9,9,8]);
    ave4 = average([7,7,7,7,1,4,8,5,4,2,1,3,6,9,5]);
    TotalAve = average([ave1, ave2, ave3, ave4]);

}

function framesToTime(numFrames, fps) {
    var totalSeconds = floor(numFrames / fps);
    var mins = floor(totalSeconds / 60);
    var secs = totalSeconds % 60;

    if(mins < 10) {
        mins = "0" + mins;
    }

    if(secs < 10) {
        secs = "0" + secs;
    }
    return mins + ":" + secs;
}

function average(ave) {
    var hf=0,Ave;
    for(var i=0; i< ave.length; i++) {
        hf += ave[i];
    }
    Ave = hf / ave.length;
    println(hf / ave.length);
    return Ave;
}
