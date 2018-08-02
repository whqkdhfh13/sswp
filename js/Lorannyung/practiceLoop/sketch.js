var anArray;

function setup() {
    anArray = [];
    for (var i = 0; i < 20; i++) {
        anArray.push(i+1);
    }
    for (var i = 0; i < anArray.length; i++) {
        if (anArray[i] % 4 == 0 && !(anArray[i] == 0)) {
            anArray.splice(i, 1);
        }
    }
}

function draw() {

}
