let currColor;

function setup() {
    createCanvas(500, 500);
    background(255);
    currColor = color(0, 0, 0);
}

function draw() {
    // background(255);
    fill(currColor);
    noStroke();
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 20);
    }
    fill(100);
    rect(0, 0, 50, 50);
    fill(150, 0, 0);
    rect(50, 0, 50, 50);
}

function mousePressed() {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        background(255);
    }
    if (mouseX > 50 && mouseX < 100 && mouseY > 0 && mouseY < 50) {
        currColor = color(150, 0, 0);
    }
}
