var a;
var cArray = [];
var swt = 0;
var buttonArray = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 30; i++) {
        cArray.push(color(random(255), random(255), random(255), 50));
    }
    for (var i = 0; i < 50; i++) {
        var w = random(20, 150);
        var h = random(20, 150);
        var x = random(0, width - w);
        var y = random(0, height - h);
        buttonArray.push(new button(x, y, w, h));
    }
    textAlign(CENTER);
}

function draw() {
    if (!keyIsPressed) {
        background(0,0,0,100);
        noStroke();
        for (var i = 0; i < buttonArray.length; i++){
            buttonArray[i].swt = 0;
            buttonArray[i].display();
            buttonArray[i].event();
        }
    }
}

function button(x, y, w, h) {
    this.rv = random([-1, 1]);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ySpeed = 3 * this.rv;
    this.gravity = random(0.02, 0.08) * this.rv;
    this.i = round(random(cArray.length-1));
    this.swt = 0;

    this.display = function() {
        fill(cArray[this.i]);
        rect(this.x, this.y, this.w, this.h);
    }
    this.event = function() {
        if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
            fill(0);
            textSize(24);
            text("Beep", this.x + this.w/2 + 5, this.y + this.h/2);
            this.swt = 1;
        }
        this.y += this.ySpeed;
        this.ySpeed += this.gravity;

        if (this.rv === 1) {
            if (this.y > height - this.h) {
                this.ySpeed = -3;
            }
        } else {
            if (this.y < 0) {
                this.ySpeed = 3;
            }
        }

        for (var i = 0; i < buttonArray.length; i++) {
            if (buttonArray[i].swt === 1 && this.swt !== 1) {
                fill(0);
                text("!!", this.x + this.w/2 + 5, this.y + this.h/2);
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
            if (buttonArray[j].i > cArray.length - 1) {buttonArray[j].i = 0;}
        }
    }
}
