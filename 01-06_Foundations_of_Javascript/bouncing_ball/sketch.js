var ball = {
    x: 300,
    y: 200,
    xspeed: 5,
    yspeed: 5,

    disp: function () {
        noFill();
        strokeWeight(4);
        stroke(255);
        ellipse(this.x, this.y, 10, 10);
    },

    move: function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    },

    bounce: function () {
        if (this.x > 600 || this.x < 0) {
            this.xspeed = -this.xspeed;
        }
        if (this.y > 400 || this.y < 0) {
            this.yspeed = -this.yspeed;
        }
    }
}

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(0);
    ball.disp();
    ball.move();
    ball.bounce();

}
