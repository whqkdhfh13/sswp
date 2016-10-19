function drawArray(anArray, low, high, scale) {
    // Draw Grid - low to high, inclusive
    textAlign(LEFT);
    textSize(14);
	for(var y = low; y <= high; y += scale) {
        yCoord = map(y, low, high, height, 50);
        stroke(40);
        strokeWeight(2);
        line(0, yCoord, width, yCoord);
        fill(255);
        noStroke();
        text(y, 2, yCoord + 5);
	}

    // Draw Vertical Bars for array values
    fill(0, 125, 15, 180);
    stroke(255);
    strokeWeight(1);
    var barWidth = (width - 30) / anArray.length;
    for (var i = 0; i < anArray.length; i++) {
        var barHeight = map(anArray[i], low, high, 0, height - 50);
        rect(barWidth * i + 30, height - barHeight, barWidth, barHeight);
    }

    // Draw Header
    textAlign(CENTER);
    textSize(18);
    fill(255);
    noStroke();
    text(outputStr, width / 2, 25);

}

function drawHzLine(val, low, high, col) {
    stroke(col);
    lineY = map(val, low, high, height, 50);
    line(0, lineY, width, lineY);
    textSize(14);
    fill(0,150,250);
    stroke(0);
    text(average(myArray), 1/3 * width, lineY);
}
