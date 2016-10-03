function drawDoor(x, y, w, h, tColor, bColor){

    //Draw Circle
    fill(tColor);
    arc(x+(1/2*w),y-(h-(1/2*w)),w,w,PI, 0, OPEN);

    //Draw Rectangle
    fill(bColor);
    rect(x,y-(h-(1/2*w)),w,h-(1/2*w));

    //Draw Circle =]!! Additional feature
    fill("gray");
    ellipse(x+(1/8*w),(y-h)+1/2*w+1/2*(h-(1/2*w)),1/8*w,1/8*w);
}
