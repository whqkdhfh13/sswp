function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    //drawDoor(x, y, w, h, tColor, bColor)
    drawDoor(480, 230, 40, 60, "white", "blue");
    drawDoor(0, 500, 200, 500, "white", "red");
    drawDoor(300,400, 300, 60, "gray", "red");
}
