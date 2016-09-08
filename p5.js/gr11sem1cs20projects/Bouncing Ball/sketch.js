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
  stroke(225);
  strokeWeight(4);
  noFill();
  ellipse(ball.x,ball.y,25,25);
  
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  
 
  ball.yspeed +=1;
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}