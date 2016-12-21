function Platform(x, y) {
    // Properties (State)
    this.x = x;
    this.y = y;
    this.w = random(50, 250);
    this.h = random(10, 30);
    this.rdn = floor(random(0, 4));
    this.xSpeed = 3;
    this.clr = 0;
    this.count = 0;

    this.update = function() {
        this.y += 2;
        if (this.rdn == 0) {
            this.x += this.xSpeed;
            this.clr = 255;
        }
    }

    // Methods (Behaviour)
    this.display = function() {
        fill(this.clr - 10 * this.count, 255 - 15 * this.count, 0);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
    };

}
