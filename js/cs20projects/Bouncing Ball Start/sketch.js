var ball = {
    x: 300,
    y: 550,
    r: 50,
    xSpeed: 2,
    ySpeed: -20,
    gravity: 0.5
};

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    // Move & Apply gravity
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
    ball.ySpeed += ball.gravity;

    // Bounce Vertically
    if (ball.y + ball.r > height) {
        ball.ySpeed = -20;
    }

    // Bounce Horizontally
    if (ball.x - ball.r < 0 || ball.x + ball.r > width) {
        ball.xSpeed *= -1;
    }

    // Draw
    fill(0, 255, 0);
    stroke(255);
    ellipse(ball.x, ball.y, 2 * ball.r);

}
