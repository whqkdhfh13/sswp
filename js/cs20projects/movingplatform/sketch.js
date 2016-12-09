var platforms = [];
var ra;
var pf1, pf2, pf3;

function setup() {
	createCanvas(600,400);
	for (var i = 0; i < 20; i++) {
		platforms.push(new createPlatform(ra, ra, ra, ra, ra, ra, ra))
	}

	// Uncomment to check Part 1
	// pf1 = new createPlatform(ra, ra, ra, ra, 3,  0);
	// pf2 = new createPlatform(ra, ra, ra, ra, 0, -2);
	// pf3 = new createPlatform(ra, ra, ra, ra, 2, -3);

	incNum = 0;
}

function draw() {
	background(0);

	for (var i = 0; i < platforms.length; i++) {
		platforms[i].call();
	}
}
