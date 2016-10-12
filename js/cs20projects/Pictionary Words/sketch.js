// Pictionary Words

// GLOBAL VARIABLES
var easyWords = ["apple", "boy", "cup", "dog", "eyes", "fish", "goat", "hat"];
var mediumWords = ["medium1", "medium2", "medium3", "medium4", "medium5", "medium6", ];
var hardWords = ["어려움", "이것도어려움", "아마 이것도", "이건모름"];
var currentWord = "Press 1 for an easy word.";
var bgColor,tColor,i=0;
// SETUP FUNCTION - RUNS ONCE AT BEGINNING
function setup() {
    createCanvas(600, 400);
    textAlign(CENTER);
    frameRate(15);
    bgColor = color(0,0,0);
    tColor = color(255);
}

// DRAW FUNCTION - LOOPS
function draw() {
    background(bgColor);
    fill(tColor);
    textSize(30);
    text("PICTIONARY WORDS!", width / 2, 100);

    text(currentWord, width / 2, 200);
}

// EVENT FUNCTIONS
function keyReleased() {
    println(keyCode);
    if (keyCode == 49) {
        // Set currentWord to a random easy word
        bgColor = color(255,255,0);
        tColor = color(0);
        var randIndex = floor(random(0, easyWords.length));
        currentWord = easyWords[randIndex];
    }
    if (keyCode == 82) {
        setup();
        currentWord = "Press 1 for an easy word.";
    }
    if (keyCode == 50) {
        bgColor = color(255,127,0);
        tColor = color(0);
        var randIndex = floor(random(0, mediumWords.length));
        currentWord = mediumWords[randIndex];
    }
    if (keyCode == 51) {
        bgColor = color(255,0,0);
        tColor = color(0);
        currentWord = hardWords[i];
        i++;
        if(i > hardWords.length - 1) {
            i = 0;
        }

    }
}
