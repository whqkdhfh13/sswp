/*var ball = {
	x: 200,
	y: 0,
	xspeed: 4,
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
*/
var star1 = {
        x: 100,
        y: 100,
        size: 0,
        xspeed: 0,
        yspeed: 0,
        move: function() {
            this.x += this.xspeed;
            this.y += this.yspeed;
        },
        display: function() {
            ellipse(this.x, this.y, this.size)
        },
        reset: function() {
            if (this.x > 350 || this.y > 350) {
                this.x = 100,
                this.y = 100;
                this.size = random(10, 50);
                this.xspeed = random(1, 3);
                this.yspeed = random(1, 3);
            }
        },
        incsize: function() {
            this.size += 0.5;
        }
    },
    star2 = {
        x: 300,
        y: 100,
        size: 0,
        xspeed: 0,
        yspeed: 0,
        move: function() {
            this.x += this.xspeed;
            this.y += this.yspeed;
        },
        display: function() {
            ellipse(this.x, this.y, this.size)
        },
        reset: function() {
            if (this.x < 50 || this.y > 350) {
                this.x = 300,
                this.y = 100;
                this.size = random(10, 50);
                this.xspeed = random(-1, -3);
                this.yspeed = random(1, 3);
            }
        },
        incsize: function() {
            this.size += 0.5;
        }
    };
function setup() {

    createCanvas(400, 400);
    star1.size = random(10, 50);
    star1.xspeed = random(1, 4);
    star1.yspeed = random(1, 4);
    star2.size = random(10, 50);
    star2.xspeed = random(-1, -4);
    star2.yspeed = random(1, 4);
}

function draw() {

    background(0);
    /*ball.math(1);
	ball.display(4);
	ball.bouncing(0,2);*/
    star1.move();
    star2.move();
    star1.display();
    star2.display();
    star1.reset();
    star2.reset();
    star1.incsize();
    star2.incsize();
}
