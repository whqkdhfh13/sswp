// ARRAY VISUALIZER

// DECLARE GLOBAL VARIABLES
var array1, array2, array3;  // Arrays to be drawn, should be same length
var yMin, yMax, yScl; // Vertical Axis Values
var outputStr;  // Message at the top of the screen
var scaleDraw = 1;
var coppiedArray = [], booleanArray = 0;
var MaxNum, MinNum;
var RndNum;
var prefix = 0;

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    var cnv = createCanvas(600, 600);
    cnv.parent(container);

    // Initialize Variables
    array1 = [1, 1, 1, 1, 1];
    array2 = [2, 2, 2, 2, 2];
    array3 = [3, 3, 3, 3, 3];

    //Find the Maximum and Minimum by sort those arrays.
    var fmArray = array1.concat(array2, array3);
    fmArray.sort(function(a, b) {
        return a - b
    });

    MaxNum = fmArray[fmArray.length - 1];
    MinNum = fmArray[0];


    yMin = 0;
    yMax = 5;
    yScl = 1;
    outputStr = "|| Array Visualizer || / Maximum = " + MaxNum + " / Minimum = " + MinNum + " /";
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(255);
    drawArrays(array1, array2, array3, yMin, MaxNum + yScl, yScl);

    drawHzLine(array1, average(array1), yMin, MaxNum + yScl, color(255, 0, 0), 150);
    drawHzLine(array2, average(array2), yMin, MaxNum + yScl, color(255, 0, 0), 200);
    //drawHzLine(25, yMin, yMax, color(0, 255, 0));
}

function keyPressed() {

}
