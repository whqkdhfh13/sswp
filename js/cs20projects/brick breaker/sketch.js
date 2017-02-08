// CAUTION - bricks[y][x], not bricks[x][y].
var bricks = [
	[], [], [], [], [], []
 ];
var currentStage = 1;
var stageReset = 1;
var incNum = 3, incSpeed = 1.5;
var gameStatus = "run";
var balls = [];
var ballStatus = "standby";
var timer = 0;
var toggle = 0;
var swt = 0;

function setup() {
	createCanvas(420, 575);
	for (var i = 0; i < bricks.length; i++) {
		for (var j = 0; j < 9; j++) {
			bricks[i].push(0);
		}
	}
	for (var i = 0; i < 3; i++) {
		balls.push(new ball(210, 516));
	}
}

function draw() {
	if (gameStatus == "start") {

	} else if (gameStatus == "run") {
		background(255, 255, 255, 120);
		incSpeed -= 0.07;
		incNum += incSpeed;
		timer++;
		if (incNum < 0) {
			incSpeed = 1.5;
		}
		if (toggle === 1) {
			fireBalls();
		}
		if (balls[balls.length-1].ballStatus == "fire") {
			toggle = 0;
		}

		for (var i = 0; i < balls.length; i++) {

			if (balls[i].y > 515) {
				balls[i].ballStatus = "standby";
			}

			if (balls[0].ballStatus == "standby" && balls[balls.length-1].ballStatus == "standby") {
				stroke(0, 150, 250);
				line(balls[0].x, balls[0].y, mouseX, mouseY);
				println("work");
			}

			// To check if ball is stay inside the break
			var hor = floor((balls[i].x + 2) / 69);
			var ver = floor((balls[i].y + 75) / 50);
			for (var j = 0; j < 6; j++) {
				for (var k = 0; k < 9; k++) {
					if (balls[i].x >= j * 69 - 8 && balls[i].x <= (j + 1) * 69 + 12 && balls[i].y >= k * 50 + 65 && balls[i].y <= (k + 1) * 50 + 85) {
						if (bricks[j][k] == -1) {
							swt++;
							bricks[j][k] = 0;
							// I need to make game to reset after all balls are come back
						}
					}
				}
			}

			balls[i].update();
			balls[i].display();
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
			var chksum = 0;
			if (swt == 1) {
				balls.push(new ball(balls[0].x, balls[0].y));
				swt--;
			}
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
					chksum += bricks[rn][0];
				}
			}

			if (chksum === 0 && bricks[0][0] === 0) {
				bricks[0][0] = currentStage;
			} else if (chksum === 0 && bricks[1][0] === 0) {
				bricks[1][0] = currentStage;
			}
			stageReset = 0;
			currentStage++;
		}

		// Draw lines at Top and Bottom
		noStroke();
		fill(0);
		rect(0, 40, 420, 4);
		rect(0, 525, 420, 4);

	} else if (gameStatus == "finish") {

	}
}

function keyPressed() {
	if (keyIsDown(32)) {
		stageReset++;
	}
}

function mouseReleased() {
	var chksum = 0;
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].ballStatus == "fire") {chksum++;}
	}
	if (chksum === 0) {
		for (var j = 0; j < balls.length; j++) {
			println(j);
			println(balls);
			balls[j].defineSpeed();
		}
		timer = 0;
		toggle++;
	}
}
