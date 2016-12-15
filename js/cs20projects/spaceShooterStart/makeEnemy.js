function makeEnemy(sizew, sizeh) {
    this.x = random(width);
    this.y = random(50);
    this.xSpeed = floor(random(-5, 5));
    this.ySpeed = random(3);
    this.w = sizew;
    this.h = sizeh;

    this.hit = function() {
        for (var i = 0; i < laser.length; i++) {
            var d = dist(laser[i].x, laser[i].y, this.x, this.y);
            if (d <= this.w) {
                return true;
            } else if (d > this.w) {
                return false;
            }
        }
    };

    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (frameCount % random([60, 120, 180]) == 0) {
            this.xSpeed = floor(random(-5, 5));
        }
    };

    this.display = function() {
        fill(200);
        ellipse(this.x, this.y, this.w, this.h);
    };

    this.call = function() {
        this.update();
        this.display();
    };
}
