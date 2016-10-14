// Draw a Level Start
// Cleanest code I've ever seen!!!
var prefA = 1;

function setup() {}

function draw() {

    createCanvas(800*prefA, 600*prefA);
    background(0);

    // DRAW PLATFORMS
    drawBackground(color(255, 125, 180));

    // DRAW LADDERS (all have width of 40px)
    drawLadder(40, 120, 300, color(0, 0, 255));
    drawLadder(240, 0, 200, color(0, 0, 255));
    drawLadder(360, 120, 260, color(0, 0, 255));
    drawLadder(520, 120, 180, color(0, 0, 255));
    drawLadder(620, 40, 160, color(0, 0, 255));

    // DRAW VINES (all have total width of 20px and link height of 20px)
    drawVine(280, 220, 6, color(0, 255, 0));
    drawVine(420, 240, 10, color(0, 255, 0));
    drawVine(600, 340, 8, color(0, 255, 0));

    // DRAW BOXES
    drawBox(140, 400, 20, color(0, 0, 255), color(255, 255, 0));
    drawBox(340, 60, 20, color(0, 255, 0), color(255, 255, 0));
    drawBox(740, 280, 20, color(255, 0, 0), color(255, 255, 0));

} // End draw()

function drawBackground(bgcolor) {

    fill(bgcolor);
    noStroke();
    rect(0*prefA, 540*prefA, 800*prefA, 60*prefA);
    rect(0*prefA, 420*prefA, 240*prefA, 40*prefA);
    rect(0*prefA, 120*prefA, 20*prefA, 300*prefA);
    rect(0*prefA, 0*prefA, 200*prefA, 120*prefA);
    rect(100*prefA, 200*prefA, 200*prefA, 20*prefA);
    rect(300*prefA, 80*prefA, 40*prefA, 140*prefA);
    rect(340*prefA, 80*prefA, 100*prefA*prefA, 40*prefA);
    rect(440*prefA, 100*prefA, 160*prefA, 20*prefA);
    rect(460*prefA, 120*prefA, 40*prefA, 220*prefA);
    rect(420*prefA, 200*prefA, 40*prefA, 40*prefA);
    rect(680*prefA, 100*prefA, 120*prefA, 20*prefA);
    rect(580*prefA, 200*prefA, 220*prefA, 20*prefA);
    rect(500*prefA, 300*prefA, 300*prefA, 40*prefA);

}

function drawLadder(x, y, h, ldcolor) {
    fill(ldcolor);
    rect(x*prefA, y*prefA, 5*prefA, h*prefA); // Left Edge
    rect((x + 35)*prefA, y*prefA, 5*prefA, h*prefA); // Right Edge

    // Draw Rungs
    var rungY = (y + 20)*prefA;
    while (rungY < (y + h)*prefA) {
        rect(x*prefA, rungY*prefA, 40*prefA, 2*prefA);
        rungY += 20*prefA;
    }
}

function drawVine(x, y, h, vcolor) {
    fill(vcolor);
    for (var i = 0; i < h; i++) {
        if (i % 2 === 0) { // even: draw left vine
            rect(x*prefA, y*prefA, 10*prefA, 20*prefA);
        } else { // odd: draw right vine
            rect((x + 10)*prefA, y*prefA, 10*prefA, 20*prefA);
        }
        y += 20*prefA;
    }

}

function drawBox(x, y, size, outercolor, innercolor) {

    //Outer Rectangle
    fill(outercolor);
    rect(x*prefA, y*prefA, size*prefA, size*prefA);

    // Inner Rectangle
    fill(innercolor);
    var offset = (1 / 4 * size)*prefA;
    var innerSize = (1 / 2 * size)*prefA;
    rect((x + offset)*prefA, (y + offset)*prefA, innerSize*prefA, innerSize*prefA);

}

function keyPressed() {
    println(keyCode);
    if (keyCode == 90) {
        prefA += 0.05;
    }
    if (keyCode == 88) {
        prefA -= 0.05;
    }
}
