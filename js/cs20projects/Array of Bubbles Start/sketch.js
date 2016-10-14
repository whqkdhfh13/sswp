// Array of Bubbles Lesson

// DECLARE GLOBAL VARIABLES
var bubblesX;
var bubblesY;
var speed;


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);
    background(0);
    // Initialize Variables
    bubblesX = [];
    bubblesY = [];
    speed = 0.05;
    for (var num = 0; num < 60; num++) {
        bubblesX.push(random(0, width));
        bubblesY.push(random(0, height));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    background(0);
    move();
    display();
}

function move() {
    for (var i = 0; i < bubblesX.length; i++) {
        bubblesX[i] += random(-speed, speed);
        bubblesY[i] += random(-speed, speed);
    }
}

function display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    for (var i = 0; i < bubblesX.length; i++) {
        ellipse(bubblesX[i], bubblesY[i], 24, 24);
    }

}
