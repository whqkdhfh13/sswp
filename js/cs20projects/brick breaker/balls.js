function ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 8;
    this.xSpeed = 0;
    this.xSP = 210;
    this.ySpeed = 0;
    this.ballStatus = "standby";
    this.swi = 0;

    this.update = function() {
        if (this.x > 410 || this.x < 10) {
            this.xSpeed *= -1;
        }
        if (this.y < 45) {
            this.ySpeed *= -1;
        }
        if (this.ballStatus == "fire") {
            this.swi = 0;
            this.x += this.xSpeed;
            for (var j = 0; j < 6; j++) {
				for (var k = 0; k < 9; k++) {
					if (this.x >= j * 69 - 8 && this.x <= (j + 1) * 69 + 12 && this.y >= k * 50 + 65 && this.y <= (k + 1) * 50 + 85) {
						if (bricks[j][k] == -1) {
							chkball++;
							bricks[j][k] = 0;
						} else if (bricks[j][k] > 0) {
                            this.xSpeed *= -1;
                            this.x += this.xSpeed;
                            bricks[j][k]--;
                            this.swi++;
                        }
					}
				}
			}
            this.y += this.ySpeed;
            for (var j = 0; j < 6; j++) {
				for (var k = 0; k < 9; k++) {
					if (this.x >= j * 69 - 8 && this.x <= (j + 1) * 69 + 12 && this.y >= k * 50 + 65 && this.y <= (k + 1) * 50 + 85) {
						if (bricks[j][k] == -1) {
							chkball++;
							bricks[j][k] = 0;
						} else if (bricks[j][k] > 0) {
                            this.ySpeed *= -1;
                            this.y += this.ySpeed;
                            if (this.swi === 0) {
                                bricks[j][k]--;
                            }
                        }
					}
				}
			}
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
        var chksumb = 0;
        for (var j = 0; j < balls.length; j++) {
            if (balls[j].ballStatus == "fire") {chksumb++;}
        }
        if (chksumb === 0) {
            text("X"+balls.length, this.x - 7, 540);
        }
    };
}

function fireBalls() {
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
