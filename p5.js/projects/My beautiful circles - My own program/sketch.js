var y=25,x=25,speeda=0,speedb=2,x1,y1;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(127, 204, 255);
    y = y + speedb;
    x = x + speeda;   
    x1 = x;
    y1 = y;
    fill(51, 51+x*255/500, 51+y*255/500); //fill1
    ellipse(Math.abs(400-5*(25+x1/y1)),Math.abs(5*(25+y1/x1)),50,50);
    ellipse(Math.abs(5*(25+x1/y1)),Math.abs(400-5*(25+y1/x1)),50,50);
    ellipse(400-x,400-y,50,50); // text("         second",400-x,400-y);
    ellipse(x, y, 50, 50); // text("         main",x,y);
    
    fill(51, 51+y*255/500, 51+x*255/500); //fill2
    ellipse(Math.abs(5*(25+y1/x1)),Math.abs(5*(25+x1/y1)),50,50);
    ellipse(Math.abs(400-5*(25+y1/x1)),Math.abs(400-5*(25+x1/y1)),50,50);
    ellipse(400-y,x,50,50);
    ellipse(y,400-x,50,50);

    fill(100+(x+y)/5, 30+(x+y)*225/750, 30);
    ellipse(200,200,100,100);
    if (y > 375) {y-=2;speedb=0;speeda=2;} 
    if (x > 375) {x-=2;speeda=0;speedb=-2;} 
    if (y < 25 ) {y+=2;speedb=0;speeda=-2 ;} 
    if (x < 25 ) {x+=2;speeda=0;speedb=2;} 
    if (x1 > 375 && y1 < 25) {
         x1 = 25, y1 = 375;
    }

    // Location of Main ball
    println(x + "," + y);
}
