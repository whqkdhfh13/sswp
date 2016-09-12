var ball = {
    x:200,
    y:0,
    xspeed:3,
    yspeed:2 
  }


function setup() {
  
  createCanvas(400,400);

}
function draw() {
  
    background(0);
    math(1);
    display(4);
    bouncing(0);
 
}

function math(gspeed) {
 
  ball.yspeed +=gspeed;
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;

}

function display(weight) {
 
  stroke(225);
  strokeWeight(weight);
  noFill();
  ellipse(ball.x,ball.y,25,25);
  
}

function bouncing(resety) {
  
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }  

  if (ball.y > 410) {
    ball.y = resety;
  }
}
