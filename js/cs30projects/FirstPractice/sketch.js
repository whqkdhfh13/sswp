var a;
var cArray;
var swt = 0;
var buttonArray = [];

function setup() {
    createCanvas(600, 400);
    buttonArray.push(new button(width/2, height/2, 150, 100));
    buttonArray.push(new button(100, 100, 100, 50));
    textAlign(CENTER);
    cArray = [color(0,0,255), color(255,0,255), color(0,255,255), color(255,255,0)];
}

function draw() {
    background(0);
    noStroke();
    for (var i = 0; i < buttonArray.length; i++){
        buttonArray[i].display();
        buttonArray[i].event();
    }
}

function button(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ySpeed = 3;
    this.gravity = 0.05;
    this.i = 0;
    this.swt = 0;

    this.display = function() {
        fill(cArray[this.i]);
        rect(this.x, this.y, this.w, this.h);
    }
    this.event = function() {
        if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            fill(0);
            textSize(24);
            text("Beep", this.x + this.w/2, this.y + this.h/2);
            this.swt = 1;
        }
        this.y += this.ySpeed;
        this.ySpeed += this.gravity;

        if (this.y > height - this.h) {
            this.ySpeed = -3;
        }

        for (var i = 0; i < buttonArray[i].length; i++) {
            if (buttonArray[i].swt === 1 && this.swt !== 1) {
                fill(0);
                text("!!", this.x + this.w/2, this.y + this.h/2);
            }
        }
    }
}

function mousePressed() {
    for (var j = 0; j < buttonArray.length; j++) {
        if (mouseIsPressed && mouseX > buttonArray[j].x && mouseX < buttonArray[j].x +
            buttonArray[j].w && mouseY > buttonArray[j].y && mouseY < buttonArray[j].y + buttonArray[j].h) {
            stroke(0);
            fill(0);
            text("Beep", buttonArray[j].x + buttonArray[j].w/2, buttonArray[j].y + buttonArray[j].h/2);
            buttonArray[j].i++;
            buttonArray[j].swt = 1;
            if (buttonArray[j].i > 3) {buttonArray[j].i = 0;}
        }
    }
}
