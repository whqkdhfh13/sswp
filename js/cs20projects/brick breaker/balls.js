function ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.xSavePoint = 210;
    this.xSpeed = 3;
    this.ySpeed = -4;


    this.update = function() {
        if (this.x > 420 || this.x < 0) {
            this.xSpeed *= -1;
        }
        if (this.y < 50) {
            this.ySpeed *= -1;
        }

    };

    this.display = function() {
        noStroke();
        fill(0, 255, 0);
        ellipse(this.x, this.y, 20, 20);
    };
}
