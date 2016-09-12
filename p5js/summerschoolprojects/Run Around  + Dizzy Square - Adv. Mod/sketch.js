var SCREEN_WIDTH = 800,
     SCREEN_WIDTH = 600;
// sz=size, speed=movement speed, sspeed=score speed, cht - 0 = clean, 1 = cheated, kc=key code
var x, y, sz, speed, hspeed, vspeed,rspeed,score,sspeed,cht,kc;

var gameState = "start", startTime, endTime;
function setup() {
     createCanvas(800, 600);
     x = 400, y = 300, sz = 50, speed = 5, hspeed = 0, vspeed = 0
     rspeed = 15, score = 0, sspeed = 1, cht = 0, kc=96;
     textSize(55); noStroke();
     }

function lose(time) {
          
          background(0);
          textSize(80);
          text("LOSE",290,350);
          text("Your Score = "+score,80,450);
          textSize(50);
          text("Press the Space-bar to try again",60,200);
          x=400,y=300;
          
          if (cht===1) {alert("YOU CHEATER!!");}
          
          noLoop();
          setTimeout(loop,time);
          
          textSize(55);
          rspeed=15;
          speed=5;
          sspeed=1;
}

function draw() {
     if (gameState === "start") {
          //drawing
          background(0);
          fill(255, 0, 0);
          rect(x, y, sz, sz);
          text("The Hardest And Luckiest Game",0,50);
          text("Press the Space-bar to begin.",40,200);
     } else if (gameState === "action") {
          //drawing
               background(50,50,50);
               fill(random(155,255),random(155,255),random(155,255));
               rect(x, y, sz, sz);
               fill(255, 0, 0);
               
               text("The Hardest And Luckiest Game",0,50);
               
               //logic
               x += hspeed + random(-rspeed,rspeed);
               y += vspeed + random(-rspeed,rspeed);
               
               score+=sspeed;
               
               text(score,650,600);
               text(floor((frameCount-startTime)/60),0,600);
               
               if (score>300 && score<1499) { 
                    text("Now getting \n FASTER!",280,300);rspeed=20;speed=8;sspeed=2;
               } else if (score>1500 && score <2999) { 
                         text("It's time\nTO DIE",280,300);rspeed=30;speed=18;sspeed=3;
               } else if (score>3000) {
                         text("ARE YOU CHEATING?\n         No, you're not.",100,300);sspeed=5;
                              if (keyCode === kc) {
                                   gameState = "end";
                              }
               }  if (x>750  || x<0  || y >550  ||  y<0) {
                    gameState = "end";
                    endTime = frameCount;
               }       
                    println("cht="+cht);
                    
     } else if (gameState === "end") {
               lose(500);
     }
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

     } else if (keyCode === kc) {
          x = 350, y = 300; if (gameState === "action") {cht=1;}
     } else if (key === " ") { 
          if (gameState === "start" || gameState === "end") {
               gameState = "action";score=0;cht=0;
               startTime = frameCount;
          }
     } else if (keyCode === 110) {
          cht=0;
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
     } else if (keyCode === kc) {
          x = 350, y = 300; if (gameState === "action") {cht=1;}
     }
}