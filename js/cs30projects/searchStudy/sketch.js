var array = [];
function setup() {
    for (var i = 0; i < 100; i++) {
        array.push(i);
    }
}

function draw() {
    
}

function linearSearch(arr, inp) {
    this.inp = inp;
    this.arr = arr.slice();
    console.log("Start the Search.");
    for (var i = 0; i < this.arr.length - 1; i++) {
        if (this.inp == this.arr[i]) {
            return i;
        }
    }
    return -1;
}
