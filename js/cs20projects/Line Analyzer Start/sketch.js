// Line Analyzer

// Global Variables !!
var point1 = {
    x: -7,
    y: -5,
    fillColor: "red",
    name: "p1"
};

var point2 = {
    x: 3,
    y: 5,
    fillColor: "blue",
    name: "p2"
};

var point3 = {
    x: -2,
    y: -5,
    fillColor: "blue",
    name: "p3"
};

var point4 = {
    x: 8,
    y: 5,
    fillColor: "blue",
    name: "p4"
};

var selected = point1; // Use to keep track of which point is currently selected

// Set up & Draw
function setup() {
    createCanvas(400, 400);
}

function draw() {
    drawCoordinatePlane();
    drawLine(point1, point2); // Line 1
    drawLine(point3, point4); // Line 2
    textofPoint(point1);
    textofPoint(point2);
    textofPoint(point3);
    textofPoint(point4);
    if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400 && mouseIsPressed) {
        var mousexpix = map(mouseX, 0, width, -10, 10);
        var mouseypix = map(mouseY, 0, height, 10, -10);
        selected.x = round(mousexpix);
        selected.y = round(mouseypix);
    }
}

// Events
function keyTyped() {
    if (key === " ") {
        // Perform Calculations when space key is pressed
        // For now just use println to output results.
        println("CALCULATION RESULTS");

        // ***** INVOKE YOUR FUNCTIONS BELOW... *****
        println("distance p1 to p2 = √(" + distance(point1, point2)[2] + "²+" + distance(point1, point2)[1] + "²) ≈ " + distance(point1, point2)[0].toFixed(4) + "  /  distance p3 to p4 = √(" + distance(point3, point4)[2] + "²+" + distance(point3, point4)[1] + "²) ≈ " + distance(point3, point4)[0].toFixed(4));
        println("slope for line1 = " + findslope(point1, point2)[2] + "/" + findslope(point1, point2)[1] + " ≈ " + findslope(point1, point2)[0].toFixed(4) + "  /  slope for line2 = " + findslope(point3, point4)[2] + "/" + findslope(point3, point4)[1] + " ≈ " + findslope(point3, point4)[0].toFixed(4));
        println("midpoint between p1 and p2 = (" + findmidp(point1, point2) + ")" + "  /  midpoint between p3 and p4 = (" + findmidp(point3, point4) + ")");
        println("domain for line1 : [" + finddomain(point1, point2) + "]" + "  /  domain for line2 : [" + finddomain(point3, point4) + "]");
        println("range for line1 : [" + findrange(point1, point2) + "]" + "  /  range for line2 : [" + findrange(point3, point4) + "]");
        println("Equation for line1 : y = " + findslope(point1, point2)[0].toFixed(1) + "x + " + findyint(point1, point2, point1).toFixed(1) + "  /  equation for line2 : y = " + findslope(point3, point4)[0].toFixed(1) + "x + " + findyint(point3, point4, point3).toFixed(1))

    } else if (key === "1") {
        // Select point 1
        selected.fillColor = "blue"; // Deselect the current point
        selected = point1; // Assign selected point to point 1
        selected.fillColor = "red"; // Set color of new selected point

    } else if (key === "2") {
        // Select point 2
        selected.fillColor = "blue"; // Deselect the current point
        selected = point2; // Assign selected point to point 1
        selected.fillColor = "red"; // Set color of new selected point
    } else if (key === "3") {
        // Select point 3
        selected.fillColor = "blue"; // Deselect the current point
        selected = point3; // Assign selected point to point 1
        selected.fillColor = "red"; // Set color of new selected point
    } else if (key === "4") {
        // Select point 4
        selected.fillColor = "blue"; // Deselect the current point
        selected = point4; // Assign selected point to point 1
        selected.fillColor = "red"; // Set color of new selected point
    }
}

function keyPressed() {
    // Move selected point
    if (keyCode === RIGHT_ARROW) {
        selected.x += 1;
    } else if (keyCode === LEFT_ARROW) {
        selected.x -= 1;
    } else if (keyCode === UP_ARROW) {
        selected.y += 1;
    } else if (keyCode === DOWN_ARROW) {
        selected.y -= 1;
    } else if (keyCode === 82) {
        point1 = {
            x: -7,
            y: -5,
            fillColor: "red",
            name: "p1"
        };
        point2 = {
            x: 3,
            y: 5,
            fillColor: "blue",
            name: "p2"
        };
        point3 = {
            x: -2,
            y: -5,
            fillColor: "blue",
            name: "p3"
        };
        point4 = {
            x: 8,
            y: 5,
            fillColor: "blue",
            name: "p4"
        };
        selected = point1;

    }
}

// ***** DEFINE YOUR FUNCTIONS BELOW... *****
function distance(pA, pB) {
    var run = pB.x - pA.x,
        rise = pB.y - pA.y,
        d = sqrt(sq(run) + sq(rise)),
        darray = [d, run, rise];
    return darray;
}

function textofPoint(point) {
    var xPix = map(point.x, -10, 10, 0, width);
    var yPix = map(point.y, -10, 10, height, 0);
    fill(0, 0, 255);
    textSize(15);
    textWidth(5);

    text(point.name + "(" + point.x + "," + point.y + ")", xPix + 5, yPix - 5);

}

function mousePressed() {
    // if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    //     var mousexpix = map(mouseX, 0, width, -10, 10);
    //     var mouseypix = map(mouseY, 0, height, 10, -10);
    //     selected.x = round(mousexpix);
    //     selected.y = round(mouseypix);
    // }
}

function findslope(pA, pB) {
    var run = pB.x - pA.x,
        rise = pB.y - pA.y;
    var s = rise / run;

    sarray = [s, run, rise];
    return sarray;
}

function findmidp(pA, pB) {
    var midx = (pA.x + pB.x) / 2,
        midy = (pA.y + pB.y) / 2,
        midarray = [midx, midy];
    return midarray;
}

function finddomain(p1, p2) {
    // I have problem at here. If i move p1 to right side and p2 to left side, it will shows
    // like Domain : [3, -7] but It must shows [-7, 3]. So I decide to use IF statement.
    var darray = [];
    if (p1.x >= p2.x) {
        darray = [p2.x, p1.x];
    } else if (p1.x <= p2.x) {
        darray = [p1.x, p2.x];
    }
    return darray;
}

function findrange(p1, p2) {
    // I have problem at here. If i move p1 to right side and p2 to left side, it will shows
    // like Domain : [3, -7] but It must shows [-7, 3]. So I decide to use IF statement.
    var rarray = [];
    if (p1.y >= p2.y) {
        rarray = [p2.y, p1.y];
    } else if (p1.y <= p2.y) {
        rarray = [p1.y, p2.y];
    }
    return rarray;
}

function findyint(slp1, slp2, point) {
    var a = findslope(slp1, slp2)[0],
        b;
    b = point.y - a * point.x;
    return b;
}
