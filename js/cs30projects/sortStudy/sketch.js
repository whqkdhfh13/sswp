var lexi = [6, 7, 3, 1, 4, 5, 2];
var ac = [
    [], // Random Array
    [], // Reversed Array
    [], // Nearly Sorted Array
    []  // Few Unique Array
];
var resArray = [];

function setup() {
    for (var i = 0; i < 10000; i++) {
        ac[0].push(random(0, 10000));
    }

    for (var i = 10000; i > 0; i--) {
        ac[1].push(i);
    }

    for (var i = 0; i < 8000; i++) {
        ac[2].push(i);
    }
    for(var i = 0; i < 2000; i++) {
        ac[2].push(Math.floor(random(0, 8000)), 0, random(0, 10000));
    }

    for (var i = 0; i < 8000; i++) {
        ac[3].push(5000);
    }
    for(var i = 0; i < 2000; i++) {
        ac[3].splice(Math.floor(random(0, 8000)), 0, random(0, 10000));
    }

    createCanvas(10000, 500);
}

function draw() {

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
    for (var i = 0; i < 10; i++) {
        this.anArray = anArray.slice();
        bubbleSort(this.anArray);
    }
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Bubble sort : " + (endTime - startTime)/10 + "s.");

    startTime = performance.now();
    for (var i = 0; i < 10; i++) {
        this.anArray = anArray.slice();
        ssort(this.anArray);
    }
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Selection sort : " + (endTime - startTime)/10 + "s.");

    startTime = performance.now();
    for (var i = 0; i < 10; i++) {
        this.anArray = anArray.slice();
        ssort(this.anArray);
    }
    endTime = performance.now();
    resArray.push(endTime - startTime);
    console.log("Insertion sort : " + (endTime - startTime)/10 + "s.");
}

function drawScreenshot(num) {
    background(0);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    for (var i = 0; i < ac[num].length; i++) {
        rect(i, 450 + ac[num][i]/-25, 1, ac[num][i]/25);
    }
}

function keyPressed() {
    if (keyCode === 49) {
        drawScreenshot(0);
    }
    if (keyCode === 50) {
        drawScreenshot(1);
    }
    if (keyCode === 51) {
        drawScreenshot(2);
    }
    if (keyCode === 52) {
        drawScreenshot(3);
    }
}
