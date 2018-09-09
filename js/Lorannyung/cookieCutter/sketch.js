var happyBalls = [];
var howMany = 10;

function setup() {
    createCanvas(400, 400);
    for (var i = 0; i < howMany; i++) {
        happyBalls.push(new Ball(random(25, width - 25), random(25, height - 25), random(10, 50), color(random(255), random(255), random(255), 100)));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < happyBalls.length; i++) {
        happyBalls[i].graphic();
        happyBalls[i].logic();
    }
}

function Ball(x, y, r, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.r = r;

    this.graphic = function () {
        fill(this.color);
        ellipse(this.x, this.y, this.r);
    }

    this.logic = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        for (var i = 0; i < happyBalls.length; i++) {
            if (!(this.x == happyBalls[i].x) && dist(this.x, this.y, happyBalls[i].x, happyBalls[i].y) < (this.r / 2) + (happyBalls[i].r / 2)) {
                if (this.xSpeed + happyBalls[i].xSpeed > this.ySpeed + happyBalls[i].ySpeed) {
                    this.x -= this.xSpeed;
                    this.xSpeed *= -1;
                } else {
                    this.y -= this.ySpeed;
                    this.ySpeed *= -1;
                }
            }
        }
        if (this.x < this.r/2 && this.xSpeed < 0) {
            this.xSpeed *= -1;
        }
        if (this.x > width-this.r/2 && this.xSpeed > 0) {
            this.xSpeed *= -1;
        }
        if (this.y < this.r/2 && this.ySpeed < 0) {
            this.ySpeed *= -1;
        }
        if (this.y > height-this.r/2 && this.ySpeed > 0) {
            this.ySpeed *= -1;
        }
    }
}
