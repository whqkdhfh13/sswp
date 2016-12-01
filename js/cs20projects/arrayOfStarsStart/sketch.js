
// DECLARE GLOBAL VARIABLES
var stars = [];
var speed = 3;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Variables
    // for (var i = 0; i < 300; i++) {
    //     stars.push(new Star(random(-width, 2 * width), random(-height, 2 * height)));
    // }
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
    if (stars.length > 1) {
        line(stars[stars.length-2].x, stars[stars.length-2].y, stars[stars.length-1].x, stars[stars.length-1].y);
    }
}

function keyReleased() {
    if (keyCode == 32) {
        speed = 3;
    }
}

function mousePressed() {
    var clicked = false;
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].isClicked()) {
            stars.splice(i, 1);
            clicked = true;
            break;
        }
    }

    // Add a star if none of the stars were clicked
    if (!clicked) {
        stars.push(new Star(mouseX, mouseY));
    }
}
