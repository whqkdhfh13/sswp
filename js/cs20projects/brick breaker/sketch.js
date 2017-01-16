// CAUTION - bricks[y][x], not bricks[x][y].
var bricks = [
	[], [], [], [], [], []
 ];
var currentStage = 1;
var stageReset = 1;
var incNum = 3, incSpeed = 1.5;

function setup() {
	createCanvas(420, 575);
	for (var i = 0; i < bricks.length; i++) {
		for (var j = 0; j < 9; j++) {
			bricks[i].push(0);
		}
	}
}

function draw() {
	background(255);
	incSpeed -= 0.07;
	incNum += incSpeed;
	if (incNum < 0) {
		incSpeed = 1.5;
	}
	for (var x = 0; x < bricks.length; x++) {
		for (var y = 0; y < 10; y++) {
			if (bricks[x][y] > 0) {
				// brick shadow
				noStroke();
				fill(150, 150, 150, 80);
				rect(x * 69 + 6, 80 + y * 50, 68, 49);

				// brick
				fill(255,0,0);
				rect(x * 69 + 2, 75 + y * 50, 68, 49);

				// text
				stroke(255);
				fill(255);
				textSize(30);
				text(bricks[x][y], 10 + x * 70, 110 + y * 50);
			} else if (bricks[x][y] === -1) {

				// inner shadow
				noStroke();
				fill(150, 150, 150, 80);
				ellipse(x * 69 + 39, y * 50 + 105, 20);

				// outer shadow
				noFill();
				stroke(150, 150, 150, 80);
				strokeWeight(4);
				ellipse(x * 69 + 39, y * 50 + 105, 23 + incNum);

				// inner circle
				noStroke();
				fill(0, 230, 20);
				ellipse(x * 69 + 35, y * 50 + 100, 20, 20);

				// outer circle
				noFill();
				strokeWeight(4);
				stroke(0, 230, 20);
				ellipse(x * 69 + 35, y * 50 + 100, 23 + incNum);
			}
		}
	}

	if (stageReset === 1) {
		for (var i = 0; i < 6; i++) {
			bricks[i].unshift(0);
		}

		for (var j = 0; j < 6; j++) {
			var rn = random([0, 1, 2, 3, 4, 5]);
			if (bricks[rn][0] === 0) {
				bricks[rn][0] = -1;
			}
			break;
		}

		for (var i = 0; i < floor(random(2, 7)); i++) {
			var rn = random([0, 1, 2, 3, 4, 5]);
			if (bricks[rn][0] === 0) {
				bricks[rn][0] = currentStage;
			}
		}
		stageReset = 0;
		currentStage++;
	}

}

function keyPressed() {
	if (keyIsDown(32)) {
		stageReset++;
	}
}
