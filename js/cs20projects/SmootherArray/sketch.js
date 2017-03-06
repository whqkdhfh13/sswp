var myArray = [1,13,21];
var chk = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    if (chk === 0) {
        smootherArray(myArray, 3, 0);
        chk++;
    }

}
