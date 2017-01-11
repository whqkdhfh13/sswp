// CAUTION - bricks[y][x], not bricks[x][y].
var bricks = [
	[], [], [], [], [], []
 ];

function setup() {
	createCanvas(420, 575);
	for (var i = 0; i < bricks.length; i++) {
		for (var j = 0; j < 6; j++) {
			bricks[i].push(0);
		}
	}
}

function draw() {
	background(255);
	for (var x = 0; x < bricks.length; x++) {
		for (var y = 0; y < 10; y++) {
			if (bricks[x][y] > 0) {
				fill(150, 150, 150, 80);
				rect(x * 69 + 4, 80 + y * 50, 68, 49);
				fill(255,0,0);
				rect(x * 69, 75 + y * 50, 68, 49);
				stroke(255);
				fill(255);
				textSize(30);
				text(bricks[x][y], 10 + x * 70, 110 + y * 50);
			}
		}
	}

	bricks[0][0] = 1;
	bricks[0][4] = 140;
	bricks[5][0] = 1;
	bricks[0][1] = 2;
	bricks[1][0] = 1;
	bricks[3][8] = 199;
	bricks[2][7] = 198;
}
