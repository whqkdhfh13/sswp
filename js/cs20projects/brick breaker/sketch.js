
var bricks = [ // bricks[x][y] = life of that brick; my game has [x|0~6], [y|0~9]
	[], [], [], [], [], []
 ];
var currentStage = 1; // Number that will insert to brick after stageReset
var stageReset = 1; // Switch to reset stage, will be subtracted after Reset has done and will be added after all balls are come back
var incNum = 3, incSpeed = 1.5; // Number for bouncing hoop
var gameStatus = "run"; // I don't need it for now.
var balls = []; // Array for balls
var timer = 0; // Timer for fire balls, increasing every frames and will be reset to 0 when player start fire.
			   // in balls.js, there's function called fireBalls(), each balls will fire every 4 timer except 0.
var toggle = 0; // Switch to start fire, will increase when mouse is realised but won't work when balls are still flying.
var chkball = 0; // Will be increased when balls touch the green item. At stageReset, it will push balls [chkball] times.
var swt = 1; // To run stageReset only once. StageRese will run when swt is 0 and all ballStatus are standby.

function setup() {
	createCanvas(420, 575); // Tried to make it similar to mobile screen =]
	for (var i = 0; i < bricks.length; i++) { // Push column of 9 zero to each row.
		for (var j = 0; j < 9; j++) {
			bricks[i].push(0);
		}
	}
	balls.push(new ball(210, 516)); // Push first ball to start with.
}

function draw() {
	if (gameStatus == "start") {

	} else if (gameStatus == "run") { // I'll make start and finish status as well, after I build my game successfully.
		background(255, 255, 255, 120);
		incSpeed -= 0.07; // Gravity of green item's hoop.
		incNum += incSpeed;
		timer++; // As I said, timer will be added every frame.
		if (incNum < 0) {
			incSpeed = 1.5; // Make it Bounce
		}

		if (toggle === 1) { // Run fireBalls() when toggle is 1. It will become zero when last ball's status is fire.
			fireBalls();
		}

		if (balls[balls.length-1].ballStatus == "fire") { // When last ball's status is fire, set toggle and swt to 0.
			toggle = 0;
			swt = 0;
		}

		if (stageReset === 1) { // Run code when stageReset is 1. All bricks will move to 1 down and create new breaks.
			var chksum = 0;
			if (chkball > 0) { // If player has touch the green item, push the ball [chkball] times.
				for (var i = 0; i < chkball; chkball--) {
					balls.push(new ball(balls[0].x, balls[0].y));
				}
			}

			for (var i = 0; i < 6; i++) { // Move all bricks to 1 down. ex)bricks[0][0] -> bricks[0][1]
				bricks[i].unshift(0);
			}

			var rn = random([0, 1, 2, 3, 4, 5]); // Make green item to random location.
			if (bricks[rn][0] === 0) {
				bricks[rn][0] = -1;
			}

			for (var i = 0; i < floor(random(2, 7)); i++) { // Make bricks random times, if no brick is already exist there.
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

		var chksum2 = 0;
		for (var i = 0; i < balls.length; i++) {
			if (balls[i].ballStatus == "fire") {
				chksum2++;
			}
		}

		if (chksum2 === 0) {
			if (swt === 0) {
				stageReset++;
				swt++;
			}
			if (mouseX > 0 && mouseX < 420 && mouseY > 45 && mouseY < 500) {
				stroke(0, 150, 250);
				line(balls[0].x, balls[0].y, mouseX, mouseY);
			}
		}

		for (var i = 0; i < balls.length; i++) {

			balls[i].update();
			balls[i].display();

			if (balls[i].y > 515) {
				balls[i].ballStatus = "standby";
			}

			// To check if ball is stay inside the break
			var hor = floor((balls[i].x + 2) / 69);
			var ver = floor((balls[i].y + 75) / 50);
			for (var j = 0; j < 6; j++) {
				for (var k = 0; k < 9; k++) {
					if (balls[i].x >= j * 69 - 8 && balls[i].x <= (j + 1) * 69 + 12 && balls[i].y >= k * 50 + 65 && balls[i].y <= (k + 1) * 50 + 85) {
						if (bricks[j][k] == -1) {
							chkball++;
							bricks[j][k] = 0;
						}
					}
				}
			}
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
			balls[j].defineSpeed();
		}
		timer = 0;
		toggle++;
	}
}
