var fillColor, drawSize;

function setup() {
   createCanvas(800,600);
   background(255);

   fillColor = color(255,0,0);
   drawSize = 50;
}

function draw() {
    noStroke();
  fill(fillColor);
  if (mouseIsPressed)
  {ellipse(mouseX,mouseY,drawSize,drawSize);}
}

function keyTyped() {
   if (key === "1") {
      fillColor = color(255,0,0);
   }
   else if (key === "2") {
      fillColor = color(0,255,0);
   }
   else if (key === "3") {
      fillColor = color(0,0,255);
   }
   else if (key === " ") {
      background(255);
   }
}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      drawSize += 5;
   }
   else if (keyCode === DOWN_ARROW) {
      drawSize -= 5;
   }
}
