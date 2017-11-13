function Star() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speedx = this.x - (width / 2);
    this.speedy = this.y - (height / 2);


    this.distToCtr = dist(this.x, this.y, width / 2, height / 2);

    this.d = map(this.distToCtr, 0, 400, 0, 8);

    this.disp = function () {
        noStroke();
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.d, this.d);
    }

    this.update = function () {
        this.x = this.x + 0.02 * this.speedx;
        this.y = this.y + 0.02 * this.speedy;
        this.distToCtr = dist(this.x, this.y, width / 2, height / 2);
        this.d = map(this.distToCtr, 0, 600, 0, 8);
        this.speedx = this.x - (width / 2);
        this.speedy = this.y - (height / 2);

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.x = random(50, width - 150);
            this.y = random(50, height - 150);
            this.speedx = this.x - (width / 2);
            this.speedy = this.y - (height / 2);
            this.distToCtr = dist(this.x, this.y, width / 2, height / 2);
            this.d = 0;
            this.speedx = this.x - (width / 2);
            this.speedy = this.y - (height / 2);
        }
    }
}

/*
Website
http://nexusbug.com/

github Repo
https://github.com/nexusbug/Code_365

About
Doing a challenge, coding three sixty five
There I hop on the train of Mr. Shiffman
And code along rainbow colored railway
One video each day, keeps the gray away

Coding Train
Daniel Shiffman
https://www.youtube.com/user/shiffman/
https://www.patreon.com/codingtrain

Framework
p5js - A beautiful Javascript library
https://p5js.org/

this.day
81st
2017 November 13

this.video
Coding Challenge #1: Starfield in Processing
https://youtu.be/17WoOqgXsRM
*/
