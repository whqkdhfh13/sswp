// Laser Constructor Function
function Laser() {
    // Properties (State)
    this.w = 5;
    this.h = 10;
    this.x = mouseX - this.w / 2;
    this.y = mouseY - this.h / 2;

    this.ySpeed = -10;

    this.hit = function(enemy) {
        for (var i = 0; i < enemy.length; i++) {
            var d = dist(this.x, this.y, enemy[i].x, enemy[i].y);
            console.log(d);
            if (d <= 15) {
                enemies.splice(i, 1);
                return true;
            } else {
                return false;
            }
        }
    };

    // Methods (Behaviour)
    this.update = function() {
        this.y += this.ySpeed;
    };

    this.display = function() {
        fill(0,50,250);
        rect(this.x, this.y, this.w, this.h);
        fill(255,255,0);
        rect(this.x, this.y + this.h , this.w, this.h / 4);
    };

    this.call = function() {
        this.update();
        this.display();
    };
}
