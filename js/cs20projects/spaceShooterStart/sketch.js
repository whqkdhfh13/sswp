// Space Shooter Asgn Start Code

// DECLARE GLOBAL VARIABLES
var shipImg;
var laserSound, laserSoundNew, laserChargingSound;
var laser = [];
var vot = false;
var rebound = 0;
var enemyColor = 255;
var am = 0;
var enemies = [];

// PRELOAD FUNCTION - Guaranteed to finish before setup runs
function preload() {
    shipImg = loadImage("assets/ship.png");
    laserSound = loadSound("assets/laser.ogg");
    laserSoundNew = loadSound("assets/blast.mp3");
    laserChargingSound = loadSound("assets/charging.mp3");
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
    fill(255,enemyColor,enemyColor);
    rect(0, 0, width, 50); // White Ceiling
    image(shipImg, mouseX, mouseY + rebound); // Ship

    // LOGIC
    am++;
    if (am > 30) {
        enemyColor = 255;
    }

    for (var i = 0; i < laser.length; i++) {
        laser[i].call();

        if (laser[i].hit()) {
            laser.splice(i, 1);
        }

        if (laser[i].y < 50) {
            laser.splice(i, 1);
            am = 0;
            enemyColor = 0;
        }

    }

    for (var i = 0; i < enemies.length; i++) {
        enemies[i].call();
        // if (enemies[i].hit()) {
        //     enemies.splice(i, 1);
        // }
    }

    if (frameCount % 60 == 0) {
        enemies.push(new makeEnemy(30,18));
    }

    if (frameCount % 25 === 0 && vot) {
        laserSoundNew.play();
        laser.push(new Laser(mouseX, mouseY));
        rebound += 10;
    }

    if (rebound >= 0) {
        rebound -= 0.4;
    } else {

    }
}

function mousePressed() {
    vot = true;
    laserChargingSound.play();

}

function mouseReleased() {
    vot = false;
}
