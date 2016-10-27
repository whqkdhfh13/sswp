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
var myArray;  // Array to be drawn
var outputStr;  // Message at the top of the screen
var yValue;  // Y-value of the horizontal line
var addAmount = 10;
var removeAmount = 10;
var hotfix = 0;
var scaleDraw = 10;
var AofN = 100;
var coppiedArray = [], booleanArray = 0;
var MaxNum;


// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 600);

    // Initialize Variables
    myArray = [];
    MaxNum = "Press any key to find Maximum";
    outputStr = "Array Visualizer / Maximum = " + MaxNum;
    yValue = 5;
    for (var i = 0; i < 100; i += 1) {
        myArray.push(floor(random(0,101)));
    }
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(0);
    drawArray(myArray, 0, AofN + hotfix + scaleDraw, scaleDraw );
    drawHzLine(average(myArray), 0, AofN + hotfix + scaleDraw, color(255, 0, 0));
}

function keyPressed() {
    println(keyCode);

    if (keyCode == 49) { // # 1
        for (var i = 0; i < myArray.length; i++) {
            myArray[i] += addAmount;
        }
        hotfix += 10;
    }

    if (keyCode == 50) { // # 2
        for (var i = 0; i < myArray.length; i++) {
            myArray[i] -= 10;
        }
        hotfix -= 10;
    }

    if (keyCode == 83 && booleanArray == 0) { // S
        coppiedArray = myArray.slice();
        booleanArray++;
        myArray.sort(function(a, b){return a-b});
    } else if (keyCode == 83 && booleanArray == 1) {
        myArray = coppiedArray.slice();
        booleanArray--;
    }

    // Automatically find the maximum whenever key pressed
    if (booleanArray == 0) {
        var cpArray = myArray.slice();
        cpArray.sort(function(a, b){return a-b});
        MaxNum = cpArray[cpArray.length-1];
    } else if (booleanArray == 1) {
        MaxNum = myArray[myArray.length-1];
    }
    outputStr = "Array Visualizer / Maximum = " + MaxNum;
}

// TODO : Find Maximum when I press M
