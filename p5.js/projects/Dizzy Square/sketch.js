var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

// Square Variables: (x,y) is center; size is the width and height
var x = SCREEN_WIDTH / 2;
var y = SCREEN_HEIGHT / 2;
var squareSize = 50;

// Game data
var gameState = "start";  // start, action, end
var startTime;
var endTime;

function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	textAlign(CENTER);
	rectMode(CENTER)
}

function draw() {
	background(0);
	
	if (gameState === "start") {
		// Draw Start Screen
		textSize(36);
		text("DIZZY SQUARE!", SCREEN_WIDTH / 2, 100);
		
		textSize(24);
		text("Click the MOUSE to begin.", SCREEN_WIDTH / 2, 150);
		fill(0, 0, 255);
		rect(x, y, squareSize, squareSize);
	}
	else if (gameState === "action") {
		// Randomly move square and draw time and square
		x += random(-15, 15);
		y += random(-15, 15);
		fill(255);
		textSize(24);
		text(frameCount - startTime, 50, 50);
		fill(0, 0, 255);
		rect(x, y, squareSize, squareSize);
		
		// If at edge of screen, save time, end game and re-center
		var radius = squareSize / 2;
		if (x - radius < 0 || x + radius > SCREEN_WIDTH || y - radius < 0 || y + radius > SCREEN_HEIGHT) {
			gameState = "end";
			endTime = frameCount;
			x = SCREEN_WIDTH / 2;
			y = SCREEN_HEIGHT / 2;
		}
	}
	else if (gameState === "end") {
		// Draw End Screen
		textSize(36);
		text("THE END!", SCREEN_WIDTH / 2, 100);
		
		textSize(24);
		text("Click the MOUSE to try again.", SCREEN_WIDTH / 2, 150);
		fill(0, 0, 255);
		rect(x, y, squareSize, squareSize);
		
		text("Time: " + (endTime - startTime), SCREEN_WIDTH / 2, 400);
	}
}

function mousePressed() {
	if (gameState === "start" || gameState === "end") {
		gameState = "action";
		startTime = frameCount;
	}
}