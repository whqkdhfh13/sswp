function Platform(x, y) {
    // Properties (State)
    this.x = x;
    this.y = y;
    this.w = random(50, 150);
    this.h = random(10, 30);

    // Methods (Behaviour)
    this.display = function() {
        fill(0, 255, 0);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    };

}
