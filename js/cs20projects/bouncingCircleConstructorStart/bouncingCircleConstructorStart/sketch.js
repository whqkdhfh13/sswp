// BOUNCING CIRCLE CONSTRUCTOR ASGN START CODE

// DECLARE GLOBAL VARIABLES
var balls = [];
var num = 15;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < num; i++) {
        balls.push(new bouncingC(random(-3, 3), random(-3, 3)))
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    for (var i = 0; i < balls.length; i++) {
        balls[i].call();
    }
}

function bouncingC(xSpeed, ySpeed) {
    this.r = random(15, 150);
    this.x = random(this.r, width - this.r);
    this.y = random(this.r, height - this.r);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.cols = color(random(255), random(255), random(255), 180);
    this.colf = color(random(255), random(255), random(255), 30);

    this.magic = function() {
        this.x = random(this.r, width - this.r);
        this.y = random(this.r, height - this.r);
        if (this.xSpeed > 0) { this.xSpeed++; }
        else if (this.xSpeed < 0) { this.xSpeed--; }
        if (this.ySpeed > 0) { this.ySpeed++; }
        else if (this.ySpeed < 0) { this.ySpeed--; }
    }
    this.call = function() {
        // update
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x <= 1/2 * this.r || this.x >= width - 1/2 * this.r) { this.xSpeed *= -1; }
        if (this.y <= 1/2 * this.r || this.y >= height - 1/2 * this.r) { this.ySpeed *= -1; }

        // display
        stroke(this.cols, 180);
        fill(this.colf, 30);
        ellipse(this.x, this.y, this.r);
    }
}

function mousePressed() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].magic();
    }
}
