// Helper Functions for Line Analyzer

function drawLine(pt1, pt2) {
	// Convert point ordered paris to pixels
	var x1 = map(pt1.x, -10, 10, 0, width);
	var y1 = map(pt1.y, -10, 10, height, 0);
	var x2 = map(pt2.x, -10, 10, 0, width);
	var y2 = map(pt2.y, -10, 10, height, 0);
	
	// Draw Line
	stroke(0, 255, 0);
	line(x1, y1, x2, y2);
	
	// Draw point 1
	noStroke();
	fill(pt1.fillColor);
	ellipse(x1, y1, 10, 10);
	
	// Draw point 2
	fill(pt2.fillColor);
	ellipse(x2, y2, 10, 10);
}

function drawCoordinatePlane() {
	// Draw a grid and axes.
	background(255);
	
	// Draw the grid
	stroke(0);
	// Draw horizontal lines
	for (var y = 0; y <= width; y += 20) {
		dashedLineHz(0, 400, 5, y);		
	}
	
	// Draw Vertical Lines
	for (var x = 0; x <= width; x += 20) {
		dashedLineVt(0, 400, 5, x);
	}
	
	// Draw Axes
	strokeWeight(3);
	line(0, 200, 400, 200); // x-axis
	line(200, 0, 200, 400); // y-axis
}

function dashedLineHz(xStart, xStop, length, y) {
	strokeWeight(1);
	for (var x = xStart; x <= xStop; x += 2 * length) {
		line(x, y, x + length, y);
	}
}

function dashedLineVt(yStart, yStop, length, x) {
	strokeWeight(1);
	for (var y = yStart; y <= yStop; y += 2 * length) {
		line(x, y, x, y + length);
	}
}