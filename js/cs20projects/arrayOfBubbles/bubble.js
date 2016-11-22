function Bubble(x, y, col) {
    // Properties (State)
    this.x = x;
    this.y = y;
    this.r = random(24, 64);
    this.col = col;

    // Methods (Behaviour)
    this.update = function() {
        // Move Bubble object by random amounts
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    };

    this.display = function() {
        // Draw Bubble object to the canvas
        noFill();
        stroke(this.col);
        fill(this.col);
        ellipse(this.x, this.y, 2 * this.r);
    }
}
