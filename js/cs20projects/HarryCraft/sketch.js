var world;
var player;
var cons;

function setup() {
    world = createWorld();
    player = new player();
    cons = false;
    createCanvas(1024,768);
}

function draw() {
    background(0);
    if (cons === true) {
        info();
    }
    rotation();
}


function createWorld() {
    // Make the world
    var tWorld = [], tLevel = [], tArray = [];

    // Make basic array that contains number of i
    for (var i = 0; i < 100; i++) {
        tArray.push("0");
    }

    // Push tArray to tLevel 100 times
    for (var i = 0; i < 100; i++) {
        tLevel.push(tArray);
    }

    // Push tLevel to tWorld 100 times
    for (var level = 0; level < 100; level++) {
        tWorld.push(tLevel);
    }

    // Return tWorld
    return tWorld;
}

function lender() {
    for (var i = 0; i < world.length; i++) {
        for (var j = 0; j < world[i].length; j++) {
            for (var k = 0; k < world[i][j].length; k++) {
                if(world[i][j][k] == 1) {
                    fill(255, 0, 51);
                }
            }
        }
    }
}

function player() {
    this.x = 0;
    this.y = 0;
    this.ax = 0;
    this.ay = 90;
    this.speed = 0;

}

function rotation() {
    if (!(mouseX > width * 0.45 && mouseX < width * 0.55)) {
        this.ax += mouseX - width/2;
    }

    if (!(mouseY > height * 0.45 && mouseY < height * 0.55)) {
        this.ay -= mouseY - height/2;
    }

    if (ax < 0) {
        ax = 360;
    } else if (ax > 360) {
        ax = 0;
    }
}

function info() {
    stroke(255);
    fill(255);
    textSize(18);
    text("ax = "+player.ax, 5, 18);
    text("ay = "+player.ay, 5, 36);
}
