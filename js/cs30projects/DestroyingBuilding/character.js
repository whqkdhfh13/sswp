class Char {
    constructor() {
        this.w = 30;
        this.h = 80
        this.x = (width - 30) / 2;
        this.y = height - this.h;
        this.costume = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    logic() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    display() {
        ellipse(this.x, this.y);
    }

    costume(this.costume) {

    }

    attack() {

    }

    jump() {

    }

    run() {
        this.logic();
        this.display();
        this.costume();
        this.attack();
        this.jump();
    }
}
