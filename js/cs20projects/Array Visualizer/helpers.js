// Global Variables
var topBuffer = 50;
var botBuffer = 20;
var sideBuffer = 30;

var a1on = true;
var a2on = true;
var a3on = true;

function drawArrays(a1, a2, a3, low, high, scale) {
    drawHeader();
    drawGridLines(low, high, scale);

    var arrays = [];
    var longest = 0;
    if (a1on) {
        arrays.push(a1);
        longest = a1.length;
    }
    if (a2on) {
        arrays.push(a2);
        if (a2.length > longest) {
            longest = a2.length;
        }
    }
    if (a3on) {
        arrays.push(a3);
        if (a3.length > longest) {
            longest = a3.length;
        }
    }

    // Draw arrays if necessary
    if (longest !== 0) {
        var numArrays = arrays.length;

        // Draw Vertical Bars for array values
        var barWidth = (width - sideBuffer - 10) / longest / numArrays;

        stroke(80);
        strokeWeight(1);
        //noStroke();
        for (var i = 0; i < longest; i++) {
            var offset = 0;
            if (a1on) {
                var barHeight = map(a1[i], low, high, 0, height - (topBuffer + botBuffer));
                fill(27, 69, 113); // Blue
                rect(barWidth * numArrays * i + sideBuffer, height - botBuffer - barHeight, barWidth, barHeight);
                offset += barWidth;
            }
            if (a2on) {
                var barHeight = map(a2[i], low, high, 0, height - (topBuffer + botBuffer));
                fill(87, 115, 47); // Green
                rect(barWidth * numArrays * i + sideBuffer + offset, height - botBuffer - barHeight, barWidth, barHeight);
                offset += barWidth;
            }
            if (a3on) {
                var barHeight = map(a3[i], low, high, 0, height - (topBuffer + botBuffer));
                fill(220, 123, 0); // Yellow
                rect(barWidth * numArrays * i + sideBuffer + offset, height - botBuffer - barHeight, barWidth, barHeight);
            }
        }
    }
}


function drawHeader() {
    textAlign(CENTER);
    textSize(18);
    fill(0);
    noStroke();
    text(outputStr, width / 2, 25);
}

function drawGridLines(low, high, scale) {
    // Draw Horizontal Grid Lines - low to high, inclusive
    textAlign(LEFT);
    textSize(14);
    for (var y = low; y <= high; y += scale) {
        yCoord = map(y, low, high, height - botBuffer, topBuffer);
        stroke(140);
        strokeWeight(1);
        line(10, yCoord, width, yCoord);
        fill(0);
        noStroke();
        text(y, 2, yCoord + 5);
    }
}

function drawHzLine(val, low, high, col, txtwidth) {
    stroke(col);
    fill(col);
    lineY = map(val, low, high, height - botBuffer, topBuffer);
    line(0, lineY, width, lineY);
    textSize(15);
    stroke(255);
    text(val, txtwidth, lineY - 2);
}
