// GLOBAL VARIABLES
var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;
var GROUND = 550;

var cloud1x, cloud1y, cloud2x, cloud2y;
var cloudWidth, cloudHeight;

function setup() {
	// Runs once at the beginning of program.
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	
	// Initialize global variables
	cloud1x = 200;
	cloud1y = 250;
	
	cloud2x = 350;
	cloud2y = 100;
	
	cloudWidth = random(50,150);
	cloudHeight = random(50,150);
}

function draw() {
	// Main Program Loop
	
	//LOGIC
   cloud1x -= random(0.5,3);
   cloud2x += random(0.5,3);
   
   if (cloud1x + cloudWidth /2 <0) {
      cloud1x = SCREEN_WIDTH + cloudWidth;
      cloud1y = random(100,500);
      
   }
   if (cloud2x - cloudWidth / 2 > 800) {
      cloud2x = 0 - cloudWidth;
      cloud2y = random(100,500);
   }



	// DRAWING
	background(0, 102, 255); // Blue Sky
	fill(0, 255, 0); // Green
	rect(0, GROUND, SCREEN_WIDTH, SCREEN_HEIGHT - GROUND); // Ground
	fill(255); // White
	ellipse(cloud1x, cloud1y, cloudWidth, cloudHeight); // Cloud #1
	ellipse(cloud2x, cloud2y, cloudWidth, cloudHeight); // Cloud #2
	
}