function DrawBlock(x,y,sz) {
    this.x= x,
    this.y= y,
    this.sz= sz,
    this.dx= 5,
    this.dy= 5;

    this.movement = function(){
        // Move
        this.x += this.dx;
        this.y += this.dy;

        // Bounce
        if (this.x < 0 || this.x + this.sz > 600) {
            this.dx *= -1;
        }
        if (this.y < 0 || this.y + this.sz > 400) {
            this.dy *= -1;
        }
    }
    this.display = function(){
        // Draw this
        fill(0, 0, 255);
        noStroke();
        rect(this.x, this.y, this.sz, this.sz);
    }
}

var drawBlock1,drawBlock2,drawBlock3;

function setup() {
    createCanvas(600, 400);
    drawBlock1 = new DrawBlock(0,0,80);
    drawBlock2 = new DrawBlock(200,0,40);
    drawBlock3 = new DrawBlock(300,200,120);

}

function draw() {
	background(255);

    drawBlock1.display();
    drawBlock1.movement();
    drawBlock2.display();
    drawBlock2.movement();
    drawBlock3.display();
    drawBlock3.movement();
}
