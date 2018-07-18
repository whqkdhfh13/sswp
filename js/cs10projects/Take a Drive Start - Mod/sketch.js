// GLOBAL VARIABLES
var SCREEN_WIDTH = 300;
var SCREEN_HEIGHT = 400;
var LINE_HEIGHT = 50;

var line1y, line2y, line3y, line4y, line5y, speed;
var carX,rectX,rectY=0,rn,st,et;

function lose() {
          if(rectX===carX && SCREEN_HEIGHT - 125 < rectY && SCREEN_HEIGHT - 75 > rectY) {
               text("You Lose\n"+frameCount, 100, 100);
               noLoop();
               setTimeout(loop, 3000);
               rectX=175,rectY=0;
               st=0;
          }
}

function setup() {
  	// Runs once at the beginning of program.
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	
	// Initialize Variables
	// 4 Road Lines
	line1y = 0;  // top of line
	line2y = LINE_HEIGHT * 2;
	line3y = LINE_HEIGHT * 4;
	line4y = LINE_HEIGHT * 6;
	strokeWeight(5); // line thickness
	speed = 5;
	
	// Car
	carX = 75;
	rectX = 75;
}

function draw() {
  	// Main Program Loop
     
     rn=random(0,2);	
	// LOGIC
	// Move Road Lines
	line1y += speed;
	line2y += speed;
	line3y += speed;
	line4y += speed;
	rectY  += 0.6*speed;
	// If lines go off the bottom, reposition to just above screen
	if (line1y > SCREEN_HEIGHT) { line1y = 0 - LINE_HEIGHT; }
	if (line2y > SCREEN_HEIGHT) { line2y = 0 - LINE_HEIGHT; }
	if (line3y > SCREEN_HEIGHT) { line3y = 0 - LINE_HEIGHT; }
	if (line4y > SCREEN_HEIGHT) { line4y = 0 - LINE_HEIGHT; }
	if (rectY  > SCREEN_HEIGHT) { rectY  = 0 - 50;}
	// Speed up lines every 2 seconds (default FPS is 60 frames per second)
	if (frameCount % 120 === 0) {
	     speed+= 0.5; println(speed);}
	     
	
	// DRAW
     if (rectY > SCREEN_HEIGHT - 1) { 
          if (rn < 1 && rn > 0) {
               rectX = 75;
          } 
          else if(rn > 1 && rn < 2) {
               rectX = 175
          }
     }
	// Draw green background and road.
	background(0, 255, 0);
	stroke(0);
	fill(120, 120, 120);
	rect(60, -10, 180, SCREEN_HEIGHT + 20);
     println(rectX+","+rectY+"   ,"+rn);
	// Draw FrameCount
	noStroke();
	fill(255);
	textSize(20);
	text(st, 10, 20);
	
	// Draw Road Lines
	stroke(255);
	line(SCREEN_WIDTH / 2, line1y, SCREEN_WIDTH / 2, line1y + LINE_HEIGHT);
	line(SCREEN_WIDTH / 2, line2y, SCREEN_WIDTH / 2, line2y + LINE_HEIGHT);
	line(SCREEN_WIDTH / 2, line3y, SCREEN_WIDTH / 2, line3y + LINE_HEIGHT);
	line(SCREEN_WIDTH / 2, line4y, SCREEN_WIDTH / 2, line4y + LINE_HEIGHT);

     // Draw Green Car
	fill(0,255,0);
	rect(rectX,rectY,50,50);
	
	// Draw Car
	fill(255, 0, 0);
	noStroke();
	rect(carX, SCREEN_HEIGHT - 100, 50, 50);

function keyIsPressed() {
     if(keyCode === LEFT_ARROW) {carX=75}
     if(keyCode === RIGHT_ARROW) {carX=175}
     
}
     keyIsPressed();
     lose();
     
}
