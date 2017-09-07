var a;

function setup() {
    createCanvas(600, 400);
    a = new button();
    textAlign(CENTER);
}

function draw() {
    background(0);
    a.display();
    a.event();
}

function button() {
    this.display = function() {
        rect(225, 150, 150, 100);
    }
    this.event = function() {
        if (mouseIsPressed && mouseX > 225 && mouseX < 375 && mouseY > 150 && mouseY < 250) {
            stroke(0);
            fill(0);
            text("Beep", 300, 200);
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
    }
}
