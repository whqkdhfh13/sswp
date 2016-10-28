// ARRAY VISUALIZER

// Use drawArray(anArray, low, high, scale);
// ...anArray is the array of numbers to be drawn.
// ...low is the lowest grid value, inclusive
// ...high is the highest grid value, inclusive
// ...scale is the scale for the grid

// Use drawHzLine(value, low, high, color);
// ...value is the y-value of the line on the scale
// ...low is the lowest grid value, inclusive
// ...high is the highest grid value, inclusive
// ...color is the color to draw the line

// Recommended to use arrays of 400 or less elements
// for a canvas width of 600.

// DECLARE GLOBAL VARIABLES
var myArray; // Array to be drawn
var outputStr; // Message at the top of the screen
var scaleDraw = 1;
var coppiedArray = [], booleanArray = 0;
var MaxNum, MinNum;
var RndNum;
var prefix = 0;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);

    // Initialize Variables
    myArray = [];
    for (var i = 0; i < 10; i++) {
        myArray.push(floor(random(1, 10)));
    }

    // Find Maximum number of Array from start of the code
    var cpArray = myArray.slice();
    cpArray.sort(function(a, b) {
        return a - b
    });

    MaxNum = cpArray[cpArray.length - 1];
    MinNum = cpArray[0];
    outputStr = "|| Array Visualizer || / Maximum = " + MaxNum + " / Minimum = " + MinNum + " /";
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    drawArray(myArray, 0 + prefix, MaxNum + scaleDraw, scaleDraw);
    drawHzLine(average(myArray), 0 + prefix, MaxNum + scaleDraw, color(255, 0, 0));
}

function keyPressed() {
    println(keyCode);
    RndNum = floor(random(1, 12));

    // Add RndNum to Front
    if (keyCode == 49) { // # 1
        myArray.splice(0, 0, RndNum);
    }

    // Remove RndNum from Front
    if (keyCode == 50) { // # 2
        myArray.splice(0, 1);
    }

    // Add RndNum to Middle of an Array
    if (keyCode == 51) { // # 3
        myArray.splice(floor(myArray.length * 1 / 2), 0, RndNum);
    }

    // Remove RndNum from Middle of an Array
    if (keyCode == 52) { // # 4
        myArray.splice(floor(myArray.length * 1 / 2), 1);
    }

    // Add RndNum to End
    if (keyCode == 53) { // # 5
        myArray.pop();
    }

    // Remove RndNum from End
    if (keyCode == 54) { // # 6
        myArray.push(RndNum);
    }

    // Add RndNum to Random location in the Array
    if (keyCode == 55) { // # 7
        myArray.splice(floor(random(0, myArray.length + 1)), 0, RndNum);
    }

    // Remove RndNum from Random location in the Array
    if (keyCode == 56) { // # 8
        myArray.splice(floor(random(0, myArray.length + 1)), 1);
    }

    if (keyCode == 37) { // Left Arrow
        if (scaleDraw > 1 && scaleDraw <= 5) {
            scaleDraw--;
        } else if (scaleDraw == 10) {
            scaleDraw -= 5;
        } else if (scaleDraw >= 10) {
            scaleDraw -= 10;
        }
    }

    if (keyCode == 39) { // Right Arrow
        if (scaleDraw >= 1 && scaleDraw < 5) {
            scaleDraw++;
        } else if (scaleDraw == 5) {
            scaleDraw += 5;
        } else if (scaleDraw >= 10) {
            scaleDraw += 10;
        }
    }

    if (keyCode == 38) { // Up Arrow
        prefix++;
    }

    if (keyCode == 40) { // Down Arrow
        prefix--;
    }

    if (keyCode == 82) { // R
        setup();
    }

    // Sort Array from lower # to higher #
    if (keyCode == 83 && booleanArray == 0) { // S
        coppiedArray = myArray.slice();
        booleanArray++;
        myArray.sort(function(a, b) {
            return a - b
        });
    } else if (keyCode == 83 && booleanArray == 1) {
        myArray = coppiedArray.slice();
        booleanArray--;
    }

    // Automatically find the maximum whenever key pressed
    if (booleanArray == 0) {
        var cpArray = myArray.slice();
        cpArray.sort(function(a, b) {
            return a - b
        });
        MaxNum = cpArray[cpArray.length - 1];
    } else if (booleanArray == 1) {
        MaxNum = myArray[myArray.length - 1];
    }
    outputStr = "|| Array Visualizer || / Maximum = " + MaxNum + " / Minimum = " + MinNum + " /";
}

// TODO : Find Maximum when I press M
