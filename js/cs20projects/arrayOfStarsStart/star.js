function Star() {
    // Properties (State)
    this.x = random(-width, 2 * width);
    this.y = random(-height, 2 * height);
    this.r = random(4, 8);
    this.col = color(random(180, 255));

    // Methods (Behaviour)
    this.update = function() {
        // Update this object's color every 5 frames
        if (frameCount % 5 === 0) {
            this.col = color(random(180, 255));
        }
    };

    this.display = function() {
        // Draw Star 1
        noStroke();
        fill(this.col);
        ellipse(this.x, this.y, 2 * this.r);
    };

    this.call = function() {
        this.display();
        this.update();
    };
}
