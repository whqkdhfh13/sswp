// Gravity Circle Starting Code

// DECLARE GLOBAL VARIABLES
var circles = [];

// SETUP FUNCTION - Runs once at beginning of the program
function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 15; i++) {
        circles.push(new drawaCircle());
    }
}

function drawaCircle() {
    this.x = random(width);
    this.r = random(10, 50);
    this.y = random(0,height-this.r);
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.g = 1;
    this.launchSpeed = random(-30, -10);
    this.col = color(random(255), random(255), random(255));

    this.update = function() {
        // Move & Bounce a Circle Horizontally
        this.x += this.xSpeed;
        if (this.x < 0 || this.x > width) {
            this.xSpeed = this.xSpeed * -1;
        }

        // Move & Bounce this Vertically
        this.y += this.ySpeed;
        this.ySpeed += this.g;  // Apply gravity
        if (this.y + this.r > height) {
            this.ySpeed = this.launchSpeed; // Reset to launch speed
            this.launchSpeed = this.launchSpeed * 0.9; // Energy loss
        }
    };

    this.display = function() {
        noFill();
        stroke(this.col);
        strokeWeight(4);
        ellipse(this.x, this.y, 2 * this.r);
    };
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw(){
    // DRAWING
    background(0);
    run();
}

function run(){
    for (var i = 0; i < circles.length; i++) {
        circles[i].update();
        circles[i].display();
        if (mouseX >= circles[i].x && mouseX <= circles[i].x + circles[i].r && mouseY >= circles[i].y + circles[i].r - 10 && mouseY <= circles[i].y + circles[i].r + 50) {
            circles[i].ySpeed = circles[i].launchSpeed ;
        }
    }
}
