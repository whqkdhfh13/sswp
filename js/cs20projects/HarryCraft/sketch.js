var cnv;
var world;
var player;
var cons;
var extendedAngle;

function setup() {
    cnv = createCanvas(1024, 768);
    centerCanvas();
    world = createWorld();
    player = new player();
    cons = 1;
    extendedAngle = 120;
    angleMode(DEGREES);
    createCanvas(1024, 768);
}

function draw() {
    background(0, 0, 0 );
    world[3][0][0] = 1;
    if (cons === 1) {
        info();
    }
    if (keyCode === 32 && keyIsPressed) {
        player.ax = 0;
        player.ay = 0;
    } else {
        rotation();
    }
    fill(0, 255, 255, 50);
    rect(width / 2 - width / 20, height / 2 - height / 20, width / 10, height / 10);
    // I want this circle to be displayed between 300 and 60.
    fill(255);
    ellipse((width * (1 - (player.ax + 60) / 120)), (height * (player.ay + 60) / 120), 50);
    render();
}


function createWorld() {
    // Make the world
    var tWorld = [],
        tLevel = [],
        tArray = [];

    // Make basic array that contains number of i
    for (var i = 0; i < 10; i++) {
        tArray.push("0");
    }

    // Push tArray to tLevel 100 times
    for (var i = 0; i < 10; i++) {
        tLevel.push(tArray);
    }

    // Push tLevel to tWorld 100 times
    for (var level = 0; level < 10; level++) {
        tWorld.push(tLevel);
    }

    // Return tWorld
    return tWorld;
}

function render() {
    for (var i = 0; i < world.length; i++) {
        for (var j = 0; j < world[i].length; j++) {
            for (var k = 0; k < world[i][j].length; k++) {
                if (world[i][j][k] == 1) {
                    if ((abs(atan(i/j)-player.ax) < 75 && abs(atan(k/j)-player.ay) < 75) || calc3Dist(player.x, player.y, player.z, i, j, k) < 5) {
                        var xPos = map(tan(atan(i/j)-player.ax), -tan(60), tan(60), 0, width);
                        var yPos = map(tan(atan(k/j)-player.ay), -tan(60), tan(60), height, 0);
                        var rad = pow((6/10), calc3Dist(player.x, player.y, player.z, i, j, k)) + 0.03;
                        fill(255,0,0);
                        ellipse(xPos, yPos, rad * width, rad * height);
                        text(xPos, xPos, yPos);
                    }
                }
            }
        }
    }
}

function player() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.ax = 0;
    this.ay = 0;
    this.speed = 0;
}

function rotation() {
    // Make sure to make if statement for squaring that have + and -.
    if (!(mouseX > width * 0.45 && mouseX < width * 0.55)) {
        if (mouseX - width / 2 > 0) {
            player.ax += sq(2 * (mouseX - width / 2) / (width / 2));
        } else if (mouseX - width / 2 < 0) {
            player.ax -= sq(2 * (mouseX - width / 2) / (width / 2));
        }
    }

    if (!(mouseY > height * 0.45 && mouseY < height * 0.55)) {
        if (mouseY - height / 2 > 0) {
            player.ay -= sq(1.5 * (mouseY - height / 2) / (height / 2));
        } else if (mouseY - height / 2 < 0) {
            player.ay += sq(1.5 * (mouseY - height / 2) / (height / 2));
        }
    }

    if (player.ax < -180) {
        player.ax += 360;
    } else if (player.ax > 180) {
        player.ax -= 360;
    }

    if (player.ay > 90) {
        player.ay = 90;
    } else if (player.ay < -90) {
        player.ay = -90;
    }
}

function info() {
    stroke(255);
    fill(255);
    textSize(18);
    text("ax = " + player.ax, 5, 18);
    text("ay = " + player.ay, 5, 36);
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function keyPressed() {
    console.log(keyCode);
}

function calc3Dist(x1, y1, z1, x2, y2, z2) {
    return sqrt(sq(x2 - x1) + sq(y2 - y1) + sq(z2 - z1));
}
