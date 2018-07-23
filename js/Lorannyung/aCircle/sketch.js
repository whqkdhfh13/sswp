let y = 200;
let ySpeed = 3;
let gravity = 0.05;

function setup() {
    createCanvas(500, 500);
}

function draw() { // 60fps
    background(255);
    noStroke();
    fill(200, 200, 0);
    ellipse(width/2, y, 100);
    fill(255);
    ellipse(width/2, y, 50);
    y += ySpeed;
    ySpeed += gravity;
    if (y > 450 && ySpeed > 0 ) {
        ySpeed *= -0.8;
    } else if (y < 50) {
        ySpeed *= -0.8;
    }
    lora(color(255, 200, 200), 200, 200, 200);
}

function lora(color, x, y, d) {
    this.color = color;
    fill(this.color);
    ellipse(x, y, d);
}

var temp1 = new lora(color(255, 200, 200), 200, 200, 200);
var temp2 = new lora(color(0), 200, 200, 200);
var temp3 = new lora(temp1.color, 200, 200, 200);
// if (something) { }
// y = y + ySpeed;
// y += ySpeed;












///////////////////////////////////////////////////////////////

// let y = 250, ySpeed = 2, gravity = 0.0981;
// // let thisthing = true;
//
// function setup() {
//     createCanvas(400, 400);
//     background(0);
// }
//
// function draw() {
//     background(255);
//     fill(0, 200, 200); // it feels inside the
//     stroke(0);
//     ellipse(width / 2, y, 50);
//     y += ySpeed; // Adding ySpeed to y
//     ySpeed += gravity; // Adding yAcceration to ySpeed
//     if (y > 375) ySpeed = -5;
//     // for (let i = 0; i < 5; i++) {
//     //     fill(random(255), random(255), random(255));
//     //     ellipse(random(25, 375), random(25, 375), random(100));
//     // }
// }
