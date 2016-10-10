//SPACE SHOOTER
//BY JAYDEN CHO

var SCREEN_WIDTH = 800, SCREEN_HEIGHT = 600;

var jetImg,lasSnd;
var lX,lY,lSpeed,x,y,i,q;
var laserList = [];

function preload() {
     jetImg = loadImage("materials/ship.png");
     lasSnd = loadSound("materials/laser.ogg");
     
}


function setup() {
     createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
     imageMode(CENTER);
     noCursor();
     rectMode(CENTER);
     //Initialize Laser Variables
     lSpeed = -10,i=0;
}


function draw() {
     
     //logic
     for(i = 0; i < laserList.length; i++) {
          laserList[i][1] += lSpeed;
          if (laserList.length > 30) {
               laserList.splice(i-20,1);
     }
     }     

     
     //drawing
     background(0,100,255);
     image(jetImg, mouseX, mouseY);
     
     for(i = 0; i < laserList.length; i++) {
          rect(laserList[i][0], laserList[i][1], 5, 10);
     }
}

function mouseReleased() {
     laserList.push([mouseX,mouseY]);
     lasSnd.play();
}