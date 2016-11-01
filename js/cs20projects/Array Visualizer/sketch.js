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
    array1 = [1, 3, 6, 8, 2];
    array2 = [3, 9, 8, 2, 4];
    array3 = [4, 1, 3, 8, 7];

    //Find the Maximum and Minimum by sort those arrays.
    var fmArray = array1.concat(array2, array3);
    fmArray.sort(function(a, b) {
        return a - b
    });

    MaxNum = fmArray[fmArray.length - 1];
    MinNum = fmArray[0];

    yMin = 1;
    if (yMin > 5) {
      yMin = MinNum - 5;
    }
    yMax = 5;
    yScl = 1;
    outputStr = "|| Array Visualizer || / Maximum = " + MaxNum + " / Minimum = " + MinNum + " /";
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    background(255,255,255);
    drawArrays(array1, array2, array3, yMin, MaxNum + yScl, yScl);

    drawHzLine(average(array1), yMin, MaxNum + yScl, color(0, 150, 250), 150);
    drawHzLine(average(array2), yMin, MaxNum + yScl, color(0, 150, 50), 180);
    drawHzLine(average(array3), yMin, MaxNum + yScl, color(250, 150, 0), 210);
}

function keyPressed() {
  println(keyCode);
  if (keyCode == 49) { // #1
    addNumber(array1, 2);
  }
  
  if (keyCode == 50) { // #2
    addNumber(array2, 2);
  }
  
  if (keyCode == 51) { // #3
    addNumber(array3, 2);
  }
  
  if (keyCode == 70) { // F
    if ((MaxNum - MinNum) / yScl > 15) {
      yScl +=1;
    }
  }

  // Findthe Max and Min everytime I press the key
  var fmArray = array1.concat(array2, array3);
  fmArray.sort(function(a, b) {
    return a - b
  });
  MaxNum = fmArray[fmArray.length - 1];
  MinNum = fmArray[0];
  outputStr = "|| Array Visualizer || / Maximum = " + MaxNum + " / Minimum = " + MinNum + " /";
}

function addNumber(array, num) {
  for (i = 0; i < array.length; i++) {
      array[i] +=num;
    }
}