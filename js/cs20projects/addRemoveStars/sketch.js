// ADD & REMOVE STARS LESSON FINISHED CODE

// DECLARE GLOBAL VARIABLES
var stars;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Variables
    stars = [];
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);

    // // Add a random star every second
    // if (frameCount % 60 === 0) {
    //     stars.push(new Star(random(width), random(height)));
    // }

    // // Remove a random star every second
    // if (frameCount % 60 === 0) {
    //     var randIndex = floor(random(stars.length));
    //     stars.splice(randIndex, 1);
    // }

    // Update & Display Stars
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].display();
    }
}

// EVENT FUNCTIONS
function keyPressed() {
    if (keyCode == 32) {
        stars.push(new Star(random(width), random(height)));
    }
}

function mousePressed() {
    // Check if a star is clicked
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
