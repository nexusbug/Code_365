function Bubble(x, y) {


    this.x = x;
    this.y = y;
    this.move = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
    this.disp = function () {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }


}
