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

function binarySearch(arr, inp, start) {
  this.inp = inp;
  this.arr = arr.slice();
  this.upp = this.arr.length - 1;
  if (!(start == undefined) || !(start == 0)) {
    this.low = start;
  } else {
    this.low = 0;
  }

  while (!(this.low > this.upp)) {
    this.mid = floor((this.low + this.upp) / 2);
    if (this.inp === this.mid) {
      return this.mid;
    } else if (this.inp < this.mid){
      this.upp = this.mid - 1;
    } else {
      this.low = this.mid + 1;
    }
  }

  return -1;
}
