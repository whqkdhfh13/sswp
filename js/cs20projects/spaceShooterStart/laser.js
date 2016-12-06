// Laser Constructor Function
function Laser(x, y) {
    // Properties (State)
    this.w = 5;
    this.h = 10;
    this.x = x - this.w / 2;
    this.y = y - this.h / 2;

    this.ySpeed = -5;

    // Methods (Behaviour)
    this.update = function() {
        this.y += this.ySpeed;
    };

    this.display = function() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.w, this.h);
    };

    this.call = function() {
        this.update();
        this.display();
    };
}
