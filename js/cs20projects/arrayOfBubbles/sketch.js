// ARRAY OF BUBBLES LESSON FINISHED CODE

// DECLARE GLOBAL VARIABLES
var bubbles;
var rcolor;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 400);

    // Initialize Variables
    bubbles = [];
    rcolors = [];
    for (var n = 0; n < 20; n++) {
        rcolors.push(color(random(255), random(255), random(255), 180));
        bubbles.push(new Bubble(random(width), random(height), rcolors[n]));
    }

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
    }

}

function keyPressed() {
    println(keyCode);
    if (keyCode == 32) {
        for(var i = 0; i < bubbles.length; i++) {
            rcolors.pop();
        }
        for(var i = 0; i < bubbles.length; i++) {
            rcolors.push(color(random(255), random(255), random(255), 180));
            bubbles[i].magic(i);
        }

        println(rcolors);
    }
}
