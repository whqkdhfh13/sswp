class Bullet {
    constructor(tank) {
    this.tank = tank;
    this.x = this.tank.x;
    this.y = this.tank.y;
    this.r = 5;
    this.angle = this.tank.angle;
    this.speed = 12;
    this.status = false;
    this.swt = 0;
    this.gravity = 0.4;

    }

    logic() {

        if (this.swt === 0) {
            this.currentTime = frameCount;
            this.swt++;
        }
        this.xSpeed = this.speed * cos(this.angle);
        this.ySpeed = this.speed * sin(this.angle);
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.speed += this.gravity;

        if (frameCount - this.currentTime > 30) {
            this.status = true;
            console.log("TRUEEEE");
        }
    }

    display() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r);
    }


}
