// FALLING PLATFORMS START

// DECLARE GLOBAL VARIABLES
var xValues,
    yValues,
    xSpeed,
    ySpeeds,
    wdt;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(400, 400);

    // Initialize Variables
    xValues = [];
    yValues = [];
    ySpeeds = [];
    xSpeed = 0;
    for (var numItems = 0; numItems < 30; numItems++) {
        xValues.push(random(-width, 2 * width));
        yValues.push(random(0, height));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // LOGIC
    movePlatforms();
    for (var i = 0; i < xValues.length; i++) {
        xValues[i] += xSpeed;
    }

    // DRAW
    background(0);
    drawPlatforms();

    // Math stuff
    if (xSpeed === 2) {
        stroke(255,255,255);
        line(220,385,250,385);
        line(220,392,250,392);
    } else if (xSpeed === -2) {
        stroke(255,255,255);
        line(150,385,180,385);
        line(150,392,180,392);
    }
    stroke(0);
    // Draw player
    fill(0, 255, 0);
    rect(190, 380, 20, 20);
}

function movePlatforms() {
    for (var i = 0; i < xValues.length; i++) {
        yValues[i] += 1;
        if (yValues[i] > height) {
            xValues[i] = random(-width, 2 * width);
            yValues[i] = -20;
        }
    }
} // end movePlatforms

function drawPlatforms() {
    fill(120);
    stroke(0);
    for (var i = 0; i < xValues.length; i++) {
        rect(xValues[i], yValues[i], 50, 10);
    }
    stroke(0);
} // end drawPlatforms

function keyPressed() {
    println(keyCode);
    if (keyCode == 37) {
        xSpeed = 1;
    }
    if (keyCode == 39) {
        xSpeed = -1;
    }
    if (keyCode == 32) {
        xSpeed *= 2;
    }
}

function keyReleased() {
    if (keyCode == 37 || keyCode == 39) {
        xSpeed = 0;
    }
    if (keyCode == 32) {
        xSpeed *= 1/2;
    }
}
