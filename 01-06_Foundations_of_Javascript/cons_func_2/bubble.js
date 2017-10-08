function Bubble(x, y, r) {

    // x coordinate of bubble
    // y coordinate of bubble
    // r radius of bubble
    this.x = x;
    this.y = y;
    this.radi = r;
    this.dia = this.radi * 2; //diameter
    this.lifespan = 500; //for color alpha value and also life timer
    this.er = false; //eraser
    this.col = [255, 255, 255];

    // display the bubble

    this.disp = function () {
        noStroke();
        fill(this.col[0], this.col[1], this.col[2], this.lifespan);
        ellipse(this.x, this.y, this.dia, this.dia);
    }

    //randomly move and countdown lifetime

    this.update = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan--;
    }

    //deletes the bubble when its life comes to an end

    this.del = function () {
        if (this.lifespan < 0) {
            this.er = !this.er;
        }
        return this.er;
    }

    this.checkWith = function (other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d <= this.radi + other.radi) {
            return true;
        } else {
            return false;
        }
    }

    this.changeColor = function () {
        this.col = [random(0, 255), random(0, 255), random(0, 255)];
    }



}
