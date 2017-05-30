var world;
var player;
var cons;

function setup() {
    world = createWorld();
    player = new player();
    cons = true;
    createCanvas(1024, 768);
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
	// Make sure to make if statement for squaring that have + and -.
    if (!(mouseX > width * 0.45 && mouseX < width * 0.55)) {
        player.ax += sq(((mouseX - width/2) / (width/2)));
    }

    if (!(mouseY > height * 0.45 && mouseY < height * 0.55)) {
        player.ay -= sq (((mouseY - height/2) / (height/2)));
    }

    if (player.ax < 0) {
        player.ax += 360;
    } else if (player.ax > 360) {
        player.ax -= 360;
    }

		if (player.ay > 180) {
			player.ay = 180;
		} else if (player.ay < 0) {
			player.ay = 0;
		}
}

function info() {
    stroke(255);
    fill(255);
    textSize(18);
    text("ax = "+player.ax, 5, 18);
    text("ay = "+player.ay, 5, 36);
	 text (sq (((mouseY - height/2) / (height/2))), 5, 54)
}
