var lexi = [6, 7, 3, 1, 4, 5, 2];
var ac = [
    [], // Random Array
    [], // Reversed Array
    [], // Nearly Sorted Array
    []  // Few Unique Array
];
var resArray = [];
var swt = 0;

var length = 5000;

function setup() {
    for (var i = 0; i < length; i++) {
        ac[0].push(random(0, length));
    }

    for (var i = length; i > 0; i--) {
        ac[1].push(i);
    }

    for (var i = 0; i < length * 0.8; i++) {
        ac[2].push(i);
    }
    for(var i = 0; i < length * 0.2; i++) {
        ac[2].push(Math.floor(random(0, length)));
    }

    for (var i = 0; i < length * 0.8; i++) {
        ac[3].push(length*0.5);
    }
    for(var i = 0; i < length * 0.2; i++) {
        ac[3].splice(Math.floor(random(0, length * 0.8)), 0, random(0, length));
    }

    createCanvas(1000, 500);
}

function draw() {
    drawScreenshot(swt);
}

function bbsort(arr) { // Not working at all
    var fix = 0;
    var temp;

    for (var i = 0; i < arr.length - 1; i++) {
        for (i; i < arr.length - 1; i++) {
            if (arr[i - fix] > arr[i - fix + 1]) {
                temp = arr[i - fix];
                arr[i - fix] = arr[i - fix + 1];
                arr[i - fix + 1] = temp;
                console.log("at i = "+ i +"; "+ arr[i - fix] + "<->" + arr[i - fix + 1]);
            }
        }
        fix++;
        i = fix;
        console.log("fix = " + fix);

    }
    return arr;
}

function bubbleSort(anArray) {
    for (let numComp = anArray.length - 1; numComp > 0; numComp--) {
        for (let i = 0; i < numComp; i++) {
            if (anArray[i] > anArray[i + 1]) {
                var temp = anArray[i + 1];
                anArray[i + 1] = anArray[i];
                anArray[i] = temp;
            }
        }
    }
}

function ssort(anArray) {
    for (let fillSlot = anArray.length - 1; fillSlot > 0; fillSlot--) {
        var maxPos = 0;
        for (let j = 1; j <= fillSlot; j++) {
            if (anArray[j] > anArray[maxPos]) {
                maxPos = j;
            }
        }
        if (!(anArray[fillSlot] === anArray[maxPos])) {
            var temp = anArray[fillSlot];
            anArray[fillSlot] = anArray[maxPos];
            anArray[maxPos] = temp;
        }
    }
}

function isortv2(anArray) {
    for (var i = 1; i < anArray.length; i++) {
        var temp = anArray.splice(i, 1)[0];
        var curr = i;
        while (curr > 0 && temp < anArray[curr - 1]) {
            curr--;
        }
        anArray.splice(curr, 0, temp);
    }
}

// I have questions with testisort, it doesn't work.
function testisort(anArray) {
    for (var i = 1; i < anArray.length; i++) {
        var curr = i;
        while (curr > 0 && anArray[i] < anArray[curr - 1]) {
            curr--;
            console.log("i = " + i + "; curr--");
        }
        anArray.splice(curr, 0, anArray.splice(i, 1)[0]);
    }
}

function isort(anArray) {
    for (var i = 1; i < anArray.length; i++) {
        var temp = anArray[i];
        var curr = i;
        while (curr > 0 && temp < anArray[curr - 1]) {
            anArray[curr] = anArray[curr - 1];
            curr--;
        }
        anArray[curr] = temp;
    }
}

function testTime(anArray) {
    var endTime;
    var startTime = performance.now();
        this.anArray = anArray.slice();
        bubbleSort(this.anArray);
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Bubble sort : " + (endTime - startTime)/10 + "ms.");

    startTime = performance.now();
        this.anArray = anArray.slice();
        ssort(this.anArray);
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Selection sort : " + (endTime - startTime)/10 + "ms.");

    startTime = performance.now();
        this.anArray = anArray.slice();
        isort(this.anArray);
    }
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Insertion sort : " + (endTime - startTime)/10 + "ms.");
}

function drawScreenshot(num) {
    background(0);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    for (var i = 0; i < ac[num].length; i++) {
        rect(i * width / length, 450 + ac[num][i]/(length/-400), width / length, ac[num][i]/(length/400));
    }
    console.log(ac[0].length * width / length);
}

function keyPressed() {
    if (keyCode === 49) {
        swt = 0;
    }
    if (keyCode === 50) {
        swt = 1;
    }
    if (keyCode === 51) {
        swt = 2;
    }
    if (keyCode === 52) {
        swt = 3;
    }
}

// testTime(ac[0])
// Bubble sort : 207.36200000000008ms.
// Selection sort : 96.196ms.
// Insertion sort : 48.46150000000007ms.
//
// testTime(ac[1])
// sketch.js:133 Bubble sort : 188.416ms.
// sketch.js:142 Selection sort : 96.49650000000001ms.
// sketch.js:151 Insertion sort : 111.90900000000002ms.
//
// testTime(ac[2])
// sketch.js:133 Bubble sort : 279.9055ms.
// sketch.js:142 Selection sort : 187.2630000000001ms.
// sketch.js:151 Insertion sort : 86.25649999999987ms.
//
// testTime(ac[3])
// sketch.js:133 Bubble sort : 111.06299999999901ms.
// sketch.js:142 Selection sort : 95.66700000000056ms.
// sketch.js:151 Insertion sort : 21.042999999999303ms.
