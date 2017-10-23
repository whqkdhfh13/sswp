// Global Variables
var char = new Char();
var gravity = 0.2;

function setup() {
    createCanvus(800, 800);
}

function draw() {
    // Character loop
    char.run();
}
