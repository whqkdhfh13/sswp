function createPlatform(x, y, w, h, xSpeed, ySpeed, col) {

        if (xSpeed == ra || xSpeed == undefined) {
            this.xSpeed = random(-5, 5);
        } else {
            this.xSpeed = xSpeed;
        }

        if (ySpeed == ra || ySpeed == undefined) {
            this.ySpeed = random(-5, 5);
        } else {
            this.ySpeed = ySpeed;
        }

        if (w == ra || w == undefined) {
            this.w = random(25, 100);
        } else {
            this.w = w;
        }

        if (h == ra || h == undefined) {
            this.h = random(25, 100);
        } else {
            this.h = h;
        }

        if (x == ra || x == undefined) {
            this.x = random(0, width - this.w);
        } else {
            this.x = w;
        }

        if (y == ra || y == undefined) {
            this.y = random(0, height - this.h);
        } else {
            this.y = y;
        }

        var cl1=random(255), cl2=random(255), cl3=random(255), cl4=random(255);

        if (col == ra || col == undefined) {
            this.col = color(cl1, cl2, cl3, cl4);
        } else {
            this.col = col;
        }


    this.update = function() {

        this.x += this.xSpeed;
        if (this.x <= 0 - this.w) {
            this.x = width;
        } else if (this.x >= width) {
            this.x = 0 - this.w;
        }

        this.y += this.ySpeed;
        if (this.y <= 0 || this.y >= height - this.h) {
            this.ySpeed *= -1;
        }
        this.col = color(cl1, cl2, cl3, cl4);
        cl4 += 1;

        if (frameCount % 240 == 0) {
            cl1 = random(255);
            cl2 = random(255);
            cl3 = random(255);
            cl4 = random(120);
        }

    };

    this.display = function() {
        noStroke();
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
    };

    this.call = function() {
        this.update();
        this.display();
    }
}
