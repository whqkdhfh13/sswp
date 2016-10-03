var SCREEN_WIDTH = 800,
     SCREEN_WIDTH = 600;
var x, y, sz, speed, hspeed, vspeed,time,rspeed,score;

function setup() {
     createCanvas(800, 600);
     x = 400, y = 300, sz = 50, speed = 5, hspeed = 0, vspeed = 0, rspeed = 15, score = 0;
     textSize(55); stroke(255,0,0);
     noLoop;
}

function lose(time) {
          if(x>750  || x<0  || y >550  ||  y<0) {
          background(0);
          textSize(80);
          text("LOSE",290,350);
          text("Your Score = "+score,80,450);
          x=400,y=300;
          noLoop();
          setTimeout(loop,time);
          textSize(55);
          score=0;
          rspeed=15;
          speed=5;
     }
}

function draw() {
     //logic
     x += hspeed + random(-rspeed,rspeed);
     y += vspeed + random(-rspeed,rspeed);
     
     
     //drawing
     background(0);
     fill(255, 0, 0);
     rect(x, y, sz, sz);
     text("The Hardest And Luckiest Game",0,50);
     score++;
     text(score,0,600);
     if (score>300 && score<999) { text("Now getting \n FASTER!",280,300);rspeed=20;speed=8;}
     else if (score>1000) { text("It's time\nTO DIE",280,300);rspeed=30;speed=18;}
     println(x+","+y);
     lose(2000);
}


function keyPressed() {
     if (keyCode === UP_ARROW) {
          vspeed = -speed;

     } else if (keyCode === DOWN_ARROW) {
          vspeed = speed;

     } else if (keyCode === LEFT_ARROW) {
          hspeed = -speed;

     } else if (keyCode === RIGHT_ARROW) {
          hspeed = speed;

     } else if (key === " ") {
          x = 400, y = 300;
     }
}
function keyReleased() {
     if (keyCode === UP_ARROW) {
          vspeed=0;
     } else if (keyCode === DOWN_ARROW) {
          vspeed=0;
     } else if (keyCode === LEFT_ARROW) {
          hspeed=0;
     } else if (keyCode === RIGHT_ARROW) {
         hspeed=0;
     } else if (key === " ") {
          x = 350, y = 300;
     }
}