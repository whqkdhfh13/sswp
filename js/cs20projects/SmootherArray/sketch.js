var Array = [1,5,9,13,17,21];
var chk = 0;

function setup() {

}

function draw() {
    if (chk === 0) {
        smootherArray(Array, 3);
        chk++;
    }
}
