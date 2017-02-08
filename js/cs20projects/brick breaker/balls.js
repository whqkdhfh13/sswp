function ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 8;
    this.xSpeed = 0;
    this.xSP = 210;
    this.ySpeed = 0;
    this.ballStatus = "standby";


    this.update = function() {
        if (this.x > 410 || this.x < 10) {
            this.xSpeed *= -1;
        }
        if (this.y < 55) {
            this.ySpeed *= -1;
        }
        if (this.ballStatus == "fire") {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

    };

    this.defineSpeed = function() {
        var h = dist(this.x, this.y, mouseX, mouseY);
        this.xSpeed = this.speed * (mouseX - this.x) / h;
        this.ySpeed = this.speed * (mouseY - this.y) / h;
    };

    this.display = function() {
        noStroke();
        fill(0, 255, 0);
        ellipse(this.x, this.y, 20, 20);
        textSize(12);
        stroke(255);
        fill(0, 200, 0);
        if (balls[0].ballStatus == "standby" && balls[balls.length-1].ballStatus == "standby") {
            text("X"+balls.length, this.x - 7, 540);
        }
    };
}

function fireBalls() {
	println(timer);
	if (balls[0].ySpeed > -1.6) {
		if (balls[0].xSpeed > 0) {
			for (var i = 0; i < balls.length; i++) {
				balls[i].ySpeed = -1.6;
				balls[i].xSpeed = 7.6;
			}
		} else if (balls[0].xSpeed < 0) {
			for (var i = 0; i < balls.length; i++) {
				balls[i].ySpeed = -1.6;
				balls[i].xSpeed = -7.6;
			}
		}
	}
	if (timer % 4 === 0 && timer > 0) {
		balls[timer/4 - 1].ballStatus = "fire";
	}
}
