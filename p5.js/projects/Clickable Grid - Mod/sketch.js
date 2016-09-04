// CLICKABLE GRID
// Was MR. V

var SCREEN_WIDTH = 200;
var SCREEN_HEIGHT = 200;
var CELL_SIZE = 20;
var ROWS = SCREEN_HEIGHT / CELL_SIZE;
var COLS = SCREEN_WIDTH / CELL_SIZE;

var grid=[];

function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	noStroke();
	
	initialize();	
}

function draw() {

	// DRAW THE GRID
	var fillColour;
	for (var row = 0; row < ROWS; row++) {
		for (var col = 0; col < COLS; col++) {
			// set the color
			if (grid[row][col] === 0) { fillColour = color(0); }
			else { fillColour = color(0, 255, 0); }
			// draw the cell
			fill(fillColour);
			rect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
		}
	}
	
}

function mouseClicked() {
	var row = floor(mouseY / CELL_SIZE);
	var col = floor(mouseX / CELL_SIZE);
	
	if (grid[row][col] === 0) { 
		grid[row][col] = 1;
	}
	else {
		grid[row][col] = 0;
	}
}

function keyTyped() {
	if (keyCode === 32) {
		initialize();
	}
}

function initialize() {
     for(i=0;i<10;i++) {
          grid.push([0,0,0,0,0,0,0,0,0,0]);
     }
}


