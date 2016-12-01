// ADD & REMOVE BOUNCING CIRCLES ASGN START CODE

// DECLARE GLOBAL VARIABLES
var circles = [];

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Variables
    for (var i = 0; i < 20; i++) {
        circles.push(new BouncingCircle(random(30, width - 30), random(30, height - 30), random(-5, 5), random(-5, 5)));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    for (var i = 0; i < circles.length; i++) {
        circles[i].call();
    }
}

function mousePressed() {
    var clicked = false;
    for (var i = 0; i < circles.length; i++) {
        if (circles[i].clicked()) {
            circles.splice(i, 1);
            clicked = true;
            break;
        }
    }

    if (!clicked) {
        circles.push(new BouncingCircle(mouseX, mouseY, random(-5, 5), random(-5, 5)));
    }
}

function keyPressed() {
    if (keyCode == 32) {
        circles = [];
    }
}
