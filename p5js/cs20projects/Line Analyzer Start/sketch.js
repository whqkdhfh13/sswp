// Line Analyzer

// Global Variables
var point1 = {
	x: -5,
	y: -5,
	fillColor: "red"
};

var point2 = {
	x: 5,
	y: 5,
	fillColor: "blue"
};

var point3 = {
	x: 0,
	y: -5,
	fillColor: "blue"
};

var point4 = {
	x: 10,
	y: 5,
	fillColor: "blue"
};

var selected = point1; // Use to keep track of which point is currently selected

// Set up & Draw
function setup() {
	createCanvas(400, 400);
}

function draw() {
	drawCoordinatePlane();
	drawLine(point1, point2); // Line 1
	drawLine(point3, point4); // Line 2
}

// Events
function keyTyped() {
	if (key === " ") {
		// Perform Calculations when space key is pressed
		// For now just use println to output results.
		println("CALCULATION RESULTS");

		// ***** INVOKE YOUR FUNCTIONS BELOW... *****
		distance(point1,point2)







	} else if (key === "1") {
		// Select point 1
		selected.fillColor = "blue"; // Deselect the current point
		selected = point1; // Assign selected point to point 1
		selected.fillColor = "red"; // Set color of new selected point

	} else if (key === "2") {
		// Select point 2
		selected.fillColor = "blue"; // Deselect the current point
		selected = point2; // Assign selected point to point 1
		selected.fillColor = "red"; // Set color of new selected point
	} else if (key === "3") {
		// Select point 3
		selected.fillColor = "blue"; // Deselect the current point
		selected = point3; // Assign selected point to point 1
		selected.fillColor = "red"; // Set color of new selected point
	} else if (key === "4") {
		// Select point 4
		selected.fillColor = "blue"; // Deselect the current point
		selected = point4; // Assign selected point to point 1
		selected.fillColor = "red"; // Set color of new selected point
	}
}

function keyPressed() {
	// Move selected point
	if (keyCode === RIGHT_ARROW) {
		selected.x += 1;
	} else if (keyCode === LEFT_ARROW) {
		selected.x -= 1;
	} else if (keyCode === UP_ARROW) {
		selected.y += 1;
	} else if (keyCode === DOWN_ARROW) {
		selected.y -= 1;
	}
}

// ***** DEFINE YOUR FUNCTIONS BELOW... *****
function distance(pA, pB) {
	var run = pB.x - pA.x, 
		rise = pB.y - pA.y,
		d = sqrt (sq(run) + sq(rise) );
		return d;
}















