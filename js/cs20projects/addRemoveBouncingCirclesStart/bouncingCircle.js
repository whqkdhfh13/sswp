function BouncingCircle(x, y, xSpeed, ySpeed) {
    // Properties (State)
    // this.x = random(30, width - 30);
    // this.y = random(30, height - 30);
    this.x = x;
    this.y = y;
    this.r = random(10, 50);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.col = color(random(255), random(255), random(255));

    this.clicked = function() {
        var d = dist(mouseX, mouseY, this.x, this.y);
        if (d <= this.r) {
            return true;
        } else {
            return false;
        }
    }

    // Methods (Behaviour)
    this.update = function() {
        // Move & Bounce Horizontally & Vertically
        this.x += this.xSpeed;
        if (this.x <= 0 + 1/2 * this.r || this.x >= width - 1/2 * this.r) {
            this.xSpeed = this.xSpeed * -1;
        }
        this.y += this.ySpeed;
        if (this.y <= 0 + 1/2 * this.r || this.y >= height - 1/2 * this.r) {
            this.ySpeed = this.ySpeed * -1;
        }
    };

    this.display = function() {
        // Draw this object to the canvas
        noFill();
        stroke(this.col);
        ellipse(this.x, this.y, 2 * this.r);
    }

    this.call = function() {
        this.update();
        this.display();
    }
}
