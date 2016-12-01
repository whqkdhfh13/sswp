function BouncingCircle(xSpeed, ySpeed) {
    // Properties (State)
    this.x = random(width);
    this.y = random(height);
    this.r = random(10, 50);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.col = color(random(255), random(255), random(255));

    // Methods (Behaviour)
    this.update = function() {
        // Move & Bounce Horizontally & Vertically
        this.x += this.xSpeed;
        if (this.x < 0 || this.x > width) {
            this.xSpeed = this.xSpeed * -1;
        }
        this.y += this.ySpeed;
        if (this.y < 0 || this.y > height) {
            this.ySpeed = this.ySpeed * -1;
        }
    };

    this.display = function() {
        // Draw this object to the canvas
        noFill();
        stroke(this.col);
        ellipse(this.x, this.y, 2 * this.r);
    }
}
