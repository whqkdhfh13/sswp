var stars = [];
var curr = -1;


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    for (var i = 0; i < stars.length; i++) {
        stars[i].display();
        if (i > 0) {
            line(stars[i - 1].x, stars[i - 1].y, stars[i].x, stars[i].y);
        }
    }
    if (mouseIsPressed) {
        stars.push(new star(mouseX, mouseY));
        curr++;
    }
    if (keyIsDown(37)) {
        stars[curr].x--;
    }
    if (keyIsDown(38)) {
        stars[curr].y--;
    }
    if (keyIsDown(39)) {
        stars[curr].x++;
    }
    if (keyIsDown(40)) {
        stars[curr].y++;
    }
}

function star(x, y) {
    this.x = x;
    this.y = y;
    this.display = function() {
        fill(random(160, 255), random(160, 255), random(160, 255));
        stroke(random(160, 255), random(160, 255), random(160, 255));
        ellipse(this.x, this.y, 3);
    };
}

// function mousePressed() {
//     stars.push(new star(mouseX, mouseY));
// }

function keyPressed() {
    console.log(keyCode);
    if (stars.length > 0 && keyCode === 32) {
        stars.pop();
    }
    if (keyCode === 49) {
        if (curr > 0) {
            curr--;
        }
    }
    if (keyCode === 50) {
        if (curr < stars.length) {
            curr++;
        }
    }
}
