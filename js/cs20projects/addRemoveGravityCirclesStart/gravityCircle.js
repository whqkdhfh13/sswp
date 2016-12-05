function GC(x, y) {
    // Properties (State)
    // this.x = random(width);
    // this.y = random(height - 1/2 * this.r);
    this.r = random(25, 50);
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5, 5);
    this.ySpeed = 0;
    this.g = random(0.25, 0.75);
    this.launchSpeed = random(-10, -30);
    this.col = color(random(255), random(255), random(255));

    this.clicked = function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d <= this.r) {
            return true;
        } else {
            return false;
        }
    };

    // Methods (State)
    this.update = function() {
        // Move & Bounce this object Vertically
        this.y += this.ySpeed;
        this.ySpeed += this.g;  // Apply gravity
        if (this.y > height - 1/2 * this.r) {
            this.y = height - 1/2 * this.r; // Set to ground position
            this.ySpeed = this.launchSpeed; // Reset to launch speed
            this.launchSpeed = this.launchSpeed * 0.95; // Energy loss
        }

        this.x += this.xSpeed;
        if (this.x <= 0 + 1/2 * this.r || this.x >= width - 1/2 * this.r ) {
            this.xSpeed = this.xSpeed * -1;
        }
        if (this.launchSpeed > -5) {
            this.xSpeed *= 0.99;
        }

    };

    this.display = function() {
        noFill();
        stroke(this.col);
        strokeWeight(4);
        ellipse(this.x, this.y, 2 * this.r);
    };

    this.call = function() {
        this.update();
        this.display();
    };
}
