class Tank {
  constructor(x, y, w, h, xSpeed, ySpeed, k1, k2, k3, k4, k5, angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.k1 = k1;
    this.k2 = k2;
    this.k3 = k3;
    this.k4 = k4;
    this.k5 = k5;
    this.angle = angle;
    this.d = this.w/sqrt(2);
    this.bullets = [];
  }

  rotate() {
    angleMode(DEGREES);

    this.xSpeed = 2*cos(this.angle)
    this.ySpeed = 2*sin(this.angle)
  }

  event() {
    if (keyIsDown(this.k1)) {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    } else if (keyIsDown(this.k2)) {
      this.x -= this.xSpeed;
      this.y -= this.ySpeed;
    }
    if (keyIsDown(this.k3)) {
      this.angle -= 2;
    }
    if (keyIsDown(this.k4)) {
      this.angle += 2;
    }

  }
  points() {
     this.angle1 = 45 + this.angle;
     this.angle2 = 135 + this.angle;
     this.angle3 = 225 + this.angle;
     this.angle4 = 315 + this.angle;
     this.point1y = this.y + (this.d * sin(this.angle1));
     this.point1x = this.x + (this.d * cos(this.angle1));
     this.point2y = this.y + (this.d * sin(this.angle2));
     this.point2x = this.x + (this.d * cos(this.angle2));
     this.point3y = this.y + (this.d * sin(this.angle3));
     this.point3x = this.x + (this.d * cos(this.angle3));
     this.point4y = this.y + (this.d * sin(this.angle4));
     this.point4x = this.x + (this.d * cos(this.angle4));
     this.point5x = this.x + (this.d * 1.05 * cos(this.angle));
     this.point5y = this.y + (this.d * 1.05 * sin(this.angle));

  }
  display() {
    stroke(255);
    strokeWeight(2);
    noFill();
    quad(this.point1x, this.point1y, this.point2x,
        this.point2y, this.point3x, this.point3y, this.point4x, this.point4y);
    line(this.x, this.y, this.point5x, this.point5y);

    line(this.x, this.y, this.point5x, this.poitn5y);
  }
}
