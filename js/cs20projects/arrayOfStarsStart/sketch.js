
// DECLARE GLOBAL VARIABLES
var stars = [];
var speed = 3;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Variables
    for (var i = 0; i < 300; i++) {
        stars.push(new Star());
    }
}
// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);

    // Update & Display Star
    for (var i = 0; i < stars.length; i++) {
        stars[i].call();
    };

    // Change the speed
    if (keyIsDown(32)) {
        speed = 6;
    };


    // Move the stars
    if (keyIsDown(37)) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].x += speed;
        }
    };
    if (keyIsDown(38)) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].y += speed;
        }
    };
    if (keyIsDown(39)) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].x -= speed;
        }
    };
    if (keyIsDown(40)) {
        for (var i = 0; i < stars.length; i++) {
            stars[i].y -= speed;
        }
    };
}

function keyReleased() {
    if (keyCode == 32) {
        speed = 3;
    }
}
