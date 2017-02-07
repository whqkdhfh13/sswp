function ball(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.xSavePoint = 210;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.ballStatus = "standby";


    this.update = function() {
        if (this.x > 410 || this.x < 10) {
            this.xSpeed *= -1;
        }
        if (this.y < 50) {
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
        println(this.xSpeed);
        println(this.ySpeed);
    };

    this.display = function() {
        noStroke();
        fill(0, 255, 0);
        ellipse(this.x, this.y, 20, 20);
    };
}
