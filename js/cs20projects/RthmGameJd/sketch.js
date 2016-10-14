// let's start!!
var yValues,
    blocks,
    ytimed,
    speedValue,
    score,
    ytiminglaneoff,
	frameValue,
	negscoreamount,
    clrinc1, clrinc2, clrinc3;

function setup() {
	// Important Values
	yValues = [];
    blocks = [0, 2, 1, 1, 2, 0];
	ytimed = [3, 4, 5, 6, 7, 8];
	speedValue = 1;
	negscoreamount = 100;
    clrinc1 = 0;

	createCanvas(600, 800);
    score = "0";
    ytiminglaneoff = 600;

    clrinc1 = 0;
    clrinc2 = 0;
    clrinc3 = 0;

	for (var i = 0; i < blocks.length; i++) {
		yValues.push(ytiminglaneoff - ytimed[i] * 60 );
	}
}

function draw() {
    background(0, 0, 20);
    movePlatforms(speedValue, negscoreamount);
    drawUI();
	drawBlocks();
}

function movePlatforms(speed, negscoreamount) {
    for (var i = 0; i < blocks.length; i++) {
        yValues[i] += speed ;
        if (yValues[i] > height - 150) {
			yValues[i] += 200;
		}
		if (yValues[i] == 851) {
			score -= negscoreamount;
		}
    }
} // end movePlatforms

function drawUI() {

	// Draw UI
	// Underbar
    fill(200, 200, 0);
    rect(0, 760, 600, 40);

    // Score text
    fill(0);
    textSize(24);
    text("score : " + score, 10, 790);

    // Hitting Blocks
	fill(0+clrinc1,150+clrinc1,220+clrinc1);
	rect(0,ytiminglaneoff + 30,200,130);
	fill(220+clrinc2,175+clrinc2,0+clrinc2);
	rect(200, ytiminglaneoff + 30, 200, 130);
	fill(240+clrinc3,50+clrinc3,0+clrinc3);
	rect(400, ytiminglaneoff + 30, 200, 130);

	// Seperating lines
    stroke(255);
    line(200, 0, 200, 760);
    line(400, 0, 400, 760);
    line(0, ytiminglaneoff + 30, 600, ytiminglaneoff + 30);
    line(0, ytiminglaneoff, 600, ytiminglaneoff);
    stroke(0);

}

function drawBlocks() {

	// Loop function
	for(var i=0; i < blocks.length; i++) {
		var ii = blocks[i] * 200
        if (blocks[i] == 0) {
            fill(0,150,220);
        } else if (blocks[i] == 1) {
            fill(220,175,0);
        } else if (blocks[i] == 2) {
            fill(240,50,0);
        }
		rect(ii,yValues[i], 200, 20);
	}
}

function keyPressed() {
    println(keyCode);

    // Increase amount of number inside fill
    if (keyCode == 37) {
        clrinc1 = 20;
    }
    if (keyCode == 40) {
        clrinc2 = 20;
    }
    if (keyCode == 39) {
        clrinc3 = 20;
    }
}

function keyReleased() {

    // Decrease amount of number inside fill
    if (keyCode == 37) {
        clrinc1 = 0;
    }
    if (keyCode == 40) {
        clrinc2 = 0;
    }
    if (keyCode == 39) {
        clrinc3 = 0;
    }
}
