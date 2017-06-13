// twinkleArray Math Challange.

var bricks; // bricks[x][y] = life of that brick; my game has [x|0~6], [y|0~9].
var currentStage; // Number that will insert to brick after stageReset
var stageReset = 1; // Switch to reset stage, will be subtracted after Reset has done and will be added after all balls are come back
var incNum = 2, incSpeed = 1.2; // Number for bouncing hoop
var gameStatus = "run"; // We don't need it for now.
var balls; // Array for balls
var timer; // Timer for fire balls, increasing every frames and will be reset to 0 when player start fire.
			   // in balls.js, there's function called fireBalls(), each balls will fire every 4 timer except 0.
var toggle; // Switch to start fire, will increase when mouse is realised but won't work when balls are still flying.
var chkball; // Will be increased when balls touch the green item. At stageReset, it will push balls [chkball] times.
var swt; // To run stageReset only once. StageRese will run when swt is 0 and all ballStatus are standby.
var swt2 = 1; // Switch for savepoint.
var swt3 = 0; // Switch for menu.
var twinkleArray = [ // Array to make bricks twinkle when ball hits the brick.
	[], [], [], [], [], []
];
var sound;
var tg2;
var ballCount;
var score;

function preload() {
    sound = loadSound('bubble.mp3');
}

function setup() {
	score = 0;
	bricks = [
		[], [], [], [], [], []
	];
	twinkleArray = [
		[], [], [], [], [], []
	];
	balls = [];
	timer = 0;
	toggle = 0;
	chkball = 0;
	currentStage = 1;
	swt = 1;
	tg2 = 0;
	ballCount = 0;
	createCanvas(420, 585); // Tried to make it similar to mobile screen =].
	for (var i = 0; i < bricks.length; i++) { // Push column of 9 zero to each row.
		for (var j = 0; j < 9; j++) {
			bricks[i].push(0);
			twinkleArray[i].push(0);
		}
	}
	balls.push(new ball(210, 526)); // Push first ball to start with.
	textAlign(CENTER);
	noCursor();
}

function draw() {
	if (gameStatus == "run" || gameStatus == "menu") { // We'll make start and finish status as well, after I build my game successfully.
		if (login) {
			background(255, 255, 255, 150);

			// Mouse cursor
			noStroke();
			fill(0, 255, 255);
			ellipse(mouseX, mouseY, 5);
			noFill();
			stroke(0, 255, 255);
			strokeWeight(2);
			ellipse(mouseX, mouseY, 15);

			// Debugging

			if (gameStatus == "run") {
				incSpeed -= 0.05; // Gravity of green item's hoop.
				incNum += incSpeed;
				timer++; // As We said, timer will be added every frame.
			}

			if (incNum < 0) {
				incSpeed = 1.2; // Make it Bounce
			}

			if (toggle > 0) { // Run fireBalls() when toggle is 1. It will become zero when last ball's status is fire.
				fireBalls();
			}

			if (balls[balls.length-1].ballStatus == "fire") { // When last ball's status is fire, set toggle and swt to 0.
				toggle = 0;
				swt = 0;
				ballCount = 0;
			}

			if (stageReset === 1) {
				Reset();
			}

			var chksum2 = 0; // We will use this method so many times, it's beautiful.
			for (var i = 0; i < balls.length; i++) {
				if (balls[i].ballStatus == "fire") {
					chksum2++;
				}
			}

			if (chksum2 === 0) { // If all balls are standby,
				if (swt === 0) { // Run stageReset, and add 1 to swt that stageReset don't run twice.
					stageReset++;
					swt++;
				}

				if (mouseX > -210 && mouseX < 630 && mouseY < 500 && mouseIsPressed && tg2 > 1) { // Draw lines.
					strokeWeight(2);
					stroke(0, 150, 250);
					strokeWeight(3);
					line(balls[0].x, balls[0].y, mouseX, mouseY);
				}
			}

			loopBall(); // Loop for balls to display.
			loopBrick(); // Loop for bricks to display.

			var chksumd = 0;
	        for (var j = 0; j < balls.length; j++) {
	            if (balls[j].ballStatus == "standby") {chksumd++;}
	        }

	        if (chksumd === balls.length || toggle === 1) { // When all balls are at standby, draw balls that player has.
	            textSize(14);
				noStroke();
				fill(0, 0, 0, 50);
				rect(this.x - 10, 540, 20, 10);
	            fill(50, 165, 255);
	            text("X"+ (balls.length - ballCount), balls[0].xSP, 554);
	        }


			// Draw lines at Top and Bottom
			noStroke();
			fill(0);
			rect(0, 30, 420, 6);
			rect(0, 535, 420, 6);
			fill (255);
			rect(0, 0, 420, 30);

			// User Interface
			noStroke();
			fill(0);
			textSize(18);
			textWidth(18);
			text("User : "+nickname[authorizations($("#inputId").val(), "id")[1]]+"  ||   Score : "+score+"  ||  Record : "+bestScore[authorizations($("#inputId").val(), "id")[1]], width/2, 20);

			// Pop up!
			if (gameStatus == "menu") {
				noStroke();
				fill(255, 255, 255, 120);
				rect(0, 0, 420, 585);
				strokeWeight(6);
				stroke(20, 20, 20, 100);
				fill(100, 100, 100, 150);
				rect(60, 80, 300, 400);
			}
		}

	} else if (gameStatus == "finish") { // If gameStatus is 'finish', will run thos code.
		background(0);
		stroke(255);
		textSize(30);
		text("YOU SUCH AN LOSER", width/2, 300);
		if (bestScore[authorizations($("#inputId").val(), "id")[1]] < score) {
			bestScore[authorizations($("#inputId").val(), "id")[1]] = score - 1;
			localStorage.bestScore = bestScore.join(";");
		}
	}
}

function keyPressed() { // Just to test that stageReset is working or not.
	if (keyIsDown(32)) {
		if (gameStatus == "run") {
			gameStatus = "menu";
		} else {
			gameStatus = "run";
		}
	}
	println(keyCode);
}

function mouseReleased() { // Fire balls when mouse is Released, and all balls are at standby.
	if (tg2 > 1 && login) {
		var chksum = 0;
		var chksumc = 0;
		for (var i = 0; i < balls.length; i++) {
			if (balls[i].ballStatus == "fire") {chksum++;} // If chksum = 0, it means all balls are at standby.
			if (balls[i].ballStatus == "standby") {chksumc++;} // If chksumc = 0, it means all balls are at fire.
		}
		if (chksum === 0 && chksumc === balls.length && balls[0].y > mouseY) { // If all balls are at standby,
			for (var j = 0; j < balls.length; j++) {
				balls[j].defineSpeed(); // define speed and store it to each ball,
				timer = 0; // set timer to 0 so it will start from 0 again (timer++ line is inside draw function).
			}
			var chksume = 0;
	    	for (var k = 0; k < balls.length; k++) {
	    		if (balls[k].ballStatus == "fire") {chksume++;}
	    	}
	    	if (balls[0].ySpeed > -1.6 && chksume === 0) { // If ySpeed is lower than some amount, it will be changed before fire it.
	    		if (balls[0].xSpeed > 0) {
	    			for (var i = 0; i < balls.length; i++) {
	    				balls[i].ySpeed = -0.2 * balls[0].speed;
	    				balls[i].xSpeed = 0.95 * balls[0].speed;
	    			}
	    		} else if (balls[0].xSpeed < 0) {
	    			for (var i = 0; i < balls.length; i++) {
	    				balls[i].ySpeed = -0.2 * balls[0].speed;
	    				balls[i].xSpeed = -0.95 * balls[0].speed;
	    			}
	    		}
	    	}
			toggle++; // and toggle++ so it will run fireBalls function in balls.js.
		}
	}
}

function mousePressed() { // run game again when gameStatus is finish and press the mouse.
	if (gameStatus == "finish") {
		setup();
		stageReset++;
		gameStatus = "run";
	}
	if (mouseX > width || mouseY < 0 || mouseY > height || mouseY < 0) {
		tg2 = -1;
	}
	if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
		if (tg2 < 0) {
			tg2 = 0;
		}
	}
	tg2++;
}

function Reset() { // Run code when stageReset is 1. All bricks will move to 1 down and create new breaks.
	var chksum = 0;
	if (chkball > 0) { // If player has touch the green item, push the ball [chkball] times.
		for (var i = 0; i < chkball; chkball--) {
			balls.push(new ball(balls[0].x, balls[0].y));
		}
	}

	for (var i = 0; i < 6; i++) { // Move all bricks to 1 down. ex)bricks[0][0] -> bricks[0][1].
		bricks[i].unshift(0);
		if (bricks[i][8] > 0) { // Lose the game when any bricks hit the bottom
			gameStatus = "finish";
		}
	}

	var rn = random([0, 1, 2, 3, 4, 5]); // Make green item to random location.
	if (bricks[rn][0] === 0) {
		bricks[rn][0] = -1;
	}

	for (var i = 0; i < floor(random(2, 7)); i++) { // Make bricks random times, if no brick is already exist there.
		var rn = random([0, 1, 2, 3, 4, 5]);
		if (bricks[rn][0] === 0) {
			bricks[rn][0] = currentStage;
			chksum += bricks[rn][0]; // Add numbers to chksum.
		}
	}

	if (chksum === 0 && bricks[0][0] === 0) { // If chksum is 0, which means there's no brick, make 1 brick.
		bricks[0][0] = currentStage;
	} else if (chksum === 0 && bricks[1][0] === 0) { // If green item is already exist at bricks[0][0], make brick at bricks[1][0].
		bricks[1][0] = currentStage;
	}
	stageReset = 0; // Change stageReset value to 0 again.
	currentStage++; // Add 1 to currentStage.
	score++;
}

function loopBall() {
	for (var i = 0; i < balls.length; i++) { // Loop for balls
		if (gameStatus == "run") {
			balls[i].update();
		}
		balls[i].display();

		// Error detected at Line 130~155.
		var chksuma = 0;
		for (var j = 0; j < balls.length; j++) {
			if (balls[j].ballStatus == "fire") {chksuma++;}
		}
		if (balls[0].ballStatus == "fire" && chksuma == 1) {
			swt2 = 0;
		}

		// println("sp : " + balls[0].xSP + "\n swt2 : " + swt2 + "\n chksuma : " + chksuma);
		if (balls[i].y > 525) { // Make its status to standby when it touches the line at the bottom
			balls[i].ballStatus = "standby";
			if (swt2 === 0 && chksuma == balls.length) { // Set savepoint of first ball when first ball touches the bottom
				balls[0].xSP = balls[i].x;
				swt2++;
			}
		}

		// If all balls are standby, gather them to savepoint of the first ball
		if (chksuma === 0 && balls.length > 1 ) {
			for (var k = 0; k < balls.length; k++) {
				if (balls[0].xSP < 5) {balls[0].xSP = 5;}
				if (balls[0].xSP > 415) {balls[0].xSP = 415;}
				balls[k].x = balls[0].xSP;
			}
		}

	}
}

function loopBrick() {
	for (var x = 0; x < bricks.length; x++) { // Loop for bricks to draw them
		for (var y = 0; y < 10; y++) {
			if (bricks[x][y] > 0) { // If that index has an number of greater than 0, draw brick.
				// brick shadow
				noStroke();
				fill(150, 150, 150, 80);
				rect(x * 69 + 6, 90 + y * 50, 68, 49);

				// brick
				var diff = (currentStage - 1 - bricks[x][y]) / (currentStage - 1);
				if (twinkleArray[x][y] > 0 && twinkleArray[x][y] < 3) {
					fill(255,180,180);
					twinkleArray[x][y]++;
				} else if (twinkleArray[x][y] === 0) {
					fill(255,50 + 150*diff,50);
				} else if (twinkleArray[x][y] === 3) {
					fill(255,180,180);
					twinkleArray[x][y] = 0;
				}
				rect(x * 69 + 2, 85 + y * 50, 68, 49);

				// text
				strokeWeight(1);
				stroke(255);
				fill(255);
				textSize(33);
				text(bricks[x][y], 35 + x * 69, 120 + y * 50);
			} else if (bricks[x][y] === -1) { // If that index has an number of -1, draw green item.
				// inner shadow
				noStroke();
				fill(150, 150, 150, 80);
				ellipse(x * 69 + 39, y * 50 + 114, 20);

				// outer shadow
				noFill();
				stroke(150, 150, 150, 80);
				strokeWeight(4);
				ellipse(x * 69 + 39, y * 50 + 115, 24 + incNum);

				// inner circle
				noStroke();
				fill(0, 230, 20);
				ellipse(x * 69 + 35, y * 50 + 110, 20, 20);

				// outer circle
				noFill();
				strokeWeight(4);
				stroke(0, 230, 20);
				ellipse(x * 69 + 35, y * 50 + 110, 24 + incNum);
			}
		}
	}
}
