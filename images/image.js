function PutImg(im, x, y) {

    this.x = x;
    this.y = y;
    this.im = im;
    this.lifetime = 500;


    this.disp = function () {
        imageMode(CENTER);
        tint(255, this.lifetime);
        image(this.im, this.x, this.y);
    }

    this.update = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifetime--;
    }

}
