var tempB = true;
var tempA = JSON.parse();
var data;

function preload() {
    data = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=edmonton&APPID=a91daf84655e083d34ed54a9e0b4d2d2&units=metric');
}



// var example = {
//     var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     var b = function() {
//         console.log("I love Lora");
//     }
// }

var aFunction = function(color, x, y, d) {

}

function bFunction() {

}

function setup() {
    // for (let i = 1; i < 11; i++) { // i increases 1 by every round
    //     b.push(i*3);
    //     c.push(i*4);
    // }
    // console.log(b);
    // console.log(c);
    println(data.main.temp);
}

function draw() {
    fullscreen(tempB);
    tempB = false;

}

// Make an array that contains 1~20.
// functionName(parameters);
// a.b
// console
//  /   \
// log  something else
