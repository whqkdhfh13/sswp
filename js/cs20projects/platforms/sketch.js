// PLATFORM LESSON START CODE

var player = [];
var platforms = [];
var gameStatus = "intro";

function setup() {
    createCanvas(800, 600);

    // Initialize game objects
    player.push(new JumpingPlayer(400, 25, 37, 38, 39, 40, color(255, 0, 0), 3));
    player.push(new JumpingPlayer(200, 25, 65, 87, 68, 83, color(0, 0, 255), 3));
    platforms.push(new Platform(350, 450));
    platforms.push(new Platform(450, 350));
    platforms.push(new Platform(250, 150));
    platforms.push(new Platform(300, 300));
}

function draw() {
    if (gameStatus == "intro") {
        background(0, 150, 200);
        stroke(0, 255, 0);
        textSize(45);
        fill(0,250,250);
        text("Jayden's Multiplayable Game", 100, 50);
        fill(255, 255, 0);
        rect(310, 400, 160, 80);
        fill(255, 0, 0);
        text("START", 320, 450);
        if (mouseIsPressed && mouseX >= 310 && mouseX <= 470 && mouseY >= 400 && mouseY <= 480) {
            fill(0);
            textSize(16);
            text("loading...", 350, 580);
            noLoop();
            setTimeout(loop, 2000);
            gameStatus = "run";
        }
    } else if (gameStatus == "run") {
        background(0);
        fill(255, 30, 30);
        rect(0, 570, 800, 30);
        fill(200, 0, 0);
        rect(0, 570, 800, 10);
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].display();
            platforms[i].update();
            if (platforms[i].y > height - 50) {
                platforms.push(new Platform(random(100, 400), random(-20, -10)));
                platforms.splice(i, 1);
            }
            if (platforms[i].rdn == 0 && frameCount % 90 == 0) {
                platforms[i].xSpeed *= -1;
            }
            if (platforms[i].count > platforms[i].h / 3 + 3) {
                platforms.push(new Platform(random(100, 400), random(-20, -10)));
                platforms.splice(i, 1);
            }
        }

        // Move player
        for (var i = 0; i < player.length; i++) {
            player[i].update(platforms);
            player[i].display();
        }
    }
}

function keyPressed() {

    for (var i = 0; i < player.length; i++) {
        player[i].keyEvent();
    }
}
