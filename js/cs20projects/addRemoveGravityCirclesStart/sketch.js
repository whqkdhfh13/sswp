// ADD & REMOVE GRAVITY CIRCLES ASGN START CODE

// DECLARE GLOBAL VARIABLES
var circles = [];

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Global Variables
    for (var i = 0; i < 20; i++) {
        circles.push(new GC(random(25, width - 25), random(0, height - 25)));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    for (var i = 0; i < circles.length; i++) {
        circles[i].call();

        if (circles[i].launchSpeed > -1) {
            circles.splice(i, 1);
        }
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
        circles.push(new GC(mouseX, mouseY));
    }
}
