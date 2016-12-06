// Space Shooter Asgn Start Code

// DECLARE GLOBAL VARIABLES
var shipImg;
var laserSound;
var laser = [];
var vot = false;

// PRELOAD FUNCTION - Guaranteed to finish before setup runs
function preload() {
    shipImg = loadImage("assets/ship.png");
    laserSound = loadSound("assets/laser.ogg");
}

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);
    noCursor();
    imageMode(CENTER);
    noStroke();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {

    // DRAWING
    background(0);
    fill(255);
    rect(0, 0, width, 50); // White Ceiling
    image(shipImg, mouseX, mouseY); // Ship

    // LOGIC
    for (var i = 0; i < laser.length; i++) {
        laser[i].call();
    }

    if (frameCount % 25 === 0 && vot) {
        laserSound.play();
        laser.push(new Laser(mouseX, mouseY));
    }

    println(vot);
}

function mousePressed() {
    vot = true;
}

function mouseReleased() {
    vot = false;
}
