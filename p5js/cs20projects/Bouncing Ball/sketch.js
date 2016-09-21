var ball = {
	x: 200,
	y: 0,
	xspeed: 3,
	yspeed: 2,
	math: function(gspeed) {
		this.yspeed += gspeed;
		this.x = ball.x + this.xspeed;
		this.y = this.y + this.yspeed;
	},
	display: function(weight) {
		stroke(225);
		strokeWeight(weight);
		noFill();
		ellipse(this.x, this.y, 25, 25);
	},
	bouncing: function(resety,resetyspeed) {
		if (this.x > width || this.x < 0) {
			this.xspeed = this.xspeed * -1;
		}

		if (this.y > height || this.y < 0) {
			this.yspeed = this.yspeed * -1;
		}

		if (this.y > 410) {
			this.y = resety;
			this.yspeed = resetyspeed;
		}
	}
}


function setup() {

	createCanvas(400, 400);

}

function draw() {

	background(0);
	ball.math(1);
	ball.display(4);
	ball.bouncing(0,2);

}

function math(gspeed) {

	ball.yspeed += gspeed;
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;

}

function display(weight) {

	stroke(225);
	strokeWeight(weight);
	noFill();
	ellipse(ball.x, ball.y, 25, 25);

}

function bouncing(resety) {

	if (ball.x > width || ball.x < 0) {
		ball.xspeed = ball.xspeed * -1;
	}

	if (ball.y > height || ball.y < 0) {
		ball.yspeed = ball.yspeed * -1;
	}

	if (ball.y > 410) {
		ball.y = resety;
	}
}