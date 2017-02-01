function ball() {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.xSavePoint = 210;

    this.update = function() {
        var a = (mouseX - this.x) / (mouseY - this.y);

    };
}
