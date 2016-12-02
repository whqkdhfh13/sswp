function GravityCircle() {
    // Properties (State)
    this.x = random(width);
    this.y = random(height);
    this.r = random(25, 50);
    this.xSpeed = random(-5, 5);
    this.ySpeed = 0;
    this.g = random(0.25, 0.75);
    this.launchSpeed = random(-10, -30);
    this.col = color(random(255), random(255), random(255));

    // Methods (State)
    this.update = function() {
        // Move & Bounce this object Horizontally
        this.x += this.xSpeed;
        if (this.x < 0 || this.x > width) {
            this.xSpeed = this.xSpeed * -1;
        }

        // Move & Bounce this object Vertically
        this.y += this.ySpeed;
        this.ySpeed += this.g;  // Apply gravity
        if (this.y > height) {
            this.y = height; // Set to ground position
            this.ySpeed = this.launchSpeed; // Reset to launch speed
            this.launchSpeed = this.launchSpeed * 0.95; // Energy loss
        }
    };

    this.display = function() {
        noFill();
        stroke(this.col);
        strokeWeight(4);
        ellipse(this.x, this.y, 2 * this.r);
    };
}
