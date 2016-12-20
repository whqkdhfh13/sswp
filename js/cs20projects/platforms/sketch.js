// PLATFORM LESSON START CODE

var player1, player2;
var platforms;

function setup() {
    createCanvas(800, 600);

    // Initialize game objects
    player1 = new JumpingPlayer(400, 575, 37, 38, 39, 40, color(255, 0, 0));
    player2 = new JumpingPlayer(200, 575, 65, 87, 68, 83, color(0, 0, 255));
    platforms = [];
    platforms.push(new Platform(350, 450));
    platforms.push(new Platform(450, 350));
    platforms.push(new Platform(250, 150));
    platforms.push(new Platform(300, 300));


}

function draw() {
    // LOGIC
    // Move player
    player1.update(platforms);
    player2.update(platforms);

    // DRAWING
    background(255);
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].display();
    }
    player1.display();
    player2.display();
}

function keyPressed() {
    println(keyCode);
    player1.keyEvent();
    player2.keyEvent();
}
