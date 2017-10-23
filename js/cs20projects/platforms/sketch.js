// PLATFORM LESSON START CODE

var player = [];
var platforms = [];
var gameStatus = "intro";
var chklife = 0;
var timer = 0;

function preload() {
    intersectSound = loadSound("intersect.mp3");
}

function setup() {
    createCanvas(800, 600);

    player = [];
    platforms = [];
    gameStatus = "intro";
    chklife = 0;
    timer = 0;

    // Initialize game objects
    // JumpingPlayer(startingX, startingY, leftKC, upKC, rightKC, downKC, playerColour, maxJump, distBtwLife, lifeStartX,  lifeStartY)
    player.push(new JumpingPlayer(200, 25, 65, 87, 68, 83, color(0, 0, 255), 5, 30, 20, 540));
    player.push(new JumpingPlayer(400, 25, 37, 38, 39, 40, color(255, 0, 0), 5, -30, 760, 540));
    platforms.push(new Platform(350, 450));
    platforms.push(new Platform(450, 350));
    platforms.push(new Platform(250, 150));
    platforms.push(new Platform(300, 300));
}

function draw() {
    masterVolume(0.6);
    if (gameStatus == "intro") {
        background(0, 150, 200);
        stroke(0, 255, 0);
        textSize(45);
        fill(0, 250, 250);
        text("Jayden's Multiplayable Game", 100, 50);
        fill(255, 255, 0);
        rect(310, 400, 160, 80);
        fill(255, 0, 0);
        text("START", 320, 450);
        if (mouseIsPressed && mouseX >= 310 && mouseX <= 470 && mouseY >= 400 && mouseY <= 480 || keyIsDown(32)) {
            fill(0);
            textSize(16);
            text("loading...", 350, 580);
            noLoop();
            setTimeout(loop, 1000);
            gameStatus = "run";
        }
    } else if (gameStatus == "run") {
        background(0);
        fill(255, 30, 30);
        rect(0, 570, 800, 30);
        fill(200, 0, 0);
        rect(0, 570, 800, 10);
        timer++;
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].display();
            platforms[i].update();
            if (platforms[i].y > height - 50) {
                platforms.push(new Platform(random(100, 400), random(-20, -10)));
                platforms.splice(i, 1);
            }

            if (platforms[i].rdn === 0 && frameCount % 90 === 0) {
                platforms[i].xSpeed *= -1;
            }

            if (platforms[i].count > platforms[i].h / 3 + 3) {
                platforms.push(new Platform(random(100, 400), random(-20, -10)));
                platforms.splice(i, 1);
            }
        }

        // Move player
        for (var i = 0; i < player.length; i++) {
            if (player[i].life > 0) {
                player[i].update(platforms);
                player[i].display();
                for (var j = 0; j < player[i].life; j++) {
                    if (j === 0) {
                        player[i].sp.vel = 0;
                    }
                    if (j % 12 === 0) {
                        player[i].xpref = player[i].sp.v * -12 * j / 12;
                        player[i].ypref = -30 * j / 12;
                    }

                    rect(player[i].sp.x + player[i].sp.vel + player[i].xpref, player[i].sp.y + player[i].ypref, player[i].sp.size, player[i].sp.size);
                    player[i].sp.vel += player[i].sp.v;
                }
            }
        }

        // Check that if all player's life is 0
        for (var i = 0; i < player.length; i++) {
            if (i === 0) {
                chklife = 0;
            }
            chklife += player[i].life;
            if (i === player.length - 1 && chklife === 0) {
                gameStatus = "finish";
            }
        }
    } else if (gameStatus == "finish") {
        background(0);
        textSize(40);
        stroke(0);
        fill(0, 200, 200);
        text("Time you've played = "+floor((timer+60)/60)+" sec!", 120, 200);
    } else if (gameStatus == "stop") {
        fill(120, 120, 130, 20);
        rect(300, 150, 200, 300);
        textSize(48);
        fill(200, 200, 200);
        text("Freeze..", 315, 200);
        textSize(18);
        text("Press spacebar or \n Click the screen.", 325, 230)
        fill(0, 0, 200);
        text("Press 1 to add a Life", 315, 350);
        fill(200, 0, 0);
        text("Press 2 to add a Life", 315, 390);
    }
}

function keyPressed() {
    println(keyCode);
    for (var i = 0; i < player.length; i++) {
        player[i].keyEvent();
    }

    if (keyIsDown(49)) {
        player[0].life++;
    }

    if (keyIsDown(50)) {
        player[1].life++;
    }
    if (keyIsDown(32) || mouseIsPressed) {
        if (gameStatus == "run") {
            gameStatus = "stop";
        } else if (gameStatus == "stop") {
            gameStatus = "run";
        }
    }
}

function mousePressed() {
    if (gameStatus == "run") {
        gameStatus = "stop";
    } else if (gameStatus == "stop") {
        gameStatus = "run";
    }

    if (gameStatus == "finish") {
        setup();
        gameStatus = "intro";
    }
}
