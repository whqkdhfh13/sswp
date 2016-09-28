// Draw a Level Start
// Cleanest code I've ever seen!!!

function setup() {
    createCanvas(800, 600);
}

function draw() {

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
    rect(0, 540, 800, 60);
    rect(0, 420, 240, 40);
    rect(0, 120, 20, 300);
    rect(0, 0, 200, 120);
    rect(100, 200, 200, 20);
    rect(300, 80, 40, 140);
    rect(340, 80, 100, 40);
    rect(440, 100, 160, 20);
    rect(460, 120, 40, 220);
    rect(420, 200, 40, 40);
    rect(680, 100, 120, 20);
    rect(580, 200, 220, 20);
    rect(500, 300, 300, 40);

}

function drawLadder(x, y, h, ldcolor) {
    fill(ldcolor);
    rect(x, y, 5, h); // Left Edge
    rect(x + 35, y, 5, h); // Right Edge

    // Draw Rungs
    var rungY = y + 20;
    while (rungY < y + h) {
        rect(x, rungY, 40, 2);
        rungY += 20;
    }
}

function drawVine(x, y, h, vcolor) {
    fill(vcolor);
    for (var i = 0; i < h; i++) {
        if (i % 2 === 0) { // even: draw left vine
            rect(x, y, 10, 20);
        } else { // odd: draw right vine
            rect(x + 10, y, 10, 20);
        }
        y += 20;
    }

}

function drawBox(x, y, size, outercolor, innercolor) {

    //Outer Rectangle
    fill(outercolor);
    rect(x, y, size, size);

    // Inner Rectangle
    fill(innercolor);
    var offset = 1 / 4 * size;
    var innerSize = 1 / 2 * size;
    rect(x + offset, y + offset, innerSize, innerSize);

}
